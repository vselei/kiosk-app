const moneyFormatter = qty =>
  qty.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

export { moneyFormatter };
