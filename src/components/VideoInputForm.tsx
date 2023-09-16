import { FileVideo, Upload } from 'lucide-react'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Separator } from './ui/separator'
import { Textarea } from './ui/textarea'

export function VideoInputForm() {
  function handleFileSelected() {}

  return (
    <form className="space-y-6 rounded-md">
      <label
        htmlFor="video"
        className="border flex aspect-video cursor-pointer border-dashed rounded-lg text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-slate-900/50 transition-colors"
      >
        <FileVideo className="h-8 w-8" />
        Selecione um vídeo
      </label>

      <input
        type="file"
        id="video"
        accept="video/mp4"
        className="sr-only"
        onChange={handleFileSelected}
      />

      <Separator />

      <div className="space-y-2">
        <Label htmlFor="transcription_prompt">Prompt de transcrição</Label>
        <Textarea
          id="transcription_prompt"
          className="h-20 leading-relaxed resize-none"
          placeholder="Inclua palavras-chaves mencionadas no vídeo separadas por (,)"
        />
      </div>

      <Button
        type="submit"
        className="w-full p-6 flex items-center text-white gap-4"
      >
        Carregar vídeo <Upload className="h-4 w-4" />
      </Button>
    </form>
  )
}
