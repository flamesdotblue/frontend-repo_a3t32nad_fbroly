import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full h-[46vh] sm:h-[56vh] md:h-[64vh] overflow-hidden rounded-b-3xl">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for vibe; pointer-events-none so Spline remains interactive */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(168,85,247,0.25),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_500px_at_90%_10%,rgba(59,130,246,0.25),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0c10]/20 to-[#0b0c10]" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-4 flex items-end pb-10">
        <div className="backdrop-blur-sm bg-black/20 border border-white/10 rounded-2xl p-4 sm:p-6 text-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Slip cleaner
          </h1>
          <p className="mt-2 text-sm sm:text-base text-white/80 max-w-xl">
            Extract text from receipts and slips, then regenerate on bold, brand-ready backgrounds.
          </p>
        </div>
      </div>
    </section>
  )
}
