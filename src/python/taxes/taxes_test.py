import taxes


def test_taxFunctions():
    assert(taxes.taxFunctions(20000) == 17000.00)
    assert(taxes.taxFunctions(48535) == 41254.75)
    assert(taxes.taxFunctions(50000) == 42419.43)
    assert(taxes.taxFunctions(60000) == 50369.43)
    assert(taxes.taxFunctions(100000) == 82008.22)
    assert(taxes.taxFunctions(170000) == 133222.41)
    assert(taxes.taxFunctions(300000) == 222097.13)
