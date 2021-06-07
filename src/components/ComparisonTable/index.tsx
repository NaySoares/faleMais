import { usePlans } from "../../hooks/useRequest";
import { Container } from "./styles";

export function ComparisonTable() {
  const {plans} = usePlans();
  
 return (
  <Container>
    <table>
      <thead>
        <tr>
          <th>DDD de Origem</th>
          <th>DDD de Destino</th>
          <th>Tempo</th>
          <th>Plano FaleMais</th>
          <th>Com FaleMais</th>
          <th>Sem FaleMais</th>
        </tr>
      </thead>

      <tbody>
        {plans.map( plans => {
          return (
            <tr key={plans.id}>
              <td>{plans.origem}</td>
              <td>{plans.destino}</td>
              <td>{`${plans.tempo} minutos`}</td>
              <td>{`FaleMais ${plans.plano}`}</td>
              <td>{new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(plans.comPlano)}
              </td>
              <td>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(plans.semPlano)}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </Container>
 );
}