"use client";
import {
  BarChart,
  Bar,
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
} from "./ui/card"; // Ajuste o caminho se necessário

// 1. Paleta de cores para as Emoções
const CHART_COLORS = {
  Alegria: "hsl(142, 76%, 36%)", // Verde (Positivo)
  Confiança: "hsl(210, 76%, 50%)", // Azul (Confiança)
  Surpresa: "hsl(50, 90%, 55%)", // Amarelo (Atenção)
  Neutra: "hsl(215, 16%, 47%)", // Cinza (Neutro)
  Frustração: "hsl(25, 84%, 60%)", // Laranja (Alerta)
  Raiva: "hsl(0, 84%, 60%)", // Vermelho (Negativo)
};

// 2. Dados mockados (garantindo que a soma é 100 para o gráfico 100%)
// Os nomes das chaves (ex: "Alegria") devem ser idênticos aos de CHART_COLORS
const data = [
  {
    aspecto: "Atendimento ao cliente",
    Alegria: 10,
    Confiança: 10,
    Surpresa: 0,
    Neutra: 20,
    Frustração: 35,
    Raiva: 25,
  },
  {
    aspecto: "Qualidade do produto",
    Alegria: 50,
    Confiança: 30,
    Surpresa: 5,
    Neutra: 10,
    Frustração: 5,
    Raiva: 0,
  },
  {
    aspecto: "Preço",
    Alegria: 5,
    Confiança: 5,
    Surpresa: 5,
    Neutra: 25,
    Frustração: 40,
    Raiva: 20,
  },
  {
    aspecto: "Prazo de Entrega",
    Alegria: 0,
    Confiança: 0,
    Surpresa: 0,
    Neutra: 10,
    Frustração: 60,
    Raiva: 30,
  },
  {
    aspecto: "Ambiente/Instalações",
    Alegria: 60,
    Confiança: 20,
    Surpresa: 10,
    Neutra: 10,
    Frustração: 0,
    Raiva: 0,
  },
];

// 3. Tooltip customizado (idêntico ao seu exemplo, funcionará perfeitamente)
// Ele reordena o payload para mostrar as emoções negativas primeiro (pois 'Raiva' é a última no stack)
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const orderedPayload = [...payload].reverse(); // Mostra do negativo para o positivo

    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <p className="mb-1 font-bold">{label}</p>
        {orderedPayload.map((entry) => (
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
                {entry.dataKey}
              </span>
            </div>
            <span className="font-semibold">{entry.value}%</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// 4. Componente principal do Gráfico
export function EmotionProfileByAspect() {
  return (
    <Card className="border-2 hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>Perfil Emocional por Aspecto</CardTitle>
        <CardDescription>
          Distribuição de emoções por aspecto (0-100%). Barras com mais
          vermelho/laranja indicam pontos de atrito.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis
                type="number"
                domain={[0, 100]}
                tickFormatter={(value) => `${value}%`}
                axisLine={false}
                tickLine={false}
                fontSize={12}
              />
              <YAxis
                type="category"
                dataKey="aspecto"
                width={140} // Ajuste a largura do rótulo do aspecto se necessário
                axisLine={false}
                tickLine={false}
                fontSize={12}
                dx={-5}
              />
              <Tooltip
                cursor={{ fill: "transparent" }}
                content={<CustomTooltip />}
              />

              {/* 5. Stacks de Barras (Ordem importa para o visual) */}
              {/* Começamos com a mais positiva (borda esquerda) */}
              <Bar
                dataKey="Alegria"
                stackId="a"
                fill={CHART_COLORS.Alegria}
                radius={[4, 0, 0, 4]} // Borda esquerda
              />
              <Bar
                dataKey="Confiança"
                stackId="a"
                fill={CHART_COLORS.Confiança}
              />
              <Bar
                dataKey="Surpresa"
                stackId="a"
                fill={CHART_COLORS.Surpresa}
              />
              <Bar dataKey="Neutra" stackId="a" fill={CHART_COLORS.Neutra} />
              <Bar
                dataKey="Frustração"
                stackId="a"
                fill={CHART_COLORS.Frustração}
              />
              {/* Terminamos com a mais negativa (borda direita) */}
              <Bar
                dataKey="Raiva"
                stackId="a"
                fill={CHART_COLORS.Raiva}
                radius={[0, 4, 4, 0]} // Borda direita
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 6. Legenda customizada (atualizada para as emoções) */}
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 justify-center text-sm">
          {/* Mapeia as cores para criar a legenda dinamicamente */}
          {Object.entries(CHART_COLORS).map(([name, color]) => (
            <div key={name} className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded-sm"
                style={{ backgroundColor: color }}
              />
              <span className="text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
