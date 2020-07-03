import syntax_2 as syntax

def test_hello():
    assert(syntax.hello() == "hello")

def test_isNumber():
    assert(syntax.isNumber(100)==True)

def test_isString():
    assert(syntax.isString("test")==True)
    assert(syntax.isString(4)==False)

def test_isTrue():
    assert(syntax.isTrue(2)==False)
    assert(syntax.isTrue(5)==True)

def test_updateList():
    assert(syntax.updateList(2)==[1,2,3])

def test_accessDictionary():
    assert(syntax.accessDictionary("type")=='its in the name')
    assert(syntax.accessDictionary("name")=='test')

def test_sampleIfElse():
    assert(syntax.sampleIfElse(2)== 'its even')
    assert(syntax.sampleIfElse(1)== 'its odd')
    assert(syntax.sampleIfElse('S')== "not a number")

def test_arrayFront():
    array=[1,2,3]
    assert(syntax.arrayFront(array,4)==[4,1,2,3])
    assert(syntax.arrayFront(array,5)==[5,4,1,2,3])

def test_arrayBack():
    array=[1,2,3]
    assert(syntax.arrayBack(array,4)==[1,2,3,4])
    assert(syntax.arrayBack(array,5)==[1,2,3,4,5])

def test_arrayRemove():
    array=[1,2,3]
    assert(syntax.arrayRemove(array,0)==[2,3])
    assert(syntax.arrayRemove(array,1)==[2])

def test_updateArray():
    array=[1,2,3]
    assert(syntax.updateArray(array,0,10)==[10,2,3])
    assert(syntax.updateArray(array,2,58)==[10,2,58])

def test_forLoop():
    assert syntax.forLoop()=="steve","uranka"

def test_whileLoop():
    assert syntax.whileLoop(0)=='I skipped the loop and counted to 0!'
    assert syntax.whileLoop(1)=='I counted to 1!'
    assert syntax.whileLoop(2)=='I counted to 2!'
    assert syntax.whileLoop(5)=='I counted to 5!'
    assert syntax.whileLoop(1000)=='I counted to 1000!'

