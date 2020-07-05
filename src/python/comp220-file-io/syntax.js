const syntax = {
    //Number: Takes a number input and multiplies it by itself 
    getMultiply: (num) => {
        return num * num;
    },

    //String: Takes a string and returns it in all caps
    getBigCase: (str) => {
        return str.toUpperCase();
    },

    //Boolean & If: Takes a string and checks if it matches the word 'dog'
    isDog: (str) => {
        if (str === 'dog') {
            return true;
        }
        else return false;
    },

    //Undefined: Defines input as undefined
    isUndefined: (z) => {
        return z === undefined;
    },

    /*Array, Push, Shift, update list: Remove first item in array, add item to end
    of the array, and add an item to the front of the array*/
    pushandShift: (list, str) => {
        list.push(str);
        list.shift();
        return list;
    },

    //Shift: Add input to the front of the list.
    addtoFront: (list, str) => {
        list.unshift(str);
        return list;
    },

    //Object: Input name of object and returns its property.
    checkObject: (object, input) => {
        if (object[input] != undefined) {
            return object[input];
        }
    },

    //Object key lookup: Return key inside an object
    keylookUp: (object, key) => {
        return object[key];
    },

    //For loop: For input is greater than 1 & less than 10, double the input and return it
    doubleNum: (input, newNum) => {
        for (input; input < 10; input > 1) {
            newNum = input * 2;
            return newNum;
        }
    },

    //Do While: While num is less than 20, add double the input and return it
    divideNum: (input, newNum) => {
        do {
            newNum = input / 2;
            return newNum;
        }
        while (input < 20);
    },

    //For Each: Uppercase all items in array.
    arrayCaps: (arr) => {
        arr.forEach((item, index) => {
            arr[index] = item.toUpperCase();
        });
        return arr;
    },

    //For Each: Add input to the end of each item in array.
    changeArray: (arr, str) => {
        arr.forEach((item, index) => {
            arr[index] = item + (str);
        });
        return arr;
    },

    //For In: For an array containing the number 1, turn it into 1010.
    addProps: (arr, i) => {
        for (i in arr) {
            for (i = 0; i < arr.length; i++)
                if (arr[i] == 1)
                    arr[i] = 1010;
            return arr;
        }
    },

    //For In: Add 5 to the first number in the array
    forIn: (arr, i) => {
        for (i in arr) {
            return arr[i] + 5;
        }
    },
}

export default syntax;