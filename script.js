let money = parseInt(prompt("Quanto de dinheiro ha disponivel?"))
let option = parseInt(prompt(` Você tem ${money}R$\n opção 1:Adicionar\n opção 2:Remover\n opção 3:Encerrar`))
do {
  switch (option) {
    case 1:
      let add = parseInt(prompt('Quanto você quer adicionar?'))
      money += add
      break
    case 2:
      let minus = parseInt(prompt('Quanto você quer remover?'))
      money -= minus
      break
    default:
      alert('Opção Invalida')   
  }
  option = parseInt(prompt(` Você tem ${money}R$\n opção 1:Adicionar\n opção 2:Remover\n opção 3:Encerrar`))
} while (option !== 3)
//duo = berckson thierry & gustavo texeira
