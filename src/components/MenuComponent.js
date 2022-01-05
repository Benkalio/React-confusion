import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem,
    Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

//FUNCTIONAL COMPONENT
    function RenderMenuItem({ dish, onClick }) {
        return(
            <Card>
                <Link to={`/menu/${dish.id}`}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
                
            </Card>
        );
    }
    // second way of implementing functional component 
    const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
            return (
                <div  key={dish.id} className="col-12 col-md-5 m-1">
                   <RenderMenuItem dish={dish}/>
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
                <div className="row">
                    {menu}
                </div>
                
            </div>
        );
    }
        

export default Menu;