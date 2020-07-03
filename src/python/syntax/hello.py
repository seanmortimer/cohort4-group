# 1 Input ~ ~ ~ ~ ~ ~
# size_input = input('how big is your house in sq ft: ')
# sq_ft = int(size_input)
# sq_m = sq_ft / 10.8
# print(f'{sq_ft} sq ft is {sq_m:.2f} sq metres')

# 2 ~ ~ ~ ~ ~ ~
# user_age = int(input('enter your age: '))
# months = user_age * 12
# print(f'your age {user_age} in months is {months}')

# 3 Lists ~ ~ ~ ~ ~ ~
# a = ['Bob', 'Rolf', 'Anne']  # Array/List
# b = ('Bob', 'Rolf', 'Anne')  # Tuple (Can't add or remove elements)
# c = {'Bob', 'Rolf', 'Anne'}  # Set (Can add, can't have duplicates)
# # use Add, no Remove since there is no order)

# a.append('Smith')
# a[2] = 'Annie'
# a.remove('Rolf')
# print(a)
# print(b)
# c.add('Bob')
# c.add('Bob')  # Does not add duplicate, ignores
# print(c)

# print(a[0])  # Prints Bob at index 0
# print(b[0])

# 4 Advanced set operation ~ ~ ~ ~ ~ ~

# friends = {'Bob', 'Rolf', 'Anne'}
# abroad = {'Bob', 'Anne'}

# local_friends = friends.difference(abroad)  # Removes stuff from set
# print(local_friends)

# local = {'Rolf'}
# abroad = {'Bob', 'Anne'}

# local_friends = friends.union(abroad)  # Total of both sets
# print(local_friends)

# art = {'Bob', 'Jen', 'Rolf', 'Charlie'}
# science = {'Bob', 'Adam', 'Jen'}

# both = art.intersection(science)  # Shows what is in both sets
# print(both)

# 5 Boolean ~ ~ ~ ~ ~ ~
# friends = ['rolf', 'bob']
# abroad = friends

# print(friends == abroad) #true
# print(friends is abroad) #true

# 6 If statement ~ ~ ~ ~ ~ ~
# day_of_week = input('What day of the week is it today? ').lower()

# if day_of_week == 'monday':
#     print('Have a great start to your week')
# elif day_of_week == 't6uesday':
#     print('Taco Tuesday!')
# else:
#     print('Full speed ahead!')
# print('This always runs')

# 7 in keyword ~ ~ ~ ~ ~ ~
# Example 1
# movies_watched = {'The Matrix', 'Green Book', 'Her'}
# user_movie = input('Enter something you watched: ')

# if user_movie in movies_watched:
#     print(f'I have watched {user_movie} too!')
# else:
#     print('I have not watched that yet.')

# 8 Loops ~ ~ ~ ~ ~ ~
# While Loop

# number = 7

# while True:
#     user_input = input('Would you like to play? (y/n) ')

#     if user_input == 'n':
#         break

#     user_number = int(input('Guess our number: '))
#     if user_number == number:
#         print('You guessed right!')
#     elif abs(number - user_number) == 1:
#         print('You were off by one')
#     else:
#         print('Wrong')

# For loop

# friends = ['Rolf', 'Jen', 'Bob', 'Anne']

# for friend in friends:
#     print(f'{friend} is my friend.')

# Output:
# Rolf is my friend.
# Jen is my friend.
# Bob is my friend.
# Anne is my friend.

# grades = [35, 67, 98, 100, 100]
# total = 0
# amount = sum(grades)

# for grade in grades:
#     total += grade

# print(total / amount)

# 9 List comprehension - usually one liners ~ ~ ~ ~ ~ ~

# numbers = [1, 3, 5]
# doubled = [x * 2 for x in numbers]

# print(doubled)  # [2, 6, 10]

# # Example 2

# friends = ['Rolf', 'Sam', 'Samantha', 'Saura', 'Jen']
# starts_s = []

# for friend in friends:
#     if friend.startswith('S'):
#         starts_s.append(friend)
# print(starts_s) #['Sam', 'Samantha', 'Saura']

# Example 2 to list comprehension:

# friends = ['Rolf', 'Sam', 'Samantha', 'Saura', 'Jen']
# starts_s = [friend for friend in friends if friend.startswith('S')]
# print(starts_s)  # ['Sam', 'Samantha', 'Saura']

# # Print ids of lists - shows id, place in memory, creating new lists makes a new thing
# # they are not the same

# print('friends: ', id(friends), 'starts_s', id(starts_s))
# # friends:  20571272 starts_s 57627496

# friends = starts_s  # must do this to make the lists same
# print('friends: ', id(friends), 'starts_s', id(starts_s))
# # friends:  44913512 starts_s 44913512

# 10 Dictionaries ~ ~ ~ ~ ~ ~
# Example 1
# friend_ages = {'Rolf': 24, 'Adame': 30, 'Anne': 21}
# friend_ages['Doggy'] = 12 # Adds to list

# print(friend_ages)
# print(friend_ages['Adame'])  # 30

# Example 2
# friends = [
#     {'name': 'Haley', 'age': 23},
#     {'name': 'Doue', 'age': 22},
#     {'name': 'Jane', 'age': 33}
# ]

# print(friends[1]['name']) # Doue

# Example 3
# student_attendance = {'Rolf': 50, 'Bob': 90, 'Sarah': 98}
# for student in student_attendance:
#     print(f'{student}: {student_attendance[student]}')

# Output:
# Rolf: 50
# Bob: 90
# Sarah: 98

# Same thing as example 3, different way
# student_attendance = {'Rolf': 50, 'Bob': 90, 'Sarah': 98}
# for student, attendence in student_attendance.items():
#     print(f'{student}: {attendence}')

# Example 4 - get keys
# student_attendance = {'Rolf': 50, 'Bob': 90, 'Sarah': 98}
# if 'Bob' in student_attendance:
#     print(f'Bob: {student_attendance["Bob"]}')
# else:
#     print("Bob ain't here")

# Example 5 - get average
# student_attendance = {'Rolf': 50, 'Bob': 90, 'Sarah': 98}
# att_values = student_attendance.values()
# print(sum(att_values)/len(att_values))

# 11 - Destructuring variables ~ ~ ~ ~ ~ ~
# people = [('Bob', 23, 'Mechanic'), ('James', 12,
#                                     'Student'), ('Herold', 45, 'Farmer')]

# for name, age, profession in people:
#     print(f'name: {name}, age: {age}, profession: {profession}')

# # name: Bob, age: 23, profession: Mechanic
# # name: James, age: 12, profession: Student
# # name: Herold, age: 45, profession: Farmer

# Example 2 - extract info from 1 tuple, leave some info out
# person = ('Bob', 23, 'Mechanic')
# name, _, profession = person
# print(name, profession) #Bob Mechanic

# Example 3 - seperate into 2 lists
# head, *tail = [1, 2, 3, 4, 5]
# print(head)
# print(tail)

# 1
# [2, 3, 4, 5]

# *head, tail = [1, 2, 3, 4, 5]
# print(head)
# print(tail)

# [1, 2, 3, 4]
# 5

# *head, tail = [1, 2, 3, 4, 5]
# print(*head)
# print(tail)

# 1 2 3 4
# 5

# 12 - Functions ~ ~ ~ ~ ~ ~
# Example 1
# def user_age_sec():
#     user_age = int(input('Enter your age: '))
#     age_secs = user_age * 365 * 24 * 60 * 60
#     print(f'Your age in seconds is {age_secs}')
# user_age_sec()

# Example 2 - Function parameters
# def add(x, y):
#     result = x + y
#     print(result)


# add(5, 3)

# Example 3 - keywords
# def divide(dividend, divisor):
#     if divisor != 0:
#         print(dividend / divisor)
#     else:
#         print('NO!')


# divide(dividend=15, divisor=0)

# 13 Returning values ~ ~ ~ ~ ~ ~
# def add(x, y):
#     return x + y


# result = add(5, 8)
# print(result)

# Example 2
# def divide(dividend, divisor):
#     if divisor != 0:
#         return dividend / divisor
#     else:
#         return 'NO!'


# result = divide(15, 0)
# print(result)

# 14 Dictionary comprehension ~ ~ ~ ~ ~ ~
# users = [
#     (0, 'Bob', 'password'),
#     (1, 'Rolf', '123'),
#     (2, 'Jose', 'longpass123'),
#     (3, 'username', '1234')
# ]

# username_mapping = {user[1]: user for user in users}
# # print(username_mapping['Bob'])

# user_input = input('Enter username: ')
# pass_input = input('Enter password: ')

# _, username, password = username_mapping[user_input]

# if pass_input == password:
#     print('Correct')
# else:
#     print('Incorrect')
