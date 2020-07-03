# num, string, boolean, undefined
# array - add to front, back, update
# dictionary, objects - declare, lookup key
# functions, if / else
# loops - for, for/in, while, do while, forEach

def hello():
    return ('hello')


# variables and numbers

def multiply(x, y):
    return x * y


# string

def person_info(name, age):
    name = name
    age = int(age)
    return (f'Name: {name} Age: {age}')


# boolean, if / else

def boolean():
    friends = ['rolf', 'bob']
    abroad = friends
    return (friends == abroad)


# undefined / None

def undefined(x):
    x = None
    return x


# list / arrays
def arrayInsert(arr, num):
    arr.insert(0, num)
    return arr


def arrayAppend(arr, num):
    arr.append(num)
    return arr


def arrayRemove(arr, num):
    arr.remove(num)
    return arr


def arrayPop(arr, num):
    arr.pop(num)
    return arr


def arrayReverse(arr):
    arr.reverse()
    return arr


def arrayUpdate(arr, x, newThing):
    arr[x] = newThing
    return arr


# dictionary

def dicList(name, age):
    dictionaryList = {'name': name, 'age': age}
    return dictionaryList


# if /else loop

def ifElseLoop(num):
    number = 5
    if num == number:
        return True
    else:
        return False


# for in loop

def forInLoop(grades):
    total = 0
    amount = sum(grades)
    for grade in grades:
        total += grade
    return amount


# while loop

def whileLoop(input):
    number = 10
    while input < number:
        return 'You are under'
    while input > number:
        return 'You are over'
