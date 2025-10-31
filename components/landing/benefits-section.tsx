import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DollarSign, Zap, Microscope } from "lucide-react";

export function BenefitsSection() {
  return (
    <section
      id="beneficios"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Menos tempo, mais inteligência.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center">
          <CardHeader>
            <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
            <CardTitle>Velocidade e Custo</CardTitle>
          </CardHeader>
          <CardContent>
            Receba insights que custariam milhares de reais e semanas de
            trabalho de uma agência, por um preço simbólico e em menos de 24
            horas.
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <Microscope className="w-10 h-10 text-primary mx-auto mb-4" />
            <CardTitle>Profundidade da Análise</CardTitle>
          </CardHeader>
          <CardContent>
            Nossa IA vai além da nota média para revelar o &quot;porquê&quot;
            por trás do feedback, analisando sentimentos, emoções e os tópicos
            específicos que os clientes comentam.
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <DollarSign className="w-10 h-10 text-primary mx-auto mb-4" />
            <CardTitle>Custo-Benefício Imbatível</CardTitle>
          </CardHeader>
          <CardContent>
            Pague uma única vez e tenha acesso vitalício ao seu painel. Sem
            mensalidades, sem surpresas. É o fim da análise manual e o começo da
            gestão inteligente.
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
