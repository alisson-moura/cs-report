"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine, // 1. Importado para a linha de "Média"
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

// 1. Dados de exemplo para a tendência
const ratingTrendData = [
  { name: "Jan/25", "Rating Médio": 3.8 },
  { name: "Fev/25", "Rating Médio": 4.1 },
  { name: "Mar/25", "Rating Médio": 4.0 },
  { name: "Abr/25", "Rating Médio": 4.2 },
  { name: "Mai/25", "Rating Médio": 4.4 },
  { name: "Jun/25", "Rating Médio": 4.3 },
];

// 2. (Opcional) Calcular a média geral para a ReferenceLine
const overallAverage =
  ratingTrendData.reduce((acc, curr) => acc + curr["Rating Médio"], 0) /
  ratingTrendData.length;

// 3. Tooltip customizado
const CustomTooltipRating = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <p className="mb-1 font-bold">{label}</p>
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="text-muted-foreground">Rating:</span>
          <span className="font-semibold">
            {payload[0].value.toFixed(1)} / 5.0
          </span>
        </div>
      </div>
    );
  }
  return null;
};

export function AverageRatingTrend() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Evolução do Rating Médio</CardTitle>
        <CardDescription>
          Nossa nota média está subindo ou caindo ao longo dos meses?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={ratingTrendData}
              margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                fontSize={12}
              />
              {/* 4. MELHOR PRÁTICA: Domínio fixo (1-5) para ratings */}
              <YAxis
                domain={[1, 5]}
                axisLine={false}
                tickLine={false}
                fontSize={12}
                tickFormatter={(value) => `${value.toFixed(1)} ★`}
              />
              <Tooltip content={<CustomTooltipRating />} />

              {/* 5. MELHOR PRÁTICA: Linha de Referência (Média) */}
              <ReferenceLine
                y={overallAverage}
                label={{ value: "Média", position: "insideLeft", fill: "#666" }}
                stroke="#666"
                strokeDasharray="3 3"
              />

              <Line
                type="monotone"
                dataKey="Rating Médio"
                stroke="hsl(200, 100%, 35%)" // Azul
                strokeWidth={2}
                activeDot={{ r: 6 }} // Ponto maior ao passar o mouse
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
