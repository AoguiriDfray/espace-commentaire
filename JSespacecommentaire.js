document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupération des valeurs des champs
    let nom = document.getElementById("nom").value.trim();
    let prenom = document.getElementById("prenom").value.trim();
    let commentaire = document.getElementById("commentaire").value.trim();

    // Vérification que tous les champs sont remplis
    if (nom === "" || prenom === "" || commentaire === "") {
        alert("Veuillez remplir tous les champs !");
        return;
    }

    // Création d'un nouvel élément pour afficher le commentaire
    let commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.innerHTML = `<strong>${prenom} ${nom} :</strong><br>${commentaire}`;

    // Ajout du commentaire à la section des commentaires
    document.getElementById("commentSection").appendChild(commentDiv);

    // Réinitialisation des champs après soumission
    document.getElementById("commentForm").reset();
});
