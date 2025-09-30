import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Virto Network Website",
      description:
        "Uno de mis primeros proyectos trabajando con Virto, website del equipo siguiendo lineamientos de diseño de la marca.",
      image: "/virtowebsite_project.png",
      technologies: ["HTML", "CSS", "Javascript", "cobalt.rs", "Airtable", "Amplitude Analytics"],
      liveUrl: "https://virto.network/",
      githubUrl: "https://github.com/virto-network/website",
    },
    {
      title: "Virto Connect",
      description: "Componente web para abrir una sesión en la blockchain sin necesidad de crear una wallet web3.",
      image: "/virtoconnect_project.png",
      technologies: ["HTML", "CSS", "Javascript", "Web Components", "Gitbook", "Docker"],
      liveUrl: "https://demo.virto.dev/",
      githubUrl: "https://github.com/virto-network/virto-sdk",
    },
    {
      title: "Pharma Proof",
      description: "Privacy first prescription creator, where doctors could easily prescribe medicine for pacients, whom would exchange them with an NFT and a ZK proof of their health inssurance ownership.",
      image: "/weather-dashboard-interface.png",
      technologies: ["Next.js", "Typescript", "Tailwind", "Web3", "Midnight Blockchain"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Beacon Trace",
      description: "Web Application for Labs, Anmat, Doctors and Pacients, to know the origin of the medications, if they are verified and secure to use, and where they end up being used.",
      image: "/beacon_project.png",
      technologies: ["Next.js", "Typescript", "Tailwind", "Web3", "Flare Blockchain"],
      liveUrl: "https://beacon-io.vercel.app/",
      githubUrl: "linktr.ee/beaconn",
    },
    {
      title: "Impact Wallet",
      description: "Application to test mint, approve and transfer actions masked with an environmental purpose",
      image: "/impact.png",
      technologies: ["Next.js", "Typescript", "Vite", "Vitest", "Wagmi", "MaterialUI", "viem"],
      liveUrl: "https://impact-wallet-demo.vercel.app/",
      githubUrl: "https://github.com/ail3ngrimaldi/wonderland-fe",
    },
    {
      title: "ZK Web Component - Midnight Collaboration",
      description: "Web Component connected to the blockchain that can generate any ZK proof required by the organization that needs it. Easy to plug-in.",
      image: "/ZK_project.png",
      technologies: ["Next.js", "Typescript", "Tailwind", "Web3", "Midnight Blockchain", "ZK Proof"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-balance mb-4">Mis proyectos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Una selección de proyectos que demuestran mis habilidades técnicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver proyecto
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </a>
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
