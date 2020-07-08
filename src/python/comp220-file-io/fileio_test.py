import fileio


def test_readLines():
    assert(fileio.countLines() == 'Total number of lines is: 102')


def test_countElse():
    assert(fileio.countElse() == 'There are 1 else statements')


def test_charCount():
    assert(fileio.countChars() == 'There are 2626 characters in syntax.js')


def test_listOfFiles():
    x = fileio.listOfFiles()
    assert(x[0] == 'File name: arrays.js ~ Size: 577 bytes')
    assert(x[1] == 'File name: arrays.test.js ~ Size: 446 bytes')
    assert(x[-1] == 'Directory size: 4096 # of files: 14')
