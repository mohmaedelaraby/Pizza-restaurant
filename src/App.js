import {BrowserRouter as Router ,Route} from 'react-router-dom'
import Footer from './components/footer/Footer';
import Front from './components/front/Front';
import Middles from './components/middle/Middles';
import Products from './components/products/Products';
import { DessertsMenu1, PizzaMenu1, PizzaMenu2 } from './Data';

import { GlobalStyless } from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyless/>
        <Route exact path="/">
           <Front/>
           <Products heading="CHOOSE YOUR FAVORITE PIZZA" data={PizzaMenu1}/>
           <Middles/>
           <Products heading="CHOOSE YOUR FAVORITE DESSERTS" data={DessertsMenu1}/>
           <Footer/>
        </Route>

        <Route path="/pizzas">
           <Products heading="CHOOSE YOUR PIZZA" data={PizzaMenu1}/>
           <Products heading="" data={PizzaMenu2}/>
           <Footer/>
        </Route>

        <Route path="/desserts">
        <Products heading="CHOOSE YOUR DESSERTS" data={DessertsMenu1}/>
        <Footer/>
        </Route>
        
        <Route path="/fullmenu">
        <Products heading="CHOOSE WHAT YOU WANT" data={PizzaMenu1}/>
        <Products heading="" data={PizzaMenu2}/>
        <Products heading="" data={DessertsMenu1}/>
        <Footer/>
      </Route>
    </Router>
  );
}

export default App;
