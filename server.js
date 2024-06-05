import express from 'express';

const app = express();

app.use[express.json()]
// métodos http: get post put e delete
//rotas: precisam de tipo/método || endereço(www.x.com/ sei lá) || 
app.get("/usuarios", (req,res)=>{
    res.send("troço esranho");
});

app.post("/usuarios",(req, res)=>{
    console.log(req)

    res.send('Ok posts')
});

app.put("/usuarios");
app.delete("/usuarios");




app.listen(3000, console.log("servidor funcionando"))