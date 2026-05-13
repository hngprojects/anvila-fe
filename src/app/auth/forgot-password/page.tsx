import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col p-6 md:p-10">
      {/* Branding Header */}
      <div className="flex items-center gap-2 mb-20">
        <div className="w-8 h-8 bg-[#004D4D] rounded-full flex items-center justify-center">
           <span className="text-white text-xs">A</span>
        </div>
        <span className="font-bold text-xl tracking-tight text-[#002B2B]">ANVILA</span>
      </div>

      {/* Centered Form */}
      <div className="flex-1 flex items-center justify-center">
        <ForgotPasswordForm />
      </div>
    </div>
  );
}