import math

# brackets format: (rate, upper_limit)
tax_brackets = [
    (15, 48535),
    (20.5, 97069),
    (26, 150473),
    (29, 214368),
    (33, float('inf')),
]


def tax_calc(gross):
    owed_int = 0
    lower_limit = 0
    (last_rate, last_max) = tax_brackets[0]

    for (rate, max) in tax_brackets:
        rate_int = rate * 1000
        if gross > max:
            owed_int = owed_int + rate_int * (max * 100 - lower_limit * 100) / 100
            lower_limit = max
        else:
            x = (gross * 100 - lower_limit * 100)
            owed_int = (owed_int + (x * (rate_int) / 100 )) 
            owed = round(owed_int / 1000) / 100
            return owed



#  15% on the first $48,535 of taxable income
# 20.5% on the next $48,534 of taxable income 
#   (on the portion of taxable income over 48,535 up to $97,069), plus
# 26% on the next $53,404 of taxable income 
#   (on the portion of taxable income over $97,069 up to $150,473), plus
# 29% on the next $63,895 of taxable income 
#   (on the portion of taxable income over 150,473 up to $214,368), plus
# 33% of taxable income over $214,368