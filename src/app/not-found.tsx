import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-white text-black min-h-screen flex items-center justify-center p-6 text-center select-none selection:bg-[#ff4a00] selection:text-white pt-24">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-[#ff4a00] block mb-2">
          ERROR 404 • SYSTEM STATUS
        </span>

        <h1 className="font-['Anton',Impact,sans-serif] text-[clamp(6rem,16vw,14rem)] leading-[0.85] text-black mb-4">
          404<span className="text-[#ff4a00]">.</span>
        </h1>

        <h2 className="font-['Anton',Impact,sans-serif] text-2xl sm:text-3xl uppercase tracking-tight text-black mb-4">
          PAGE NOT FOUND
        </h2>

        <p className="font-['Space_Grotesk',sans-serif] text-sm text-neutral-600 max-w-md mx-auto mb-8 leading-relaxed">
          The requested route does not exist or has been relocated. Return to the home canvas to continue exploring.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#ff4a00] hover:bg-[#e04000] text-white font-['Space_Grotesk',sans-serif] font-black text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-[1.02] cursor-pointer"
        >
          <span>RETURN TO HOME</span>
          <span>↗</span>
        </Link>
      </div>
    </div>
  );
}

