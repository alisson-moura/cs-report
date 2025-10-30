"use client";
import { useState } from "react"; // 1. Importar useState
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // 2. Importar Select

// --- Cores e Tooltip (Movidos para dentro do arquivo) ---

const SENTIMENT_COLORS = {
  Positivo: "hsl(142, 76%, 36%)",
  Negativo: "hsl(0, 84%, 60%)",
};

const CustomTooltipTrend = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <p className="mb-2 font-bold">{label}</p>
        <div className="space-y-1">
          {payload.map((entry: any) => (
            <div
              key={entry.dataKey}
              className="flex items-center justify-between gap-4 text-sm"
            >
              <div className="flex items-center gap-2">
                <div
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: entry.color }}
                />
                <span className="capitalize text-muted-foreground">
                  {entry.dataKey}:
                </span>
              </div>
              <span className="font-semibold">{entry.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

// --- 3. Definição dos dados (Simulação de um "banco de dados") ---

const aspectos = [
  "Atendimento ao cliente",
  "Qualidade do produto/serviço",
  "Preço",
  "Ambiente/instalações",
  "Profissionalismo",
  "Tempo de espera",
];

// Tipo para os dados de tendência
type TrendData = {
  name: string;
  Positivo: number;
  Negativo: number;
};

// Objeto "Mestre" que mapeia cada aspecto aos seus dados
// No seu app, isso viria de uma prop ou hook
const MASTER_TREND_DATA: Record<string, TrendData[]> = {
  "Atendimento ao cliente": [
    { name: "Jan/25", Positivo: 30, Negativo: 55 },
    { name: "Fev/25", Positivo: 35, Negativo: 45 },
    { name: "Mar/25", Positivo: 45, Negativo: 40 },
    { name: "Abr/25", Positivo: 50, Negativo: 30 },
    { name: "Mai/25", Positivo: 65, Negativo: 25 },
    { name: "Jun/25", Positivo: 70, Negativo: 20 },
  ],
  "Qualidade do produto/serviço": [
    { name: "Jan/25", Positivo: 60, Negativo: 10 },
    { name: "Fev/25", Positivo: 62, Negativo: 12 },
    { name: "Mar/25", Positivo: 65, Negativo: 10 },
    { name: "Abr/25", Positivo: 68, Negativo: 8 },
    { name: "Mai/25", Positivo: 70, Negativo: 5 },
    { name: "Jun/25", Positivo: 75, Negativo: 5 },
  ],
  Preço: [
    { name: "Jan/25", Positivo: 20, Negativo: 30 },
    { name: "Fev/25", Positivo: 22, Negativo: 35 },
    { name: "Mar/25", Positivo: 25, Negativo: 30 },
    { name: "Abr/25", Positivo: 28, Negativo: 25 },
    { name: "Mai/25", Positivo: 30, Negativo: 20 },
    { name: "Jun/25", Positivo: 35, Negativo: 15 },
  ],
  "Ambiente/instalações": [
    { name: "Jan/25", Positivo: 80, Negativo: 5 },
    { name: "Fev/25", Positivo: 82, Negativo: 4 },
    { name: "Mar/25", Positivo: 85, Negativo: 5 },
    { name: "Abr/25", Positivo: 88, Negativo: 2 },
    { name: "Mai/25", Positivo: 90, Negativo: 1 },
    { name: "Jun/25", Positivo: 92, Negativo: 0 },
  ],
  Profissionalismo: [
    { name: "Jan/25", Positivo: 50, Negativo: 15 },
    { name: "Fev/25", Positivo: 55, Negativo: 12 },
    { name: "Mar/25", Positivo: 60, Negativo: 10 },
    { name: "Abr/25", Positivo: 62, Negativo: 8 },
    { name: "Mai/25", Positivo: 65, Negativo: 5 },
    { name: "Jun/25", Positivo: 70, Negativo: 5 },
  ],
  "Tempo de espera": [
    { name: "Jan/25", Positivo: 10, Negativo: 60 },
    { name: "Fev/25", Positivo: 15, Negativo: 55 },
    { name: "Mar/25", Positivo: 20, Negativo: 50 },
    { name: "Abr/25", Positivo: 25, Negativo: 40 },
    { name: "Mai/25", Positivo: 30, Negativo: 30 },
    { name: "Jun/25", Positivo: 40, Negativo: 25 },
  ],
};

// --- 4. O Componente Unificado ---

export function AspectSentimentTrend() {
  // O estado agora vive dentro do componente
  const [selectedAspect, setSelectedAspect] = useState(aspectos[0]);

  // Busca os dados corretos com base no estado
  const aspectTrendData =
    MASTER_TREND_DATA[selectedAspect as keyof typeof MASTER_TREND_DATA] || [];

  return (
    <Card>
      {/* 5. O Select foi movido para o CardHeader */}
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
          {/* Título e Descrição */}
          <div className="mb-4 sm:mb-0">
            <CardTitle>Evolução do Sentimento por Aspecto</CardTitle>
            <CardDescription>
              A linha verde (Positivo) está subindo e a vermelha (Negativo)
              caindo?
            </CardDescription>
          </div>

          {/* O Dropdown de Seleção */}
          <Select value={selectedAspect} onValueChange={setSelectedAspect}>
            <SelectTrigger className="w-full sm:w-[300px]">
              <SelectValue placeholder="Selecione um aspecto" />
            </SelectTrigger>
            <SelectContent>
              {aspectos.map((aspecto) => (
                <SelectItem key={aspecto} value={aspecto}>
                  {aspecto}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      {/* O restante do componente permanece quase idêntico */}
      <CardContent>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              // 6. Os dados agora são dinâmicos
              data={aspectTrendData}
              margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                fontSize={12}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                fontSize={12}
                label={{
                  value: "Contagem",
                  angle: -90,
                  position: "insideLeft",
                  offset: -10,
                }}
              />
              <Tooltip content={<CustomTooltipTrend />} />

              <Line
                type="monotone"
                dataKey="Positivo"
                stroke={SENTIMENT_COLORS.Positivo}
                strokeWidth={2}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="Negativo"
                stroke={SENTIMENT_COLORS.Negativo}
                strokeWidth={2}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Legenda customizada */}
        <div className="mt-4 flex flex-wrap gap-4 justify-center text-sm">
          <div className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-sm"
              style={{ backgroundColor: SENTIMENT_COLORS.Positivo }}
            />
            <span className="text-muted-foreground">Positivo</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-sm"
              style={{ backgroundColor: SENTIMENT_COLORS.Negativo }}
            />
            <span className="text-muted-foreground">Negativo</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
