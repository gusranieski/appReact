import { useState, createContext, useContext } from "react";
import NotificationContext from "../../Notification/Notification.js";

export const FormData = createContext({
    name:"",
    phone:"",
    email:""
})

const Form = ({completoDatos}) => {

    const [name, setName]= useState('')
    const [phone, setPhone]= useState('')
    const [email, setEmail]= useState('')
    const {setNotification} = useContext(NotificationContext)
    
    const eValidate = (e) => {
        e.preventDefault()
        if (!name || !phone || !email) {
            setNotification('error', 'Completá tus datos!')
        } else {
            completoDatos(name, phone, email)
            setNotification('success', 'Datos confirmados!')
        }
    }

    return ( 
        <form >
            <h2>Completa los datos para generar la orden:</h2>
            <div>
                <label htmlFor="userName">Nombre:</label>
                <input type="text" name="userName" id="userName" value={name} onChange={(e) => setName(e.target.value)} required></input>
            </div>
            <div>
                <label htmlFor="userPhone">Teléfono:</label>
                <input type="number" name="userPhone" id="userPhone" value={phone} onChange={(e) => setPhone(e.target.value)} required maxLength="11"></input>
            </div>
            <div>
                <label htmlFor="userMail">Mail:</label>
                <input type="email" name="userMail" id="userMail" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
            </div>
            <div className="buttons-order">
            {
                eValidate
                ?<button onClick={eValidate}>Confirmar datos personales</button>
                :null
            }
            </div>
        </form>
    );
}

export default Form;