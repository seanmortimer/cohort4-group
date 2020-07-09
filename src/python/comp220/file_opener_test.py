import file_opener

def test_js_line_counter():
    assert(file_opener.js_line_counter()=="the line count from that file is 140")

def test_js_else_counter():
    assert(file_opener.js_else_counter()=="else has been used 2 times")

def test_character_counter():
    assert(file_opener.character_counter()=="There are 2879 characters in this file")