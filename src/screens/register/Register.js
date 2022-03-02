import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import {FormHelperText} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Header from "../../common/header/Header";

const Register  = () => {

    let firstName,lastName,email,password,contactNo,url;

    const registerUser = () =>{
         firstName = document.getElementById("firstName").value;
         window.alert(firstName);
         lastName = document.getElementById("lastName").value;
         email = document.getElementById("email").value;
         password = document.getElementById("password").value;
         contactNo = document.getElementById("contactNo").value;
         window.alert(lastName+" "+email+password+contactNo)
         url = "http://localhost:8080/users/register";

        const fetchData = async () => {
            try{
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({firstName: firstName, lastName: lastName, emailId:email,
                                                    password:password, mobile:contactNo})
                });
                window.alert(response.status);
                const res = response.json();

                document.getElementById("msg").hidden = false;
            }
            catch (error){
                console.log(error);
                document.getElementById("msg").hidden = true;
            }
        }
        fetchData();
    }

    return (

        <div>
            {/*<Header title="Authentication" ></Header>*/}
            <FormControl required className="formControl">
                {/* <InputLabel htmlFor="firstName">First Name</InputLabel>  */}
                <TextField id="firstName" label="First Name *" variant="standard"/>
                <FormHelperText>
                    <span className="red">required</span>
                </FormHelperText>
            </FormControl>


            <FormControl required className="formControl">
                {/* <InputLabel htmlFor="lastname">Last Name</InputLabel>  */}
                <TextField id="lastName" label="Last Name *" variant="standard"/>
                <FormHelperText>
                    <span className="red">required</span>
                </FormHelperText>
            </FormControl>


            <FormControl required className="formControl">
                {/* <InputLabel htmlFor="email">Email</InputLabel>  */}
                <TextField id="email" label="Email *" variant="standard"/>
                <FormHelperText>
                    <span className="red">required</span>
                </FormHelperText>
            </FormControl>


            <FormControl required className="formControl">
                {/* <InputLabel htmlFor="password">Password</InputLabel>  */}
                <TextField id="password" label="Password *" variant="standard" type="password"/>
                <FormHelperText>
                    <span className="red">required</span>
                </FormHelperText>
            </FormControl>


            <FormControl required className="formControl">
                {/* <InputLabel htmlFor="contactNo">Contact No</InputLabel>  */}
                <TextField id="contactNo" label="Mobile No. *" variant="standard"/>
                <FormHelperText>
                    <span className="red">required</span>
                </FormHelperText>
            </FormControl>
            <br></br>

            <Button variant="contained" color="primary" onClick={()=>registerUser()}>REGISTER</Button>
            <br></br>
            <p id="msg" hidden="true">Registration Successful</p>
        </div>
    )
}

export default Register;