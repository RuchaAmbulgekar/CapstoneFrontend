import React, {useEffect, useState} from 'react';
import Typography from "@mui/material/Typography";
import {Paper} from "@mui/material";
import Button from "@mui/material/Button";

const Appointment = () => {

    const [appointments, setAppointments] = useState([]);

    useEffect(()=>{
        // const url = "http://localhost:8080/users/" + {userId} + "/appointments";
        const url = "http://localhost:8080/users/" + "ruc1@gmail.com" + "/appointments";

            const fetchData = async () => {
                try {
                    const response = await fetch(url, {
                        method: "GET"
                    });
                    const res = await response.json();
                    setAppointments(Array.from(res));
                } catch (error) {
                    console.log("error", error);
                }
            };

            fetchData();

    }, []);

        return(
        <div>
            {

                appointments.map((appointment)=>(
                    <Paper variant="outlined" square elevation="2" style={{width:"40%", textAlign:"center"}}>
                        <Typography variant="h6" alignCenter>
                            Doctor : {appointment["doctorName"]}
                            <br></br>
                            Date : {appointment["appointmentDate"]}
                            <br></br>
                            Symptoms : {appointment["symptoms"]}
                            <br></br>
                            PriorMedicalHistory : {appointment["prior_medical_history"]}
                            <br></br>
                            <Button variant="contained" color="primary">RATE APPOINTMENT</Button>
                        </Typography>
                    </Paper>
                ))
            }
        </div>
    )
}

export default Appointment;