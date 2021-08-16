import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { Container,Radio,RadioGroup,FormControlLabel,FormLabel, Checkbox } from '@material-ui/core';

class Form extends React.Component {

    state = {
        user: {
            firstname:'',
            lastname:'',
            password: '',
            repeatPassword: '',
            email:'',
            DOB:''
        },
    };

    componentDidMount() {
        // custom rule will have name 'isPasswordMatch'
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== this.state.user.password) {
                return false;
            }
            return true;
        });
    }

    componentWillUnmount() {
        // remove rule when it is not needed
        ValidatorForm.removeValidationRule('isPasswordMatch');
    }

    handleChange = (event) => {
        const { user } = this.state;
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    handleSubmit = () => {
        // your submit logic
    }

    render() {
        const { user } = this.state;

        return (
          <Container maxWidth="sm">
            <ValidatorForm
                onSubmit={this.handleSubmit}
            >
            <div>
                <TextValidator
                    label="fistname"
                    onChange={this.handleChange}
                    name="fistname"
                    type="text"
                    validators={['required']}
                    errorMessages={['this field is required']}
                    value={user.fistname}
                />
                <TextValidator
                    label="lastname"
                    onChange={this.handleChange}
                    name="lastname"
                    type="text"
                    validators={['required']}
                    errorMessages={['this field is required']}
                    value={user.lastname}
                />
                <TextValidator
                    label="email"
                    onChange={this.handleChange}
                    name="email"
                    type="email"
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required','Please enter valid email']}
                    value={user.email}
                />
                <TextValidator
                    label="Password"
                    onChange={this.handleChange}
                    name="password"
                    type="password"
                    validators={['required']}
                    errorMessages={['this field is required']}
                    value={user.password}
                />
                <TextValidator
                    label="Repeat password"
                    onChange={this.handleChange}
                    name="repeatPassword"
                    type="password"
                    validators={['isPasswordMatch', 'required']}
                    errorMessages={['password mismatch', 'this field is required']}
                    value={user.repeatPassword}
                />

                <TextValidator
                  label="DOB"
                  type="date"
                  onChange={this.handleChange}
                  defaultValue=""
                  InputLabelProps={{
                  shrink: true,
                  }}
                  name = "DOB"
                />

                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1">
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>

                </div>
                <div>
                <Button
            type="submit"
            variant="contained"
            color="primary"
            >
            submit
          </Button>
          </div>
            </ValidatorForm>
            </Container>
        );
    }

  }

  export default Form;