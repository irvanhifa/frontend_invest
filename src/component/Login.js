import '../App.css';
import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
    
    render(){
        
        return (
        <>
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
                    <div className="relative sm:mb-0 flex-grow w-full">
                        <label for="name" className="leading-7 text-sm text-gray-400">Username</label>
                        <input type="text" id="name" name="name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                    </div>
                    <div className="relative sm:mb-0 flex-grow w-full">
                        <label for="pass" className="leading-7 text-sm text-gray-400">Password</label>
                        <input type="password" id="pass" name="pass" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
                </div>
            </div>
        </section>
        </>
        );
    }
}

export default Login;