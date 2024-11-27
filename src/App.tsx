import "./index.css";

import { SequenceDemoKit } from "./components/sequence-boilerplate/SequenceBoilerplate";
import { useState } from "react";
import { Button } from "./components/button/Button";
import { Select } from "./components/select/Select";
import { Action } from "./components/action/Action";
import { Field, Input, Label } from "./components/action/components";
import { Card } from "./components/card/Card";
import { Group } from "./components/group/Group";
function App() {
  const [currentPage, setPage] = useState("root");

  return (
    <SequenceDemoKit
      githubUrl="https://github.com"
      name="Sequence Kit Starter - Remix Cloudflare"
      description="Sequence demo squad"
    >
      <Page name="root" current={currentPage}>
        <Button
          onClick={() => setPage("inner")}
          variant="primary"
          mods={{ size: "sm" }}
        >
          Button
        </Button>
      </Page>

      <Page name="inner" current={currentPage}>
        <Group>
          <Group.Title>User info</Group.Title>
          <Card variant="primary">
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
          <Card>
            <Action intent="update_name" onSubmit={() => alert("submit")}>
              <Field name="name">
                <Label>Name</Label>
                <Input type="text" />
              </Field>
            </Action>
          </Card>
        </Group>
      </Page>
    </SequenceDemoKit>
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
