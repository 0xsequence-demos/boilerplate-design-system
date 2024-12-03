import "./index.css";

import { SequenceBoilerplate } from "./components/sequence-boilerplate/SequenceBoilerplate";
import { Card, Group, Button } from ".";
import { Page, Pages, usePage } from "./Page";
import { Form, type FormHandler } from "./components/action/Form";
import { Field } from "./components/action/components";
import { Label } from "./components/label/Label";
import { Input } from "./components/input/Input";
import { SegmentedInput } from "./components/segmented-input/SegmentedInput";
import { Svg } from "./components/svg/Svg";
import { Divider } from "./components/divider/Divider";
import { InputText } from "./components/input-text/InputText";
import { Submit } from "./components/submit/Submit";
import { InputSelect } from "./components/input-select/InputSelect";

function App() {
  return (
    <SequenceBoilerplate
      docsUrl="https://docs.sequence.build"
      githubUrl="https://github.com"
      name="Boilerplate Design System"
      description="Development environment"
    >
      <Pages initial="wallet">
        <RootPage />
        <InnerPage />
        <WalletPage />
      </Pages>
    </SequenceBoilerplate>
  );
}

function View({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-4">{children}</div>;
}

function WalletPage() {
  const handleSignMessage: FormHandler = (event, data) => [data, true];

  const handleVerifySignature: FormHandler = () => null;

  const handleSendTransaction: FormHandler = () => null;

  return (
    <Page name="wallet">
      <View>
        <Card title="Sign message" collapsable>
          <Form onAction={handleSignMessage}>
            <InputText name="message" />
            <Submit label="Sign" />
          </Form>
        </Card>

        <Card title="Verify Signature" collapsable>
          <Form onAction={handleVerifySignature}>
            <InputText name="address" />
            <InputText name="message" />
            <InputText name="signature" />
            <Submit label="Verify" />
          </Form>
        </Card>

        <Card title="Send Transaction" collapsable>
          <Form onAction={handleSendTransaction}>
            <div className="flex items-center gap-8">
              <Submit label="Send transaction" />
              <span className="text-grey-200 text-14">
                Send a transaction with your wallet
              </span>
            </div>
          </Form>
        </Card>
      </View>
    </Page>
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
          <Form className="flex flex-col gap-2">
            <Field name="wallet-address">
              <Label>Wallet address:</Label>
              <SegmentedInput subvariants={{ width: "full" }}>
                <SegmentedInput.Segment subvariants={{ pointer: "none" }}>
                  <Svg name="Wallet" width="20" />
                </SegmentedInput.Segment>

                <Input
                  type="text"
                  variant="transparent"
                  subvariants={{ width: "full" }}
                />

                <SegmentedInput.Segment>
                  <Button
                    variant="tiny"
                    className="self-center"
                    onClick={() => alert("disconnect")}
                  >
                    <Svg name="Signout" width="16" />
                    Disconnect
                  </Button>
                </SegmentedInput.Segment>
              </SegmentedInput>
            </Field>

            <InputSelect
              name="network"
              defaultValue="arbitrum_sepolia"
              options={[
                {
                  value: "arbitrum_sepolia",
                  label: "Arbitrum Sepolia",
                  icon: "https://assets.sequence.info/images/networks/medium/421614.webp?v5",
                },
                {
                  value: "ethereum",
                  label: "Ethereum",
                  icon: "https://assets.sequence.info/images/networks/medium/1.webp?v5",
                },
              ]}
            />

            <Field name="test-payments">
              <Label>Arbitrum Sepolia balance for test payments:</Label>
              <SegmentedInput subvariants={{ width: "full" }}>
                <Input
                  type="text"
                  variant="transparent"
                  subvariants={{ width: "full" }}
                />
                <SegmentedInput.Segment>
                  <Button
                    variant="tiny"
                    className="self-center flex-shrink-0"
                    onClick={() => alert("get test currency")}
                  >
                    <Svg name="ExternalLink" width="16" />
                    Get test currency
                  </Button>
                </SegmentedInput.Segment>
              </SegmentedInput>
            </Field>
          </Form>
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

        <Card collapsable title="Sign message">
          Sign message items
        </Card>

        <Card collapsable title="Verify signature">
          <Card>Verify signature items</Card>
        </Card>

        <Card collapsable title="Send transactions">
          Send transactions items
        </Card>
      </Group>
      <Divider />
    </Page>
  );
}

export default App;
