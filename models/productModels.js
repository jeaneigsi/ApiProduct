const mongoose = require("mongoose");

// Définition du schéma du produit
const productSchema = mongoose.Schema(
  {
    // Nom du produit
    name: {
      type: String,
      required: [true, "Veuillez entrer le nom du produit."],
    },
    // Quantité du produit
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    // Prix du produit
    price: {
      type: Number,
      required: true,
    },
    // Image du produit
    image: {
      type: String,
      required: false,
    },
  },
  {
    // Activation des horodatages (timestamps)
    timestamps: true,
  }
);

// Création du modèle "Product" à partir du schéma
const Product = mongoose.model("Product", productSchema);

// Exportation du modèle "Product" pour utilisation dans d'autres parties de l'application
module.exports = Product;
