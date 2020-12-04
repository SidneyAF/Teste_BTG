const chai = require('chai');
const http = require('chai-http');
const subSet = require('chai-subset');
const index = "http://localhost:8080/api";

chai.use(http);
chai.use(subSet);

const userSchema = {
    login: login => login,
    token: token => token,
}

describe('Teste de funcoes', () =>{

    it('Authenticate', async () =>{
        const res = await chai.request(index)
            .post('/auth')
            .send({});
        chai.expect(res.error).to.be.false;
        chai.expect(res).to.have.status(201);
        chai.expect(res)
        
    })

    it('Create doc', async() =>{
        const user = await chai.request(index)
            .post('/auth')
            .send({});
        chai.expect(user.error).to.be.false;
        chai.expect(user).to.have.status(201);
        chai.expect(user.body).to.containSubset(userSchema);
        chai.expect(user);

        const res = await chai.request(index)
            .post('/doc/create')
            .set({ Authorization: `Bearer ${user.body.token}` })
            .send({
                name:"Jorge da Silva Prado",
                birthdate: "15/07/1980",
                cpf: "478.810.020-77",
                rg: '28.431.266-6'
            })
        chai.expect(res.error).to.be.false;
        chai.expect(res).to.have.status(201);
        chai.expect(res.body).to.containSubset({ message: 'The file has been saved' });
        chai.expect(res)
    })
})