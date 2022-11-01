import "./Checkout.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext.js";
import { collection, getDocs, query, where, documentId, writeBatch, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../services/firebase/index";
import NotificationContext from "../../Notification/Notification.js";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const [name, setName]= useState('')
    const [phone, setPhone]= useState('')
    const [email, setEmail]= useState('')
    const [loading, setLoading] = useState(false)
    const { cart, totalPrice, totalQuantity, clearCart } = useContext(CartContext)
    const {setNotification} = useContext(NotificationContext)
    const navigate = useNavigate()
    const total = totalPrice()
    
    const createOrder = async () => {
        setLoading(true)

        try {
            const objectOrder = {
                buyer: {
                    name: name,
                    phone: phone,
                    email: email
                },
                items: cart,
                totalQuantity,
                total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
        
            const productsRef = collection(db, 'products')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.count 

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objectOrder)
                
                clearCart()
                
                setTimeout(() => {
                    navigate('/')
                }, 2000)
                
                setNotification('success', `Revisa tu correo para realizar el pago. Has reservado ${totalQuantity} producto/s. Código: ${orderAdded.id}`)
            } else {
                setNotification('error', 'fuera de stock')
            }
        } catch(error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Se esta procesando su pedido...</h1>
    }

    return ( 
        <div className="contenedorContacto">
        <form >
            <h1>Checkout</h1>
            <div>
                <label htmlFor="userName">Nombre:</label>
                <input type="text" name="userName" id="userName" value={name} onInput={(e) => setName(e.target.value)} required></input>
            </div>
            <div>
                <label htmlFor="userPhone">Teléfono:</label>
                <input type="number" name="userPhone" id="userPhone" value={phone} onInput={(e) => setPhone(e.target.value)} required></input>
            </div>
            <div>
                <label htmlFor="userMail">Mail:</label>
                <input type="email" name="userMail" id="userMail" value={email} onInput={(e) => setEmail(e.target.value)} required></input>
            </div>
            <div className="buttons-order">
            <button onClick={createOrder}>Generar orden</button>
            <button>Cancelar orden</button>
            </div>
        </form>
        </div>
    );
}

export default Checkout;