import React, {useState} from 'react';
import Modal from 'react-modal';
import BasicTabs from "./BasicTabs";
import './LoginRegisterModal.css';
import Login from "../../screens/login/Login";
import Register from "../../screens/register/Register";
import Header from "../header/Header";


const LoginRegisterModal = () => {

    const [isOpen, setIsOpen] = useState(true);

    function toggleModal() {
        setIsOpen(!isOpen);
    }



    return (
        // <div className="modalDiv">

            <Modal className="modal"
                   isOpen={isOpen}
                   onRequestClose={toggleModal}
                   contentLabel="My dialog"
            >
                <div>
                    <Header title="Authentication"></Header>
                   <BasicTabs></BasicTabs>
                </div>

            </Modal>
        // </div>
    );
}

export default LoginRegisterModal;