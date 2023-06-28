Titre du fichier README : Gestionnaire de produits

Commentaires sur les grands axes du code :

Le code crée un serveur Node.js en utilisant le framework Express.
Les dépendances nécessaires (express, mongoose et le modèle Product) sont importées.
Les middlewares express.json() et express.urlencoded() sont utilisés pour analyser les données JSON et les données URL encodées.
Plusieurs routes sont définies :
La route racine ("/") renvoie un message "Hello Node Api run".
La route "/blog" renvoie un message "Hello blog".
La route POST ("/product") permet de créer un nouveau produit en utilisant le modèle Product.
La route GET ("/product") permet de récupérer tous les produits de la base de données.
La route GET ("/product/:id") permet de récupérer un produit spécifique en utilisant son identifiant.
La route PUT ("/product/:id") permet de mettre à jour un produit spécifique en utilisant son identifiant.
La route DELETE ("/product/:id") permet de supprimer un produit spécifique en utilisant son identifiant.
La connexion à la base de données MongoDB est établie en utilisant mongoose.connect().
Le serveur écoute sur le port 3000 et affiche un message de confirmation de connexion à la base de données lorsque tout est prêt.


express.json() : Analyse les données JSON des requêtes.
express.urlencoded() : Analyse les données URL encodées des requêtes.
app.get("/") : Requête GET à la racine de l'application.
app.get("/blog") : Requête GET pour la route "/blog".
app.post("/product") : Crée un nouveau produit avec la méthode POST.
app.get("/product") : Récupère tous les produits avec la méthode GET.
app.get("/product/:id") : Récupère un produit spécifique avec son identifiant.
app.put("/product/:id") : Met à jour un produit spécifique avec son identifiant.
app.delete("/product/:id") : Supprime un produit spécifique avec son identifiant.
mongoose.connect() : Établit la connexion à la base de données MongoDB.
app.listen() : Le serveur écoute les requêtes sur le port 3000.
Ces fonctions permettent de gérer la création, la récupération, la mise à jour et la suppression de produits dans l'application.

