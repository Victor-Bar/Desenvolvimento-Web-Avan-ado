const usuarios = [
  { nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25] },
  { nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] },
  { nome: "Carlos", idade: 32, ativo: true, compras: [200, 150, 50, 100] },
  { nome: "Diana", idade: 25, ativo: true, compras: [] },
  { nome: "Eduardo", idade: 15, ativo: false, compras: [10] }
];

//Parte 1

console.log("Total de compras por usuário:");

usuarios.forEach(usuario => {
  const total = usuario.compras.reduce((acc, valor) => acc + valor, 0);
  console.log(`${usuario.nome}: total = ${total}`);
});

//Parte 2

console.log("\nUsuários ativos:");

const ativos = usuarios.filter(usuario => usuario.ativo);

ativos.forEach(usuario => console.log(usuario.nome));

//Parte 3

console.log("\Usuarios Adultos: ");

const Adulto = usuarios.filter(usuario => usuario.idade >= 18);

Adulto.forEach(usuario => console.log(usuario.nome));

//Parte 4

const MaiorCompra = usuarios
  .map(usuario => ({
    nome: usuario.nome,
    total: usuario.compras.reduce((acc, v) => acc + v, 0)
  }))
  .reduce((maior, atual) => atual.total > maior.total ? atual : maior);

console.log("\nUsuário com maior volume:");
console.log(`Usuário: ${MaiorCompra.nome} Total: ${MaiorCompra.total}`);

//Parte 5

