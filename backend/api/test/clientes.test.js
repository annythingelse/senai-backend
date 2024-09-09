const request = require("supertest");
const app = require("../index");

describe("GET /clientes", () => {
  it("Deve pegar a lista de clientes com sucesso", async () => {
    const res = (await request(app).get("/clientes"));
    expect(res.status).toBe(200);
  });

  it("Deve verificar se a lista de clientes está definida", async () => {
    const res = (await request(app).get("/clientes"));
    expect(res.body).toBeDefined();
  });
});

describe("POST /clientes", () => {
  it("Deve criar um cliente com sucesso", async () => {
    const res = await request(app).post("/clientes").send({
      nome: "teste",
      email: "teste@gmail.com",
      senha: "teste123",
    });
    expect(res.status).toBe(204); 
  });
});

describe("PUT /clientes/:id", () => {
  it("Deve atualizar um dado do cliente", async () => {
    const res = await request(app).post("/clientes/1").send({
      nome: 'teste update'
    });
    expect(res.status).toBe(200); 
  });
});

describe("DELETE /clientes/:id", () => {
  it("deletar um cliente", async () => {
    const res = await request(app).delete("/clientes/2");
    expect(res.status).toBe(204);
  });
});
