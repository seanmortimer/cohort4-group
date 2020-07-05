import syntax


def test_helloworld():
    assert(syntax.hello() == 'hello')


def test_email():
    assert(syntax.email('Larry', 'Shumlich') == 'larry.shumlich@gmail.com')


def test_multiply():
    assert(syntax.multiply(5, 5) == 25)


def test_person_info():
    assert(syntax.person_info('Uranka', 23) == 'Name: Uranka Age: 23')


def test_boolean():
    assert(syntax.boolean() == True)


def test_undefined():
    assert(syntax.undefined(1) == None)


def test_arrayInsert():
    assert(syntax.arrayInsert([1, 2, 3], 4) == [4, 1, 2, 3])


def test_arrayAppend():
    assert(syntax.arrayAppend([1, 2, 3], 4) == [1, 2, 3, 4])


def test_arrayRemove():
    assert(syntax.arrayRemove([1, 2, 3], 1) == [2, 3])


def test_arrayPop():
    assert(syntax.arrayPop([1, 2, 3, 4, 5], 0) == [2, 3, 4, 5])


def test_arrayReverse():
    assert(syntax.arrayReverse([1, 2, 3]) == [3, 2, 1])


def test_arrayUpdate():
    assert(syntax.arrayUpdate([1, 2, 3], 0, 4) == [4, 2, 3])


def test_dictList():
    assert(syntax.dictList('Uranka', 23) == {'name': 'Uranka', 'age': 23})


def test_dictList2():
    assert(syntax.dictList2(
        {'name': 'Uranka', 'age': 12}, 'name') == 'Uranka')


def test_ifElseLoop():
    assert(syntax.ifElseLoop(4) == False)


def test_forInLoop():
    assert(syntax.forInLoop([20, 80, 85]) == 185)


def test_whileLoop():
    assert(syntax.whileLoop(2) == 'You are under')
    assert(syntax.whileLoop(12) == 'You are over')

# only works with -pytest -s
# def test_whileLoop2():
#     assert(syntax.whileLoop2() == 'You got it! 2 guesses')


def test_whileLoop3():
    assert(syntax.whileLoop3(1) == 3)
