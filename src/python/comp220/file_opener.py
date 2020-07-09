import os
# file = open("text.txt", "r")

# print(file.readline())

# count = 0


# def line_count():
#     for line in file:
#         count += 1


# print('Total Number of lines is:' + str(count))

# file.close

# print(file.readline())


def js_line_counter():
    count = 0
    for line in open("syntax.js", "r"):
        count += 1
    return(f"the line count from that file is {count}")


def js_else_counter():
    count = 0
    wordSearch = 'else'

    for line in open("syntax.js", "r"):
        if wordSearch in line:
            count += 1

    return(f"else has been used {count} times")


def character_counter():
    numberOfCharacters = 0
    file = open("syntax.js", "r")
    data = file.read()
    numberOfCharacters = len(data)

    return(f"There are {numberOfCharacters} characters in this file")

def file_checker_outer():
    path = '/Code/cohort4/01-getting-started/src/scripts'
    directorySize= os.path.getsize(path)
    folder = os.listdir(path)
    amountOfFiles = 0
    fileList = []

    for jsFile in folder:
        sizeOfFile = os.path.getsize(path + '/' + jsFile)
        amountOfFiles +=1
        fileList.append(f'Name: {jsFile}, Size: {sizeOfFile} bytes')

    return  (f'The directory is {directorySize} bytes, with {amountOfFiles} files') , fileList


