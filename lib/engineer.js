const Employee = require("./employee");

class Engineer extends Employee {
    constructor (name, id, email, githubUser) {
        super(name, id, email);
        this.githubUser = githubUser
    }

    getGitHubUser () {
        return this.githubUser;
    }

    getRole () {
        return 'Engineer';
    }
}

module.exports = Engineer