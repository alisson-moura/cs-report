import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function SolicitationForm() {
  return (
    <section id="solicitar" className="py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl">Solicite sua Análise Gratuita</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder="Seu nome completo" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="seu@email.com" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="establishment">Estabelecimento</Label>
                <Input id="establishment" placeholder="Nome do seu negócio no Google Maps" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="area">Área de Atuação</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a área do seu negócio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="restaurante">Restaurante, Café ou Padaria</SelectItem>
                    <SelectItem value="saude">Clínica Médica ou Odontológica</SelectItem>
                    <SelectItem value="beleza">Salão de Beleza ou Barbearia</SelectItem>
                    <SelectItem value="varejo">Pequeno Varejista</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" size="lg" className="mt-4">Enviar Solicitação</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}