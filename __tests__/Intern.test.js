const Intern = require('../lib/intern')

describe('Intern', () => {
    it('Can get school when getSchool function is called', () => {
        const school = 'Bates'
        const person = new Intern('bob', '1232', 'b@gmail.com', school)
        expect(person.getSchool()).toBe(school)
    })
})