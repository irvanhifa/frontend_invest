import '../App.css';
import React, { Component } from 'react';
import LoadingPage from './LoadingPage';
import { GET_HOLDING_VALUE } from './ListApi';

class CardPriceGrid extends Component {
    constructor(props){
        super(props)
        this.state = {
          single_token : [],
          lp_token : [],
          isLoading: true
        }
        this.fetch_data = this.fetch_data.bind(this);
    }
    
    componentDidMount(){
        this.fetch_data();
    }

    fetch_data(){
        fetch(GET_HOLDING_VALUE)
        .then(response => response.json())
        .then(data => this.setState({ 
            single_token: data.single_token_holding, 
            lp_token: data.lp_token_holding, 
            isLoading: false }))
        .catch(error => {
            console.log(error)
        })
    }
    
    render(){
        const { single_token, lp_token, isLoading } = this.state;

        if(isLoading){
            return (
                <>
                <LoadingPage
                    message="Mohon tunggu, sedang mengambil data."
                ></LoadingPage>
                </>
            );
        }

        return (
        <section className="text-white body-font">
            <div className="container px-5 py-8 mx-auto">
                <div className="flex flex-col text-center w-full mb-6">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Token Holding</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">This section describes what tokens are currently held and their current prices.</p>
                </div>
                <div className="flex flex-wrap -m-2">
                    {
                        single_token.map((item, index) => 

                            <CardPrice 
                                key={index}
                                token_name={item.token_name} 
                                price={item.price} 
                                price_change_percentage={item.price_change_percentage} 
                                amount={item.amount_total}
                                value={item.value_usd}
                            ></CardPrice>
                        
                        )
                    }
                    {
                        lp_token.map((item, index) => 

                            <CardPrice 
                                key={index}
                                token_name={item.pair_name} 
                                price={item.price} 
                                price_change_percentage={item.price_change_percentage} 
                                amount={item.amount_total}
                                value={item.value_usd}
                            ></CardPrice>
                        
                        )
                    }
                </div>
            </div>
        </section>
        );
    }
}



class CardPrice extends Component {
    constructor(props){
        super(props);
        this.state = {
            token_name: props.token_name,
            price: props.price,
            price_change_percentage: props.price_change_percentage,
            value: props.value,
            amount: props.amount
        };
    }
    
    render(){
        const { token_name, price, price_change_percentage, amount, value } = this.state;
        return (
        <>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex text-center items-center border-gray-500 border p-4 rounded-lg">
                <div className="flex-grow">
                    <h2 className="text-white title-font font-medium">Token</h2>
                    <h1 className="text-white text-2xl font-bold">{token_name}</h1>
                </div>
                <div className="flex-grow">
                    <h2 className="text-white title-font font-medium">Price</h2>
                    <p className="text-gray-100">{price}$</p>
                    <p className="text-gray-300">({price_change_percentage}%)</p>
                </div>
                <div className="flex-grow">
                    <h2 className="text-white title-font font-medium">Hold</h2>
                    <p className="text-gray-100">{amount}</p>
                    <p className="text-gray-300">({value}$)</p>
                </div>
            </div>
        </div>
        </>
        );
    }
}

export default CardPriceGrid;