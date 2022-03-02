import React, {useEffect, useState} from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import {FormHelperText} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const Login = (props) => {

    let loginSuccessful = false;
    let uname, pass, url;
    const [accessToken, setAccessToken] = useState("");

    const login = () => {
        uname = document.getElementById("username").value;
        pass = document.getElementById("password").value;

        url = "http://localhost:8080/auth/login";

        const fetchData = async () => {
            try {
                debugger;
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        'Authorization': 'Basic ' + btoa(`${uname}:${pass}`)
                    }
                });
                // window.alert(response.status);
                if(response.status == 200){
                    const res = await response.json();
                    document.getElementById("msg").hidden = true;
                    localStorage.setItem("AccessToken", res["accessToken"]);
                    setAccessToken(res["accessToken"]);
                    loginSuccessful = true;
                    window.alert("Login Successful");
                    // window.alert(localStorage.getItem("AccessToken"));
                    // window.alert(accessToken);
                }
                else {
                    document.getElementById("msg").hidden = false;
                }

            } catch (error) {
                console.log("error", error);
                document.getElementById("msg").hidden = false;
            }
        };

            fetchData();

        }


    return(

        <div>
            {/*<Header title="Authentication" buttonVisible={props.buttonVisible}></Header>*/}
            <FormControl required className="formControl">
                {/* <InputLabel htmlFor="username">Username</InputLabel>  */}
                <TextField id="username" label="Email *" variant="standard" />
                <FormHelperText>
                    <span className="red">required</span>
                </FormHelperText>
            </FormControl>

            <FormControl required className="formControl">
                {/* <InputLabel htmlFor="username">Username</InputLabel>  */}
                <TextField id="password" label="Password *" variant="standard" type="password"/>
                <FormHelperText>
                    <span className="red">required</span>
                </FormHelperText>
            </FormControl>
            <br></br>
            <Button variant="contained" color="primary" onClick={()=>login()} >LOGIN</Button>
            <br></br>
            <p id="msg" hidden="true">Login Failed</p>

        </div>
    )
}



export default Login;