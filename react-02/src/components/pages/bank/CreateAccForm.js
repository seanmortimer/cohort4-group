import React, { Component } from 'react'
import  { Account, Card, AccountControl } from './business/Accounts.js'
import NewCard from './Card.js';

let accContr = new AccountControl;


export class CreateAcc extends Component {
state = {
    key: '',
    accName: '',
    startBal: '',
};


onChange = (e) => this.setState ({ [e.target.name]: e.target.value})

onSubmit = (e) => {
    e.preventDefault();
    accContr.addAccount(this.state.accName, this.state.startBal)
    this.setState( { accName: '', startBal: ''});
    console.log(accContr.accArr)
}

    render() {
        return (
            <div className = 'container'>
                <h1> Add Account</h1>
                <form onSubmit = {this.onSubmit} >
                
                <input 
                type = 'text' 
                className = 'form-control'
                name = 'accName'
                placeholder ='AccountName'
                style = {{flex: '10', padding: '5px'}}
                value = {this.state.accName}
                onChange = {this.onChange}
                />

                <input
                type = 'number'
                className = 'form-control'
                name = 'startBal'
                placeholder = 'Starting balance'
                style = {{flex: '10', padding: '5px'}}
                value = {this.state.startBal}
                onChange = {this.onChange}
                />

                <input 
                type = 'Submit'
                value = 'Add Account'
                className = 'btn'
                style = {{ flex:1}}
                />

            </form>
            </div>
        )
    }
}

export default CreateAcc
