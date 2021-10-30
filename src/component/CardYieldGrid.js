import '../App.css';
import React, { Component } from 'react';
import LoadingPage from './LoadingPage';
import { GET_YIELD_DATA } from './ListApi';

class CardYieldGrid extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: [],
            isLoading: true
        }
        this.fetch_data = this.fetch_data.bind(this);
    }

    componentDidMount(){
        this.fetch_data();
    }

    fetch_data(){
        fetch(GET_YIELD_DATA)
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

        return(
            <>
            <section className="text-white body-font">
                <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-col text-center w-full mb-6">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Monthly Yield</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">This section describes the yield of the pools, the value is not fixed and will continue to decrease over time. Treasury Balance listed is included to replace 50% of the loss of investor funds.</p>
                    </div>
                    <div className="flex flex-wrap -m-4 text-center">
                        {
                            data.map((item, index) => 

                            <CardYield
                                key={index}
                                data={item.data}
                                caption={item.caption}
                                variant={item.variant}
                            ></CardYield>
                                
                            )
                        }
                    </div>
                </div>
            </section>
            </>
        );
    }
}

class CardYield extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: props.data,
            caption: props.caption,
            variant: props.variant
        }
    }

    render(){
        const { data, caption, variant } = this.state;

        if(variant === "dollar"){
            return(
                <>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="border-2 border-gray-500 px-4 py-6 rounded-lg">
                        <h2 className="title-font font-medium text-3xl text-white">{data}$</h2>
                        <p className="leading-relaxed">{caption}</p>
                    </div>
                </div>
                </>
            );
        } else if(variant === "percentage") {
            return(
                <>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="border-2 border-gray-500 px-4 py-6 rounded-lg">
                        <h2 className="title-font font-medium text-3xl text-white">{data}%</h2>
                        <p className="leading-relaxed">{caption}</p>
                    </div>
                </div>
                </>
            );
        } else {
            return (<></>);
        }
    }
}

export default CardYieldGrid;