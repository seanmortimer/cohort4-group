import os


def countLines():
    line = open('syntax.js').readlines()
    count = len(line)
    return(f'Total number of lines is: {count}')


# countLines()


def countElse():
    count = 0
    searchFor = 'else'
    with open('syntax.js') as file:
        for line in file:
            if searchFor in line:
                count += 1
    return(f'There are {count} else statements')


# countElse()

def countChars():
    file = open('syntax.js', 'r')
    data = file.read()
    charCount = len(data)
    return(f'There are {charCount} characters in syntax.js')


# countChars()


def listOfFiles():
    path = '/code/cohort4/01-getting-started/src/scripts'
    entries = os.listdir(path)
    dirSize = os.path.getsize(path)
    fileCount = 0
    listofStuff = []

    for entry in entries:
        fileSize = os.path.getsize(path + '/' + entry)
        fileCount += 1
        print(f'File name: {entry} ~ Size: {fileSize} bytes')
        listofStuff.append(f'File name: {entry} ~ Size: {fileSize} bytes')

    print(f'Directory size: {dirSize} # of files: {fileCount}')
    listofStuff.append(f'Directory size: {dirSize} # of files: {fileCount}')
    return listofStuff


# listOfFiles()
