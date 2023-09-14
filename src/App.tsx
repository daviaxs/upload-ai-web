import { Github } from 'lucide-react'
import { Button } from './components/ui/button'
import { Separator } from './components/ui/separator'

export function App() {
  return (
    <div className="min-h-screen">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex gap-5 items-center">
          <span className="text-sm text-muted-foreground">
            Desenvolvido com 💜 no NLW da Rocketseat
          </span>

          <Separator orientation="vertical" className="h-6" />

          <Button className="flex items-center gap-3" variant="outline">
            <Github className="h-4 w-4" />
            Github
          </Button>
        </div>
      </div>
    </div>
  )
}
