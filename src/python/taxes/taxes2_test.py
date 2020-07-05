import taxes2


def test_taxFunctions():
    # assert(taxes2.tax_calc(20000) == 17000.00)
    # assert(taxes2.tax_calc(48535) == 41254.75)
    # assert(taxes2.tax_calc(50000) == 42419.43)
    # assert(taxes2.tax_calc(60000) == 50369.43)
    # assert(taxes2.tax_calc(100000) == 82008.22)
    # assert(taxes2.tax_calc(170000) == 133222.41)
    # assert(taxes2.tax_calc(300000) == 222097.13)

    assert(taxes2.tax_calc(12000) == 1800)
    assert(taxes2.tax_calc(48535) == 7280.25)
    assert(taxes2.tax_calc(50000) == 7580.57)
    assert(taxes2.tax_calc(60000) == 9630.58)
    assert(taxes2.tax_calc(100000) == 17991.78)
    assert(taxes2.tax_calc(170000) == 36777.59)
    assert(taxes2.tax_calc(300000) == 77902.87)
