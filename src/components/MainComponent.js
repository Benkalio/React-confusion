import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
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
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS
    };
  }

  render() {

    const HomePage = () => {
      return (
        // FILTERING AND RENDERING THE DEFAULT TRUE VALUE OF THE SHARED FILES  
        <Home dish={ this.state.dishes.filter((dish) => dish.featured)[0]} 
         promotions={ this.state.promotions.filter((promotion) => promotion.featured)[0]}
         leaders={ this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }
    return (
     <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes = {this.state.dishes} />} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>

        <Footer />
    </div>
  );
  }
}

export default Main;
