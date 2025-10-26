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
        className="relative border-2 border-dashed rounded-2xl p-6 sm:p-8 bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition shadow-gray-200"
      >
        {!previewUrl ? (
          <div className="flex flex-col items-center justify-center gap-3 text-center py-8">
            <div className="h-14 w-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
              <ImageIcon />
            </div>
            <div>
              <p className="text-gray-800 font-medium">Drag & drop your slip image here</p>
              <p className="text-gray-500 text-sm">PNG, JPG up to ~10MB</p>
            </div>
            <button
              onClick={() => inputRef.current?.click()}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg shadow-sm"
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
              <p className="text-sm font-medium text-gray-700 mb-2">Original</p>
              <div className="aspect-video w-full overflow-hidden rounded-xl border bg-white">
                <img src={previewUrl} alt="Original" className="h-full w-full object-contain" />
              </div>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => inputRef.current?.click()}
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white font-medium px-4 py-2 rounded-lg"
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
