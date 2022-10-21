from random import randint

print('')
print('')
print('### GAME START ###')
print('')
print('')

random = randint(1, 10)
kick = 0
odds = 3

while odds != random:
    print('You have {} attempts'.format(odds))
    guess=(input('Choose a number between 1 and 10: '))
    if kick.isnumeric():
        kick = int(kick)
        odds = odds - 1
        if kick == random:
            print('')
            print('Congratulations, you got it right, now go to sleep!')
            print('')
            break
        else:
            if kick > random:
                print('')
                print('You made a mistake, try again!')
                print('You have {} chances'.format(odds))
                print('Hint: the number is smaller')
                print('')
            else:
                print('')
                print('You made a mistake, try again!')
                print('You have {} chances'.format(odds))
                print('Hint, the number is bigger')
                print('')
        if odds == 0:
            print('')
            print('Your chances are over, you lost')
            print('The number was {}'.format(random))
            break
print('### END OF GAME ###')