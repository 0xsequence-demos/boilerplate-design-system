import { Card } from "../card/Card";
import { Button } from "../button/Button";

export function Connector({ onClick }: { onClick?: () => void }) {
  return (
    <Card variant="none">
      <Button variant="primary" onClick={onClick}>
        Connect
      </Button>
    </Card>
  );
}
