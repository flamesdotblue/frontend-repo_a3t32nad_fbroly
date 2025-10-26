import { Download } from 'lucide-react'

export default function ResultPreview({ processedUrl, onDownload }) {
  if (!processedUrl) return null

  return (
    <section className="w-full">
      <div className="bg-white/70 backdrop-blur border rounded-2xl p-6 shadow-sm">
        <p className="text-sm font-medium text-gray-700 mb-2">Result</p>
        <div className="aspect-video w-full overflow-hidden rounded-xl border bg-white">
          <img src={processedUrl} alt="Processed" className="h-full w-full object-contain" />
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onDownload}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded-lg"
          >
            <Download size={18} /> Download PNG
          </button>
        </div>
      </div>
    </section>
  )
}
