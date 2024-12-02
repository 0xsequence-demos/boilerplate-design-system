import "./index.css";

import { SequenceBoilerplate } from "./components/sequence-boilerplate/SequenceBoilerplate";

// import { Action } from "./components/action/Action";
// import { Field, Input, Label } from "./components/action/components";
import { Card, Group, Button } from ".";
import { Select } from "./components/select/Select";
import { Page, Pages, usePage } from "./Page";
import { Action } from "./components/action/Action";
import { Field } from "./components/action/components";
import { Label } from "./components/label/Label";
import { Input } from "./components/input/Input";
import { SegmentedInput } from "./components/segmented-input/SegmentedInput";
import { Svg } from "./components/svg/Svg";
import { Divider } from "./components/divider/Divider";
import { useState, ChangeEvent } from "react";

function App() {
  return (
    <SequenceBoilerplate
      docsUrl="https://docs.sequence.build"
      githubUrl="https://github.com"
      name="Boilerplate Design System"
      description="Development environment"
    >
      <Pages initial="inner">
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
  return (
    <Page name="wallet">
      <View>
        <Card.Collapsable>
          <Card.Summary>Sign message</Card.Summary>
          <Card.Body>
            <Action intent="">
              <Field name="message">
                <Label>Message</Label>
                <Input subvariants={{ width: "full" }} />
              </Field>

              <Button
                type="submit"
                variant="primary"
                subvariants={{ flex: "start" }}
              >
                Sign
              </Button>
            </Action>
          </Card.Body>
        </Card.Collapsable>

        <Card.Collapsable>
          <Card.Summary>Verify Signature</Card.Summary>
          <Card.Body>
            <Action intent="verify_signature">
              <Field name="address">
                <Label>Address</Label>
                <Input subvariants={{ width: "full" }} />
              </Field>
              <Field name="message">
                <Label>Message</Label>
                <Input subvariants={{ width: "full" }} />
              </Field>

              <Field name="signature">
                <Label>Signature</Label>
                <Input subvariants={{ width: "full" }} />
              </Field>

              <Button
                type="submit"
                variant="primary"
                subvariants={{ flex: "start" }}
              >
                Sign
              </Button>
            </Action>
          </Card.Body>
        </Card.Collapsable>

        <Card.Collapsable>
          <Card.Summary>Send Transaction</Card.Summary>
          <Card.Body>
            <Action intent="verify_signature">
              <div className="flex items-center gap-8">
                <Button
                  type="submit"
                  variant="primary"
                  subvariants={{ flex: "start" }}
                >
                  Send transaction
                </Button>
                <span className="text-grey-200 text-14">
                  Send a transaction with your wallet
                </span>
              </div>
            </Action>
          </Card.Body>
        </Card.Collapsable>
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
          <Action intent="user_info" className="flex flex-col gap-2">
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

            <Field name="network">
              <Label>Network:</Label>
              <Select defaultValue="arbitrum_sepolia">
                <Select.Options
                  items={[
                    {
                      value: "arbitrum_sepolia",
                      label: "Arbitrum Sepolia",
                      icon: "https://assets.sequence.info/images/networks/large/1.webp?v5",
                    },
                    {
                      value: "value2",
                      label: "Value Number 2",
                      icon: "https://assets.sequence.info/images/networks/large/3.webp?v5",
                    },
                  ]}
                />
              </Select>
            </Field>

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
