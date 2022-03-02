import React, {useState} from 'react';
import Modal from "react-modal";
import Header from "../../common/header/Header";
import BasicTabs from "../../common/tabContainer/BasicTabs";
import Typography from "@mui/material/Typography";
import {Card, CardContent} from "@mui/material";

const DoctorDetails = () =>{

    const [isOpen, setIsOpen] = useState(true);

    function toggleModal() {
        setIsOpen(!isOpen);
    }


    return(
        <div>

            <Modal className="modal"
                   isOpen={isOpen}
                   onRequestClose={toggleModal}
                   contentLabel="My dialog"
            >


                <Card style={{height:"300px"}}>
                    <CardContent>
                        {/*<Header title="Doctor Details"></Header>*/}
                        <Typography alignContent="left" style={{textAlign:"left"}}>
                            "DOc name"
                            <br></br>
                            Total Experience: Doctor’s total experience
                            <br></br>
                            Speciality: Doctor’s speciality
                            <br></br>
                            Date of Birth: Doctor’s date of birth
                            <br></br>
                            City: The city where the doctor lives
                            <br></br>
                            Email: Email address of the doctor
                            <br></br>
                            Mobile: Phone number of the doctor
                            <br></br>
                            Rating: Average rating of the doctor
                        </Typography>
                    </CardContent>
                </Card>

            </Modal>
        </div>
    );
}

export default DoctorDetails;