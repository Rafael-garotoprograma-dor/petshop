let carrinho = [];

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    alert(produto.nome + " foi adicionado ao carrinho!");
    atualizarContador();
}

// Atualiza o contador de itens no carrinho
function atualizarContador() {
    const contador = document.getElementById('contador');
    contador.innerText = carrinho.length;
}

// Exibe os itens do carrinho
function exibirCarrinho() {
    const itensCarrinho = document.getElementById('itens-carrinho');
    itensCarrinho.innerHTML = '';
    if (carrinho.length === 0) {
        itensCarrinho.innerHTML = "Seu carrinho está vazio.";
    } else {
        itensCarrinho.innerHTML = "Itens no seu carrinho:<br>" + carrinho.map(item => item.nome).join('<br>');
    }
}

// Filtra produtos
function filtrarProdutos() {
    const tipoPet = document.getElementById('tipo-pet').value;
    const produtosContainer = document.getElementById('produtos-container');
    produtosContainer.innerHTML = '';

    const produtos = [
        { nome: 'Ração Premium para Cachorros', tipo: 'cachorros', preco: 'R$ 120,00', descricao: 'Ração de alta qualidade para cachorros.', imagem: 'imagem1.jpg' },
        { nome: 'Brinquedo Interativo para Cachorros', tipo: 'cachorros', preco: 'R$ 45,00', descricao: 'Brinquedo que estimula a mente do seu cachorro.', imagem: 'imagem2.jpg' },
        { nome: 'Ração Premium para Gatos', tipo: 'gatos', preco: '110,00', descricao: 'Ração nutritiva para gatos.', imagem: 'imagem3.jpg' },
        { nome: 'Brinquedo para Gatos', tipo: 'gatos', preco: '30,00', descricao: 'Brinquedo divertido para gatos.', imagem: 'imagem4.jpg' },
        { nome: 'Comedouro para Pássaros', tipo: 'passaros', preco: '25,00', descricao: 'Comedouro ideal para pássaros.', imagem: 'imagem5.jpg' },
        { nome: 'Brinquedo para Pássaros', tipo: 'passaros', preco: '20,00', descricao: 'Brinquedo colorido para pássaros.', imagem: 'imagem6.jpg' },
        { nome: 'Aquário para Peixes', tipo: 'peixes', preco: '200,00', descricao: 'Aquário de vidro para peixes.', imagem: 'imagem7.jpg' },
        { nome: 'Ração para Peixes', tipo: 'peixes', preco: '50,00', descricao: 'Ração específica para peixes.', imagem: 'imagem8.jpg' },
        { nome: 'Brinquedo para Outros Pets', tipo: 'outros', preco: '15,00', descricao: 'Brinquedo para pets diversos.', imagem: 'imagem9.jpg' },
        { nome: 'Acessório para Outros Pets', tipo: 'outros', preco: '35,00', descricao: 'Acessório útil para outros pets.', imagem: 'imagem10.jpg' }
    ];

    const produtosFiltrados = tipo Pet === 'todos' ? produtos : produtos.filter(produto => produto.tipo === tipoPet);

    produtosFiltrados.forEach(produto => {
        const divProduto = document.createElement('div');
        divProduto.className = 'produto';
        divProduto.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>Preço: ${produto.preco}</p>
            <p>${produto.descricao}</p>
            <button onclick="adicionarAoCarrinho(${JSON.stringify(produto)})">Adicionar ao Carrinho</button>
        `;
        produtosContainer.appendChild(divProduto);
    });
}

// Função para fazer login
function fazerLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email-login').value;
    const senha = document.getElementById('senha-login').value;
    alert(`Login realizado com sucesso! Bem-vindo, ${email}`);
    fecharModal('login');
}

// Função para fazer registro
function fazerRegistro(event) {
    event.preventDefault();
    const nome = document.getElementById('nome-registro').value;
    const email = document.getElementById('email-registro').value;
    const senha = document.getElementById('senha-registro').value;
    alert(`Registro realizado com sucesso! Bem-vindo, ${nome}`);
    fecharModal('registro');
}

// Função para fechar o modal
function fecharModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Função para abrir o modal
function abrirModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Adiciona eventos de clique aos botões de login e registro
document.getElementById('btn-login').onclick = function() {
    abrirModal('login');
};

document.getElementById('btn-registro').onclick = function() {
    abrirModal('registro');
};

// Fecha o modal quando o usuário clica fora dele
window.onclick = function(event) {
    const modais = ['login', 'registro', 'carrinho'];
    modais.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (event.target === modal) {
            fecharModal(modalId);
        }
    });
};

// Adiciona um evento para o botão de exibir carrinho
document.getElementById('btn-carrinho').onclick = function() {
    exibirCarrinho();
};

// Inicializa a exibição dos produtos ao carregar a página
window.onload = function() {
    filtrarProdutos();
};