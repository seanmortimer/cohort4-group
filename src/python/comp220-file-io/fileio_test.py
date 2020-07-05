import fileio


def test_readLines():
    assert(fileio.countLines() == 102)


def test_countElse():
    assert(fileio.countElse() == 'There are 1 else statements')


def test_charCount():
    assert(fileio.countChars() == 'There are 2626 characters in syntax.js')
