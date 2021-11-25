import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import './App.css';
import { DISHES } from '../shared/dishes';
import { Component } from 'react';
import { DishDetail } from './DishDetailComponent'


class Main extends Component {
  
  constructor(props) {
    super(props);

    // DEFINE THE STATE OF THE DISH MENU IMPORTED FROM DISHES.JS
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }
   // WHAT HAPPENS WHEN THE DISH IS CLICKED, THIS CODE SELECTS THE STATE OF THE DISH ID
   onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
  return (
    <div>
     <Navbar dark color="primary">
       <div className="container">
         <NavbarBrand href="/">Restorante Con Fusion</NavbarBrand>
       </div>
     </Navbar>
    <Menu dishes ={this.state.dishes} 
        onClick={(dishId) => this.onDishSelect(dishId)}
    />
    <DishDetail 
        dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)}/>
    </div>
  );
  }
}

export default Main;
