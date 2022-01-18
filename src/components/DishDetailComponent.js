// import React from "react";
// import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem,
//     Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
// import { LocalForm, Control, } from "react-redux-form";
// import { Link } from 'react-router-dom';

// const minLength = (len) => (val) => val && (val.length >= len);
// const maxLength = (len) => (val) => !(val) || (val.length <= len);
// class CommentForm extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             rating: '1',
//             yourname: '',
//             comment: '',
//             isModalOpen: false,
//             touched: {
//                 name: false
//             }
//         };
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.toggleModal = this.toggleModal.bind(this);
//       }
    
//     handleSubmit(values) {
//         console.log('Current State is: ' + JSON.stringify(values));
//         alert('Current State is: ' + JSON.stringify(values));
//         // event.preventDefault();
//     }
//     toggleModal() {
//         this.setState({
//           isModalOpen: !this.state.isModalOpen
//         });
//       }
 
//     function RenderDish({dish}) {
//         return (
//             <div className="col-12 col-md-5 m-1">
//                 <Card>
//                     <CardImg width="100%" src={dish.image} alt={dish.name} />
//                     <CardBody>
//                         <CardTitle>{dish.name}</CardTitle>
//                         <CardText>{dish.description}</CardText>
//                     </CardBody>
//                 </Card>
//             </div>
//         )
//     }
//     function RenderComments({comments}) {
//         // let comments = this.props.comments.map(comment => {
//         //     return <li>{comment.trim()}</li>
//         // })
//         if (!comments) return 'no data';
//         if (!Array.isArray(comments)) return 'results are not array'
//         if(comments != null)
//             return (
//                 <div className="col-12 col-md-5 m-1">
//                     <h4>Comments</h4>
//                     <ul className="list-unstyled">
//                         {
//                             comments.map((comment) => {
//                             return(
//                                 <li key={comment.id}>
//                                     <p>{comment.comment}</p>
//                                     <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
//                                 </li>
//                             );
//                         })}
//                     </ul>
//                 </div>
//             );
//             else
//                 return(
//                     <div></div>
//                 );
//     }

//     const DishDetail = (props) => {
//         if (props.dish != null)
//             return(
//                 <div className="container">
//                     <div className="row">
//                         <Breadcrumb>
//                             <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
//                             <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
//                         </Breadcrumb>
//                     </div>
//                     <div className="col-12">
//                         <h3>{props.dish.name}</h3>
//                         <hr />
//                     </div>
//                     <div className="row">
//                         <RenderDish dish={props.dish} />
//                         <RenderComments comments={props.comment}/> 
//                     </div>
//                     <Modal >
//                         <Button className="btn btn-pencil">Submit Comment</Button>
//                         <ModalHeader>Submit Comment</ModalHeader>
//                         <ModalBody>
//                             <Form>
//                                 <FormGroup>
//                                     <Label>Rating</Label>
//                                     <select>
//                                         <option value="1">1</option>
//                                         <option value="2">2</option>
//                                         <option value="3">3</option>
//                                         <option value="4">4</option>
//                                         <option value="5">5</option>
//                                     </select>
//                                 </FormGroup>
//                                 <FormGroup >
//                                     <Label >Your Name</Label>
//                                     <Input type="text" name="Your name" id="yourname"/>
//                                 </FormGroup>
//                                 <FormGroup >
//                                     <Label >Comment</Label>
//                                     <Input type="textarea" row="12" />
//                                 </FormGroup>
//                                 <Button type="submit" value="submit" color="primary">Submit</Button>
//                             </Form>
//                         </ModalBody>
//                     </Modal>
//                 </div>
//             );
//         else
//             return(
//                 <div></div>
//             );
//     }
    


// export default DishDetail;

import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label, Row, Col, } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';


const minLength = (len) => (val) => val && (val.length >= len);
const maxLength = (len) => (val) => !(val) || (val.length <= len);
class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: '1',
            yourname: '',
            comment: '',
            isModalOpen: false,
            touched: {
                name: false
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
      }
    
    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }
    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

    render(){
        return(
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
            
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        
                        <Row className="form-group">
                            <Label htmlFor="rating" md={12}><h5>Rating</h5></Label>
                            <Col md={12}>
                                <Control.Select model=".rating" id="rating" name="rating" className="form-control">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Control.Select>
                            </Col>
                        </Row>
                        <Row className="form-group"> 
                            <Label htmlFor="yourname" md={12}><h5>Your Name</h5></Label>
                            <Col md={12}>
                                <Control.Text model=".yourname" id="yourname" name="yourname"
                                    placeholder="Your Name"
                                    className="form-control"
                                    validators={{
                                        minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                        />
                                <Errors
                                    className="text-danger"
                                    model=".yourname"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                    />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="comment" md={12}><h5>Comment</h5></Label>
                            <Col md={12}>
                                <Control.Textarea model=".comment" id="comment" name="comment"
                                    rows="8"
                                    className="form-control" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size:10, offset: 0}}>
                                <Button type="submit" color="primary">
                                Submit
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }

}



    function RenderDish({dish}) {
    
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle><h4>{dish.name}</h4></CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );

    }

    function RenderComments({comments}) {
      
        if (comments != null)
   
            return (
                <div>
                    <h4> Comments </h4>
                        {comments.map((com) => {
                        return(
                            <div>
                                <div className='row m-1'>
                                    <p> {com.comment} </p>
                                </div>
                                <div className='row m-1'>
                                    <p> --{com.author},  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))} </p>
                                </div>
                            </div>
                        );
                        })}
                    
                </div>
            );  
        else
            return(
                <div></div>
            );
      
    }


    const  DishDetail = (props) => {

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments = {props.comments} />
                        <CommentForm />
                    </div>
                    
                </div>
            </div>

            
          
        );
      
    }

export default DishDetail;
