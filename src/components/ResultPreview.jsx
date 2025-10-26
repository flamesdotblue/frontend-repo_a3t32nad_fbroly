import { Download } from 'lucide-react'

export default function ResultPreview({ processedUrl, onDownload }) {
  if (!processedUrl) return null

  return (
    <section className="w-full">
      <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
        <p className="text-sm font-medium text-white/80 mb-2">Result</p>
        <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black/20">
          <img src={processedUrl} alt="Processed" className="h-full w-full object-contain" />
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onDownload}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium px-4 py-2 rounded-lg shadow"
          >
            <Download size={18} /> Download PNG
          </button>
        </div>
      </div>
    </section>
  )
}
