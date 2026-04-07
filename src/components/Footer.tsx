export default function Footer() {
  return (
    <footer className="w-full py-12 mt-auto bg-slate-50">
      <div className="bg-slate-200 h-[1px] w-full mb-12"></div>
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto space-y-4 md:space-y-0">
        <p className="text-xs font-medium text-slate-500">
          © 2024 Veritas Lens. AI-Powered Integrity.
        </p>
        <div className="flex gap-6">
          <a className="text-slate-500 hover:text-primary transition-colors text-xs font-medium" href="#">Privacy Policy</a>
          <a className="text-slate-500 hover:text-primary transition-colors text-xs font-medium" href="#">Terms of Service</a>
          <a className="text-slate-500 hover:text-primary transition-colors text-xs font-medium" href="#">API Documentation</a>
          <a className="text-slate-500 hover:text-primary transition-colors text-xs font-medium" href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
