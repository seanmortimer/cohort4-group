def hello():
    return "hello"

# number


def isNumber(num):
    x = num
    return(isinstance(x, int))

# # string


def isString(string):
    x = string
    return(isinstance(x, str))

# # boolean


def isTrue(x):
    return 5 == x

# array


def updateList(num):
    arr = [1, 0, 3]
    arr[1] = num
    return arr

# dictionary / objects


def accessDictionary(x):
    thing1 = {"name": "test", "type": "its in the name"}

    return thing1[x]


# sample if / else

def sampleIfElse(num):
    if isinstance(num, int):
        if num % 2 == 0:
            return "its even"
        else:
            return 'its odd'
    else:
        return "not a number"

# arrays
# add to the front


def arrayFront(arr, num):
    arr.insert(0, num)
    return arr

# add to the end


def arrayBack(arr, num):
    arr.append(num)
    return arr
# update values


def arrayRemove(arr, location):
    arr.pop(location)
    return arr


def updateArray(arr, x, num):
    arr[x] = num
    return arr

# loops
# for


def forLoop():
    friends = ["steve", "uranka"]
    for friend in friends:
        return friend

# while


def whileLoop(num):
    # number = 7
    # print(("would you like to play? (Y/n) "))
    # user_input = input
    # if user_input == "n":
    #     return "see ya later"
    # else:
    #     while user_input != "n":
    #         print("guess our number")
    #         user_number = int(num)
    #         if user_number == number:
    #             print("you guessed right")
    #         else:
    #             return print("wrong")
    print("enter a number bigger than 5")
    user_number=num
    while user_number > 5:
        print('thats a nice number, enter another')
        user_number=num
        if user_number<5:
            return "see ya later"
    



# do while
# forEach (with array and function) ??not in python??
