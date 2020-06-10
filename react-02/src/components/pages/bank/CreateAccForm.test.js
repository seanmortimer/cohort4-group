import CreateAcc from './CreateAccForm.js';
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react'
import  { Account, Card, AccountControl } from './business/Accounts.js'

test ('testing the CreateAcc form', () => {
    const accContr = new AccountControl();
    const acc = accContr.getNewAcc();

    const mockSubmit = jest.fn();
    const mockChange = jest.fn();
 
    acc.name = 'Cat Food';
    acc.balance = '15';
    acc.key = accContr.nextKey();

    render (<CreateAcc 
        acc = {acc}
        onSubmit = {mockSubmit}
        onChange = {mockChange}
        />)
     
    expect(getValue('name').toBe('Cat Food'));
    expect(getValue('balance')).toBe('15');
})

function getValue(name) {
    return document.querySelector(`[name=${name}]`).value;
}
