const fs = require('fs');

module.exports = () => {
    const controller = {};

    controller.create = (req, res) => {
        const ip = req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
        const { name, birthdate, cpf, rg } = req.body;

        if(name && birthdate && cpf && rg ){
            const data = `Nome Completo: ${name}\nData de Nascimento: ${birthdate}\nCPF: ${cpf}\nRG: ${rg}\n\nUsuário Autenticado\nLogin: ${req.user.login}\nIP: ${ip}`

            fs.writeFile('report.txt', data, 'utf8', (err)=>{
                if(err){
                    res.status(401).send({error: 'Error on generate doc'});
                }
            })
                        
            res.status(201).send({message: 'The file has been saved'});
        }else{
            res.status(401).send({error: 'Incomplete data'});
        }
    }
    

    return controller;
}