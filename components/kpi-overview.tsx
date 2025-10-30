import { Card, CardContent } from "@/components/ui/card";
import { Star, MessageSquare } from "lucide-react";

export function KpiOverview() {
  const totalReviews = 64;
  const averageRating = 4.2;
  const positivePercentage = 65;

  return (
    <div className="grid gap-4 md:grid-cols-3 md:gap-6">
      {/* KPI 1: Rating Médio */}
      <Card className="border-2 hover:shadow-lg transition-shadow">
        {/* Padding vertical reduzido */}
        <CardContent className="px-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground mb-1">
                Rating Médio
              </p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-2xl font-bold text-foreground">
                  {averageRating.toFixed(1)}
                </span>
                <span className="text-base text-muted-foreground">/ 5.0</span>
              </div>
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-3 w-3 ${
                      star <= Math.round(averageRating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-100">
              <Star className="h-4 w-4 text-yellow-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* KPI 2: Total de Reviews */}
      <Card className="border-2 hover:shadow-lg transition-shadow">
        {/* Padding vertical reduzido */}
        <CardContent className="px-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground mb-1">
                Total de Avaliações
              </p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-2xl font-bold text-foreground">
                  {totalReviews.toLocaleString("pt-BR")}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                Feedbacks recebidos no período
              </p>
            </div>
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100">
              <MessageSquare className="h-4 w-4 text-blue-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* KPI 3: Sentimento Predominante */}
      <Card className="border-2 hover:shadow-lg transition-shadow">
        {/* Padding vertical reduzido */}
        <CardContent className="px-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground mb-1">
                Sentimento Predominante
              </p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-2xl font-bold text-green-600">
                  {positivePercentage}%
                </span>
                <span className="text-base text-muted-foreground">
                  Positivo
                </span>
              </div>
              {/* Espaçador para alinhamento vertical */}
              <div className="h-3 mb-1" />
            </div>
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-4 w-4 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
