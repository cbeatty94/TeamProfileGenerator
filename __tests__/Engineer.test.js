const Engineer = require('../lib/engineer')

describe('Engineer', () => {
    it('Can get github username when getGitHubUser is called', () => {
        const githubUser = 'bob'
        const person = new Engineer('bob', '1232', 'b@gmail.com', githubUser)
        expect(person.getGitHubUser()).toBe(githubUser)
    })
})