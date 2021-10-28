import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle} from 'reactstrap';

class Menu extends Component {
    constructor(props){
        super(props);

        //DEFINE STATE FOR THE RESTRAURANT MENU
        this.state = {

            //INTRODUCING THE ON CLICK PROPERTY ON THE MENU ITEMS, WHICH IS CODED ON THE CARD TAG BELOW
            selectedDish: null
        }
    }

    // WHAT HAPPENS WHEN THE DISH IS CLICKED, THIS CODE SELECTS THE STATE OF THE DISH
    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

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
            return (<div></div>)
        }
    }


    render(){
        const menu =this.props.dishes.map((dish) => {
            return (
                //CREATING 12 COLUMNS WITH BOOTSTRAP WITH THE KEY PROPERTY TO IDENTIFY THE LIST OF DISHES ABOVE
                //USING REACT MEDIA CLASS TO RENDER THE APPLICATION ***READ UP REACT DOCUMENTATION ON MEDIA
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    {/* WHEN THE CARD IS CLICKED */}
                    <Card onClick={() => this.onDishSelect()}>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });
        return(
            //USING BOOTSTRAP CLASSES ##READ MORE ON CSS BOOTSTRAP
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;