import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/footer.css";
import { NavLink } from "react-router-dom";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from 'react-icons/ai';
import { RiTelegramFill } from 'react-icons/ri';

function Header() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
      <header className="navbar navbar-expand-lg navbar-light " style={{ color: "white" }}>
      <h3>LOGO</h3>
      <nav>
      <nav className="container-fluid" ref={navRef}>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" activeClassName="active" style={{ color: "white" }}>
            <a href="/#">Ville</a>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/zone" activeClassName="active" style={{ color: "white" }}>
            <a href="/#">Zone</a>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/zoneByVille" activeClassName="active" style={{ color: "white" }}>
              <a href="/#">Zone par ville</a>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/restaurant" activeClassName="active" style={{ color: "white" }}>
              <a href="/#">Restaurant</a>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/specialite" activeClassName="active"style={{ color: "white" }}>
              <a href="/#">Specialite</a>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/serie" activeClassName="active"style={{ color: "white" }}>
              <a href="/#">Serie</a>
            </NavLink> 
          </li>        
        </ul>
        <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
        </nav>
        </nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

 

function Footer() {
    return (
        <div className="footer-dark" style={{marginTop:"50px"}}>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 item text">
                            <h3>About Our App</h3>
                            <p>Our Restaurant Location App helps you find the nearest Restaurant in your area quickly and easily.</p>
                            <p>With detailed information on each Restaurant, including hours of operation, contact information, and services offered, our app makes it easy to find the right Restaurant for your needs.</p>
                        </div>

                        <div className="col-sm-6 col-md-3 item">
                            <h3>About Us</h3>
                            <ul>
                                <li><h5 >Company</h5></li>
                                <li><h5>Team</h5></li>
                                <li><h5 >Careers</h5></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Contact Us</h3>
                            <ul>
                                <li><h6 >Phone: 0788-7583-4567</h6></li>
                                <li><h6 >Email: Alouan@restaurantlocationapp.com</h6></li>
                                <li><h6 >Address: 123 Main St, Morocco</h6></li>
                            </ul>
                        </div>
                        <div className="col item social">
                            <a href="https://web.telegram.org/z/"><RiTelegramFill/></a>
                            <a href="https://web.telegram.org/z/"><RiFacebookCircleFill/></a>
                            <a href="https://web.telegram.org/z/"><AiFillTwitterCircle/></a>
                            <a href="https://web.telegram.org/z/"><RiInstagramFill/></a></div>
                    </div>
                    <p className="copyright">Team Restaurant © 2023</p>
                </div>
            </footer>
        </div>
    );
}


export { Header, Footer };