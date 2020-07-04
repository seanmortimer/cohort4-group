def taxFunctions(salary):
    taxBrackets = [
        {'bracket': 45838, 'multiplier': 0.15},
        {'bracket': 97069, 'multiplier': .205, 'minus': 48535, 'add': 7280.25},
        {'bracket': 150473, 'multiplier': .26, 'minus': 97069, 'add': 17229.72},
        {'bracket': 214368, 'multiplier': .29, 'minus': 150473, 'add': 31114.76},
        {'multiplier': .33, 'minus': 214368, 'add': 49644.31}
    ]

    bracket1 = (taxBrackets[0]['bracket'])  # 45868
    bracket2 = (taxBrackets[1]['bracket'])  # 97069
    bracket3 = (taxBrackets[2]['bracket'])  # 150473
    bracket4 = (taxBrackets[3]['bracket'])  # 214368

    # salary = int(input('Enter your salary: '))

    if salary <= bracket1 > 0:
        muliply = (taxBrackets[0]['multiplier'])
        toDeduct = salary * muliply
        netSalary = salary - toDeduct
        print(round(netSalary, 2))
        return round(netSalary, 2)

    if salary > bracket1 and salary <= bracket2:
        multiply = (taxBrackets[1]['multiplier'])
        toDeduct = (
            (salary - taxBrackets[1]['minus'])*multiply)+taxBrackets[1]['add']
        netSalary = salary - toDeduct
        print(round(netSalary, 2))
        return round(netSalary, 2)

    if salary > bracket2 and salary <= bracket3:
        multiply = (taxBrackets[2]['multiplier'])
        toDeduct = (
            (salary - taxBrackets[2]['minus'])*multiply)+taxBrackets[2]['add']
        netSalary = salary - toDeduct
        print(round(netSalary, 2))
        return round(netSalary, 2)

    if salary > bracket3 and salary <= bracket4:
        multiply = (taxBrackets[3]['multiplier'])
        toDeduct = (
            (salary - taxBrackets[3]['minus'])*multiply)+taxBrackets[3]['add']
        print(toDeduct)
        netSalary = salary - toDeduct
        print(round(netSalary, 2))
        return round(netSalary, 2)

    if salary > bracket4:
        multiply = (taxBrackets[4]['multiplier'])
        toDeduct = (
            (salary - taxBrackets[4]['minus'])*multiply)+taxBrackets[4]['add']
        print(toDeduct)
        netSalary = salary - toDeduct
        print(round(netSalary, 2))
        return round(netSalary, 2)
