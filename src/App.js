import './App.css';
// import Logo from './Logo.svg';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './component/Header';
import Footer from './component/Footer';
import CardPriceGrid from './component/CardPriceGrid';
import CardYieldGrid from './component/CardYieldGrid';
import SummaryGrid from './component/SummaryGrid';
import LoadingPage from './component/LoadingPage';
import Login from './component/Login';
import Transaction from './component/Transaction';
import Detail from './component/Detail';
import { GET_UPDATE_PRICE } from './component/ListApi';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoading: true
        }
    }

    componentDidMount(){
        this.fetch_data();
    }

    fetch_data(){
        fetch(GET_UPDATE_PRICE)
        .then(response => response.json())
        .then(data => this.setState({ items: data.data, isLoading: false }))
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        const { isLoading } = this.state;

        if(isLoading){
            return (
                <>
                <LoadingPage
                    message="Mohon tunggu, sedang mengolah API."
                ></LoadingPage>
                </>
            );
        }

        return (
            
            <Router>
                <Header></Header>
            
                <Switch>
                    <Route exact path="/">
                        <SummaryGrid></SummaryGrid>
                        <CardYieldGrid></CardYieldGrid>
                        <CardPriceGrid></CardPriceGrid>
                    </Route>
                    <Route exact path="/detail">
                        <Detail></Detail>
                    </Route>
                    <Route exact path="/transaction">
                        <Transaction></Transaction>
                    </Route>
                    <Route exact path="/admin">
                        <Login></Login>
                    </Route>
                </Switch>
            
                <Footer></Footer>
            </Router>
            
        );
    }
}

export default App;
