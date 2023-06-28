const express = require("express");
const app = express();
const Product = require("./models/productModels");
const mongoose = require("mongoose");

// Configuration d'Express pour utiliser JSON dans les requêtes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route racine pour vérifier le fonctionnement de l'API
app.get("/", (req, res) => {
  res.send("Hello Node API run");
});

// Route pour l'API du blog
app.get("/blog", (req, res) => {
  res.send("Hello blog");
});

// Route pour créer un produit
app.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Route pour récupérer tous les produits
app.get("/product", async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Route pour récupérer un produit spécifique par son ID
app.get("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route pour mettre à jour un produit spécifique par son ID
app.put("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      res
        .status(404)
        .json({ message: `Aucun identifiant trouvé pour ce produit ${id}` });
    }

    const productUpdate = await Product.findById(id);
    res.status(200).json(productUpdate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route pour supprimer un produit spécifique par son ID
app.delete("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res
        .status(404)
        .json({ message: `Aucun identifiant trouvé pour ce produit ${id}` });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Configuration de Mongoose pour désactiver la vérification stricte des requêtes
mongoose.set("strictQuery", false);

// Connexion à la base de données MongoDB
mongoose
  .connect(
  "mongodb+srv://username:motdepasse@mongo.df6smj9.mongodb.net/Node-Api?retryWrites=true&w=majority"
  )  
  .then(() => {
    // Démarrage du serveur Express
    app.listen(3000, () => {
      console.log(`Node server is running on port 3000`);
    });
    console.log("Connecté à MongoDB");
  })
  .catch(() => {
    console.log(error.message);
  });
