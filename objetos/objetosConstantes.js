//pessoa -> 123 -> {...}

const pessoa = {nome: 'João'};
pessoa.nome = 'Pedro';
console.log(pessoa);

//Da erro
// pessoa = {nome: 'Ana'};

Object.freeze(pessoa)
//Para qualquer alteração ao objeto MAS NÃO da erro
pessoa.nome = 'Maria';
pessoa.end = 'Rua ABC';
delete pessoa.nome;
console.log(pessoa.nome);

const pessoaConstante = Object.freeze({nome: 'João'});
pessoaConstante.nome = 'Maria';
console.log(pessoaConstante);