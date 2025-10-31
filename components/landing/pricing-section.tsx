import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

const features = [
  "Análise de Sentimento (Positivo/Neutro/Negativo)",
  "Análise de Aspectos (Atendimento, Preço, etc.)",
  "Perfil Emocional (Raiva, Alegria, Frustração...)",
  "Análise de Intenções (Elogio, Reclamação, Sugestão)",
  "Resumo Executivo com IA",
  "Chat com IA para explorar seus dados",
  "Exportação para PDF e Excel",
  "Acesso vitalício ao painel",
];

export function PricingSection() {
  return (
    <section
      id="preco"
      className="bg-muted w-full relative py-16 md:py-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Um preço único para um insight completo.
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-md text-balance text-lg">
            Sem mensalidade, sem pegadinha. Pague apenas uma vez e acesse seu relatório para sempre.
          </p>
        </div>
        <div className="mt-8 md:mt-16">
          <Card className="relative">
            <div className="grid items-center gap-12 divide-y p-12 md:grid-cols-2 md:divide-x md:divide-y-0">
              <div className="pb-12 text-center md:pb-0 md:pr-12">
                <h3 className="text-2xl font-semibold">Relatório Completo</h3>
                <p className="mt-2 text-lg">
                  Um painel de BI completo sobre seu negócio.
                </p>

                <span className="mb-2 mt-12 inline-block text-6xl font-bold">
                  <span className="text-4xl">R$</span>20
                </span>
                <p className="text-sm text-muted-foreground">
                  taxa única (pague só uma vez)
                </p>

                <div className="flex justify-center mt-8">
                  <Button asChild size="lg">
                    <Link href="#solicitar">Solicitar minha Análise</Link>
                  </Button>
                </div>
              </div>
              <div className="relative pt-12 md:pt-0 md:pl-12">
                <p className="text-sm font-semibold text-muted-foreground mb-4">
                  O seu relatório completo inclui:
                </p>
                <ul role="list" className="space-y-4">
                  {features.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check
                        className="text-primary size-3"
                        strokeWidth={3.5}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
