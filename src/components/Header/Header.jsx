import React from 'react'
import { FaPencilAlt } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { NavLink } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className='navbar ms-navbar fixed-top'>
      <div className="ms-aside-toggler ms-toggler pl-0">
        <span className="ms-toggler-bar bg-white"></span>
        <span className="ms-toggler-bar bg-white"></span>
        <span className="ms-toggler-bar bg-white"></span>
        </div>
        <NavLink to="/make-appointment" className="text-white">
            <FaHome style={{ fontSize: 23 }} onClick={()=>{navigate("/home")}}/><span>Please Click Me...</span>
          </NavLink>
        <ul className='ms-nav-list ms-inline mb-0'>
            <li class="ms-nav-item  ms-d-none">
            <NavLink to="/make-appointment" className="text-white">
          <FaPencilAlt style={{ fontSize: 23 }} onClick={() => { navigate("/patients-appointment") }}/>Patients appointment 
        </NavLink>
        </li>
        <div className='ms-nav-item dropdown dropdown'>
            <a href="#" className='p-0 text-disabled ms-has-notification dropdown-toggle nav-link'>
                <CiBellOn style={{fontSize:23 , color:"fff"}}/>
            </a>
        </div>
        <div class="ms-nav-item ms-nav-user dropdown dropdown"><a href="#" class="p-0 toggle-icon-none dropdown-toggle nav-link" role="button">
           <img className="ms-user-img ms-img-round float-right" src="https://slidesigma.nyc/templatemonster/react/medboard/static/media/doctor-3.e3e8e76c.jpg" alt="" width={40} style={{borderRadius:"50%"}}/>
        </a>
        </div>
        </ul>
      </nav>
    </>
  )
}

export default Header