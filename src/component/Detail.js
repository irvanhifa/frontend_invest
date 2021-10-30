import '../App.css';
import React, { Component } from 'react';
import LoadingPage from './LoadingPage';
import { GET_DETAIL_HOLDING_PER_WALLET } from './ListApi';

class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            single_token : [],
            lp_token : [],
            isLoading: true
        };
        this.fetch_data = this.fetch_data.bind(this);
    }

    componentDidMount(){
        this.fetch_data();
    }

    fetch_data(){
        fetch(GET_DETAIL_HOLDING_PER_WALLET)
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
        console.log(single_token);
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
            <section class="text-gray-400 bg-gray-900 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Detail Holding</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">This page contains holding details per token of each wallet.</p>
                    </div>
                    <div class="flex flex-wrap -m-2">
                        {
                            single_token.map((item, index) => 

                                <CardDetailPerToken
                                    key={index}
                                    token_name={item.token_name}
                                    token_id={item.token_id}
                                    data={item.data}
                                ></CardDetailPerToken>
                                    
                            )
                        }

                        {
                            lp_token.map((item, index) => 

                                <CardDetailPerToken
                                    key={index}
                                    token_name={item.token_name}
                                    token_id={item.token_id}
                                    data={item.data}
                                ></CardDetailPerToken>
                                    
                            )
                        }
                        
                    </div>
                </div>
            </section>
        );
    }
}

class CardDetailPerToken extends Component {
    constructor(props){
        super(props);
        this.state = {
            token_name: props.token_name,
            token_id: props.token_id,
            data: props.data
        };
    }
    
    render(){
        const { token_name, data } = this.state;
        return (
        <>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                    <div className="px-2 py-2">
                        <p className="font-medium text-white text-center text-lg color-1 w-14">Token</p>
                        <p className="font-medium text-white text-center text-2xl color-1 w-14">{token_name}</p>
                    </div>
                    <table className="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr>
                                <th className="px-2 py-3 title-font tracking-wider font-medium text-white text-sm color-1">Wallet</th>
                                <th className="px-2 py-3 title-font tracking-wider font-medium text-white text-sm color-1">Amount</th>
                                <th className="px-2 py-3 title-font tracking-wider font-medium text-white text-sm color-1">Ratio</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((item, index) => 

                                    <TabelDetail
                                        key={index}
                                        name={item.name}
                                        amount={item.amount}
                                        holding_ratio={item.holding_ratio}
                                    ></TabelDetail>
                                        
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
        );
    }
}

class TabelDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            amount: props.amount,
            holding_ratio: props.holding_ratio
        };
    }
    
    render(){
        const { name, amount, holding_ratio } = this.state;
        return (
        <>
            
            <tr>
                <td class="px-2 py-1">{name}</td>
                <td class="px-2 py-1">{amount}</td>
                <td class="px-2 py-1">{holding_ratio}%</td>
            </tr>
                        
        </>
        );
    }
}

export default Detail;