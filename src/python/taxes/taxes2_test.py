import taxes2


def test_taxFunctions():
    assert(taxes2.taxFunctions(20000) == 17000.00)
    # assert(taxes2.taxFunctions(48535) == 41254.75)
    # assert(taxes2.taxFunctions(50000) == 42419.43)
    # assert(taxes2.taxFunctions(60000) == 50369.43)
    # assert(taxes2.taxFunctions(100000) == 82008.22)
    # assert(taxes2.taxFunctions(170000) == 133222.41)
    # assert(taxes2.taxFunctions(300000) == 222097.13)
