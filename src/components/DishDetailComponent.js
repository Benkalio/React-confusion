import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle} from 'reactstrap';
// import Menu from "./MenuComponent";

export const DishDetail = ({ selectedDish }) => {
    renderComments(){
        let comment = dishes.map((comments) =>{

        })
    }
    return (
        <div className="container">
            <div className="row">
                { selectedDish &&
                    <Card>
                        <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name} />
                        <CardBody>
                            <CardTitle>{selectedDish.name}</CardTitle>
                            <CardText>{selectedDish.description}</CardText>
                        </CardBody>
                    </Card>
                }
            </div>
        </div>
    )
};

