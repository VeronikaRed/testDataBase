const personService = require('./service/person')

let users = {
    login: 'Nika', 
    password: '1111', 
    registration_date: new Date(), 
    last_visit_date: new Date(), 
    ip: '10.121.153.147', 
    flag: 'true'
}

personService.createPerson(users)