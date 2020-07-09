import os
# file = open("text.txt", "r")

# print(file.readline())

# count = 0


# def line_count():
#     for line in file:
#         count += 1


# print('Total Number of lines is:' + str(count))

# line_count()


# file.close


# file = open("syntax.js", "r")

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
