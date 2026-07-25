import { useData } from '@/lib/data'
import { ArrowUpRight, Mail, AtSign, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

type Project = {
  id: string
  title: string
  summary: string
  year: string
  role: string
  tags: string[]
  link: string
}

const PROJECTS_SEED: Project[] = [
  {
    id: 'aurora',
    title: 'Aurora Analytics',
    summary: 'A real-time metrics platform turning raw event streams into clear, decision-ready dashboards.',
    year: '2025',
    role: 'Design & Frontend',
    tags: ['React', 'D3', 'Design Systems'],
    link: '#',
  },
  {
    id: 'ledger',
    title: 'Ledger',
    summary: 'A calm personal-finance app that makes budgeting feel effortless rather than punishing.',
    year: '2024',
    role: 'Product Design',
    tags: ['Mobile', 'Fintech', 'Motion'],
    link: '#',
  },
  {
    id: 'fieldnotes',
    title: 'Fieldnotes',
    summary: 'A writing tool for researchers that keeps sources, drafts and citations in one connected canvas.',
    year: '2024',
    role: 'Full-stack',
    tags: ['TypeScript', 'Editor', 'Sync'],
    link: '#',
  },
  {
    id: 'orbit',
    title: 'Orbit',
    summary: 'A scheduling assistant that negotiates meeting times across teams without the email tennis.',
    year: '2023',
    role: 'Engineering',
    tags: ['Node', 'Calendars', 'AI'],
    link: '#',
  },
]

const SKILLS = [
  'Product Design',
  'React & TypeScript',
  'Design Systems',
  'Motion & Interaction',
  'Prototyping',
  'Frontend Architecture',
] as const

const SOCIALS = [
  { label: 'Email', href: 'mailto:hello@example.com', icon: Mail },
  { label: 'Twitter', href: '#', icon: AtSign },
  { label: 'Website', href: '#', icon: Globe },
] as const

export default function Home() {
  const { data: projects } = useData<Project[]>('projects', 'seed', PROJECTS_SEED)
  const items = projects ?? []

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="#top" className="font-heading text-sm font-semibold tracking-tight">
            Maya Okonkwo
          </a>
          <nav className="hidden items-center gap-8 sm:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button asChild size="sm" variant="secondary">
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="grid gap-8 py-24 md:py-32">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Designer & Frontend Engineer
          </p>
          <h1 className="max-w-3xl text-balance font-heading text-5xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-7xl">
            I build interfaces where craft and clarity meet.
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            I&apos;m Maya — a product designer and engineer based in Lisbon, shipping thoughtful
            digital products for teams that care about the details.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button asChild size="lg">
              <a href="#work">
                View selected work <ArrowUpRight className="ml-1 size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#about">About me</a>
            </Button>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="scroll-mt-20 border-t border-border/60 py-20">
          <div className="flex items-end justify-between gap-4 pb-10">
            <h2 className="font-heading text-2xl font-semibold tracking-tight">Selected work</h2>
            <span className="text-sm text-muted-foreground">{items.length} projects</span>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60">
            {items.map((project) => (
              <li key={project.id}>
                <a
                  href={project.link}
                  className="group grid gap-4 bg-card px-6 py-8 transition-colors hover:bg-muted md:grid-cols-[1fr_auto] md:items-center"
                >
                  <div className="grid gap-2">
                    <div className="flex items-center gap-3">
                      <h3 className="font-heading text-xl font-semibold tracking-tight">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    </div>
                    <p className="max-w-xl text-pretty text-muted-foreground">{project.summary}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground md:text-right">
                    <div className="font-medium text-foreground">{project.role}</div>
                    <div>{project.year}</div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* About */}
        <section
          id="about"
          className="grid scroll-mt-20 gap-12 border-t border-border/60 py-20 md:grid-cols-[1.4fr_1fr]"
        >
          <div className="grid gap-5">
            <h2 className="font-heading text-2xl font-semibold tracking-tight">About</h2>
            <p className="max-w-prose text-pretty text-lg leading-relaxed text-muted-foreground">
              Over the last eight years I&apos;ve worked across startups and studios, designing and
              building products end to end. I care most about the space between design and
              engineering — where a good idea either becomes something people love to use, or
              quietly falls apart.
            </p>
            <p className="max-w-prose text-pretty leading-relaxed text-muted-foreground">
              When I&apos;m not shipping, I write about interface craft, mentor junior designers, and
              spend too much time tuning typography.
            </p>
          </div>
          <div className="grid content-start gap-4">
            <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              What I do
            </h3>
            <ul className="grid gap-3">
              {SKILLS.map((skill) => (
                <li key={skill} className="flex items-baseline gap-3 text-foreground">
                  <span className="text-muted-foreground">—</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 border-t border-border/60 py-24">
          <div className="grid max-w-2xl gap-6">
            <h2 className="text-balance font-heading text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
              Let&apos;s build something worth using.
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              I&apos;m open to select freelance projects and collaborations. The fastest way to reach
              me is email.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {SOCIALS.map((social) => (
                <Button key={social.label} asChild variant="secondary">
                  <a href={social.href}>
                    <social.icon className="mr-1 size-4" /> {social.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Maya Okonkwo</span>
          <span>Designed & built in Lisbon</span>
        </div>
      </footer>
    </div>
  )
}
