import {validateEmail, validatePassword} from './helpers'

test('should validate email', () => {
    let email = "tom@gmail.com";
    expect(validateEmail(email)).toBe(true);
    let email2 = "tom@com";
    expect(validateEmail(email2)).toBe(false);
    let email3 = "tomgmail.com";
    expect(validateEmail(email3)).toBe(false);
    let email4 = "tomg@mail";
    expect(validateEmail(email4)).toBe(false);
    let email5 = "tomg@mail.ca";
    expect(validateEmail(email5)).toBe(true);
    let email6 = "tomg@mailca";
    expect(validateEmail(email6)).toBe(false);
    
})

test('password test', ()=>{
    let password = "abc123-Ab";
    expect(validatePassword(password, )).toBe(true)
    let password2 = "abc123";
    expect(validatePassword(password2, 8)).toBe(false)
})

