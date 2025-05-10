import { CalculaSalario } from "./calcula_salario";
import Colaborador from "./Colaborador";

export class Pagamento {
  constructor(private calculaSalario: CalculaSalario) {}

  pagar(colaborador: Colaborador) {
    const salarioColaborador = this.calculaSalario.calcular(colaborador.cargo);
    colaborador.saldo = salarioColaborador;
  }
}
