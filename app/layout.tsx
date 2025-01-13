import "@mantine/core/styles.layer.css";
import type { Metadata } from "next";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { SettingsContextProvider } from "../store/settings";
import { theme } from "@/theme";
import "./globals.css";
import Header from "@/components/layout/header/Header";

export const metadata: Metadata = {
  title: "Dice Rolling App",
  description: "Easy way to customize and roll dice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps} data-mantine-color-scheme="light">
      <head>
        <meta charSet="UTF-8" />
        <ColorSchemeScript />
      </head>
      <body>
        <SettingsContextProvider>
          <MantineProvider theme={theme}>
            <Header />
            {children}
          </MantineProvider>
        </SettingsContextProvider>
      </body>
    </html>
  );
}
