import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle} from 'reactstrap';
// import Menu from "./MenuComponent";


class DishDetail extends Component {
    const dish = this.props.selectedDish

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return (<div></div>);
        }
    }

    render() {
        return(
            <div className="container">
                <div className="row">

                </div>
            </div>
        );
    }
}
export default DishDetail;