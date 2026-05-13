import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect Account",
  description: "Connect your account to Anvila",
};

export default function ConnectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}