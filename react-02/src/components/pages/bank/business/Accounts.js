// Creating a new account and manipulating balance:

class Account {
    constructor(key, accountName, startingBalance) {
        this.key = key;
        this.name = accountName;
        this.balance = startingBalance;

    }

    deposit(amount) {
        this.balance = this.balance + Number(amount);
        return this.balance;
    }

    withdraw(amount) {
        this.balance -= Number(amount);
        return this.balance;
    }

    balance() {
        return this.balance;
    }

};


// Creating a Card for a new Account:

class Card extends Account {

    buildCard() {
        let card = document.createElement('div');

        let accName = document.createElement('span');
        accName.appendChild(document.createTextNode(this.name));
        accName.setAttribute('id', 'idAccountName');
        accName.setAttribute('key', this.key);
        accName.classList.add("divClass");
        card.appendChild(accName);

        card.setAttribute('class', 'row');
        card.setAttribute('id', 'card');
        card.setAttribute('key', this.key);

        let bal = document.createElement('span');
        bal.setAttribute('id', `${this.key}`);
        bal.setAttribute('key', this.key);
        bal.textContent = this.balance;
        bal.classList.add("divClass");
        card.appendChild(bal);

        const delBtn = document.createElement('button');
        const delBtnText = document.createTextNode('Delete');
        delBtn.appendChild(delBtnText);
        delBtn.setAttribute("class", "btn btn-outline-secondary");
        delBtn.setAttribute('todo', 'delete');
        delBtn.setAttribute('key', this.key);
        card.appendChild(delBtn);

        return card;
    }
}


// Creating an Account Controller Class to manipulate multiple accounts

class AccountControl {
    constructor() {

        this.accArr = [];
        this.counter = 1;

    }


    // Setting up a dynamic key for each object in the array

    nextKey() {
        return `k${this.counter++}`;
    }

    // Adding a new account as well as creating a new card for it

    addAccount(accountName, startingBalance) {
        const key = this.nextKey();
        let account = new Account(key, accountName, startingBalance);
        // let card = account.buildCard();
        this.accArr.push(account);
        return this.accArr;
    }

    // Get new Account
    getNewAcc() {
        return new Account([]);
    }

    // Getting account data by key

    getAccount(key) {
        for (let i = 0; i < this.accArr.length; i++) {
            if (key == this.accArr[i].key) {
                let result = this.accArr[i];
                return result;
            }
        }

    }

    // Depositing to specific account in the array knowing it's key number

    deposit(key, amount) {
        let account = this.getAccount(key);
        let balance = account.deposit(amount);
        return balance;

    }

    // --//-- Withdrawal

    withdraw(key, amount) {
        let account = this.getAccount(key);
        let balance = account.withdraw(amount);
        return balance;

    }

    // Getting a total balance of all the accounts

    totalBalance() {
        let total = 0;
        for (let i = 0; i < this.accArr.length; i++) {
            total += Number(this.accArr[i].balance);
        }
        if (total > 0) {
            return `$${total}`;
        } else {
            return 'No accounts added';
        }
    }

    // Getting a largest account balance from the array

    highestBalance() {
        let highBal = 0;
        let highName;
        for (let i = 0; i < this.accArr.length; i++) {
            if (this.accArr[i].balance > highBal) {
                let currentName = this.accArr[i].name;
                highBal = Number(this.accArr[i].balance);
                highName = currentName;
            }
        } if (highBal > 0) {
            return `${highName}: $${highBal}`;
        } else {
            return 'No accounts added';
        }
    }

    // Getting a smallest account balance from the array

    lowestBalance() {
        let lowestBal = Number.POSITIVE_INFINITY;
        let lowName;
        for (let i = this.accArr.length - 1; i >= 0; i--) {
            let low = Number(this.accArr[i].balance);
            let currentName = this.accArr[i].name;
            if (low < lowestBal) {
                lowestBal = low;
                lowName = currentName;
            }
        } if (lowestBal > 0) {
            return `${lowName}: $${lowestBal}`;
        } else {
            return 'No accounts added';
        }

    }

    //Deleting specific account from the array

    deleteAccount(key) {
        for (let i = 0; i < this.accArr.length; i++) {
            if (key === this.accArr[i].key) {
                this.accArr.splice(i, 1);
            }
        }
    }
}


export { Account, Card, AccountControl };