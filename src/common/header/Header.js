import React, {useEffect, useState} from 'react';
import "./Header.css";
import Logo from "../../assets/logo.jpeg";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Header = (props) =>{

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const renderButton = () =>{

        if (isLoggedIn) {
            return (<Button variant="contained" color="secondary">LOGOUT</Button>);
        } else {
            return (
                <Link to={"/LoginRegisterModal"}>
                    <Button variant="contained" color="primary">LOGIN</Button>
                </Link>
            );
        }
    }


    return(
        <div>

            <div className="header">
                <div className="logo-div" style={{visibility:props.logoHidden == "true" ? "hidden" : "visible"}}>
                    <img className="logo" src={Logo} alt="Logo"  style={{visibility:props.logoHidden == "true" ? "hidden" : "visible"}}/>
                </div>
                <div className="titleDiv">
                    <p id="title">{props.title}</p>
                </div>
                <div className="buttonDiv" >
                    {

                        renderButton()

                    }
                </div>
            </div>

        </div>
    )
}

export default Header;