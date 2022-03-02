import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box  from '@mui/material/Box';
import Login from "../login/Login";
import Register from "../register/Register";
import Header from "../../common/header/Header";
import Logo from "../../assets/logo.jpeg";
import "./Home.css"
import Button from "@material-ui/core/Button";
import DoctorList from "../doctorList/DoctorList";
import Appointment from "../appointment/Appointment";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 0 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};





export default function Home(){
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Header title="Doctor Finder" logoHidden="false">
                {/*<div className="logo-div">*/}
                {/*    <img className="logo" src={Logo} alt="Logo"/>*/}
                {/*</div>*/}
                {/*<Button variant="contained" color="primary" id="btnLogin">Login</Button>*/}
            </Header>
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="DOCTORS" style={{minWidth:"50%"}} />
                    <Tab label="APPOINTMENT" style={{minWidth:"50%"}} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <div>
                    <DoctorList></DoctorList>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div>
                    <Appointment></Appointment>
                </div>
            </TabPanel>
        </Box>
        </div>
    );
}