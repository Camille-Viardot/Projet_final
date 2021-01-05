const express = require("express");
const con = require("../database/db");
const jwt = require("jsonwebtoken");
const secret = require("../config").secret;
const bcrypt = require("bcrypt");
const saltRounds = 10;
const router = express.Router();


/* ROUTE USER */
/***************************** Route pour enregistrer un nouveau aidant. ***************************/
router.post("/sign-up", (req, res) => {
    try {
        bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
            let newCompte = `INSERT INTO user (nom, prenom, email, password) VALUES ( '${req.body.nom}', '${req.body.prenom}', '${req.body.email}', '${hash}')`;
            con.query(newCompte, (err, resultat) => {
                if (err == null) res.status(200).json("Validé");
                else res.status(401).json('Compte non enregistré');
            });
        });
    } catch (error) {
        console.log(error);
    }
});

/***************************** Route pour la connection d'un aidant ***************************/
router.post("/sign-in", (req, res) => {
    try {
        con.query(`SELECT * FROM user WHERE email = '${req.body.email}'`, (err, result) => {
            if (err == null) bcrypt.compare(req.body.password, result[0].password, (err, resulta) => {
                // console.log(result);
                let token = jwt.sign({ id: result[0].id_user, nom: result[0].nom, prenom: result[0].prenom, email: result[0].email }, secret, { expiresIn: 86400 });
                if (err == null) res.status(200).send({ auth: true, token: token });
                else res.status(401).json('Le mot de passe ou l\'adresse mail est incorrect.');
            });
            else res.status(401).json('Le mot de passe ou l\'adresse mail est incorrect.');
        });
    } catch (error) {
        console.log(error);
    }
})

/***************************** Route pour la suppression d'un utilisateurs ***************************/
router.post('/delete-user', (req, res) => {
    try {
        let del = `DELETE FROM user WHERE id_user = '${req.body.id_user}'`;
        con.query(`SELECT * FROM user WHERE id_user = '${req.body.id_user}'`, (err, result) => {
            if (err == null) con.query(del, (err, result) => {
                if (err == null) res.status(200).json('Compte Supprimé')
            });
            else res.status(401).json('Désolé il y a une erreur?');
        })
    } catch (error) {
        console.log(error);
    }
})

/***************************** Route pour enregistrer un nouveau aider. ***************************/
router.post("/sign-up_aider", (req, res) => {
    try {
        bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
            let newCompte = `INSERT INTO user_aider (nom, prenom, email, password, user_affiliate) VALUES ( '${req.body.nom}', '${req.body.prenom}', '${req.body.email}', '${hash}', '${req.body.user_affiliate}')`;
            con.query(newCompte, (err, resultat) => {
                if (err == null) res.status(200).json("Validé");
                else res.status(401).json('Compte non enregistré');
            });
        });
    } catch (error) {
        console.log(error);
    }
});

/***************************** Route pour la connection des aider ***************************/
router.post("/sign-in_aider", (req, res) => {
    try {
        con.query(`SELECT * FROM user_aider WHERE email = '${req.body.email}'`, (err, result) => {
            if (err == null) bcrypt.compare(req.body.password, result[0].password, (err, resulta) => {
                // console.log(result);
                let token = jwt.sign({ id: result[0].id_aider, nom: result[0].nom, prenom: result[0].prenom, email: result[0].email, user_affiliate: result[0].user_affiliate }, secret, { expiresIn: 86400 });
                if (err == null) res.status(200).send({ auth: true, token: token });
                else res.status(401).json('Le mot de passe ou l\'adresse mail est incorrect.');
            });
            else res.status(401).json('Le mot de passe ou l\'adresse mail est incorrect.');
        });
    } catch (error) {
        console.log(error);
    }
})

/* ROUTES POUR CONTACT */
/***************************** Route pour ajouter un nouveau contact ***************************/
router.post('/new-contact', (req, res) => {
    try {
        let newContact = `INSERT INTO contact (nom, prenom, email, telephone, favoris, user_affiliate) VALUES (
            '${req.body.nom}',
            '${req.body.prenom}',
            '${req.body.email}',
            '${req.body.telephone}',
            '${req.body.favoris}',
            '${req.body.user_affiliate_user}',
            '${req.body.user_affiliate_aider}'
        )`;
        con.query(newContact, (err, result) => {
            console.log(err);
            if (err == null) res.status(200).json('Contact ajouté.');
            else res.status(401).json('Désolé une erreur c\'est produite.');
        });
    } catch (error) {
        console.log(error);
    }
})


/***************************** Route pour afficher les contacts. ***************************/
router.get('/getcontacts/:id', (req, res) => {
    try {
        con.query(`SELECT * FROM user INNER JOIN contact ON user.id_user = contact.user_affiliate WHERE user.id_user = '${req.params.id}'`, (err, result) => {
            if (err == null) res.status(200).json(result)
            else res.status(401).json('Désolé il y a une erreur?');
        })
    } catch (error) {
        console.log(error);
    }
})

/***************************** Route pour supprimer un contact. ***************************/
router.post('/delete-contact', (req, res) => {
    try {
        let del = `DELETE FROM contact WHERE id_contact = '${req.body.id_contact}'`;
        con.query(`SELECT * FROM contact WHERE id_contact = '${req.body.id_contact}'`, (err, result) => {
            if (err == null) con.query(del, (err, result) => {
                if (err == null) res.status(200).json('Contact Supprimer')
            });
            else res.status(401).json('Désolé il y a une erreur?');
        })
    } catch (error) {
        console.log(error);
    }
})

/***************************** Route pour modifier un contact. ***************************/
router.post('/modifier-contact', (req, res) => {
    try {
        let modif = `UPDATE contact SET 
                        nom = '${req.body.nom}', 
                        prenom = '${req.body.prenom}', 
                        email = '${req.body.email}', 
                        telephone = '${req.body.telephone}' 
                    WHERE id_contact = '${req.body.id_contact}'`;
        con.query(modif, (err, result) => {
            if (err == null) res.status(200).json('Contact modifié.')
            else res.status(401).json('Une erreur s\'est produite.')
        })

    } catch (error) {
        console.log(error);
    }
})




module.exports = router;

