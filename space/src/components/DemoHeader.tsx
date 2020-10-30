import React,{useState} from 'react';
import '../styles/DemoHeader.css';



function Navbar() {
  const [menu, setMenu] = useState(false);
    return (
        <nav className="nav-active">  
        <div className="logo">
          <h4>SPACE X</h4>
        </div>
        <ul className={`nav-links ${menu ? "nav-active": ""}`}>  
          <li><a href="#" title="Switch Dark Mode"><i className="fas fa-lightbulb fa-lg"></i></a></li>  
          <li><a href="#" title="Rerender"><i className="fas fa-retweet fa-lg"></i> </a></li>  
          <li><a href="#" title="Contact dev"><i className="fas fa-key fa-lg"></i> </a></li>  
        </ul>  
        <div className="burger" onClick={()=> setMenu(!menu)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>


    );
}

export default Navbar;