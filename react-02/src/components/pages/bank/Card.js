import React, { Component } from 'react'

export class NewCard extends Component {


    render() {
        const {key, accName, startBal} = this.props.card;
        return (
            <div name = 'card' key = {key}>
                <span 
                name = 'accName'
                value = {accName}
                />

                <span 
                name = 'accBal'
                value = {startBal}
                />

                <input
                type = 'button'
                name = 'deleteBtn'
                value = 'Delete'
                />

                
            </div>
        )
    }
}

export default NewCard
