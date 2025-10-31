import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sparkles, // Ícone para "IA"
  TrendingUp, // Ícone para "Ponto Forte"
  TrendingDown, // Ícone para "Ponto Crítico"
  Target, // Ícone para "Oportunidade"
} from "lucide-react";

// 1. DADOS FICTÍCIOS
// Em um app real, isso viria da sua API de IA (ex: OpenAI, Gemini)
// que leu todos os reviews e gerou este resumo.
const summaryData = {
  mainPositive:
    "Clientes elogiam consistentemente a 'qualidade do produto' e o 'profissionalismo' da equipe.",
  mainNegative:
    "O 'tempo de espera' é o principal driver de insatisfação, gerando 'frustração' e notas baixas.",
  mainOpportunity:
    "Clientes com notas 3-4 estrelas estão 'sugerindo melhorias no app', indicando uma clara oportunidade de melhoria de produto.",
};

/**
 * Um componente conciso para o topo da página que exibe
 * um resumo (simulado por IA) dos feedbacks textuais.
 */
export function FeedbackSummary() {
  return (
    <Card className="w-full mb-8">
      <CardHeader>
        {/* O header é responsivo: empilha em mobile, fica lado a lado em desktop */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          {/* Título e Ícone */}
          <div className="flex items-center gap-3 mb-2 sm:mb-0">
            <span className="shrink-0 rounded-lg bg-primary/10 p-2">
              <Sparkles className="h-6 w-6 text-primary" />
            </span>
            <div>
              <CardTitle className="text-lg sm:text-xl">
                Resumo Executivo
              </CardTitle>
              <CardDescription>
                Insights principais extraídos dos feedbacks textuais do período.
              </CardDescription>
            </div>
          </div>

          {/* (Opcional) Você pode adicionar um seletor de data aqui mais tarde */}
          {/* <DatePickerWithRange /> */}
        </div>
      </CardHeader>

      <CardContent>
        {/* Usar uma lista é muito mais conciso e legível do que um parágrafo */}
        <div className="space-y-4 text-sm text-foreground">
          {/* Ponto Forte */}
          <div className="flex items-start gap-3">
            <span className="shrink-0 pt-0.5">
              <TrendingUp className="h-5 w-5 text-green-600" />
            </span>
            <p>
              <strong className="text-green-600">Ponto Forte:</strong>{" "}
              {summaryData.mainPositive}
            </p>
          </div>

          {/* Ponto Crítico */}
          <div className="flex items-start gap-3">
            <span className="shrink-0 pt-0.5">
              <TrendingDown className="h-5 w-5 text-red-600" />
            </span>
            <p>
              <strong className="text-red-600">Ponto Crítico:</strong>{" "}
              {summaryData.mainNegative}
            </p>
          </div>

          {/* Oportunidade */}
          <div className="flex items-start gap-3">
            <span className="shrink-0 pt-0.5">
              <Target className="h-5 w-5 text-blue-600" />
            </span>
            <p>
              <strong className="text-blue-600">Oportunidade:</strong>{" "}
              {summaryData.mainOpportunity}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
