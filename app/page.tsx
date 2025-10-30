import Image from "next/image";
import { Calendar } from "lucide-react";
import { KpiOverview } from "../components/kpi-overview";
import { AspectsPerformance } from "../components/aspects-performance";
import { AspectsVolume } from "../components/aspects-volume";
import { IntentionDonutChart } from "../components/intention";
import { EmotionProfileByAspect } from "../components/emotion-profile-by-aspect";
import { AverageRatingTrend } from "../components/average-rating-trend";
import { AspectSentimentTrend } from "../components/aspect-sentiment-trend";
import { RatingImpactChart } from "../components/rating-impact-chart";
import { GeneralWordCloud } from "../components/word-cloud";
import { Footer } from "../components/footer";
import { FeedbackSummary } from "../components/feedback-summary";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4 md:px-6 md:py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
            {/* Logo e informações principais */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* Logo da empresa - pode ser substituído por imagem real */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 md:h-16 md:w-16">
                <Image
                  src="https://lh3.googleusercontent.com/p/AF1QipPqox4HHpqvcJUhOyNkQRvNRCb7Yl5yOoVNswbJ=w408-h883-k-no"
                  alt="Logo da Empresa"
                  width={48}
                  height={48}
                  className="h-9 w-9 object-contain md:h-12 md:w-12"
                />
              </div>

              <div className="flex flex-col gap-0.5 md:gap-1">
                <h1 className="text-lg font-bold text-foreground leading-tight md:text-2xl">
                  Nome da Empresa
                </h1>
                <p className="text-sm font-medium text-muted-foreground md:text-base">
                  Relatório de Satisfação do Cliente
                </p>
              </div>
            </div>

            {/* Informações do período e fonte */}
            <div className="flex flex-wrap items-center gap-2 md:gap-4">
              <div className="flex items-center gap-2 rounded-lg border bg-background px-3 py-2 md:px-4 md:py-2.5">
                <Calendar className="h-3.5 w-3.5 text-muted-foreground md:h-4 md:w-4" />
                <span className="text-xs font-medium text-foreground md:text-sm">
                  Janeiro - Março 2024
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-lg border bg-background px-3 py-2 md:px-4 md:py-2.5">
                <Image
                  src={"/google.svg"}
                  alt={"Google Logo"}
                  width={18}
                  height={18}
                />
                <span className="text-xs font-medium text-foreground md:text-sm">
                  Google Avaliações
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6 md:px-6 md:py-6 space-y-4">
        <KpiOverview />
        <FeedbackSummary />
        <AverageRatingTrend />
        <div className="grid gap-6 lg:grid-cols-2">
          <AspectsPerformance />
          <AspectsVolume />
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <IntentionDonutChart />
          <EmotionProfileByAspect />
        </div>
        <AspectSentimentTrend />
        <div className="grid gap-6 lg:grid-cols-2">
          <RatingImpactChart />
          <GeneralWordCloud />
        </div>
      </main>
      <Footer />
    </div>
  );
}
