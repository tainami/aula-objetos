// Exercícios de interpretação

// 1) 
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) // "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", "Virginia Cavendish"
console.log(filme.elenco[filme.elenco.length - 1]) // {canal: "Telecine", horario: "21h"}, {canal: "Canal Brasil", horario: "19h"}, {canal: "Globo", horario: "14h"}
console.log(filme.transmissoesHoje[2]) // {canal: "Globo", horario: "14h"}

// 2)
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}
const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
// a sintaxe dos três pontos antes do nome de um objeto copia o objeto.

console.log(cachorro) //{nome: "Juca", idade: 3, raca: "SRD"}
console.log(gato) // {nome: "Juba", idade: 3, raca: "SRD"}
console.log(tartaruga) // {nome: "Jubo", idade: 3, raca: "SRD"}

// 3)
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) // false
console.log(minhaFuncao(pessoa, "altura")) // undefined 

// Exercícios de Escrita 
// 1)

    //a)
    const infoPessoa = {
        nome: "Tainá",
        apelido: ["Tai", "Tata", "Tainazinha"],    
    }

    function imprimeMensagem(objeto) {
        console.log(`"Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelido[0]}, ${objeto.apelido[1]} ou ${objeto.apelido[1]}"`)
    }
    imprimeMensagem(infoPessoa)

    //b)
    const infoNovaPessoa = {
        ...infoPessoa,
        apelido: ["Batata", "Besouro", "Lagarta"]
    }
    imprimeMensagem(infoNovaPessoa)

// 2

    //a)
    const primeiraPessoa = { 
        nome: "Lourdes",
        idade: 28,
        profissao: "Cozinheira"
    }

    const segundaPessoa = { 
        nome: "Pedro",
        idade: 40,
        profissao: "Professor"
    }

/*
a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

b) Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:

1. O valor de `nome`
2. O numero de caracteres do valor `nome`
3. O valor de `idade`
4. O valor de `profissão`
5. O numero de caracteres do valor `profissão`
*/