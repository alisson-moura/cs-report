"use client"; // Necessário para os hooks e handlers
import { useCallback } from "react";
import {
  Word,
  WordCloud,
  WordCloudProps,
  AnimatedWordRenderer, // O componente de animação
  FinalWordData, // O tipo para o handler de clique
} from "@isoterik/react-word-cloud";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

// 1. Seus dados, agora usando o tipo 'Word' da nova biblioteca
const wordCloudData: Word[] = [
  { text: "atendimento", value: 64 },
  { text: "qualidade", value: 55 },
  { text: "preço", value: 40 },
  { text: "demora", value: 38 },
  { text: "excelente", value: 30 },
  { text: "péssimo", value: 25 },
  { text: "rápido", value: 22 },
  { text: "problema", value: 18 },
  { text: "solução", value: 15 },
];

// 2. Sua lógica de cor, adaptada para a prop 'fill'
// (Conforme a documentação: fill: string | (word: Word, index: number) => string)
const resolveFill: WordCloudProps["fill"] = (word) => {
  return word.value > 50 ? "hsl(0, 84%, 60%)" : "hsl(215, 16%, 47%)";
};

// 3. Lógica para escalar o tamanho da fonte (Melhor Prática)
// (A documentação mostra 'defaultFontSize', mas vamos criar uma escala mais robusta)
const minValue = Math.min(...wordCloudData.map((w) => w.value));
const maxValue = Math.max(...wordCloudData.map((w) => w.value));
const fontMin = 15;
const fontMax = 70;

const resolveFontSize: WordCloudProps["fontSize"] = (word) => {
  // Normaliza o valor entre 0 e 1
  const normalizedValue = (word.value - minValue) / (maxValue - minValue || 1);
  // Mapeia para o intervalo de tamanho de fonte
  return normalizedValue * (fontMax - fontMin) + fontMin;
};

// 4. Renderizador animado customizado (seguindo o exemplo da documentação)
// (Permite um delay de animação escalonado, o que fica ótimo)
const renderAnimatedWord: WordCloudProps["renderWord"] = (data, ref) => (
  <AnimatedWordRenderer
    ref={ref}
    data={data}
    animationDelay={(_word, index) => index * 30} // Delay escalonado
  />
);

// --- O Componente ---

export function GeneralWordCloud() {
  // 5. Handler de clique (seguindo a documentação)
  const handleWordClick = useCallback((word: FinalWordData) => {
    console.log(`Clicou em: ${word.text}, valor: ${word.value}`);
    // Adicione sua lógica de filtro aqui
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Nuvem de Palavras-Chave</CardTitle>
        <CardDescription>
          Termos mais frequentes mencionados em todas as avaliações.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* 6. A biblioteca usa um contêiner pai para definir o tamanho */}
        <div className="h-[350px] w-full">
          <WordCloud
            // Props obrigatórias (da documentação)
            words={wordCloudData}
            width={600} // Largura do layout de computação interno
            height={350} // Altura do layout de computação interno
            // Recursos da documentação (Melhores Práticas)
            enableTooltip={true} // Ativa o tooltip embutido
            renderWord={renderAnimatedWord} // Usa o renderizador animado
            // Suas customizações
            fill={resolveFill}
            fontSize={resolveFontSize}
            onWordClick={handleWordClick}
            font="sans-serif"
            padding={2}
            svgProps={{
              // Garante que o gráfico escale para o 'div' pai
              preserveAspectRatio: "xMidYMid meet",
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
