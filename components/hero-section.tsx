"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern-minimal.jpg')] opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-balance">
              Hola, soy <span className="text-primary">Ailén Grimaldi</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Desarrolladora Full Stack apasionada por crear experiencias digitales excepcionales
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={scrollToProjects} className="text-lg px-8 py-6 font-semibold">
              Ver mis proyectos
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex gap-4">
              <a href="https://github.com/ail3ngrimaldi" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="h-12 w-12 bg-transparent hover:!bg-primary hover:!text-primary-foreground">
                  <Github className="h-6 w-6" />
                </Button>
              </a>
              <a href="https://linkedin.com/in/ailenrociog" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="h-12 w-12 bg-transparent hover:!bg-primary hover:!text-primary-foreground">
                  <Linkedin className="h-6 w-6" />
                </Button>
              </a>
              <a href="mailto:ailenrgrimaldi@gmail.com">
                <Button variant="outline" size="icon" className="h-12 w-12 bg-transparent hover:!bg-primary hover:!text-primary-foreground">
                  <Mail className="h-6 w-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => {
            const element = document.querySelector("#about")
            element?.scrollIntoView({ behavior: "smooth" })
          }}
          className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}
