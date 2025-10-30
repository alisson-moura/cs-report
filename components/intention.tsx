"use client";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const intentionData = [
  {
    name: "Reclamação",
    value: 412,
    color: "hsl(0, 84%, 60%)",
    gradient: "hsl(0, 84%, 50%)",
  },
  {
    name: "Elogio",
    value: 305,
    color: "hsl(142, 76%, 45%)",
    gradient: "hsl(142, 76%, 35%)",
  },
  {
    name: "Sugestão",
    value: 189,
    color: "hsl(215, 70%, 60%)",
    gradient: "hsl(215, 70%, 50%)",
  },
];

const totalValue = intentionData.reduce((acc, entry) => acc + entry.value, 0);

const RADIAN = Math.PI / 180;
const FloatingLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  percent,
  name,
}: any) => {
  // Posição no meio da fatia
  const radius = outerRadius + 30;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  // Linha conectora
  const lineRadius = outerRadius + 5;
  const lineX = cx + lineRadius * Math.cos(-midAngle * RADIAN);
  const lineY = cy + lineRadius * Math.sin(-midAngle * RADIAN);

  const textAnchor = x > cx ? "start" : "end";
  const percentValue = (percent * 100).toFixed(1);

  return (
    <g>
      {/* Linha conectora */}
      <line
        x1={lineX}
        y1={lineY}
        x2={x}
        y2={y}
        stroke="hsl(var(--muted-foreground))"
        strokeWidth={1.5}
        strokeDasharray="2,2"
        opacity={0.5}
      />

      {/* Círculo no ponto de conexão */}
      <circle
        cx={lineX}
        cy={lineY}
        r={3}
        fill="hsl(var(--muted-foreground))"
        opacity={0.7}
      />

      {/* Label flutuante com fundo */}
      <g transform={`translate(${x},${y})`}>
        <rect
          x={textAnchor === "start" ? 0 : -80}
          y={-20}
          width={80}
          height={36}
          rx={6}
          fill="hsl(var(--background))"
          stroke="hsl(var(--border))"
          strokeWidth={1.5}
          opacity={0.1}
          filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
        />
        <text
          x={textAnchor === "start" ? 40 : -40}
          y={-8}
          textAnchor="middle"
          fill="hsl(var(--foreground))"
          fontSize={11}
          fontWeight="600"
        >
          {name}
        </text>
        <text
          x={textAnchor === "start" ? 40 : -40}
          y={6}
          textAnchor="middle"
          fill="hsl(var(--muted-foreground))"
          fontSize={13}
          fontWeight="bold"
        >
          {percentValue}%
        </text>
      </g>
    </g>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const percent = ((data.value / totalValue) * 100).toFixed(1);

    return (
      <div className="rounded-xl border-2 bg-background p-3 shadow-xl backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-2">
          <div
            className="h-3 w-3 rounded-full shadow-md"
            style={{ backgroundColor: data.color }}
          />
          <span className="font-bold text-base">{data.name}</span>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              {data.value.toLocaleString("pt-BR")}
            </span>{" "}
            menções
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{percent}%</span> do
            total
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export function IntentionDonutChart() {
  return (
    <Card className="border-2 hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <CardTitle>Intenções</CardTitle>
        <CardDescription>
          Qual a motivação principal dos clientes ao enviar feedback?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <defs>
                {intentionData.map((entry, index) => (
                  <linearGradient
                    key={`gradient-${index}`}
                    id={`gradient-${index}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor={entry.color} stopOpacity={1} />
                    <stop
                      offset="100%"
                      stopColor={entry.gradient}
                      stopOpacity={0.9}
                    />
                  </linearGradient>
                ))}
              </defs>

              <Tooltip content={<CustomTooltip />} />

              <Pie
                data={intentionData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={"55%"}
                outerRadius={"75%"}
                paddingAngle={4}
                labelLine={false}
                label={<FloatingLabel />}
                animationBegin={0}
                animationDuration={800}
                animationEasing="ease-out"
              >
                {intentionData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={`url(#gradient-${index})`}
                    className="hover:opacity-80 transition-opacity cursor-pointer"
                    strokeWidth={2}
                    stroke="hsl(var(--background))"
                  />
                ))}
              </Pie>

              <text
                x="50%"
                y="46%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-sm font-semibold text-muted-foreground uppercase tracking-wide"
              >
                Total
              </text>
              <text
                x="50%"
                y="58%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-4xl font-bold text-foreground"
              >
                {totalValue.toLocaleString("pt-BR")}
              </text>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
          {intentionData.map((entry) => {
            const percent = ((entry.value / totalValue) * 100).toFixed(1);
            return (
              <div
                key={entry.name}
                className="flex flex-col items-center gap-2 p-3 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="h-3 w-3 rounded-full shadow-sm"
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="font-semibold text-foreground">
                    {entry.name}
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-foreground">
                    {entry.value.toLocaleString("pt-BR")}
                  </p>
                  <p className="text-xs text-muted-foreground">{percent}%</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
