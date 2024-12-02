import "./index.css";

import { SequenceBoilerplate } from "./components/sequence-boilerplate/SequenceBoilerplate";

// import { Action } from "./components/action/Action";
// import { Field, Input, Label } from "./components/action/components";
import { Card, Group, Button, Select } from "./components";
import { Page, Pages, usePage } from "./Page";
import { Action } from "./components/action/Action";
import { Field } from "./components/action/components";
import { Label } from "./components/label/Label";
import { Input } from "./components/input/Input";
import { InputControlUnit } from "./components/input-control-unit/InputControlUnit";
import { Svg } from "./components/svg/Svg";
import { Divider } from "./components/divider/Divider";

function App() {
  return (
    <SequenceBoilerplate
      docsUrl="https://docs.sequence.build"
      githubUrl="https://github.com"
      name="Boilerplate Design System"
      description="Development environment"
    >
      <Pages initial="root">
        <RootPage />
        <InnerPage />
      </Pages>
    </SequenceBoilerplate>
  );
}

function RootPage() {
  const { setCurrent } = usePage();
  return (
    <Page name="root">
      <Button onClick={() => setCurrent("inner")} variant="primary">
        Connect
      </Button>
    </Page>
  );
}

function InnerPage() {
  return (
    <Page name="inner">
      <Divider />
      <Group>
        <Group.Title>User info</Group.Title>
        <Card>
          <Action intent="user_info" className="flex flex-col gap-2">
            <Field name="wallet-address">
              <Label>Wallet address:</Label>
              <InputControlUnit subvariants={{ width: "full" }}>
                <InputControlUnit.Segment subvariants={{ pointer: "none" }}>
                  <Svg name="Wallet" width="20" />
                </InputControlUnit.Segment>

                <Input
                  type="text"
                  variant="transparent"
                  subvariants={{ width: "full" }}
                />

                <InputControlUnit.Segment>
                  <Button
                    variant="tiny"
                    className="self-center"
                    onClick={() => alert("disconnect")}
                  >
                    <Svg name="Signout" width="16" />
                    Disconnect
                  </Button>
                </InputControlUnit.Segment>
              </InputControlUnit>
            </Field>

            <Field name="network">
              <Label>Network:</Label>
              <Input type="text" subvariants={{ width: "full" }} />
            </Field>

            <Field name="test-payments">
              <Label>Arbitrum Sepolia balance for test payments:</Label>
              <InputControlUnit subvariants={{ width: "full" }}>
                <Input
                  type="text"
                  variant="transparent"
                  subvariants={{ width: "full" }}
                />
                <InputControlUnit.Segment>
                  <Button
                    variant="tiny"
                    className="self-center flex-shrink-0"
                    onClick={() => alert("get test currency")}
                  >
                    <Svg name="ExternalLink" width="16" />
                    Get test currency
                  </Button>
                </InputControlUnit.Segment>
              </InputControlUnit>
            </Field>

            <Select>
              <Select.Options
                items={[
                  {
                    value: "value2",
                    label: "Value2",
                  },
                  { value: "value", label: "Value" },
                ]}
              />
            </Select>
          </Action>
        </Card>
        {/* <Card>
            <Action intent="update_name" onSubmit={() => alert("submit")}>
              <Field name="name">
                <Label>Name</Label>
                <Input type="text" />
              </Field>
            </Action>
          </Card> */}
      </Group>
      <Divider />

      <Group>
        <Group.Title>Sequence Kit actions</Group.Title>

        <Card.Collapsable>
          <Card.Summary>Sign message</Card.Summary>
          <Card.Body>Sign message items</Card.Body>
        </Card.Collapsable>

        <Card.Collapsable>
          <Card.Summary>Verify signature</Card.Summary>
          <Card.Body>Verify signature items</Card.Body>
        </Card.Collapsable>

        <Card.Collapsable>
          <Card.Summary>Send transactions</Card.Summary>
          <Card.Body>Send transactions items</Card.Body>
        </Card.Collapsable>
      </Group>
      <Divider />
    </Page>
  );
}

export default App;
