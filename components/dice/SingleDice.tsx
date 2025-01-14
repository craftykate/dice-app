import { Paper, Group, Center } from "@mantine/core";
import DiceFace from "./DiceFace";

export default function SingleDice() {
  return (
    <Paper withBorder>
      <Group>top row</Group>
      <Center>
        <DiceFace />
      </Center>
      <Group>bottom row</Group>
    </Paper>
  );
}
