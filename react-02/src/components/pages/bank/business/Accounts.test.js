import { Account, Card, AccountControl } from './Accounts.js';

// Testing Account Class: adding an account and manipulating balance

test('Class test', () => {
    const acc1 = new Account('k', 'acc1', 25);

    expect(acc1.key).toBe('k');
    expect(acc1.deposit(10)).toEqual(35);
    expect(acc1.withdraw(30)).toEqual(5);
    expect(acc1.balance).toEqual(5);

});



// Testing a Card class

test('Card class', () => {

    const acc2 = new Card('k', 'acc2', 30);

//Creating card

    expect(acc2.buildCard()).toBeTruthy();

});



// Testing an Account Controller class

test('AccountController test', () => {

    const accContr = new AccountControl();

    expect(accContr.accArr).toEqual([]);

//Testing 'Add account' function

    const [acct, card] = accContr.addAccount('Cat Food', 15);
    console.log(acct, card)


    expect(accContr.accArr.length).toBe(1);
    expect(accContr.accArr[0].name).toBe('Cat Food');


    accContr.addAccount('Dog Food', 15);
    expect(accContr.accArr.length).toBe(2);

// Getting the account
    let acc = accContr.getAccount('k1');
    expect(acc.name).toBe('Cat Food');
    expect(acc.balance).toBe(15);

    acc = accContr.getAccount('k2');
    expect(acc.name).toBe('Dog Food');

    acc = accContr.getAccount('k3');
    expect(acc).toBeUndefined();

// Depositing into selected account

    let deposit1 = accContr.deposit('k1', 10);
    expect(deposit1).toBe(25);

    let deposit2 = accContr.deposit('k2', 15);
    expect(deposit2).toBe(30);

//Withdraw from selected account

    let withdraw1 = accContr.withdraw('k1', 10);
    expect(withdraw1).toBe(15);

    expect(accContr.accArr.length).toBe(2);
    expect(accContr.accArr[0].balance).toBe(15);
    expect(accContr.accArr[0].name).toBe('Cat Food');
    expect(accContr.accArr[0].key).toBe('k1');

    expect(accContr.accArr[1].balance).toBe(30);
    expect(accContr.accArr[1].name).toBe('Dog Food');
    expect(accContr.accArr[1].key).toBe('k2');

// Getting Total Balance
    accContr.addAccount('Gas Money', 40);
    expect(accContr.accArr[2].balance).toBe(40);
    expect(accContr.accArr[2].name).toBe('Gas Money');
    expect(accContr.accArr[2].key).toBe('k3');
    expect(accContr.totalBalance()).toBe('$85');

//Getting Highest Balance
    expect(accContr.highestBalance()).toEqual('Gas Money: $40');

//Getting Lowest Balance
    expect(accContr.lowestBalance()).toEqual('Cat Food: $15');

//Deleting Account
    accContr.deleteAccount('k1');
    expect(accContr.accArr.length).toBe(2);
    expect(accContr.accArr[0].balance).toBe(30);
    expect(accContr.accArr[0].name).toBe('Dog Food');
    expect(accContr.accArr[0].key).toBe('k2');
})