export class GerarRelatorio {
  gerarJson() {
    let relatorio = this._colaboradores.map((colaborador) => {
      return {
        nome: colaborador.nome,
        cargo: colaborador.cargo,
        salario: this.calcularSalario(colaborador.cargo),
      };
    });
    return JSON.stringify(relatorio);
  }
}
