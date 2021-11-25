import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

class Menu extends Component {
    constructor(props){
        super(props);


    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <DishDetail dish={this.state.selectedDish} />

            )
        } else {
            return (<div></div>);
        }
    }
    
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                //CREATING 12 COLUMNS WITH BOOTSTRAP WITH THE KEY PROPERTY TO IDENTIFY THE LIST OF DISHES ABOVE
                //USING REACT MEDIA CLASS TO RENDER THE APPLICATION ***READ UP REACT DOCUMENTATION ON MEDIA
                // /* WHEN THE CARD IS CLICKED */
                <div  key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;