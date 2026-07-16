import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const projects = [
  {
    title: 'Project One',
    description: 'A short description of this project and the problem it solves.',
    tags: ['React', 'TypeScript'],
  },
  {
    title: 'Project Two',
    description: 'A short description of this project and the problem it solves.',
    tags: ['Node', 'PostgreSQL'],
  },
  {
    title: 'Project Three',
    description: 'A short description of this project and the problem it solves.',
    tags: ['Vite', 'Tailwind'],
  },
]

function App() {
  return (
    <main className="mx-auto flex min-h-svh max-w-3xl flex-col gap-16 px-6 py-16">
      <section className="flex flex-col items-center gap-4 text-center">
        <Avatar className="size-20">
          <AvatarFallback className="text-lg">LC</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Lauren Curtis</h1>
          <p className="text-muted-foreground mt-1">
            Building things with code, one project at a time.
          </p>
        </div>
        <div className="flex gap-3">
          <a className={cn(buttonVariants())} href="mailto:lauren.n.curtis@gmail.com">
            Get in touch
          </a>
          <a
            className={cn(buttonVariants({ variant: 'outline' }))}
            href="https://github.com/lcurtis415"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>

      <Separator />

      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
