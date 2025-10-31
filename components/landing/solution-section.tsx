import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function SolutionSection() {
  return (
    <section id="demo" className="w-full py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Transformamos seu &quot;achismo&quot; em um painel de decisões.
          </h2>
          <p className="text-lg text-muted-foreground">
            Nossa plataforma de B.I. usa Inteligência Artificial para
            transformar o feedback solto dos seus clientes em um painel de dados
            interativo. Em vez de perder horas lendo comentários, você visualiza
            gráficos de sentimento, análise de tópicos (aspectos), emoções e
            intenções. É a inteligência de uma agência, acessível em um clique.
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center justify-between">
          <Image
            src="/demo03.png"
            alt="Demonstração do Painel"
            width={570}
            height={570}
            className="rounded-lg shadow-lg"
          />
          <Button size="lg" className="mt-4" asChild>
            <Link href="/reports/" target="_blank">
              Ver o Painel Demo Interativo
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
