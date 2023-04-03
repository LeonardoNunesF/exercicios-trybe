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

