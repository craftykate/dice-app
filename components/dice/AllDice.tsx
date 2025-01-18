"use client";

import { useEffect, useState } from "react";
import { Button, Group } from "@mantine/core";
import { useSettingsContext } from "@/store/settings";
import SingleDice from "./SingleDice";

export default function AllDice() {
  const { options } = useSettingsContext();
  const [allDice, setAllDice] = useState(
    Array.from({ length: options.numDice }, (_, index) => (
      <SingleDice key={Date.now() + index} />
    ))
  );

  useEffect(() => {
    setAllDice(
      Array.from({ length: options.numDice }, (_, index) => (
        <SingleDice key={Date.now() + index} />
      ))
    );
  }, [options.numDice, options.numSides, options.startNumber]);

  const rollAll = () => {
    setAllDice(
      Array.from({ length: options.numDice }, (_, index) => (
        <SingleDice key={Date.now() + index} />
      ))
    );
  };

  return (
    <Group>
      <Button type="button" onClick={rollAll}>
        Roll All
      </Button>
      {allDice}
    </Group>
  );
}
