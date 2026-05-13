import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface OAuthPermission {
  title: string;
  description: string;
}

interface OAuthConnectScreenProps {
  providerName: string;
  providerIcon: string;
  permissions: OAuthPermission[];
  onConnect: () => void;
  redirectNote: string;
  subtitle: string;
  backHref?: string;
  ctaIconInvert?: boolean;
}

export default function OAuthConnectScreen({
  providerName,
  providerIcon,
  permissions,
  onConnect,
  redirectNote,
  subtitle,
  backHref = "/",
  ctaIconInvert = false,
}: OAuthConnectScreenProps) {
  return (
    <div className="min-h-screen bg-[#FAF9F9] flex items-start justify-center px-4 py-6">

      {/* Card */}
      <div className="w-full max-w-[540px] bg-[#F6F7F7] rounded-3xl ">

        {/* Back button */}
        <div className="px-6 pt-6 pb-0">
          <Link
            href={backHref}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0C0E0D] hover:opacity-70 transition-opacity w-fit"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M10 12L6 8L10 4"
                stroke="#0C0E0D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back
          </Link>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center px-8 pt-8 pb-10">

          {/* Provider icon — no bg for any provider, just the icon */}
          <div className="mb-6">
            <Image
              src={providerIcon}
              alt={`${providerName} logo`}
              width={58}
              height={58}
              className="object-contain"
            />
          </div>

          {/* Heading */}
          <h1 className="text-[28px] font-bold leading-tight text-[#0C0E0D] text-center mb-2">
            Connect your {providerName} account
          </h1>

          {/* Subtitle */}
          <p className="text-sm text-[#A1A1AA] text-center mb-8 max-w-[400px]">
            {subtitle}
          </p>

          {/* Permissions */}
          <div className="w-full mb-8">
            <p className="text-sm font-bold text-[#004C48] text-center mb-5">
              Anvila will be able to
            </p>

            <div className="flex flex-col gap-5 w-full">
              {permissions.map((permission, index) => (
                <div key={index} className="flex flex-col gap-0.5">
                  <span className="text-[15px] font-bold text-[#0C0E0D] leading-snug">
                    {permission.title}
                  </span>
                  <span className="text-sm text-[#52525B] leading-relaxed">
                    {permission.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA button */}
          <button
            onClick={onConnect}
            className={cn(
              "w-full h-12 rounded-lg text-[15px] font-semibold",
              "bg-[#004C48] hover:bg-[#0C5D56] text-white",
              "flex items-center justify-center gap-2.5",
              "transition-colors duration-150 cursor-pointer",
              "border-0 outline-none",
              "focus-visible:ring-2 focus-visible:ring-[#004C48] focus-visible:ring-offset-2"
            )}
            aria-label={`Connect with ${providerName}`}
          >
            <Image
              src={providerIcon}
              alt=""
              width={20}
              height={20}
              className={cn(
                "object-contain shrink-0",
                ctaIconInvert && "brightness-0 invert"
              )}
            />
            Connect with {providerName}
          </button>

          {/* Lock disclaimer */}
          <div className="flex items-center gap-2 mt-4">
            <Image
              src="/icons/lock.svg"
              alt=""
              width={14}
              height={14}
              className="shrink-0 opacity-60"
              aria-hidden="true"
            />
            <p className="text-[13px] text-[#A1A1AA]">
              {redirectNote}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}