import '../App.css';
import React, { Component } from 'react';

class LoadingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: props.message
        };
    }
    
    render(){
        const { message } = this.state;
        return (
        <>
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <svg className="lg:w-2/6 md:w-3/6 w-5/6 animate-spin mb-10 object-cover object-center rounded text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-2xl text-xl mb-4 font-medium text-white">{message}</h1>
                    {/* <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                    </div> */}
                </div>
            </div>
        </>
        );
    }
}

export default LoadingPage;