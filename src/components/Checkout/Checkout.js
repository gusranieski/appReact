import "./Checkout.css";


const Checkout = () => {
    return ( 
        <div className="contenedorContacto">
        <form >
            <h1>Checkout</h1>
            <div>
                <label htmlFor="userName">Nombre:</label>
                <input type="text" name="userName" id="userName"></input>
            </div>
            <div>
                <label htmlFor="userPhone">Teléfono:</label>
                <input type="number" name="userPhone" id="userPhone"></input>
            </div>
            <div>
                <label htmlFor="userMail">Mail:</label>
                <input type="email" name="userMail" id="userMail"></input>
            </div>
            <div className="buttons-order">
            <button>Generar orden</button>
            <button>Cancelar orden</button>
            </div>
        </form>
        </div>
     );
}
 
export default Checkout;