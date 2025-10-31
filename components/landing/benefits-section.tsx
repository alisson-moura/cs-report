import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart3, Smile, Lightbulb } from "lucide-react";

export function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-muted w-full py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          O que o seu Relatório de R$ 20 vai revelar:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <BarChart3 className="w-8 h-8 text-primary" />
              <CardTitle>Pontos Fortes e Fracos</CardTitle>
            </CardHeader>
            <CardContent>
              Saiba onde agir. (Ex: &quot;Atendimento&quot; está com 70% de
              sentimento negativo).
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Smile className="w-8 h-8 text-primary" />
              <CardTitle>Perfil Emocional</CardTitle>
            </CardHeader>
            <CardContent>
              Descubra se seu prazo gera &quot;Raiva&quot; ou se seu produto
              gera &quot;Alegria&quot;.
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Lightbulb className="w-8 h-8 text-primary" />
              <CardTitle>Intenções Reais</CardTitle>
            </CardHeader>
            <CardContent>
              Filtre quem veio para &quot;Elogiar&quot;, &quot;Reclamar&quot; ou
              &quot;Sugerir&quot; melhorias valiosas.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
