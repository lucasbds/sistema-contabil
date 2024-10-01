let lancamentos = [];

document.getElementById('lancamentoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const conta = document.getElementById('conta').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const tipo = document.getElementById('tipo').value;
    
    lancamentos.push({ conta, valor, tipo });
    alert('Lançamento adicionado com sucesso!');
    
    document.getElementById('lancamentoForm').reset();
});

function gerarBalancete() {
    let resultado = "<h3>Balancete de Verificação</h3>";
    lancamentos.forEach(lancamento => {
        resultado += `<p>Conta: ${lancamento.conta}, Tipo: ${lancamento.tipo}, Valor: ${lancamento.valor}</p>`;
    });
    document.getElementById('resultadoRelatorio').innerHTML = resultado;
}

function gerarDRE() {
    let receita = 0, despesa = 0;
    lancamentos.forEach(lancamento => {
        if (lancamento.tipo === 'credito') receita += lancamento.valor;
        else despesa += lancamento.valor;
    });
    
    const lucro = receita - despesa;
    let resultado = `<h3>DRE</h3>
                     <p>Receita: ${receita}</p>
                     <p>Despesa: ${despesa}</p>
                     <p>Lucro: ${lucro}</p>`;
    document.getElementById('resultadoRelatorio').innerHTML = resultado;
}

function gerarBalanco() {
    let ativo = 0, passivo = 0;
    lancamentos.forEach(lancamento => {
        if (lancamento.tipo === 'debito') ativo += lancamento.valor;
        else passivo += lancamento.valor;
    });
    
    let resultado = `<h3>Balanço Patrimonial</h3>
                     <p>Ativo: ${ativo}</p>
                     <p>Passivo: ${passivo}</p>`;
    document.getElementById('resultadoRelatorio').innerHTML = resultado;
}
