import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Input, Label, Col, FormFeedback} from 'reactstrap';

// STATE OF COMPONENT USED TO STORE THE STATE OF THE REACT FORM, HENCE THE FUNCTIONAL CONTACT COMPONENT 
// IS CONVERTED TO A CLASS COMPONENT BELOW

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    // TO HANDLE THE FORMS BELOW 
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });
    }
    handleSubmit(event) {
        console.log("Current State is: " + JSON.stringify(this.state))
        alert("Current State is: " + JSON.stringify(this.state))
        event.preventDefault();
    }

    // TO HANDLE THE PARTICULAR FIELD MODIFIED IN THE FEEDBACK -- TOUCHED ABOVE 
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: {...this.state.touched, [field]: true }
        });
    }

    // SETTING ERROR MESSAGE 
    validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };

        // FIRST NAME 
        if (this.state.touched.firstname && firstname.length < 2)
            errors.firstname = 'First Name should be >= 2 characters';
        else if (this.state.touched.firstname && firstname.length > 12)
            errors.firstname = 'First Name should be <= 12 characters';

        // LAST NAME 
        if (this.state.touched.lastname && lastname.length < 2)
            errors.lastname = 'Last Name should be >= 2 characters';
        else if (this.state.touched.lastname && lastname.length > 12)
            errors.lastname = 'Last Name should be <= 12 characters';

        // TELEPHONE NUMBER 
        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = "Tel. Number should contain only numbers";

        // EMAIL 
        if (this.state.touched.email && email.split('').filter(x => x === 'a').length !== 1)
            errors.email = "Email should contain a @ sign";

        return errors;
    }

    render() {
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email)

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                 </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a href="/" role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                {/* USING BOOTSTRAP GRID TO IMPLEMENT THE FORM ELEMENT IN REACT  */}
                <div className='row row-content'>
                    <div className='col-12'>
                        <h3>Send Us Your Feedback</h3>
                    </div>
                    
                    {/* FORM TO COLLECT USERS CONTACT */}
                    <div className='col-12 col-md-9'>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row style={{marginBottom: "10px"}}>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type='text' id="firstname" name='firstname' 
                                        placeholder='First Name' value={this.state.firstname} 
                                        valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''}
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleBlur('firstname')}
                                        />
                                    <FormFeedback>{errors.firstname}</FormFeedback>    
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type='text' id="lastname" name='lastname' 
                                        placeholder='Last Name' value={this.state.lastname} 
                                            valid={errors.lastname === ''}
                                            invalid={errors.lastname !== ''}
                                            onChange={this.handleInputChange}
                                            onBlur={this.handleBlur('lastname')}
                                        />
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row style={{marginTop: "10px"}}>
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type='text' id="telnum" name='telnum' 
                                        placeholder='Tel. Number' value={this.state.telnum} 
                                        valid={errors.telnum === ''}
                                        invalid={errors.telnum !== ''}
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleBlur('telnum')}
                                        />
                                    <FormFeedback>{errors.telnum}</FormFeedback>    
                                </Col>
                            </FormGroup>
                            <FormGroup row style={{marginTop: "10px"}}>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type='text' id="email" name='email' 
                                        placeholder='Email' value={this.state.email} 
                                        valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleBlur('email')}
                                        />
                                    <FormFeedback>{errors.email}</FormFeedback>    
                                </Col>
                            </FormGroup>
                            <FormGroup row style={{marginTop: "10px"}}>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name='agree'
                                                checked={this.state.agree} 
                                                onChange={this.handleInputChange}
                                                /> {' '}
                                                <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Input type='select' name='contactType'
                                        value={this.state.contactType} onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row style={{marginTop: "10px"}}>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type='textarea' id="message" name='message' rows="12" 
                                        value={this.state.message} 
                                        onChange={this.handleInputChange}
                                        />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}} style={{marginTop: "10px"}}>
                                    <Button type='submit' color='primary'>
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>

                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;