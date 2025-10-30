"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList, // 1. Importado para adicionar labels nas barras
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

// Os mesmos dados do gráfico anterior
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

// 2. Tooltip customizado para Volume
const VolumeTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <p className="mb-1 font-bold">{label}</p>
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="text-muted-foreground">Menções:</span>
          <span className="font-semibold">
            {payload[0].value.toLocaleString("pt-BR")}
          </span>
        </div>
      </div>
    );
  }
  return null;
};

export function AspectsVolume() {
  // 3. (MELHOR PRÁTICA) Ordenar os dados para um gráfico de ranking
  // Isso coloca o aspecto mais mencionado no topo.
  const sortedData = [...data].sort((a, b) => b.total - a.total);

  return (
    <Card className="border-2 hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>Volume de Menções por Aspecto</CardTitle>
        <CardDescription>
          Quais tópicos são mais relevantes para seus clientes? (Total de
          menções)
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* 4. Contêiner de altura responsivo (mesma prática do anterior) */}
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={sortedData} // Usando os dados ordenados
              layout="vertical"
              margin={{ top: 5, right: 0, left: 5, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />

              {/* 5. (MELHOR PRÁTICA) Eixo X escondido */}
              {/* Como vamos usar LabelList, o eixo X é redundante e polui o gráfico */}
              <XAxis type="number" hide />

              <YAxis
                type="category"
                dataKey="aspecto"
                width={140}
                axisLine={false}
                tickLine={false}
                fontSize={12}
                dx={-5}
              />
              <Tooltip
                cursor={{ fill: "transparent" }}
                content={<VolumeTooltip />}
              />
              <Bar
                dataKey="total"
                fill="hsl(215, 16%, 47%)" // Uma cor neutra para "volume"
                radius={[0, 4, 4, 0]} // Arredonda o canto direito
              >
                {/* 6. (MELHOR PRÁTICA) Labels dentro das barras */}
                {/* Muito mais limpo do que ter os números no eixo X */}
                <LabelList
                  dataKey="total"
                  position="insideRight"
                  offset={8} // Pequeno espaço da borda
                  fontSize={12}
                  fill="white" // Cor de alto contraste com a barra
                  fontWeight="bold"
                  formatter={(label: React.ReactNode) => {
                    if (typeof label === "number") {
                      return label.toLocaleString("pt-BR");
                    }
                    return label;
                  }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
