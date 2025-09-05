import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-balance mb-4">Sobre mí</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conoce más sobre mi experiencia y pasión por el desarrollo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Mi historia</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Soy una desarrolladora Full Stack con más de 3 años de experiencia creando aplicaciones web modernas y
                  escalables. Mi pasión por la tecnología comenzó durante mis estudios universitarios y desde entonces
                  no he parado de aprender.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Me especializo en React, Next.js, Node.js y bases de datos modernas. Disfruto trabajando en equipos
                  colaborativos y siempre busco las mejores prácticas para entregar código limpio y mantenible.
                </p>
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm py-1 px-3">
                Trabajo en equipo
              </Badge>
              <Badge variant="secondary" className="text-sm py-1 px-3">
                Resolución de problemas
              </Badge>
              <Badge variant="secondary" className="text-sm py-1 px-3">
                Aprendizaje continuo
              </Badge>
              <Badge variant="secondary" className="text-sm py-1 px-3">
                Comunicación efectiva
              </Badge>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-primary/20">
                <img src="/professional-developer-portrait.png" alt="Ailén Grimaldi" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
