import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../services/api';

interface Plan {
  id: number;
  origem: string;
  destino: string;
  tempo: number;
  plano: number;
  comPlano: number;
  semPlano: number
}

type PlanInput = Omit<Plan, 'id' >;

interface PlansProviderProps {
  children: ReactNode;
}

interface PlansContextData {
  plans: Plan[];
  createPlan: (Plan: PlanInput) => Promise<void>;
}

const PlansContext = createContext<PlansContextData>(
  {} as PlansContextData
);

export function RequestProvider({ children }: PlansProviderProps) {
  const [plans, setPlans] = useState<Plan[]>([])

  useEffect(() => {
    api.get('plans')
    .then(response => setPlans(response.data.plans))
  }, []);

  async function createPlan(planInput: PlanInput) {
    const response = await api.post('/plans', {
      ...planInput,
    })
    const { plan } = response.data;

    setPlans([
      ...plans,
      plan,
    ])
  }

  return (
    <PlansContext.Provider value={{plans, createPlan}}>
      {children}
    </PlansContext.Provider>
  );
}

export function usePlans() {
  const context = useContext(PlansContext);

  return context;
}