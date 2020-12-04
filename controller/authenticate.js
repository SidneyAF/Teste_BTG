const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');
const user = require('../config/user.json');

module.exports = () => {
    const controller = {};

    controller.authenticate = (req, res) => {
        try{
            const token = jwt.sign(user, authConfig.secret, {
                expiresIn: 3600,
            })

            res.status(201).send({login: user.login, token: token});

        }catch(err){
            res.status(401).send({error: 'Error on authenticate'});
        };
    }
    

    return controller;
}