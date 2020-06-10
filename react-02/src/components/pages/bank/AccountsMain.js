import React, { Component } from 'react'
import CreateAcc from './CreateAccForm.js'
import Cards from './Card.js'
import CardList from './CardList.js'
import  { Account, Card, AccountControl } from './business/Accounts.js'

const controller = new AccountControl;

export class AccountsMain extends Component {
    constructor (props) {
        super(props);
        // this.state = {
        // accounts = [],
        
    // }
   }
   

   
    render() {
        return (
                <div className = "MainPage">
                    <div className ='container'>
                        <h1>Piggy Bank</h1>
                            <React.Fragment>
                                <CreateAcc/>
                                {/* <CardList /> */}
                                {/* <Cards 
                                accounts ={this.state.accounts}
                                /> */}
                            </React.Fragment>

                    </div>
            </div>

        )
    }
}

export default AccountsMain
