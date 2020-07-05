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
    # (last_rate, last_max) = tax_brackets[0]

    for (rate, max) in tax_brackets:
        if gross > max:
            owed_int = owed_int + rate * (max * 100 - lower_limit * 100) / 100
            lower_limit = max
        else:
            x = (gross * 100 - lower_limit * 100)
            owed_int = (owed_int + (x * (rate) / 100))
            owed = owed_int / 100
            # netSalary = gross - owed
            # return round(netSalary, 2)
            return round(owed, 2)
