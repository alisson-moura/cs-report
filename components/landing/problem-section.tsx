import Image from "next/image";

export function ProblemSection() {
  return (
    <section id="problema" className="bg-muted w-full py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Image
          src="/google-review.png"
          alt="Google Reviews"
          height={400}
          width={400}
          className="mx-auto"
        />

        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">Sua nota não diz tudo.</h2>
          <p className="text-lg text-muted-foreground">
            Ler reviews um por um é um trabalho lento, manual e que não gera
            inteligência. Você até tenta, mas no fim do dia, a gestão do negócio
            te consome. O resultado? Você fica com uma visão superficial, sem
            conseguir identificar padrões claros sobre o que realmente impacta a
            satisfação do seu cliente, seja o atendimento, o preço ou a
            qualidade do produto.
          </p>
        </div>
      </div>
    </section>
  );
}
