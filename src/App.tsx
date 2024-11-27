import "./index.css";

import { SequenceBoilerplate } from "./components/sequence-boilerplate/SequenceBoilerplate";
import { useState } from "react";

// import { Action } from "./components/action/Action";
// import { Field, Input, Label } from "./components/action/components";
import { Card, Group, Button, Select } from "./components";

function App() {
  const [currentPage, setPage] = useState("root");

  return (
    <SequenceBoilerplate
      githubUrl="https://github.com"
      name="Sequence Kit Starter - Remix Cloudflare"
      description="Sequence demo squad"
    >
      <Page name="root" current={currentPage}>
        <Button
          onClick={() => setPage("inner")}
          variant="primary"
          mods={{ size: "lg" }}
        >
          Connect
        </Button>
      </Page>

      <Page name="inner" current={currentPage}>
        <Group>
          <Group.Title>User info</Group.Title>
          <Card>
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
      </Page>
    </SequenceBoilerplate>
  );
}

function Page({
  children,
  name,
  current,
}: {
  children: React.ReactNode;
  name: string;
  current: string;
}) {
  if (name !== current) return null;

  return children;
}

export default App;
