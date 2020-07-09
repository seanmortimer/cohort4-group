const functions = {
    // define attributes / variables
    // -number
    //      isNumber
    //      input Number
    //      output number
        isNum: (num) => {
        return num +2 
        },
    // -string
            // isString
            // input string
            // output string
        isString: (str) =>{
            return str +" time"
        },
    // -boolean
        isTrue: (age) =>{
        if (age>=18) return true;
        return false;
        },
    // -array
        updateArray: (num) =>{
            let arr = [69, 0, 69]
            arr [1] = num
            return arr;
        },
    // -dictionary / objects
        updateObject: (type) =>{
            var vehicle = {
                brand : "Dodge",
                model : type,
                fuel  : "diesel"
              };
              return vehicle.model;
        },
    // -undefined
        isUndefined: () =>{
            var x;
    // if (x === undefined) {return x;
      // these statements execute
    // }
    // else {
      // these statements do not execute
    // }  Everything is commented out because KISS 
        },
    
    
    
    // sample if / else
        // name isEven
        // input number
        // output number
    
        isEven: (num) =>{
            if (num %2 === 0) {return true};
             {return false};
        },
        
    
    // functions
    // -parameters
    isPar: (num) => {
        var x = num;
        return num;
    },
    // -returns
    
    // arrays
    // -add to the front 
      frontArray: (num) =>{
         var arr1 = [2, 3, 4, 5];
          arr1.unshift(num);
          return arr1;
    },
    // -add to the end
        backArray: (num) =>{
            var arr = [1, 2, 3, 4];
            arr.push(num);
            return arr;
        },
    // -update values
    updArr: (num) =>{
        var fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits[num] = "Kiwi";
        return fruits;
    },
    // loops 
    // -for
    isLoop: (num) =>{
      
       for ( let i=0; i<5; i++) {
       num = num +i;
        }
    return num;
    },
    
    // -for/in
    inLoop: (y) =>{
        var txt = "";
        var x;
        for (x in y) {
          txt += y[x];
        }
        return txt;
    },
    // -while
    isWhile: (num) => {
        let i = 0;
        while (i < 5) {
            num = num +i;
            i++;
        }
        return num;
    },
    
    // -do while
    
    doWhile: (num) => {
        let i = 0;
        do {num = num +i;
        i++;
        }
        while (i < 5);
        return num;
    },
    
    lookupObj: (object, property) =>{
        var vehicle = {
            brand : "Dodge",
            model : 'Ram 2500',
            fuel  : "diesel"
          };
                return (vehicle.fuel);
    },
    
    
    };
    
    export default functions;