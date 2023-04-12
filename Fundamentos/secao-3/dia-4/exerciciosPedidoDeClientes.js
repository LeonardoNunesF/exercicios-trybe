//Imagine que você seja responsável por cuidar do 
// sistema de entrega de um restaurante e que precise 
// enviar mensagens com as informações da compra. 
// Para isso, use o seguinte código:

let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  function customerInfo(order) {
    // Adicione abaixo as informações necessárias.
    console.log('Olá,', order.order.delivery.deliveryPerson,', entrega para:',order.name+', Telefone:', order.phoneNumber+', R.',order.address.street+', Nº:',order.address.number+', AP:',order.address.apartment);
  }
  
  customerInfo(order);
  
  function orderModifier(order) {
    // Adicione abaixo as informações necessárias.
    order.order.delivery.deliveryPerson = 'Luiz Silva';
    order.payment = 50;
    //let pizzas = Object.keys(order.order.pizza).toString(); 
    let pizzas = Object.keys(order.order.pizza).join(', '); 
    let drink = Object.keys(order.order.drinks).toString();    

    console.log('Olá,',order.order.delivery.deliveryPerson+', o valor total de seu pedido de',pizzas,'e',drink,'é R$',order.payment+',00.');
  }
  
  orderModifier(order);
