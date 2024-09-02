const request = require('supertest')
const app = require('../index')

describe('GET /clientes', () => {
    it('pegar a lista de clientes com sucesso', async () => {
        const res = await request(app).get('/clientes').send();
        expect(res.status).toBe(200);
    });
    it('verificar se a lista de clientes esta cheia', async () => {
        const res = await request(app).get('/clientes').send();
        expect(res.body).toBeDefined();
    });
    it('pegar um cliente pelo id /clientes/:id', async () => {
        const res = await request(app).get('/clientes/1').send();
        expect(res.status).toBe(200);
    })
});

describe('Criar /clientes', () => {
    it('criar cliente com sucesso', async () => {
        const res = await request(app).post('/clientes').send(
            {
                nome: 'teste',
                email: 'teste@gmail.com',
                senha: 'teste123'
            })
        expect(res.status).toBe(204);
    });
    
});

describe('deletar /clientes/:id', () => {
    it('deletar um cliente com sucesso', async () => {
        const res = await request(app).delete('/clientes/048d05f4-2b59-4ac6-bd8e-82dde4e6173f').send()
            expect(res.status).toBe(204)
    })
} )

describe('Atualizar /clientes/:id', () => {
    it('Atualizar cliente com sucesso', async () => {
        const res = await request(app).post('/clientes/048d05f4-2b59-4ac6-bd8e-82dde4e6173f').send(
            {
                nome: 'teste atualização'
            })
        expect(res.status).toBe(200);
    });
});



