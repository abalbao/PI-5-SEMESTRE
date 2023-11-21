document.addEventListener('DOMContentLoaded', function () {
  const restaurantsList = document.getElementById('restaurants');
  const orderList = document.getElementById('order-list');
  const totalElement = document.getElementById('total');
  const placeOrderBtn = document.getElementById('place-order-btn');

  // Exemplo de dados de restaurantes
  const restaurantsData = [
    { id: 1, name: 'Restaurante A', price: 10.00 },
    { id: 2, name: 'Restaurante B', price: 15.00 },
    // Adicione mais restaurantes conforme necessário
  ];

  // Adiciona restaurantes à lista
  restaurantsData.forEach(restaurant => {
    const li = document.createElement('li');
    li.innerHTML = `${restaurant.name} - R$ ${restaurant.price.toFixed(2)}
                      <button onclick="addToOrder(${restaurant.id}, '${restaurant.name}', ${restaurant.price})">
                          Adicionar ao Pedido
                      </button>`;
    restaurantsList.appendChild(li);
  });

  // Função para adicionar itens ao pedido
  window.addToOrder = function (id, name, price) {
    const li = document.createElement('li');
    li.innerHTML = `${name} - R$ ${price.toFixed(2)}`;
    orderList.appendChild(li);

    updateTotal();
  };

  // Função para atualizar o total do pedido
  function updateTotal() {
    const orderItems = orderList.getElementsByTagName('li');
    let total = 0;

    for (let i = 0; i < orderItems.length; i++) {
      const price = parseFloat(orderItems[i].innerHTML.split('R$ ')[1]);
      total += price;
    }

    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
  }

  // Evento para fazer pedido
  placeOrderBtn.addEventListener('click', function () {
    alert('Pedido feito! Total: ' + totalElement.textContent);
    // Adicione lógica adicional aqui, como enviar o pedido para o servidor, etc.
  });
});
