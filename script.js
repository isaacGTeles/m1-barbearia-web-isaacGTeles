// Um de seus clientes é barbeiro, sua babearia oferece cortes de cabelo e, claro, barba.

// Com a alta demanda ele não está conseguindo dar conta de atender todos os clientes.

// Com a grande dificuldade em atender todas as demandas dos clientes, ele te contratou para desenvolver um sistema onde o cliente poderá realizar uma série de ações, como:

// Buscar Corte.
// buscaCortePorId(). Esta função recebe como parâmetro um id que, quando encontrado, retorna um objeto corte. Caso o id não exista na lista de cortes, retorne ⁠Corte não encontrado.

// Observe que para acessar a lista você primeiro precisa acessar o objeto barbearia e, em seguida, percorrer a lista de cortes para procurar o id passado por parâmetro. Caso encontre o id, retorne o objeto (corte).

// Buscar Barba.
// buscaBarbaPorId(). Esta função recebe como parâmetro um id que, quando encontrado, retorna um objeto barba. Caso o id não exista na lista de cortes, retorne ⁠Barba não encontrado.

// Observe que para acessar a lista você primeiro precisa acessar o objeto barbearia e, em seguida, percorrer a lista de barbas para procurar o id passado por parâmetro. Caso encontre o id, retorne o objeto (barba).

// Consultar se a barbearia está aberta ou fechada.
// verificaStatusBarbearia(). Esta função não irá receber parâmetros, ela irá verificar se a propriedade estaAberto da barbearia é true ou false. Caso seja true retorne: ⁠"Estamos abertos" e caso seja false retorne: "Estamos fechados".

// Buscar todos os cortes que a barbearia oferece.
// retornaTodosCortes(). Esta função não irá receber parâmetros, ela irá retornar a lista de cortes que a barbearia oferece. ⁠Acesse a propriedade cortes do objeto barbearia e a retorne.

// Buscar todas as barbas que a barbearia oferece.
// retornaTodasBarbas(). Esta função não irá receber parâmetros, ela irá retornar a lista de barbas que a barbearia oferece. ⁠Acesse a propriedade barbas do objeto barbearia e a retorne.

// Orçar um pedido.
// criaPedido(). Esta função recebe três parâmetros: o nome do cliente, o id do corte a ser realizado e o id da barba a ser feita.

// Use as funções já criadas buscaCortePorId() e buscaBarbaPorId() e armazene o retorno de cada uma delas em uma variável (uma para cada função). Não se preocupe com id's inexistentes.
// ⁠
// Crie um objeto pedido, que tenha as seguintes propriedades:

// nome -> Armazena a variável nome do cliente recebida como parâmetro.

// pedidoCorte -> Armazena o tipo do corte pedido.

// pedidoCortePreco -> Armazena o valor do corte.

// pedidoBarba -> Armazena o tipo da barba do pedido.

// pedidoBarbaPreco -> Armazena o valor da barba.

// Retorne o objeto pedido.

// Atualizar serviço.
// atualizarServico(). Esta função recebe uma lista (cortes ou barbas), o id do item a ser atualizado, o novo tipo e o novo valor. Não se preocupe com id's inexistentes.

// Acesse o índice da lista e efetue a atualização. Retorne a lista atualizada.

// Calcular o valor total.

// calculaTotal(). Esta função recebe um pedido como parâmetro. Acesse as propriedades pedidoCortePreco e pedidoBarbaPreco, some o valor das duas e retorne a soma.

// Parte do código já começou a ser desenvolvido

const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  
function buscaCortePorId(id) {
    const corte = barbearia.cortes.find((corte) => corte.id === id);
    return corte || "Corte nao encontrado";
}

function buscaBarbaPorId(id) {
    const barba = barbearia.barbas.find((barba) => barba.id === id);
    return barba || "Barba nao encontrada"; 
}

function verificaStatusBarbearia() {
    return barbearia.estaAberto ? "Estamos abertos" : "Estamos fechados";
}

function retornaTodosCortes() {
    return barbearia.cortes;
}

function retornaTodasBarbas() {
    return barbearia.barbas;
}

function criaPedido(nomeCliente, corteId, barbaId) {
    const corte = buscaCortePorId(corteId);
    const barba = buscaBarbaPorId(barbaId);

    const pedido = {
        nome: nomeCliente,
        pedidoCorte: corte.tipo || corte,
        pedidoCortePreco: corte.valor || 0,
        pedidoBarba: barba.tipo || barba,
        pedidoBarbaPreco: barba.valor || 0,
    };

    return pedido;
}

function atualizarServico(lista, id, valor, tipo) {
    const item = lista.find(item => item.id === id);
    if (item) {
        item.tipo = tipo;
        item.valor = valor;
    }
    return lista;
}

function calculaTotal(pedido) {
    return pedido.pedidoCortePreco + pedido.pedidoBarbaPreco;
}
  
  
