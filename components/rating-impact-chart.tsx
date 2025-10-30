"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

// 1. Cores consistentes
const SENTIMENT_COLORS = {
  Positivo: "hsl(142, 76%, 36%)",
  Negativo: "hsl(0, 84%, 60%)",
};

// 2. MELHOR PRÁTICA: Dados pré-agregados
// Esta é a "query" que você precisa:
// "Qual a média de rating QUANDO [Aspecto X] foi [Positivo/Negativo]?"
const ratingImpactData = [
  {
    aspecto: "Atendimento",
    "Rating Positivo": 4.8,
    "Rating Negativo": 1.5,
  },
  {
    aspecto: "Qualidade",
    "Rating Positivo": 4.9,
    "Rating Negativo": 2.1,
  },
  {
    aspecto: "Preço",
    "Rating Positivo": 4.3,
    "Rating Negativo": 2.5,
  },
  {
    aspecto: "Tempo de Espera",
    "Rating Positivo": 4.1,
    "Rating Negativo": 1.3, // Maior "gap" - Ponto crítico!
  },
];

// A média geral de todos os reviews (para a linha de referência)
const OVERALL_AVERAGE_RATING = 4.2;

// 3. Tooltip customizado
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const posData = payload.find((p: any) => p.dataKey === "Rating Positivo");
    const negData = payload.find((p: any) => p.dataKey === "Rating Negativo");
    const gap = posData.value - negData.value;

    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <p className="mb-2 font-bold">{label}</p>
        <div className="space-y-1 text-sm">
          <div className="flex items-center gap-2">
            <div
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: posData.color }}
            />
            <span>Positivo:</span>
            <span className="font-semibold">{posData.value.toFixed(1)} ★</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: negData.color }}
            />
            <span>Negativo:</span>
            <span className="font-semibold">{negData.value.toFixed(1)} ★</span>
          </div>
        </div>
        <div className="mt-2 pt-2 border-t text-sm">
          <span className="font-semibold">Gap de Impacto:</span>{" "}
          {gap.toFixed(1)} estrelas
        </div>
      </div>
    );
  }
  return null;
};

export function RatingImpactChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Impacto dos Aspectos no Rating</CardTitle>
        <CardDescription>
          Qual o &quot;peso&quot; de cada aspecto? A maior diferença entre verde
          e vermelho é o seu ponto mais crítico.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={ratingImpactData}
              layout="vertical" // Barras horizontais
              margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
              barGap={4} // Espaço entre grupos
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <YAxis
                type="category"
                dataKey="aspecto"
                axisLine={false}
                tickLine={false}
                fontSize={12}
              />
              <XAxis
                type="number"
                domain={[1, 5]} // Eixo X fixo de 1 a 5
                axisLine={false}
                tickLine={false}
                fontSize={12}
                tickFormatter={(value) => `${value.toFixed(1)} ★`}
              />
              <Tooltip content={<CustomTooltip />} />

              {/* Linha de Média Geral */}
              <ReferenceLine
                x={OVERALL_AVERAGE_RATING}
                stroke="#666"
                strokeDasharray="3 3"
                label={{
                  value: "Média Geral",
                  position: "insideTopLeft",
                  fill: "#666",
                }}
              />

              <Bar
                dataKey="Rating Positivo"
                fill={SENTIMENT_COLORS.Positivo}
                radius={[0, 4, 4, 0]}
                barSize={15} // Tamanho fixo para as barras
              />
              <Bar
                dataKey="Rating Negativo"
                fill={SENTIMENT_COLORS.Negativo}
                radius={[0, 4, 4, 0]}
                barSize={15}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Legenda customizada */}
        <div className="mt-4 flex flex-wrap gap-4 justify-center text-sm">
          <div className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-sm"
              style={{ backgroundColor: SENTIMENT_COLORS.Positivo }}
            />
            <span className="text-muted-foreground">
              Rating (Menção Positiva)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-sm"
              style={{ backgroundColor: SENTIMENT_COLORS.Negativo }}
            />
            <span className="text-muted-foreground">
              Rating (Menção Negativa)
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
