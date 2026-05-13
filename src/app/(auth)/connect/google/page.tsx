"use client";

import OAuthConnectScreen from "@/components/connect/OAuthConnectScreen";
import type { OAuthPermission } from "@/components/connect/OAuthConnectScreen";

const GOOGLE_PERMISSIONS: OAuthPermission[] = [
  {
    title: "View projects",
    description: "See a list of your projects and their details.",
  },
  {
    title: "Create projects",
    description: "Create new projects in your workspaces.",
  },
  {
    title: "Manage repository contents",
    description: "Add files, folders and configurations",
  },
  {
    title: "Read organization membership",
    description: "View organizations you belong to",
  },
];

export default function ConnectGooglePage() {
  function handleConnect() {
    // TODO: wire up Google OAuth flow
    console.log("Connect Google");
  }

  return (
    <OAuthConnectScreen
      providerName="Google"
      providerIcon="/icons/google.svg"
      providerIconBg={false}
      subtitle="Anvila is an AI software designed to build personalities and skills for technical and non-technical users."
      permissions={GOOGLE_PERMISSIONS}
      onConnect={handleConnect}
      redirectNote="You will be redirected to Google to authorize the application"
      ctaIconInvert={false}
      backHref="/"
    />
  );
}