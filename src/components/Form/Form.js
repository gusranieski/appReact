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
    const [emailConfirm, setEmailConfirm] = useState('')
    const {setNotification} = useContext(NotificationContext)
    
    const eValidate = (e) => {
        e.preventDefault()
        if (!name || !phone || !email) {
            setNotification('error', 'Completá tus datos!')
        } else if (!/^[a-zA-Z]+$/.test(name)) {
            setNotification('error', 'El nombre sólo puede contener letras!')
        } else if (phone.length < 8) {
            setNotification('error', 'Número de teléfono demasiado corto!')
        } else if (phone.length > 11) {
            setNotification('error', 'Número de teléfono demasiado largo!')
        } else if (email !== emailConfirm) {
            setNotification('error', 'Ingresa bien tu email!')
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
            <div>
                <label htmlFor="userMail">Confirmar Mail:</label>
                <input type="email" name="userMail" id="userMail" value={emailConfirm} onChange={(e) => setEmailConfirm(e.target.value)} required></input>
            </div>
            <div className="buttons-order">
            <button onClick={eValidate}>Confirmar datos personales</button>
            </div>
        </form>
    );
}

export default Form;