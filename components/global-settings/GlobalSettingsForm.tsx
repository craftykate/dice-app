"use client";

import { useState } from "react";
import { Button, Center, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useSettingsContext } from "@/store/settings";

export default function GlobalSettingsForm() {
  const { options, setOptions } = useSettingsContext();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, setErrorMessage] = useState("");

  const form = useForm({
    validateInputOnBlur: true,
    initialValues: {
      numDice: options.numDice,
      numSides: options.numSides,
      startNumber: options.startNumber,
      numSteps: options.numSteps,
    },
    validate: {
      numDice: (value) => (value < 1 ? "Must be greater than 0" : null),
      numSides: (value) => (value < 1 ? "Must be greater than 0" : null),
      startNumber: (value) => (value < 1 ? "Must be greater than 0" : null),
      numSteps: (value) => (value < 1 ? "Must be greater than 0" : null),
    },
  });

  const handleSubmit = (values: {
    numDice: number;
    numSides: number;
    startNumber: number;
    numSteps: number;
  }) => {
    setIsSubmitting(false);
    setOptions(values);
  };

  return (
    <form
      onSubmit={form.onSubmit(
        // If no errors
        (values) => {
          setIsSubmitting(true);
          handleSubmit(values);
        },
        // If errors
        (errors) => {
          const errWording =
            Object.keys(errors).length > 1 ? "errors" : "error";
          setErrorMessage(`Please fix the ${errWording} in the form`);
        }
      )}
    >
      <Center>
        <NumberInput
          required
          label="Number of dice"
          placeholder="2"
          min={1}
          {...form.getInputProps("numDice")}
        />
        <NumberInput
          required
          label="Number of sides"
          placeholder="6"
          min={1}
          {...form.getInputProps("numSides")}
        />
        <NumberInput
          required
          label="Starting number"
          placeholder="1"
          min={1}
          {...form.getInputProps("startNumber")}
        />
        <NumberInput
          label="Number of steps"
          placeholder="1"
          min={1}
          {...form.getInputProps("numSteps")}
        />
        <Button type="submit" loading={isSubmitting}>
          Submit
        </Button>
      </Center>
    </form>
  );
}
