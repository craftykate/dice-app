import { Paper, Group, Center, ActionIcon, Button } from "@mantine/core";
import { IconSettings } from "@tabler/icons-react";
import DiceFace from "./DiceFace";

export default function SingleDice() {
  return (
    <Paper withBorder>
      <Group justify="flex-end">
        <ActionIcon variant="white">
          <IconSettings
            stroke={1.5}
            color="gray"
            style={{
              cursor: "pointer",
            }}
          />
        </ActionIcon>
      </Group>
      <Center>
        <DiceFace />
      </Center>
      <Group p="xs">
        <Button variant="outline">Hold</Button>
        <Button>Roll</Button>
      </Group>
    </Paper>
  );
}
