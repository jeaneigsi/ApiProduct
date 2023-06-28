const mongoose = require("mongoose");
const request = require("supertest");
const app = require("./server"); // fichier principal s'appelle "server.js"

// Configuration de la base de données de test
const testDBUrl = "mongodb+srvtoktok@mongo.df6smj9.mongodb.net/Node-Api?retryWrites=true&w=majority"


beforeAll(async () => {
// Connexion à la base de données de test
await mongoose.connect(testDBUrl, { useNewUrlParser: true });
});

afterAll(async () => {
  // Nettoyage et déconnexion de la base de données de test
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe("Tests des routes de l'API", () => {
  it("GET / - Renvoie le message 'Hello Node API run'", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello Node API run");
  });

  it("GET /blog - Renvoie le message 'Hello blog'", async () => {
    const response = await request(app).get("/blog");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello blog");
  });

  // ... Ajoutez d'autres tests pour les autres routes

  // Exemple de test pour la création d'un produit
  it("POST /product - Crée un nouveau produit", async () => {
    const productData = {
      name: "Produit test",
      quantity: 10,
      price: 9.99,
    };

    const response = await request(app)
      .post("/product")
      .send(productData);

    expect(response.status).toBe(200);
    expect(response.body.name).toBe(productData.name);
    expect(response.body.quantity).toBe(productData.quantity);
    expect(response.body.price).toBe(productData.price);
  });

  // ... Ajoutez d'autres tests pour les autres fonctionnalités

});
