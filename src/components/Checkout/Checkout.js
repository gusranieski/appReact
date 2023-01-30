import "./Checkout.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext.js";
import { collection, getDocs, query, where, documentId, writeBatch, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../services/firebase/index";
import NotificationContext from "../../Notification/Notification.js";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";

const Checkout = () => {

    const [loading, setLoading] = useState(false)
    const { cart, totalPrice, totalQuantity, clearCart } = useContext(CartContext)
    const {setNotification} = useContext(NotificationContext)
    const navigate = useNavigate()
    const total = totalPrice()

    const [personalData, setPersonalData] = useState(false)
    const [infoBuyer, setDatosCompra] = useState({})

    const completoDatos = (name, phone, email) =>{
        setDatosCompra({name, phone, email})
        setPersonalData(true)
    }

    const createOrder = async () => {
        setLoading(true)

        try {
            const objectOrder = {
                buyer: infoBuyer,
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
                }, 4000)
                
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
        return <h1 className="successfully">Se esta procesando su pedido...</h1>
    }

    return ( 
        <div className="contenedorContacto">
            <h1>Checkout</h1>
            <Form completoDatos={completoDatos}/>
            {
                personalData
                ?<button onClick={createOrder}>Generar orden</button>
                : ""
            }
        </div>
    );
}

export default Checkout;