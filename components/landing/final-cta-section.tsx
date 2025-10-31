import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
      <div className="text-center flex flex-col items-center gap-6 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">
          O que você está esperando?
        </h2>
        <p className="text-lg text-muted-foreground">
          Deixe de &quot;achar&quot;. Solicite sua análise e tome decisões
          baseadas em dados. O primeiro passo é grátis.
        </p>
        <Button size="lg" asChild>
          <Link href="#solicitar">Solicitar minha Análise</Link>
        </Button>
      </div>
    </section>
  );
}
