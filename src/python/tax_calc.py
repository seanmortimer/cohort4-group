taxBracket = [
    (.15, 48535),
    (.205, 97069),
    (.26, 150473),
    (.29, 214368),
    (.33, float('inf')),
    ]
def taxFunctions(grossIncome):
    totalTax = 0
    lowerMax = 0

    for (rate, bracket) in taxBracket:
        if grossIncome > bracket:
            totalTax = totalTax + rate * (bracket-lowerMax)
            lowerMax = bracket
        else:
            totalTax = totalTax + ((grossIncome-lowerMax)*rate)
            return round(totalTax,2)
   