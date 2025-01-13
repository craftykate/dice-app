import GlobalSettingsForm from "@/components/global-settings/GlobalSettingsForm";
import { Container } from "@mantine/core";

export default function Header() {
  return (
    <Container
      fluid
      p="sm"
      style={{ borderBottom: "1px solid var(--mantine-color-gray-3)" }}
    >
      <GlobalSettingsForm />
    </Container>
  );
}
