import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, CirclePlay } from "lucide-react";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <section className="w-full bg-linear-to-b to-muted from-background">
      <div className="relative md:py-36 py-8">
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
          <div className="md:w-1/2">
            <div>
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Image src="/google.svg" alt="Google" width={16} height={16} />
                <span className={roboto.className}>Google Reviews</span>
              </div>
              <h1 className="max-w-md text-balance text-5xl font-bold tracking-tighter md:text-6xl mt-2">
                Descubra o que seus clientes realmente pensam.
              </h1>
              <p className="text-muted-foreground my-8 max-w-2xl text-balance text-xl">
                Utilizamos IA para analisar suas avaliações no Google e
                transforma seus dados em um painel de B.I. Solicite sua análise
                e transforme dados em insights valiosos
              </p>

              <div className="flex items-center gap-3">
                <Button asChild size="lg" className="pr-4.5">
                  <Link href="#link">
                    <span className="text-nowrap">Solicitar Análise</span>
                    <ChevronRight className="opacity-50" />
                  </Link>
                </Button>
                <Button
                  key={2}
                  asChild
                  size="lg"
                  variant="outline"
                  className="pl-5"
                >
                  <Link href="#link">
                    <CirclePlay className="fill-primary/25 stroke-primary" />
                    <span className="text-nowrap">Acessar demonstração</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="perspective-near mt-24 translate-x-12 md:absolute md:-right-6 md:bottom-16 md:left-1/2 md:top-40 md:mt-0 md:translate-x-0">
          <div className="before:border-foreground/5 before:bg-foreground/5 relative h-full before:absolute before:-inset-x-4 before:bottom-7 before:top-0 before:skew-x-6 before:rounded-[calc(var(--radius)+1rem)] before:border">
            <div className="bg-background rounded-(--radius) shadow-foreground/10 ring-foreground/5 relative h-full -translate-y-12 skew-x-6 overflow-hidden border border-transparent shadow-md ring-1">
              <Image
                src="/demo.png"
                alt="Exemplo do Painel de Satisfação"
                width="2880"
                height="1842"
                className="object-top-left size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
