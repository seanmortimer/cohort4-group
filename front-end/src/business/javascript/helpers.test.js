import { validateEmail, validatePass } from './helpers'

test('Test e-mail validation', () => {
    let email = 'hey@gmail.com'
    expect(validateEmail(email)).toBe(true)
    let email2 = 'hey@gmail'
    expect(validateEmail(email2)).toBe(false)
    let email3 = 'heygmail.com'
    expect(validateEmail(email3)).toBe(false)
    let email4 = 'hey@gmail.ca'
    expect(validateEmail(email4)).toBe(true)
})

test('Test password validation', () => {
    let pass = 'helloooo'
    expect(validatePass(pass)).toBe(pass)
    let pass2 = 'hel'
    expect(validatePass(pass2)).toBe('Password must be atleast 8 chars long')
})