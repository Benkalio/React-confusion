import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Input, Label, Col} from 'reactstrap';

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
            message: ''
        }
    }

    render() {
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
                    <div className='col-12 col-md-9'>
                        <Form>
                            <FormGroup>
                                <Label></Label>
                            </FormGroup>
                        </Form>

                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;