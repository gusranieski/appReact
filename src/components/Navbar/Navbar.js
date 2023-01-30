import "./Navbar.css";
import logo from "./assets/logocinema.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { db } from "../../services/firebase";

const Navbar = () => {
  const [categories, setCategories] = useState([])
  const [ menu, setMenu] = useState( false )

  useEffect(() =>{

    const collectionRef = query(collection(db, 'categories'), orderBy('order'))

    getDocs(collectionRef).then(response => {
      const categoriesAdapted = response.docs.map(doc => {
        const data = doc.data()
        const id = doc.id

        return { id, ...data }
      })
      setCategories(categoriesAdapted)
    })
  }, [])

  const toggleMenu = () => {
    setMenu( !menu )
  }

  return (
    <nav className="nav-items">
      <Link to='/' className="img-logo">
        <img src={logo} alt="logo" />
      </Link>
      <div  className={ `buttons-cart ${ menu ? 'isActive' : '' }` }>
      <div >
        <ul className="buttons-items">
          {
            categories.map(cat => (
              <li key={cat.id}><Link to={`/category/${cat.slug}`} className="button-nav">{cat.label}</Link></li>
            ))
          }
        </ul>
      </div>
      <div>
        <CartWidget />
      </div>
      </div>

          <button onClick={ toggleMenu } className="menu-toggle">
          <svg className="burger-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          </button>

    </nav>
  );
};
export default Navbar;