const Manager = require('../lib/manager')

describe('Manager', () => {
    it('Can get office number when officeNumber is called', () => {
        const officeNumber = '12345'
        const person = new Manager('Bob', '1232', 'b@gmail.com', officeNumber)
        expect(person.getOfficeNumber()).toBe(officeNumber)
    })
})