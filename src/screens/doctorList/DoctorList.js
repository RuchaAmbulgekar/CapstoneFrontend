import React, {useEffect, useState} from 'react';
import {FormHelperText, InputLabel, MenuItem, Paper, Rating, Select} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControl from "@material-ui/core/FormControl";
import "../home/Home.css";
import DoctorDetails from "./DoctorDetails";

const DoctorList = () => {

    const [doctors, setDoctorsList] = useState([]);
    const [doctorsOrig, setDoctorListOrig] = useState([]);


    useEffect(() => {
        const url = "http://localhost:8080/doctors";

        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: "GET"
                });
                const res = await response.json();
                // const resOrig = await response.json();
                setDoctorsList(res);
                setDoctorListOrig(res);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    const [specialities, setSpeciality] = useState([]);

    useEffect(() => {
        const url = "http://localhost:8080/doctors/speciality";

        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: "GET"
                });
                const res = await response.json();
                setSpeciality(res);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    const specialityChangeHandler = (event) => {
        // setSpeciality(event.target.value.array);

        let newDoctorList = [];

        if(event.target.value === "" || event.target.value === "Select"){
            setDoctorsList(doctorsOrig);
        }

        else {
            for (let doctor of doctorsOrig) {
                if (doctor["speciality"] === event.target.value) {
                    newDoctorList.push(doctor);
                }
            }

            setDoctorsList(newDoctorList);
        }
    };


    return(
        <div>
            <div style={{display:"flex", justifyContent:"center"}}>
            <FormControl>
                <InputLabel htmlFor="location">Select Speciality:</InputLabel>
                <Select onChange={specialityChangeHandler} variant="filled">
                    <MenuItem key="" value="">Select</MenuItem>
                    {
                        specialities.map((speciality) => (
                        <MenuItem key={speciality} value={speciality}>
                            {speciality}
                        </MenuItem>
                    ))}
                </Select>
                {/*<FormHelperText >*/}
                {/*    <span className="red">Required</span>*/}
                {/*</FormHelperText>*/}
            </FormControl>
            </div>
            <br />

            {/*<div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>*/}

                {
                    doctors.map((doctor) => (
                        <div style={{display:"flex", justifyContent:"center"}}>
                            {/*style={{width:"40%", margin:"5px"}}*/}
                        <Paper  elevation="3"  className="doctorListPaper" >
                        <Typography variant="h6" alignCenter style={{margin:"10px"}}>
                            Doctor Name : {doctor["firstName"] + " " + doctor["lastName"]}
                            <br></br>
                            <br></br>
                            Speciality : {doctor["speciality"]}
                            <br></br>
                            {/*Rating : {doctor["rating"]}*/}
                            Rating : <Rating name="read-only" value={doctor["rating"]} readOnly />

                            <br></br>
                            {/*<div style={{width:"100%", margin:"10px"}}>*/}
                            <Button variant="contained" color="primary" style={{width:"40%", margin:"10px"}}>BOOK APPOINTMENT</Button>
                            {/*<Link to={"/DoctorDetails"}>*/}
                            <Button variant="contained" color="success" style={{width:"40%", margin:"10px"}}>VIEW DETAILS</Button>
                            {/*</Link>*/}
                                {/*</div>*/}
                        </Typography>
                        </Paper>
                        </div>
                    ))
                }
            {/*</div>*/}

        </div>
    )
}

export default DoctorList;