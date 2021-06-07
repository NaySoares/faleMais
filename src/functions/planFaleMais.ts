interface ModelForm { 
  origem: string,
  destino: string,
  tempo: number,
  plano: number
}

interface priceProps {
  priceFixed: number | undefined,
  pricePlan: number | undefined
}

export default function planFaleMais(values: ModelForm) { 

  let prices: priceProps = {
    priceFixed: 0,
    pricePlan: 0,
  }
  
  const indexes = [
    {
      id: 11,
      a: 0.50, //11
      b: 1.90, //16
      c: 1.70, //17
      d: 0.90  //18
    },
    {
      id: 16,
      a: 2.90,
      b: 0.50,
      c: 1.20,
      d: 0.70
    },
    {
      id: 17,
      a: 2.70,
      b: 2.00,
      c: 0.50,
      d: 1.00
    },
    {
      id: 18,
      a: 1.90,
      b: 2.00,
      c: 1.20,
      d: 0.50
    },
]

  function priceCalculator(values: ModelForm, time: number) {
    let destiny = values.destino
    let origin = parseInt(values.origem)

    let filtered = indexes.filter((item) => item.id === origin);
    

    let price 
    switch(destiny) {
      case '011':
        price = filtered[0].a * time
        break
      case '016':
        price = filtered[0].b * time
        break
      case '017':
        price = filtered[0].c * time
        break
      case '018':
        price = filtered[0].d * time
        break
      default:
        break
    }

    return price
  }
  
  function planRate(values: ModelForm ){
    let pricePlan

    let plan = values.plano.toString()

    switch (plan) {
      case '30':
        pricePlan = calculator(values.tempo - 30);
        break;
      case '60':
        pricePlan = calculator(values.tempo - 60);
        break;
      case '120':
        pricePlan = calculator(values.tempo - 120);
        break;
      default:
        break;
    }

    function calculator(minutes: number) {
      let price
      
      if (minutes <= 0) {
        return price = 0
      } else {
        let result = priceCalculator(values, minutes)
        if(result !== undefined) {
          price = result*1.1
        }
      }
      return price
    }
    return pricePlan
  }

  prices.priceFixed = priceCalculator(values, values.tempo)

  prices.pricePlan = planRate(values)
  
  return (prices)
}