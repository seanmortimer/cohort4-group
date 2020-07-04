import tax_calculator as tax_calc

def test_tax_calc():
    # assert tax_calc.tax_calc(1) == 0.15
    assert tax_calc.tax_calc(100) == 15
    # assert tax_calc.tax_calc(1000) == 150
    # assert tax_calc.tax_calc(48535) == 7280.25
    assert tax_calc.tax_calc(48535.25) == 7280.30
    

