import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { Component } from 'react';
import  DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

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
        <Header />
        <Menu dishes ={this.state.dishes} 
            onClick={(dishId) => this.onDishSelect(dishId)}
        />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)}/>
        {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
        <Footer />
    </div>
  );
  }
}

export default Main;
