import '../App.css';
import React, { Component } from 'react';
import LoadingPage from './LoadingPage';
import { GET_HOLDING_PER_WALLET } from './ListApi';

class SummaryGrid extends Component{
    constructor(props){
        super(props)
        this.state = {
            wallet : [],
            isLoading: true
        }
        this.fetch_data = this.fetch_data.bind(this);
    }

    componentDidMount(){
        this.fetch_data();
    }

    fetch_data(){
        fetch(GET_HOLDING_PER_WALLET)
        .then(response => response.json())
        .then(data => this.setState({ 
            wallet: data.data,  
            isLoading: false }))
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        const { wallet, isLoading } = this.state;

        if(isLoading){
            return (
                <>
                <LoadingPage
                    message="Mohon tunggu, sedang mengambil data."
                ></LoadingPage>
                </>
            );
        }

        return(
            <>
            <section className="text-white body-font">
                <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-col text-center w-full mb-6">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Summary</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">This section is a summary of the investment value of each wallet.</p>
                    </div>
                    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                    <table className="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                        <tr>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm color-1 rounded-tl rounded-bl">Wallet</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm color-1">Capital</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm color-1">Net Worth</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm color-1">P/L</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm color-1">Ratio</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                wallet.map((item, index) => 

                                <SummaryRow
                                    key={index}
                                    wallet_name={item.wallet_name}
                                    capital={item.capital}
                                    net_worth={item.net_worth}
                                    pnl={item.pnl}
                                    pnl_percentage={item.pnl_percentage}
                                    holding_ratio={item.holding_ratio}
                                ></SummaryRow>
                                
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

class SummaryRow extends Component{
    constructor(props){
        super(props)
        this.state = {
            wallet_name: props.wallet_name,
            capital: props.capital,
            net_worth: props.net_worth,
            pnl: props.pnl,
            pnl_percentage: props.pnl_percentage,
            holding_ratio: props.holding_ratio
        }
    }

    render(){
        const { wallet_name, capital, net_worth, pnl, pnl_percentage, holding_ratio } = this.state;
        return(
            <>
            <tr className="border-b-2 border-gray-900">
                <td className="px-4 py-3">{wallet_name}</td>
                <td className="px-4 py-3">{capital}$</td>
                <td className="px-4 py-3">{net_worth}$</td>
                <td className="px-4 py-3">{pnl}$ <span className="text-gray-300">({pnl_percentage}%)</span></td>
                <td className="px-4 py-3">{holding_ratio}%</td>
            </tr>
            </>
        );
    }
}

export default SummaryGrid;