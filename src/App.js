import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
      <Switch>
        <Route path="/shop">
        <Shop></Shop>
        </Route>
        <Route exact path="/">
        <Shop></Shop>
        </Route>
        <Route path="/orders">
        <OrderReview></OrderReview>
        </Route>
        <Route exact path="/inventory">
        <Inventory></Inventory>
        </Route>

      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
