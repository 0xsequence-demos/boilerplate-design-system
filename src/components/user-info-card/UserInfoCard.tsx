// import { Button } from "../button/Button";
// import { Card } from "../card/Card";
// import { Field } from "../field/Field";
// import { Input } from "../input/Input";
// import { Label } from "../label/Label";
// import { NetworkSwitchInputSelect } from "../network-switch-input-select/NetworkSwitchInputSelect";
// import { SegmentedInput } from "../segmented-input/SegmentedInput";
// import { ShowAddressWithDisconnect } from "../show-address-with-disconnect/ShowAddressWithDisconnect";

// export function UserInfoCard() {
//   return (
//     <Card style={{ gap: "1rem", display: "flex", flexDirection: "column" }}>
//       <ShowAddressWithDisconnect
//         address={address}
//         onDisconnect={() => disconnect()}
//       />

//       <NetworkSwitchInputSelect chainId={chain?.id?.toString()} />

//       <Field name="test-payments">
//         <Label>{chain.name} balance for test payments:</Label>
//         <SegmentedInput subvariants={{ width: "full" }}>
//           <Input
//             type="text"
//             variant="transparent"
//             subvariants={{ width: "full" }}
//           />
//           <SegmentedInput.Segment>
//             <Button
//               variant="tiny"
//               className="self-center flex-shrink-0"
//               // onClick={() => alert("get test currency")}
//             >
//               {/* <Svg name="ExternalLink" width="16" /> */}
//               Get test currency
//             </Button>
//           </SegmentedInput.Segment>
//         </SegmentedInput>
//       </Field>
//     </Card>
//   );
// }
