import "./Navbar.css";
import logo from "./assets/logocinema.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { db } from "../../services/firebase";

const Navbar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() =>{

    const collectionRef = query(collection(db, 'categories'), orderBy('order'))

    getDocs(collectionRef).then(response => {
      console.log(response)
      const categoriesAdapted = response.docs.map(doc => {
        const data = doc.data()
        const id = doc.id

        return { id, ...data }
      })
      setCategories(categoriesAdapted)
    })
  }, [])

  return (
    <nav className="nav-items">
      <Link to='/' className="img-logo">
        <img src={logo} alt="logo" />
      </Link>
      <h1 className="titulo">BACKYARD CINEMA</h1>
      <div >
        <ul className="buttons-items">
          {
            categories.map(cat => (
              <li key={cat.id}><Link to={`/category/${cat.slug}`} className="button-nav">{cat.label}</Link></li>
            ))
          }
          {/* <li>
          <Link to='/category/acción' className="button-nav">Acción</Link>
          </li>
          <li>
          <Link to='/category/suspenso' className="button-nav">Suspenso</Link>
          </li>
          <li>
          <Link to='/category/terror' className="button-nav">Terror</Link>
          </li>
          <li>
          <Link to='/category/aventura' className="button-nav">Aventura </Link>
          </li> */}
        </ul>
      </div>
      <div>
        <CartWidget />
      </div>
    </nav>
  );
};
export default Navbar;
