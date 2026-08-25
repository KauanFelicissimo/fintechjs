const clientes = ["Sylas" , "Cho'gath", "Sona"];

function ola(nome){   
    console.log("Boas vindo(a)" , nome);
}

for(cliente of clientes){
    ola(cliente);
}

