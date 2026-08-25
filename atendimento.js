// const clientes = ["luiz" , "ana" , "Roberta"];

// function fila(fila){
//    if(fila.length > 0){
//    while(fila.length > 0) {
//     console.log(fila[0]);
//     fila.shift();
//    }
// } else {
//     console.log("FIla vazia!!!")
// }
// }

// fila(clientes);


function adicionarClientes() {
    let nome = prompt("Digite o nome do cliente: ");
    if(nome){
        fila.push(nome);
    }
}

function atenderCliente(){
    let opcao;
    if(fila.length > 0) {
        let nome = fila.shift();
        alert(`O cliente ${nome} foi atendido`);
        exibirFila();
    } else {
        alert("A fila está vazia");
    }
    if(fila.length > 0){
       opcao = confirm("Deseja atender o prróximo cliente");
       if (opcao == true){
        atenderCliente();
    } 
    }
    
    
}

function exibirFila(){
    if(fila.length > 0){
    alert(fila);
    }
}
