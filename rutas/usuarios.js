
var ruta=require("express").Router();

ruta.get("/", (req, res)=>{
    res.render("Inicio");
});

ruta.get("/login", (req, res)=>{
    res.render("login");
});


ruta.post("/revisar", (req, res)=>{
    if(req.body.usuario=="abc" && req.body.password=="123"){
    req.session.usuario=req.do.body.usuario;
    res.redirect("bienvenido");
    }
    else{
        res.redirect("error");

}});

ruta.get("/bienvenido", (req, res)=>{
    if(req.session.usuario){
    res.render("bienvenido");

    }
    else{
        render.error("Error");

    }
});


ruta.get("/error", (req, res)=>{
    res.redirect("error");
});


ruta.get("protegido", (req,res)=>{
    if(req.session.usuario){
    res.render("protegido");
    }
    else{
        res.render("Protegido");
    }
});

ruta.get("/logout", (req,res)=>{
    req.session.destroy();
    res.redirect("/login");
});


module.exports=ruta;