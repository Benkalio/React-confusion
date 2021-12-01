import Menu from './MenuComponent';
import Home from './HomeComponent';
import { DISHES } from '../shared/dishes';
import { Component } from 'react';
import  DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {  
  constructor(props) {
    super(props);

    // DEFINE THE STATE OF THE DISH MENU IMPORTED FROM DISHES.JS
    this.state = {
      dishes: DISHES
    };
  }
   // WHAT HAPPENS WHEN THE DISH IS CLICKED, THIS CODE SELECTS THE STATE OF THE DISH ID
  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId});
  // }

  render() {

    const HomePage = () => {
      return (
        <Home />
      );
    }
    return (
     <div>
        <Header />
        {/* <Menu dishes ={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish) } /> */}
        {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}

        {/* REACT ROUTE IMPLEMENTED FOR COMPONENTS ABOVE (COMMENTED OUT) */}
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes = {this.state.dishes} />} />
          <Redirect to="/home" />
        </Switch>

        <Footer />
    </div>
  );
  }
}

export default Main;
