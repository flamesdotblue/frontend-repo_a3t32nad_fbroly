export default function ThemePicker({ theme, setTheme, processing, onProcess }) {
  const themes = [
    { id: 'light', name: 'Light' },
    { id: 'dark', name: 'Dark' },
    { id: 'blue', name: 'Blue' },
    { id: 'brand', name: 'Brand' },
  ]

  return (
    <section className="w-full">
      <div className="bg-white/70 backdrop-blur border rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          {themes.map(t => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition ${theme === t.id ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              {t.name}
            </button>
          ))}
        </div>
        <button
          onClick={onProcess}
          disabled={processing}
          className={`inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold text-white ${processing ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} `}
        >
          {processing ? 'Processing…' : 'Generate Themed Image'}
        </button>
      </div>
    </section>
  )
}
