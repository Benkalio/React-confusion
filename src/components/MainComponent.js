import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent'
import { Component } from 'react';
import  DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateTopProps = state => {
  return {
    dishes: state.dishes,
    comment: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
class Main extends Component {  
  constructor(props) {
    super(props);
  }

  
  render() {

    const HomePage = () => {
      return (
        // FILTERING AND RENDERING THE DEFAULT TRUE VALUE OF THE SHARED FILES  
        <Home dish={ this.props.dishes.filter((dish) => dish.featured)[0]} 
         promotions={ this.props.promotions.filter((promo) => promo.featured)[0]}
         leaders={ this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    const DishWithId = ({match}) => {
      return (
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        />
        

      );
    }

    return (
     <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes = {this.props.dishes} />} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route path="/aboutus" component={() => <About leaders={this.props.leaders} />}/>
          <Redirect to="/home" />
        </Switch>

        <Footer />
    </div>
  );
  }
}

export default withRouter(connect(mapStateTopProps)(Main));
