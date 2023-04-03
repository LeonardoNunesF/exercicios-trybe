// Refatore a função removeCliente para diminuir sua complexidade e 
// quebrá-la em funções menores.

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function invalidClient(cliente){
    if (typeof cliente !== 'string') {
        return 'O parâmetro passado deve ser do tipo "string"!';
    }
    else {
        return true;
    }
}

function foundClient(cliente){
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
        if (cliente === clientesTrybeBank[index]) {
            return index;
          }
    }
    return false;
}

function removeClient(cliente) {
    let validacao = invalidClient(cliente);  
    if (validacao !== true) {  
      return validacao;  
    }  
  }

function removeClient(cliente) {
    let validacao = invalidClient(cliente);  
    if (validacao !== true) {  
      return validacao;  
    }  
  
    let index = foundClient(cliente);  
    if (index === false) {  
      return 'Cliente não encontrada(o).'  
    }  
  }

  function removeClient(cliente) {
    let validacao = invalidClient(cliente);  
    if (validacao !== true) {  
      return validacao;  
    }  
  
    let index = foundClient(cliente);  
    if (index === false) {  
      return 'Cliente não encontrada(o).'  
    }  
  
    clientesTrybeBank.splice(index, 1);  
    return 'Cliente excluída(o) com sucesso.';  
  }

console.log(removeClient(false)); 
console.log(removeClient('Barney')); 
console.log(removeClient('John')); 
console.log(clientesTrybeBank); 