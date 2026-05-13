"use client";

import OAuthConnectScreen from "@/components/connect/OAuthConnectScreen";
import type { OAuthPermission } from "@/components/connect/OAuthConnectScreen";

const GITHUB_PERMISSIONS: OAuthPermission[] = [
  {
    title: "Read your user profile and email address",
    description: "Basic account information",
  },
  {
    title: "Read and write repositories",
    description: "Create, update and manage repositories",
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

export default function ConnectGitHubPage() {
  function handleConnect() {
    // TODO: wire up GitHub OAuth flow
    console.log("Connect GitHub");
  }

  return (
    <OAuthConnectScreen
      providerName="GitHub"
      providerIcon="/icons/github.svg"
      providerIconBg={true}
      subtitle="Anvila needs access to create and manage repositories for AI agents"
      permissions={GITHUB_PERMISSIONS}
      onConnect={handleConnect}
      redirectNote="You will be redirected to GitHub to authorize the application"
      ctaIconInvert={true}
      backHref="/"
    />
  );
}