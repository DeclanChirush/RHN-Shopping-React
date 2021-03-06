import React, {Component} from 'react';
import './App.css';
import './assets/stylesheets/main.scss'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./layout/Header";
import Home from "./views/Home";
import Checkout from "./views/Checkout";
import DashBoard from "./views/Dashboard";
import CreateProduct from "./views/CreateProduct";
import Footer from './layout/Footer';
import Login from './components/home/login.component';
import Register from './components/home/register.component';
import DeliveryGateway from './components/delivery/DeliveryGateway';
import PaymentMethodSelector from "./components/payment/PaymentMethodSelector";
import CardPayment from "./components/payment/card-payment/CardPayment";
import MobilePayment from "./components/payment/mobile-payment/MobilePayment";

class App extends Component{
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route path="/sign-in" component={Login}/>
                        <Route path="/sign-up" component={Register}/>

                        <Route path='/checkout'>y
                            <Checkout/>
                        </Route>
                        <Route path="/dashboard">
                            <DashBoard/>
                        </Route>
                        <Route path="/create-product">
                            <CreateProduct/>
                        </Route>
                        <Route path='/api/delivery'>
                            <DeliveryGateway/>
                        </Route>
                        <Route path='/payment'>
                            <PaymentMethodSelector/>
                        </Route>
                        <Route path='/card-payment'>
                            <CardPayment/>
                        </Route>
                        <Route path='/mobile-payment'>
                            <MobilePayment/>
                        </Route>

                        <Route path='/'>
                            <Home/>
                        </Route>
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
