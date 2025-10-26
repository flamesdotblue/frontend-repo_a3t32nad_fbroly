import { Rocket } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full py-6">
      <div className="max-w-5xl mx-auto px-4 flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/30">
          <Rocket size={20} />
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
            Slip Cleaner – OCR + Themed Rebuild
          </h1>
          <p className="text-sm text-gray-600">
            Upload a slip image, extract the text, and regenerate it on a clean branded background.
          </p>
        </div>
      </div>
    </header>
  )
}
