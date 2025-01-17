import { useState, useEffect } from "react";
import { useSettingsContext } from "@/store/settings";
import { Paper, Group, Center, ActionIcon, Button } from "@mantine/core";
import { IconSettings } from "@tabler/icons-react";
import DiceFace from "./DiceFace";

export default function SingleDice() {
  const { options } = useSettingsContext();
  const [number, setNumber] = useState<number | null>(null);

  useEffect(() => {
    setNumber(null);
    setTimeout(() => {
      setNumber(
        Math.floor(Math.random() * options.numSides) + options.startNumber
      );
    }, 1000);
  }, [options.numSides, options.startNumber]);

  const handleRoll = () => {
    setNumber(null);
    setTimeout(() => {
      setNumber(
        Math.floor(Math.random() * options.numSides) + options.startNumber
      );
    }, 1000);
  };

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
        <DiceFace number={number} />
      </Center>
      <Group p="xs">
        <Button variant="outline">Hold</Button>
        <Button disabled={!number} onClick={handleRoll}>
          Roll
        </Button>
      </Group>
    </Paper>
  );
}
