import syntax as persist

def test_helloworld():
    assert(persist.hello() == "hello")

def test_isNumber():
    assert(persist.isNumber(100)==True)

def test_isString():
    assert(persist.isString("test")==True)
    assert(persist.isString(4)==False)

def test_isTrue():
    assert(persist.isTrue(2)==False)
    assert(persist.isTrue(5)==True)

def test_updateList():
    assert(persist.updateList(2)==[1,2,3])

def test_accessDictionary():
    assert(persist.accessDictionary("type")=='its in the name')
    assert(persist.accessDictionary("name")=='test')

def test_sampleIfElse():
    assert(persist.sampleIfElse(2)== 'its even')
    assert(persist.sampleIfElse(1)== 'its odd')
    assert(persist.sampleIfElse('S')== "not a number")

def test_arrayFront():
    array=[1,2,3]
    assert(persist.arrayFront(array,4)==[4,1,2,3])
    assert(persist.arrayFront(array,5)==[5,4,1,2,3])

def test_arrayBack():
    array=[1,2,3]
    assert(persist.arrayBack(array,4)==[1,2,3,4])
    assert(persist.arrayBack(array,5)==[1,2,3,4,5])

def test_arrayRemove():
    array=[1,2,3]
    assert(persist.arrayRemove(array,0)==[2,3])
    assert(persist.arrayRemove(array,1)==[2])

def test_updateArray():
    array=[1,2,3]
    assert(persist.updateArray(array,0,10)==[10,2,3])
    assert(persist.updateArray(array,2,58)==[10,2,58])

def test_forLoop():
    assert persist.forLoop()=="steve","uranka"

def test_whileLoop():
    assert persist.whileLoop(1)==3
    assert persist.whileLoop(2)==4
    # assert persist.whileLoop()=="see ya later"
