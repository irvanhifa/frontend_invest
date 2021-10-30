import '../App.css';
import React, { Component } from 'react';
import LoadingPage from './LoadingPage';
import { GET_LATEST_TRANSACTION } from './ListApi';

class Transaction extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : [],
            isLoading: true
        }
        this.fetch_data = this.fetch_data.bind(this);
    }

    componentDidMount(){
        this.fetch_data();
    }

    fetch_data(){
        fetch(GET_LATEST_TRANSACTION)
        .then(response => response.json())
        .then(data => this.setState({ 
            data: data.data,  
            isLoading: false }))
        .catch(error => {
            console.log(error)
        })
    }
    
    render(){
        const { data, isLoading } = this.state;

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
        <>
            <section className="text-white body-font">
                <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">History Transaction</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">This page contains simplified transaction history from the network. The data displayed is limited to transactions on the same day.</p>
                    </div>
                    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                        <table className="table-auto w-full text-left whitespace-no-wrap">
                            <thead>
                            <tr>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm color-1">Transaction Date</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm color-1">From Token</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm color-1">Type</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm color-1">To Token</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm color-1">Transaction Fee</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item, index) => 

                                    <TransactionRow
                                        key={index}
                                        date={item.date}
                                        token_from={item.token_from}
                                        amount_from= {item.amount_from}
                                        token_to= {item.token_to}
                                        amount_to= {item.amount_to}
                                        transaction_type= {item.transaction_type}
                                        token_fee= {item.token_fee}
                                        amount_fee= {item.amount_fee}
                                    ></TransactionRow>
                                    
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
        );
    }
}

class TransactionRow extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: props.date,
            token_from: props.token_from,
            amount_from: props.amount_from,
            token_to: props.token_to,
            amount_to: props.amount_to,
            transaction_type: props.transaction_type,
            token_fee: props.token_fee,
            amount_fee: props.amount_fee
        };
    }
    
    render(){
        const { date, token_from, amount_from, token_to, amount_to, transaction_type, amount_fee, token_fee} = this.state;
        return (
        <>
            <tr>
                <td className="px-4 py-3">{date}</td>
                <td className="px-4 py-3">
                    <span className="text-gray-300">{amount_from} </span>
                    <span className="text-white font-medium">{token_from}</span>
                </td>
                <td className="px-4 py-3">{transaction_type}</td>
                <td className="px-4 py-3">
                    <span className="text-gray-300">{amount_to} </span>
                    <span className="text-white font-medium">{token_to}</span>
                </td>
                <td className="px-4 py-3">
                    <span className="text-gray-300">{amount_fee} </span>
                    <span className="text-white font-medium">{token_fee}</span>
                </td>
            </tr>
        </>
        );
    }
}

export default Transaction;