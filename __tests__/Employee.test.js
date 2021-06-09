const Employee = require('../lib/employee')

describe('Employee', () => {
    it('should be able to create a class constructor', () => {
        const person = new Employee()
        expect(typeof(person)).toBe('object')
    })
    it('Can get name when the getName method is called', () => {
        const name = 'Bob'
        const person = new Employee(name)
        expect(person.getName()).toBe(name)
    })
    it('Can get ID when the getID method is called', () => {
        const ID = '1233'
        const person = new Employee('Bob', ID)
        expect(person.getId()).toBe(ID)
    })
    it('Can get email when the getEmail method is called', () => {
        const email = 'b@gmail.com'
        const person = new Employee('Bob', '12312', email)
        expect(person.getEmail()).toBe(email)
    })
})

