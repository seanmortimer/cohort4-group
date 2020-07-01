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
    assert(persist.sampleIfElse(2)==True, 'its even')
    # assert(persist.sampleIfElse(3)==False, 'its even')
