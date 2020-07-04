def taxFunctions(salary):
    taxBrackets = [
        {'bracket': 45838, 'multiplier': 0.15},
        {'bracket': 97069, 'multiplier': .205, 'minus': 48535, 'add': 7280.25},
        {'bracket': 150473, 'multiplier': .26, 'minus': 97069, 'add': 17229.72},
        {'bracket': 214368, 'multiplier': .29, 'minus': 150473, 'add': 31114.76},
        # {'multiplier': .33, 'minus': 214368, 'add': 49644.31}
    ]

    # totalTax = 0

    # bracket1 = (taxBrackets[0]['bracket'])  # 45868
    # bracket2 = (taxBrackets[1]['bracket'])  # 97069
    # bracket3 = (taxBrackets[2]['bracket'])  # 150473
    # bracket4 = (taxBrackets[3]['bracket'])  # 214368

    for bracket in taxBrackets:
        if salary <= bracket['bracket']:
            print(bracket['bracket'])


taxFunctions(20000)
