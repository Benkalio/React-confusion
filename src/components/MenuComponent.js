import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle} from 'reactstrap';
import { DishDetail } from './DishDetailComponent'

class Menu extends Component {
    constructor(props){
        super(props);

        //DEFINE STATE FOR THE RESTAURANT MENU
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
                <DishDetail selectedDish={this.state.selectedDish}/>
            )
        } else {
            return (<div></div>);
        }
    }
    
    render() {
        const menu =this.props.dishes.map((dish) => {
            return (
                //CREATING 12 COLUMNS WITH BOOTSTRAP WITH THE KEY PROPERTY TO IDENTIFY THE LIST OF DISHES ABOVE
                //USING REACT MEDIA CLASS TO RENDER THE APPLICATION ***READ UP REACT DOCUMENTATION ON MEDIA
                // /* WHEN THE CARD IS CLICKED */
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return(
            //USING BOOTSTRAP CLASSES ##READ MORE ON CSS BOOTSTRAP
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="col-12 col-md-5 m-1">
                    <div className="row">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;