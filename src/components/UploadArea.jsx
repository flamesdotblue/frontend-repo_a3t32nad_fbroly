import { useCallback, useRef } from 'react'
import { ImageIcon, Upload } from 'lucide-react'

export default function UploadArea({ file, setFile, previewUrl, setPreviewUrl }) {
  const inputRef = useRef(null)

  const onSelectFile = useCallback((e) => {
    const f = e.target.files?.[0]
    if (!f) return
    setFile(f)
    const url = URL.createObjectURL(f)
    setPreviewUrl(url)
  }, [setFile, setPreviewUrl])

  const onDrop = useCallback((e) => {
    e.preventDefault()
    const f = e.dataTransfer.files?.[0]
    if (!f) return
    setFile(f)
    const url = URL.createObjectURL(f)
    setPreviewUrl(url)
  }, [setFile, setPreviewUrl])

  const onDragOver = (e) => e.preventDefault()

  return (
    <section className="w-full">
      <div
        onDrop={onDrop}
        onDragOver={onDragOver}
        className="relative border border-white/10 rounded-2xl p-6 sm:p-8 bg-white/5 backdrop-blur shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] transition"
      >
        {!previewUrl ? (
          <div className="flex flex-col items-center justify-center gap-3 text-center py-8">
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white flex items-center justify-center">
              <ImageIcon />
            </div>
            <div>
              <p className="text-white font-medium">Drag & drop your slip image here</p>
              <p className="text-white/70 text-sm">PNG, JPG up to ~10MB</p>
            </div>
            <button
              onClick={() => inputRef.current?.click()}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-4 py-2 rounded-lg shadow"
            >
              <Upload size={18} /> Choose file
            </button>
            <input
              ref={inputRef}
              onChange={onSelectFile}
              type="file"
              accept="image/png,image/jpeg,image/jpg"
              className="hidden"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-medium text-white/80 mb-2">Original</p>
              <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black/20">
                <img src={previewUrl} alt="Original" className="h-full w-full object-contain" />
              </div>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => inputRef.current?.click()}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-4 py-2 rounded-lg border border-white/10"
              >
                Change image
              </button>
            </div>
            <input
              ref={inputRef}
              onChange={onSelectFile}
              type="file"
              accept="image/png,image/jpeg,image/jpg"
              className="hidden"
            />
          </div>
        )}
      </div>
    </section>
  )
}
