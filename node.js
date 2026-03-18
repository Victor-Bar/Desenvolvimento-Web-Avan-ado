const pedidos = [
  { id: 1, cliente: "Ana", total: 120, status: "aprovado" },
  { id: 2, cliente: "Bruno", total: 80, status: "pendente" },
  { id: 3, cliente: "Ana", total: 200, status: "aprovado" },
  { id: 4, cliente: "Carlos", total: 50, status: "cancelado" },
  { id: 5, cliente: "Bruno", total: 150, status: "aprovado" }
];

console.log("\nClientes com pedidos aprovados:");

// filtra e mapeia
const clientesAprovados = pedidos
  .filter(pedido => pedido.status === "aprovado")
  .map(pedido => pedido.cliente);

// exibir resultado
clientesAprovados.forEach(cliente => console.log(cliente));