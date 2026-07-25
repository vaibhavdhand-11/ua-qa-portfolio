import { useData } from '@/lib/data'
import { ArrowUpRight, Mail, AtSign, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
    <div className="brand-surface min-h-screen">
      <header className="sticky top-0 z-40 border-b brand-border bg-[color:var(--brand-indigo)]/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="#top" className="font-heading text-sm font-semibold tracking-tight">
            Maya Okonkwo
          </a>
          <nav className="hidden items-center gap-8 sm:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm brand-on-muted transition-colors hover:text-[color:var(--brand-on)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button
            asChild
            size="sm"
            className="bg-[color:var(--brand-on)] text-[color:var(--brand-indigo)] hover:bg-[color:var(--brand-on-muted)]"
          >
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="top">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-28 md:py-36">
          <p className="text-sm font-medium uppercase tracking-[0.2em] brand-on-muted">
            Designer &amp; Frontend Engineer
          </p>
          <h1 className="max-w-3xl text-balance font-heading text-5xl font-bold leading-[1.02] tracking-[-0.04em] md:text-7xl">
            I build interfaces where craft and clarity meet.
          </h1>
          <div className="max-w-xl space-y-1 text-lg leading-relaxed brand-on-muted">
            <p className="text-pretty">
              Product designer and engineer based in Lisbon, shipping thoughtful digital products
              for teams that care about the details.
            </p>
            <p className="pt-1 font-bold uppercase tracking-wide text-[color:var(--brand-on)]">
              Relentlessly
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              asChild
              size="lg"
              className="bg-[color:var(--brand-on)] text-[color:var(--brand-indigo)] hover:bg-[color:var(--brand-on-muted)]"
            >
              <a href="#work">
                View selected work <ArrowUpRight className="ml-1 size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="text-[color:var(--brand-on)] hover:bg-[color-mix(in_oklch,var(--brand-on),transparent_88%)] hover:text-[color:var(--brand-on)]"
            >
              <a href="#about">About me</a>
            </Button>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-6">

        {/* Work */}
        <section id="work" className="scroll-mt-20 border-t brand-border py-20">
          <div className="flex items-end justify-between gap-4 pb-10">
            <h2 className="font-heading text-2xl font-semibold tracking-tight">Selected work</h2>
            <span className="text-sm brand-on-muted">{items.length} projects</span>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-xl border brand-border bg-[color-mix(in_oklch,var(--brand-on),transparent_85%)]">
            {items.map((project) => (
              <li key={project.id}>
                <a
                  href={project.link}
                  className="group grid gap-4 brand-card brand-card-hover px-6 py-8 transition-colors md:grid-cols-[1fr_auto] md:items-center"
                >
                  <div className="grid gap-2">
                    <div className="flex items-center gap-3">
                      <h3 className="font-heading text-xl font-semibold tracking-tight">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="size-4 brand-on-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--brand-on)]" />
                    </div>
                    <p className="max-w-xl text-pretty brand-on-muted">{project.summary}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="brand-chip rounded-md px-2 py-0.5 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm brand-on-muted md:text-right">
                    <div className="font-medium text-[color:var(--brand-on)]">{project.role}</div>
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
          className="grid scroll-mt-20 gap-12 border-t brand-border py-20 md:grid-cols-[1.4fr_1fr]"
        >
          <div className="grid gap-5">
            <h2 className="font-heading text-2xl font-semibold tracking-tight">About</h2>
            <p className="max-w-prose text-pretty text-lg leading-relaxed brand-on-muted">
              Over the last eight years I&apos;ve worked across startups and studios, designing and
              building products end to end. I care most about the space between design and
              engineering — where a good idea either becomes something people love to use, or
              quietly falls apart.
            </p>
            <p className="max-w-prose text-pretty leading-relaxed brand-on-muted">
              When I&apos;m not shipping, I write about interface craft, mentor junior designers, and
              spend too much time tuning typography.
            </p>
          </div>
          <div className="grid content-start gap-4">
            <h3 className="text-sm font-medium uppercase tracking-[0.2em] brand-on-muted">
              What I do
            </h3>
            <ul className="grid gap-3">
              {SKILLS.map((skill) => (
                <li key={skill} className="flex items-baseline gap-3">
                  <span className="brand-on-muted">—</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 border-t brand-border py-24">
          <div className="grid max-w-2xl gap-6">
            <h2 className="text-balance font-heading text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
              Let&apos;s build something worth using.
            </h2>
            <p className="text-pretty text-lg leading-relaxed brand-on-muted">
              I&apos;m open to select freelance projects and collaborations. The fastest way to reach
              me is email.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {SOCIALS.map((social, index) => (
                <Button
                  key={social.label}
                  asChild
                  className={
                    index === 0
                      ? 'bg-[color:var(--brand-on)] text-[color:var(--brand-indigo)] hover:bg-[color:var(--brand-on-muted)]'
                      : 'brand-chip hover:bg-[color-mix(in_oklch,var(--brand-on),transparent_80%)]'
                  }
                >
                  <a href={social.href}>
                    <social.icon className="mr-1 size-4" /> {social.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t brand-border">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm brand-on-muted sm:flex-row">
          <span>© {new Date().getFullYear()} Maya Okonkwo</span>
          <span>Designed &amp; built in Lisbon</span>
        </div>
      </footer>
    </div>
  )
}
