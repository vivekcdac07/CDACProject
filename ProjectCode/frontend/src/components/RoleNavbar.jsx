import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import LoginRegisterMenu from "./LoginRegisterMenu"

const RoleNavbar=({isLoggedIn})=>{
    const logout=e=>{
        dispatch({type:'LogOut'})
        sessionStorage.clear();
        history.push("/");
    }
    const state=useSelector((state)=>state);
    const history=useHistory()
    const dispatch=useDispatch()
    console.log(sessionStorage.getItem("role"),isLoggedIn)
    if(!isLoggedIn) {
         return (
        <LoginRegisterMenu/>
        )
    }
    else if(sessionStorage.getItem("role")==="Customer"){
    return (
        <ul className="navbar-nav ml-auto" style={{ marginLeft:"880px" }}>
        <li className="nav-item active">
            <Link className="nav-link text-dark " to="/cart">View Cart {state.cart.length===0 ? '' : 
            <span className="badge badge-primary p-2">{state.cart.map(x=>x.qty).reduce((a,b)=>parseInt(a)+parseInt(b))}</span>}</Link>
        </li>
        <li className="nav-item active ">
            <Link className="nav-link text-dark " to="/cprofile">Profile</Link>
        </li>
        <li className="nav-item active">
            <Link className="nav-link text-dark " to="/myorders">My Orders</Link>
        </li>
        <li className="nav-item active">
            <Link className="nav-link text-dark " onClick={logout} to="#">Logout</Link>
        </li>        
        </ul>
    )
    }
    else if(sessionStorage.getItem("role")==="Guide"){
        return (
            <ul className="navbar-nav ml-auto" style={{ marginLeft:"880px" }}> 
            <li className="nav-item active">
                <Link className="nav-link text-dark " to="/sprofile">Profile</Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link text-dark " to="/add-product">Add Event</Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link text-dark " to="/myproducts">Events</Link>
            </li>          
            <li className="nav-item active text-dark ">
                <Link className="nav-link text-dark" onClick={logout} to="#">Logout</Link>
            </li>        
            </ul>
        )
    }
    return (
        <ul className="navbar-nav ml-auto" style={{ marginLeft:"850px" }}>             
        <li className="nav-item active">
            <Link className="nav-link text-dark fw-bold" to="/aprofile">Profile</Link>
        </li>
        <li className="nav-item active text-dark fw-bold">

            <Link className="nav-link text-dark fw-bold" to="/guides">Guide</Link>

        </li>
        <li className="nav-item active">
            <Link className="nav-link text-dark fw-bold" to="/customers">Customers</Link>
        </li>
        <li className="nav-item active">
            <Link className="nav-link text-dark fw-bold" to="/bookings">Orders</Link>
        </li>
        <li className="nav-item active">
            <Link className="nav-link text-dark " onClick={logout} to="#">Logout</Link>
        </li>        
        </ul>
    )

}



export default RoleNavbar;