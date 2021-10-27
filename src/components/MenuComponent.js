import React, {Component} from 'react';
import {Media} from 'reactstrap';

class Menu extends Component {
    constructor(props){
        super(props);

        //DEFINE STATE FOR THE RESTRAURANT MENU
        this.state = {
            dishes: [
                {
                    id: 0,
                    name: 'Pasta',
                    image: 'assets/images/image1.jpg',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'A unique combination of Nigerian delicacy.'
                },
                {
                    id: 1,
                    name: 'Beans',
                    image: 'assets/images/image1.jpg',
                    category: 'mains',
                    label: '',
                    price: '1.99',
                    description: 'A unique combination of Nigerian delicacy.'
                },
                {
                    id: 2,
                    name: 'Plantain',
                    image: 'assets/images/image1.jpg',
                    category: 'mains',
                    label: 'Hot',
                    price: '2.99',
                    description: 'A unique combination of Nigerian delicacy.'
                },
                {
                    id: 3,
                    name: 'Rice',
                    image: 'assets/images/image1.jpg',
                    category: 'mains',
                    label: '',
                    price: '3.99',
                    description: 'A unique combination of Nigerian delicacy.'
                }
            ]
        }
    }
    render(){
        const menu =this.state.dishes.map((dish) => {
            return (
                //CREATING 12 COLUMNS WITH BOOTSTRAP WITH THE KEY PROPERTY TO IDENTIFY THE LIST OF DISHES ABOVE
                //USING REACT MEDIA CLASS TO RENDER THE APPLICATION ***READ UP REACT DOCUMENTATION ON MEDIA
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            )
        });
        return(
            //USING BOOTSTRAP CLASSES ##READ MORE ON CSS BOOTSTRAP
            <div className="container">
                <div className="row">
                    <Media list >
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}

export default Menu;