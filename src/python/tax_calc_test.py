import tax_calc as tFuncs

def test_taxCalculator():
    assert(tFuncs.taxFunctions(40000) == 6000.00)
    assert(tFuncs.taxFunctions(70000) == 11680.58)
    assert(tFuncs.taxFunctions(100000) == 17991.78)
    assert(tFuncs.taxFunctions(175000) == 38227.59)
    assert(tFuncs.taxFunctions(215000) == 49852.87)
