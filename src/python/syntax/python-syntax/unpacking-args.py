# Collect multiple arguments into a single variable

def multiply(*args):
    # print(args)
    total = 1
    for arg in args:
        total = total * arg

    return total


print(multiply(1, 3, 5))  # 15


def apply(*args, operator):
    if operator == '*':
        return multiply(*args)
    elif operator == '+':
        return sum(args)
    else:
        return 'No valid operator to apply'


print(apply(1, 3, 6, 7, operator='+'))  # 17
print(apply(1, 3, 6, 7, operator='*'))  # 126


def add(x, y):
    return x + y


nums = [3, 5]
print(add(*nums))  # 8

# Dictionaries
nums2 = {'x': 15, 'y': 25}
print(add(**nums2))  # 40
