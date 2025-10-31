import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FileText, Clock, LockOpen } from "lucide-react"; // Ícones atualizados

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Como funciona?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center">
          <CardHeader>
            <FileText className="w-10 h-10 text-primary mx-auto mb-4" />
            <CardTitle>1. Solicite (Grátis)</CardTitle>
          </CardHeader>
          <CardContent>
            Preencha o formulário com seus dados e o nome do seu
            estabelecimento.
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
            <CardTitle>2. Aguarde (Até 24h)</CardTitle>
          </CardHeader>
          <CardContent>
            Nossa IA irá buscar e analisar todos os seus reviews. Enviaremos um
            e-mail quando estiver pronto.
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <LockOpen className="w-10 h-10 text-primary mx-auto mb-4" />
            <CardTitle>3. Decida (Pague R$ 20)</CardTitle>
          </CardHeader>
          <CardContent>
            Acesse o link no seu e-mail. Pague a taxa única **apenas se quiser**
            destravar e ver seu painel completo.
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
