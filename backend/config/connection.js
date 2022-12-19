const mongoose = require("mongoose");
//mongodb+srv://dbBernardo:<password>@cluster0.grvwvqt.mongodb.net/?retryWrites=true&w=majority
function connection(){
    mongoose.set("strictQuery", false);
    let usuario = process.env.NODE_USER
    let senha = process.env.NODE_PASS

    if(process.env.NODE_ENV!=='producao'){
        require('dotenv').config();
        usuario = process.env.NODE_USER
        senha = process.env.NODE_PASS
    }else{
        usuario = process.env.NODE_USER
        senha = process.env.NODE_PASS
    }
    const URL = `mongodb+srv://${usuario}:${senha}@cluster0.grvwvqt.mongodb.net/?retryWrites=true&w=majority`

    mongoose.connect(URL);

    const db = mongoose.connection;

    db.on('error',() =>{
        console.log('ERRO DE CONEXÃO!')
    });

    db.on('open',()=>{
        console.log('CONEXÃO COM SUCESSO!')
    })
};

connection()