
import React, { useState } from 'react';


//import { FormControl, Input, InputLabel,FormHelperText, Styles, Box, Button, Container } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { Container,Radio,RadioGroup,FormControlLabel,FormLabel, Checkbox,Button,FormControl,FormHelperText } from '@material-ui/core';


import MenuItem from '@material-ui/core/MenuItem';
import validator from 'validator'

//import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


const Entrollform = () => {

  const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  frmradio: {
    margin: '5px',
  },
  frmcurncy: {
    margin: '5px',
  },
}));

  const classes = useStyles();
  const [currency] = React.useState('EUR');


    const [Formval, setFormval] = useState("");
    //const [submitted, setSubmitted] = useState(false);
    
    const [fstname, setFstname] = React.useState("");
    const [fstnameErrorText, setFstnameErrorText] = React.useState("");

    const [lstname, setLstname] = React.useState("");
    const [lstnameErrorText, setLstnameErrorText] = React.useState("");

    const [pwd, setPwd] = React.useState("");
    const [pwdErrorText, setPwdErrorText] = React.useState("");

    const [repwd, setRepwd] = React.useState("");
    const [repwdErrorText, setRepwdErrorText] = React.useState("");

    const [email, setEmail] = React.useState("");
    const [emailErrorText, setEmailErrorText] = React.useState("");

    //const [dob, setDob] = React.useState("");
    //const [dobErrorText, setDobErrorText] = React.useState("");

    const [gender, setGender] = React.useState("");
    const [genderErrorText, setGenderErrorText] = React.useState("");

    //const [contrycurrency, setContrycurrency] = React.useState("");
    //const [contrycurrencyErrorText, setContrycurrencyErrorText] = React.useState("");

    const [phone, setPhone] = React.useState("");
    const [phoneErrorText, setPhoneErrorText] = React.useState("");

    const [address, setAddress] = React.useState("");
    const [addressErrorText, setAddressErrorText] = React.useState("");

    const [agree, setAgree] = React.useState("");
    const [agreeErrorText, setAgreeErrorText] = React.useState("");

    const handleChange = (event) => {

        const { name, value } = event.target;
        setFormval({ ...Formval, [name]: value });
        //alert(JSON.stringify(Formval));
    }

    const handleSubmit = (e) => {
        //alert('A name was submitted:');
        //alert(JSON.stringify(Formval));
        //alert(JSON.stringify(Formval.fstname));
        //const { fstname, lstname, pwd, email } = Formval;
        e.preventDefault();
        console.log(e.target.value);


        if(!Formval.fstname){
            setFstnameErrorText("Please enter First name");
        }else{
            setFstnameErrorText("");
        }

        if(!Formval.lstname){
            setLstnameErrorText("Please enter Last name");
        }else{
            setLstnameErrorText("");
        }

        if(!Formval.pwd){
            setPwdErrorText("Please enter password");
        }else{
            setPwdErrorText("");
        }

        if(!Formval.repwd){
            setRepwdErrorText("Please enter repeat Password");
        }else{
            setRepwdErrorText("");
        }

        if(Formval.pwd !== Formval.repwd){
             setRepwdErrorText("Password doesn't match");
        }else{
            setRepwdErrorText("");
        }         
      

        if(!Formval.email){
            setEmailErrorText("Please enter valid email");
        } else if (!validator.isEmail(Formval.email)) {
          setEmailErrorText('Enter valid Email!')
        } else {
          setEmailErrorText('');
        }


        /*if(!Formval.email){
            setEmailErrorText("Please enter valid email");
        }else{
            setEmailErrorText("");
        }

        if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(Formval.email)){
            setEmailErrorText("Please enter valid email");
        }else{
            setEmailErrorText("");
        }*/

        /*if(!Formval.dob){
            setDobErrorText("Please choose DOB");
        }else{
            setDobErrorText("");
        }*/

        if(!Formval.gender){
            setGenderErrorText("Please choose Gender");
        }else{
            setGenderErrorText("");
        }

        /*if(!Formval.contrycurrency){
            setContrycurrencyErrorText("Please choose currency");
        }else{
            setContrycurrencyErrorText("");
        }*/

        if(!Formval.phone){
            setPhoneErrorText("Please enter the phone number");
        } else if (!validator.isMobilePhone(Formval.phone)){
              setPhoneErrorText("Please enter the phone number");
        }else{
            setPhoneErrorText("");
        }

        /*if(validator.isMobilePhone(Formval.phone)){
              setPhoneErrorText("Please enter the phone number");
        }else{
            setPhoneErrorText("");
        }*/


        if(!Formval.address){
            setAddressErrorText("Please enter the address");
        }else{
            setAddressErrorText("");
        }
        
        if(!Formval.agree){
            setAgreeErrorText("Please choose the agree");
        }else{
            setAgreeErrorText("");
        }
    
    
  };

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

return (
  
<Container maxWidth="sm">
        
        <form className={classes.form} noValidate>

      <div>
        <TextField
          label="First Name"
          id="margin-none"
          name="fstname"
          className={classes.textField}
          value={Formval.fstname}
          placeholder="First name"
          onChange={handleChange}
          error={!!fstnameErrorText}
          helperText={fstnameErrorText}
        />

        <TextField
          label="Last Name"
          id="margin-none"
          placeholder="Last name"
          className={classes.textField}
          helperText="sdasd"
          name = "lstname"
          value={Formval.lstname}
          onChange={handleChange}
          error={!!lstnameErrorText}
          helperText={lstnameErrorText}
        />
        <TextField
          label="Password"
          id="margin-none"
          placeholder="password"
          type="password"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
          name="pwd"
          value={Formval.pwd}
          onChange={handleChange}
          error={!!pwdErrorText}
          helperText={pwdErrorText}
        />
        <TextField
          label="Repeat password"
          id="margin-none"
          type="password"
          placeholder="Repeatpassword"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
          name="repwd"
          onChange={handleChange}
          error={!!repwdErrorText}
          helperText={repwdErrorText}
        />
      </div>
      <div>
        <TextField

          label="Email"
          id="margin-none"
          type="email"
          placeholder="email"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
          name = "email"
          onChange={handleChange}
          error={!!emailErrorText}
          helperText={emailErrorText}
        />
        <TextField
          id="margin-none"
          margin="normal"
          label="DOB"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
          shrink: true,
          }}
          name = "dob"
          onChange={handleChange}
          
        />
        </div>
        <div>
        <FormControl component="fieldset" margin="normal" error={!!genderErrorText} className={classes.frmradio}>
          <FormLabel component="legend" className={classes.frmradio} onChange={handleChange} > Gender</FormLabel>
            <RadioGroup row aria-label="position" name="gender" onChange={handleChange} className={classes.frmradio}>
            <FormControlLabel value="Male" control={<Radio color="primary" />} label="Male" />
            <FormControlLabel value="Female" control={<Radio color="primary" />} label="Female" />
        </RadioGroup>
        <FormHelperText>{genderErrorText}</FormHelperText>
        </FormControl>

        
        </div>
        <div>
        <TextField
          label="Phone"
          name="phone"
          id="filled-margin-none"
          defaultValue=""
          className={classes.textField}
          helperText="Phone Number"
          variant="filled"
          onChange={handleChange}
          error={!!phoneErrorText}
          helperText={phoneErrorText}
        />
        <TextField
          margin="normal"
          id="filled-full-width"
          name="address"
          label="Address"
          style={{ margin: 8 }}
          placeholder="Address"
          helperText="Full width!"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          onChange={handleChange}
          error={!!addressErrorText}
          helperText={addressErrorText}
        />
        
         </div>
      <div>
      <FormControl required error={!!agreeErrorText} component="fieldset" className={classes.formControl}>
      <FormControlLabel
            control={<Checkbox value="i agree" onChange={handleChange} name="agree" />}
            label="I Agree"
          />     
            <FormHelperText>{agreeErrorText}</FormHelperText>
      </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            submit
          </Button>



</div>
            </form>
</Container>
    );
};
export default Entrollform;