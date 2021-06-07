const db = require('../db/db');

class PersonDAO {
    async createPerson(login, password, registration_date, last_visit_date, ip, flag){
        const [id] = await db('person').insert({
            login, 
            password, 
            registration_date, 
            last_visit_date, 
            ip, 
            flag
        })
        .returning('id')
    return id;
    }
}
module.exports = new PersonDAO();