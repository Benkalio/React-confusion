import React, { Component } from "react";
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem,
    Modal, ModalHeader, ModalBody, Col, Row, Label, Button } from 'reactstrap';
import { LocalForm, Control, Errors } from "react-redux-form";
import { Link } from 'react-router-dom';

// const required =(val) => val && val.length;
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

    render() {
        return(
            <div>
                <Button color="secondary" outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg">Submit Comment</span>
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={10}>Rating</Label>
                                <Col md={10}>
                                    <Control.Select model=".rating" id="rating" name="rating"
                                        className="form-control">
                                        <option value="1">1</option>
                                        <option value="2">2</option>                
                                        <option value="3">3</option>        
                                        <option value="4">4</option>        
                                        <option value="5">5</option>        
                                    </Control.Select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="yourname" md={10}>Your Name</Label>
                                <Col md={10}>
                                    <Control.Text model=".yourname" id="yourname" 
                                        name="yourname" placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                        />
                                    <Errors className="text-danger" model=".yourname"
                                        show="touched" 
                                        messages={{
                                            required: 'Required',
                                            minLength: 'must be greater than 2 characters',
                                            maxLength: "must be 15 characters or less"
                                        }}
                                        />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor="yourname" md={10}>Comment</Label>
                                <Col md={10}>
                                    <Control.Textarea model=".comment" id="comment" name="comment"
                                        row="8" className="form-control"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 0}}>
                                    <Button type="submit" color="primary">Submit</Button>
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
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}
function RenderComments({comments}) {
    // let comments = this.props.comments.map(comment => {
    //     return <li>{comment.trim()}</li>
    // })
    // if (!comments) return 'no data';
    if (!Array.isArray(comments)) return 'results are not array'
        const com = comments.map(comment => {
            if(comments != null){
                return (
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        </li>
                    </div>
            );
            }
            else
            return(
                <div></div>
            );
        })
    return (
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
                <li>{com}</li>
            </ul>
        </div>
    )
        
}

const DishDetail = (props) => {
    if (props.dish != null)
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comment}/> 
                    <CommentForm />
                </div>
            </div>
        );
    else
        return(
            <div></div>
        );
}
export default DishDetail;




