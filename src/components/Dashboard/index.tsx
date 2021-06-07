import { BoxHeader } from "../BoxHeader";
import { ComparisonTable } from "../ComparisonTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <BoxHeader />
      <ComparisonTable />
    </Container>
  );
}