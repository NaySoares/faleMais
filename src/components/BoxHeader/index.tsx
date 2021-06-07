import { usePlans } from '../../hooks/useRequest';
import { Formik } from 'formik'

import { Container } from "./styles";
import planFaleMais from '../../functions/planFaleMais';

interface FormikFormProps { 
  origem: string,
  destino: string,
  tempo: number,
  plano: number
}
interface priceProps {
  priceFixed: number | undefined,
  pricePlan: number | undefined,
}

export function BoxHeader() {
  const { createPlan } = usePlans();

  async function handleSubmit(values : FormikFormProps) {

    const prices: priceProps = planFaleMais(values)

    await createPlan({
      origem: values.origem,
      destino: values.destino,
      tempo: values.tempo,
      plano: values.plano,
      comPlano: prices.pricePlan as number,
      semPlano: prices.priceFixed as number
    })
  }
 
  const options = [
    {
      value: "011",
    },
    {
      value: "016",
    },
    {
      value: "017",
    },
    {
      value: "018",
    },
  ]

  const planOptions = [
    {
      label: "FaleMais 30",
      value: 30,
    },
    {
      label: "FaleMais 60",
      value: 60,
    },
    {
      label: "FaleMais 120",
      value: 120,
    },
  ]

  return (
    <Container>
      <Formik<FormikFormProps>
        initialValues= {{
          origem: "011",
          destino: "011",
          tempo: 0,
          plano: 30
        }}
        onSubmit={handleSubmit}
      >
        { ({handleSubmit, values, handleChange}) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>DDD de Origem</label>
              <select name="origem" placeholder="DDD origem"
              value={values.origem} onChange={handleChange}
              > 
                {options.map((option) => (
                  <option key={option.value} value={option.value}>{option.value}</option>
                ))}
              </select>
            </div>

            <div>
              <label>DDD de Destino</label>
              <select name="destino" placeholder="DDD destino"
              value={values.destino} onChange={handleChange}
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>{option.value}</option>
                ))}
              </select>
            </div>

            <div>
              <label>Tempo</label>
              <input type="number" name="tempo" placeholder="Em minutos"
              value={values.tempo} onChange={handleChange} min={0} max={9999}
              />
            </div>

            <div>
              <label>Plano FaleMais</label>
              <select className="plan"name="plano" placeholder="Seu plano"
              value={values.plano} onChange={handleChange}
              >
                {planOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            <div>
            <button type="submit">Calcular</button>
            </div>
          </form>
        )}
      </Formik>
    </Container>
  );
}