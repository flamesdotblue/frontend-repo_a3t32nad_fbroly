import { useMemo, useState } from 'react'
import Header from './components/Header'
import UploadArea from './components/UploadArea'
import ThemePicker from './components/ThemePicker'
import ResultPreview from './components/ResultPreview'

function App() {
  const [file, setFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState('')
  const [processedUrl, setProcessedUrl] = useState('')
  const [theme, setTheme] = useState('light')
  const [processing, setProcessing] = useState(false)
  const API_BASE = useMemo(() => {
    const env = import.meta.env.VITE_BACKEND_URL
    return env && env.length > 0 ? env : 'http://localhost:8000'
  }, [])

  const onProcess = async () => {
    if (!file) return
    setProcessing(true)
    setProcessedUrl('')
    try {
      const fd = new FormData()
      fd.append('file', file)
      fd.append('theme', theme)
      const res = await fetch(`${API_BASE}/process`, {
        method: 'POST',
        body: fd,
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err?.error || 'Processing failed')
      }
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      setProcessedUrl(url)
    } catch (e) {
      alert(e.message || 'Something went wrong')
    } finally {
      setProcessing(false)
    }
  }

  const onDownload = () => {
    if (!processedUrl) return
    const link = document.createElement('a')
    link.href = processedUrl
    link.download = 'themed-slip.png'
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-sky-50">
      <Header />
      <main className="max-w-5xl mx-auto px-4 pb-16 space-y-6">
        <UploadArea file={file} setFile={setFile} previewUrl={previewUrl} setPreviewUrl={setPreviewUrl} />
        <ThemePicker theme={theme} setTheme={setTheme} processing={processing} onProcess={onProcess} />
        <ResultPreview processedUrl={processedUrl} onDownload={onDownload} />
        <p className="text-center text-xs text-gray-500">Prototype build: runs OCR server-side and rebuilds the image with your selected theme.</p>
      </main>
    </div>
  )
}

export default App
