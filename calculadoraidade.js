// 1. Pegar os valores
// 2. Calcular a Idade
//       a. Com base no ano
//       b. Com mês (EXTRA)
//       c. Com dia (EXTRA)

// 3. Gerar a faixa etária

//     Resultado            Faixa
//     0 à 12                Criança
//     13 à 17                Adolescente
//     18 à 65               Adulto
//     Acima de 65         Idoso


// 4. Organizar o objeto pessoa para salvar na lista
// 5. Cadastrar a pessoa na lista
// 6. Função para carregar as pessoas, carrega a lista do localStorage, chamar ao carregar a página
// 7. Renderizar o conteúdo da tabela com as pessoas cadastradas
// 8. Botão para limpar os registros;

function calcularIdade(event) {
    event.preventDefault();
    console.log("funcionante!!!");

    let dadosUsuario = pegarValores();
}


// passo 1- pegar valor 
function pegarValores() {
    
    // Obtém os valores que foram digitados em cada elemento identificados pelo ID
    let nomeRecebido = document.getElementById("nome").value.trim(); // trim - apaga os possiveis espaços em branco no inicio e fim da string
    let anoRecebido = parseInt(document.getElementById("ano-nascimento").value);
    let mesRecebido = parseInt(document.getElementById("mes-nascimento").value);
    let diaRecebido = parseInt(document.getElementById("ano-nascimento").value);

    // Cria um objeto salvando os valores obtidos nos atributos
    let dadosUsuario = {
        nome: nomeRecebido,
        ano: anoRecebido,
        mes: mesRecebido,
        dia: diaRecebido,
    }

    console.log(dadosUsuario);

    // Retorna o objeto dadosUsuario
    return dadosUsuario;
}

// //Passo 2 - Calcular
// function calcular(dia,mes,ano) {
//     let dataAtual = Date.now()
    
//     let anoCal = dataAtual.getFullYear() - ano
//     let mesCal = dataAtual.getMonth()
//     let diaCal = dataAtual.getDay()

//     let idade = 0
//     if(mes < mesCal){
//         idade = anoCal
//     }else if(mes == mesCal) {
//         if(dia <= diaCal){
//             idade = anoCal
//         }else{
//             idade = anoCal - 1
//         }
//     } else {
//         idade = anoCal - 1

//         console.log(idade);

//          // Retorna a variavel idade
//     return idade;
//     }
  
// }

// //Passo 3 - Classificar
// function classificarIdade(idade) {

//     if(idade <= 12){
//         return "Criança";

//     }else if(idade <= 17 || idade >= 13){
//         return "Adolescente"

//     }else if (idade <= 65 || idade >= 18) {
//         return "Adulto"

//     }else{
//         return "Idoso"
//     }
// }

// // Passo 4 - Organizar informações
// function organizarDados(dadosUsuario, calIdade, classificacaoIdade) {
    
//     let dataNascimento ="${dia}/${mes}/${ano}"
//     let dadosUsuarioAtualizado = {
//         ...dadosUsuario,
//         idade: calIdade,
//         classificacao: classificacaoIdade,
//         dataCadastro: dataNascimento
//     }

//     console.log(dadosUsuarioAtualizado);

//     return dadosUsuarioAtualizado;
// }

// //Passo 5 - Salvar
// function cadastrarUsuario(usuario) {
//     let listaUsuarios = [];

    
//     //if (localStorage.getItem("usuariosCadastrados") == true) {
//     if (localStorage.getItem("usuariosCadastrados")) {
        
//         listaUsuarios = JSON.parse(localStorage.getItem("usuariosCadastrados"));
//     }
    
//     listaUsuarios.push(usuario)

//     localStorage.setItem("usuariosCadastrados", JSON.stringify(listaUsuarios))
// }


// // Passo 6 - Ler lista
// function carregarUsuarios() {
//     let listaUsuarios = [];

//     if (localStorage.getItem("usuariosCadastrados")) {
        
//         listaUsuarios = JSON.parse(localStorage.getItem("usuariosCadastrados"));
//     }

   
//     if (listaUsuarios.length == 0) {
//         let tabela = document.getElementById("corpo-tabela");

//         tabela.innerHTML = `<tr class="linha-mensagem">
//         <td colspan="6">Nenhum usuario cadastrado!</td>
//     </tr>`

//     }else{
//         montarTabela(listaUsuarios);
//     }
// }

// window.addEventListener('DOMContentLoaded', () => carregarUsuarios());


// // Passo 7 - Montar tabela
// function montarTabela(listaDeCadastrados) {
//     let tabela = document.getElementById("corpo-tabela");

//     let template = '';

//     console.log(listaDeCadastrados);

//     listaDeCadastrados.forEach(pessoa => {
        
//         template += `<tr>
//         <td data-cell="nome">${pessoa.nome}</td>
//         <td data-cell="data de nascimento">${pessoa.dataCadastro}</td>
//         <td data-cell="idade">${pessoa.calIdade}</td>
//         <td data-cell="faixa etária">${pessoa.classificacaoIdade}</td>
//     </tr>`
//     });

    
//     tabela.innerHTML = template;
// }


// // Passo 8 - Limpar local storage
// function deletarRegistros() {
   
//     localStorage.removeItem("usuariosCadastrados")

//     window.location.reload();

// }

