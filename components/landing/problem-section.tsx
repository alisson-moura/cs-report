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
          <h2 className="text-3xl font-bold">Sua nota não diz tudo</h2>
          <p className="text-lg text-muted-foreground">
            Ler avaliações uma por uma pode ser lento e esconder a verdade. Você
            acha que o problema é o &quot;preço&quot;, mas sua nota está caindo
            por causa do &quot;atendimento&quot; ou do &quot;tempo de
            espera&quot;. Você não sabe onde agir primeiro.
          </p>
        </div>
      </div>
    </section>
  );
}
