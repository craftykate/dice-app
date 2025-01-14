"use client";

import { Group } from "@mantine/core";
import { useSettingsContext } from "@/store/settings";
import SingleDice from "./SingleDice";

export default function AllDice() {
  const { options } = useSettingsContext();

  const diceArr = Array.from({ length: options.numDice }, (_, index) => (
    <SingleDice key={index} />
  ));

  return <Group>{diceArr}</Group>;
}
