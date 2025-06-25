fetch('/api/produtos')
  .then(res => res.json())
  .then(produtos => {
    const container = document.getElementById('produtos');
    produtos.forEach(prod => {
      const div = document.createElement('div');
      div.classList.add('produto');
      div.innerHTML = `
        <img src="${prod.imagem}" alt="${prod.nome}">
        <h3>${prod.nome}</h3>
        <p><strong>R$ ${prod.preco.toFixed(2)}</strong></p>
        <small>${prod.marca} - ${prod.peso}</small>
      `;
      container.appendChild(div);
    });
  });
