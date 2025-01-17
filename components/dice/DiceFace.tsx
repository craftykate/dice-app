import { Paper, ActionIcon } from "@mantine/core";

export default function DiceFace({ number }: { number: number | null }) {
  return (
    <Paper withBorder>
      {number ? (
        number
      ) : (
        <ActionIcon loading variant="white" loaderProps={{ type: "oval" }} />
      )}
    </Paper>
  );
}
