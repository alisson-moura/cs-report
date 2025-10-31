import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
      <div className="text-center flex flex-col items-center gap-6 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">
          Pronto para transformar seus reviews em resultados?
        </h2>
        <p className="text-lg text-muted-foreground">
          Chega de &quot;achar&quot;. Comece a decidir com base em dados.
          Solicite sua análise gratuita agora mesmo e dê o primeiro passo para
          entender de verdade o que seus clientes pensam.
        </p>
        <Button size="lg" asChild>
          <Link href="#solicitar">Solicitar minha Análise Gratuita</Link>
        </Button>
      </div>
    </section>
  );
}
