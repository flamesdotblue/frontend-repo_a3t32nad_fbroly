import { Sparkles } from 'lucide-react'

export default function ThemePicker({ theme, setTheme, processing, onProcess }) {
  const themes = [
    { id: 'light', name: 'Light', swatch: 'from-white to-slate-100' },
    { id: 'dark', name: 'Dark', swatch: 'from-slate-900 to-slate-800' },
    { id: 'blue', name: 'Blue', swatch: 'from-blue-100 to-blue-300' },
    { id: 'brand', name: 'Brand', swatch: 'from-fuchsia-100 to-purple-200' },
    { id: 'purple', name: 'Purple', swatch: 'from-violet-200 to-fuchsia-300' },
    { id: 'emerald', name: 'Emerald', swatch: 'from-emerald-100 to-emerald-300' },
    { id: 'rose', name: 'Rose', swatch: 'from-rose-100 to-rose-300' },
    { id: 'slate', name: 'Slate', swatch: 'from-slate-100 to-slate-300' },
    { id: 'cyber', name: 'Cyber', swatch: 'from-indigo-900 to-fuchsia-800' },
  ]

  return (
    <section className="w-full">
      <div className="rounded-2xl p-4 sm:p-5 bg-white/10 backdrop-blur border border-white/10 text-white">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="text-fuchsia-300" size={18} />
              <p className="text-sm font-medium text-white/90">Choose a theme</p>
            </div>
            <button
              onClick={onProcess}
              disabled={processing}
              className={`inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold text-white transition shadow-lg ${processing ? 'bg-white/20 cursor-not-allowed' : 'bg-gradient-to-r from-fuchsia-500 to-indigo-500 hover:from-fuchsia-600 hover:to-indigo-600'}`}
            >
              {processing ? 'Processing…' : 'Generate Themed Image'}
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {themes.map(t => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={`group relative overflow-hidden rounded-xl p-3 text-left border transition focus:outline-none ${theme === t.id ? 'border-fuchsia-400/60 ring-2 ring-fuchsia-400/40' : 'border-white/10 hover:border-white/30'}`}
              >
                <div className={`h-10 rounded-lg bg-gradient-to-br ${t.swatch}`} />
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs font-medium text-white/90">{t.name}</span>
                  <span className={`h-2.5 w-2.5 rounded-full ${theme === t.id ? 'bg-fuchsia-400' : 'bg-white/30'}`} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
