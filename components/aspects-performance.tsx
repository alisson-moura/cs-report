"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  // Legend foi removido, pois faremos uma legenda customizada
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

// 1. Defina cores como constantes (Prática DRY)
const CHART_COLORS = {
  positivo: "hsl(142, 76%, 36%)",
  neutro: "hsl(215, 16%, 47%)",
  negativo: "hsl(0, 84%, 60%)",
};

// Seus dados originais
const data = [
  {
    aspecto: "Atendimento ao cliente",
    positivo: 72,
    negativo: 15,
    neutro: 13,
    total: 450,
  },
  {
    aspecto: "Qualidade do produto/serviço",
    positivo: 68,
    negativo: 22,
    neutro: 10,
    total: 520,
  },
  {
    aspecto: "Preço",
    positivo: 45,
    negativo: 38,
    neutro: 17,
    total: 380,
  },
  {
    aspecto: "Ambiente/instalações",
    positivo: 81,
    negativo: 8,
    neutro: 11,
    total: 290,
  },
  {
    aspecto: "Profissionalismo",
    positivo: 76,
    negativo: 12,
    neutro: 12,
    total: 340,
  },
  {
    aspecto: "Tempo de espera",
    positivo: 52,
    negativo: 35,
    neutro: 13,
    total: 410,
  },
];

// 2. Crie um componente de Tooltip customizado
// (Isso dá a aparência do shadcn/ui ao passar o mouse)
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    // Reordenamos para Positivo > Neutro > Negativo
    const orderedPayload = [...payload].reverse();

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

export function AspectsPerformance() {
  return (
    <Card className="border-2 hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>Desempenho de Aspectos</CardTitle>
        <CardDescription>
          Distribuição de sentimentos por aspecto (0-100%). Barras com mais
          vermelho indicam prioridades de correção.
        </CardDescription>
      </CardHeader>
      {/* 3. Ajuste no CardContent para responsividade */}
      {/* Removemos a altura fixa e controlamos no div interno */}
      <CardContent>
        {/* 4. Contêiner de altura para responsividade */}
        {/* h-[350px] é um bom ponto de partida, ajuste conforme necessário */}
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              // 5. Simplificação: Não precisa do 'stackedData', pode usar 'data'
              data={data}
              layout="vertical"
              margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis
                type="number"
                domain={[0, 100]}
                tickFormatter={(value) => `${value}%`}
                axisLine={false} // 6. Limpeza Visual
                tickLine={false} // 6. Limpeza Visual
                fontSize={12}
              />
              <YAxis
                type="category"
                dataKey="aspecto"
                width={140}
                axisLine={false} // 6. Limpeza Visual
                tickLine={false} // 6. Limpeza Visual
                fontSize={12}
                dx={-5} // 6. Pequeno ajuste de espaçamento
              />
              {/* 7. Adição do Tooltip customizado */}
              <Tooltip
                cursor={{ fill: "transparent" }}
                content={<CustomTooltip />}
              />

              {/* 8. Correção das bordas arredondadas */}
              <Bar
                dataKey="positivo"
                stackId="a"
                fill={CHART_COLORS.positivo}
                radius={[4, 0, 0, 4]} // Borda esquerda
              />
              <Bar
                dataKey="neutro"
                stackId="a"
                fill={CHART_COLORS.neutro}
                // Sem radius, fica no meio
              />
              <Bar
                dataKey="negativo"
                stackId="a"
                fill={CHART_COLORS.negativo}
                radius={[0, 4, 4, 0]} // Borda direita
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 9. Legenda customizada usando as constantes */}
        <div className="mt-4 flex flex-wrap gap-4 justify-center text-sm">
          <div className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-sm"
              style={{ backgroundColor: CHART_COLORS.positivo }}
            />
            <span className="text-muted-foreground">Positivo</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-sm"
              style={{ backgroundColor: CHART_COLORS.neutro }}
            />
            <span className="text-muted-foreground">Neutro</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-sm"
              style={{ backgroundColor: CHART_COLORS.negativo }}
            />
            <span className="text-muted-foreground">Negativo</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
