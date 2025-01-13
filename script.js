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
  
  
