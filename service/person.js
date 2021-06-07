const personDAO = require('../dao/person')

class PersonService {

    createPerson(personDto){
        const {login, password, registration_date, last_visit_date, ip, flag} = personDto;
        return personDAO.createPerson(login, password, registration_date, last_visit_date, ip, flag)
    }
}

module.exports = new PersonService()