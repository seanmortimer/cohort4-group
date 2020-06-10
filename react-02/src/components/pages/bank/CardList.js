import React, { Component } from 'react';
import Card from './Card.js';

export class CardList extends Component {
    render() {
        return this.props.accounts.map((card) => (
            <Card
            key = {card.key}
            accName = {card.accName}
            startBal = {card.startBal}
            />
        ));
    }
}

export default CardList
