// Faça um programa para adicionar clientes ao array de clientes do TrybeBank.
// Certifique-se de que a função deve receber um parâmetro do tipo string e 
// imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// escreva aqui sua função
function clientAdd(client) {
    if (typeof client === 'string') {
        clientesTrybeBank.push(client);
        return 'Cliente adicionado com sucesso!';
    }
    else {
        return 'Nome inválido.'
    }
}

console.log(clientAdd(45)); 
console.log(clientAdd('Leonardo')); 
console.log(clientesTrybeBank); 

// Agora iremos escrever um programa que irá excluir um cliente
// já existente do array de clientes do TrybeBank. Certifique-se
// de que a função deve receber um parâmetro do tipo string e 
// imprimir uma mensagem de erro, caso o parâmetro não seja do 
// tipo string e caso o cliente não exista dentro do array. 

clientesTrybeBank = ['Ada', 'John', 'Gus'];

// escreva aqui sua função
function clientRemove(client) {
    if (typeof client === 'string') {
        let clientFound = false;
        for (let i = 0; i < clientesTrybeBank.length; i++) {  
            if (clientesTrybeBank[i] === client) {
                clientesTrybeBank.splice(i, 1);
                clientFound = true;
                return 'Cliente excluido com sucesso!';
            }
        } 
        if (clientFound === false){
            return 'Cliente não encontrado.'
        }
    }
    else {
        return 'Parâmetro inválido.'
    }
    
}

console.log(clientRemove(45)); 
console.log(clientRemove('Leonardo')); 
console.log(clientRemove('Gus'));
console.log(clientesTrybeBank); 
