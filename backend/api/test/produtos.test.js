const request = require('supertest');
const app = require('../index'); 

describe("GET /produtos", () => {
  it("Deve pegar a lista de produtos com sucesso", async () => {
    const res = await request(app).get("/produtos");
    expect(res.status).toBe(200);
  });

  it("Deve verificar se a lista de produtos está definida", async () => {
    const res = await request(app).get("/produtos");
    expect(res.body).toBeDefined();
  });
});

describe("POST /produtos", () => {
  it("Deve criar um produto com sucesso", async () => {
    const res = await request(app).post("/produtos").send({
      nome: "teste ",
      descricao: "teste descricao",
      preco: "180",
    });
    expect(res.status).toBe(204); 
  });
});

describe("PUT /produtos/:id", () => {
  it("Deve atualizar um dado do produto", async () => {
    const res = await request(app).post("/produtos/3").send({
      nome: 'gab update'
    });
    expect(res.status).toBe(200); 
  });
});

describe("DELETE /produtos/:id", () => {
  it("Deve deletar um produto", async () => {
    const res = await request(app).delete("/produtos/e8801215-9b11-4a43-b979-344afccbfcc9");
    expect(res.status).toBe(204);
  }, 20000); 
});



