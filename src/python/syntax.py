def hello():
    return "hello"

# number
def isNumber(num):
    x = num
    return(isinstance(x, int))

# # string
def isString(string):
    x= string
    return(isinstance(x, str))

# # boolean
def isTrue(x):
   return 5==x

# array

def updateList(num):
    arr=[1,0,3]
    arr[1]=num
    return arr

# dictionary / objects

def accessDictionary(x):
    thing1 = {"name":"test", "type":"its in the name"}

    return thing1[x]



# sample if / else

def sampleIfElse(num):
    if isinstance(num, int):
        if num %2 == 0:
            return True, "its even"
        else:
            return False, 'its odd'
    else: 
        return "not a number"

# functions
# parameters
# returns

# arrays
# add to the front
# add to the end
# update values

# loops
# for
# for/in
# while
# do while
# forEach (with array and function) ??not in python??

