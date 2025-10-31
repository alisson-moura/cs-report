"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export function SolicitationForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [estabelecimento, setEstabelecimento] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // LÓGICA DE ENVIO DO FORMULÁRIO (ex: para sua API route)
    // await fetch('/api/solicitar', { method: 'POST', body: ... })
    console.log({ nome, email, estabelecimento });

    // Simulação de sucesso
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <Card className="bg-muted">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h3 className="text-xl font-bold">Solicitação Recebida!</h3>
            <p className="text-muted-foreground">
              Obrigado, {nome}. Nossa IA já está analisando seus reviews.
              Enviaremos o link de acesso para **{email}** em até 24 horas.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="space-y-2">
            <Label htmlFor="nome">Seu Nome</Label>
            <Input
              id="nome"
              placeholder="Ex: Alison"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Seu Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="voce@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="estabelecimento">
              Nome do Estabelecimento (Google Maps)
            </Label>
            <Input
              id="estabelecimento"
              placeholder="Ex: Padaria Pão Quente"
              required
              value={estabelecimento}
              onChange={(e) => setEstabelecimento(e.target.value)}
            />
            {/* DICA: Substitua este Input por um componente
              de autocomplete do Google Places API para pegar o place_id
            */}
          </div>
          <Button type="submit" size="lg" disabled={status === "loading"}>
            {status === "loading"
              ? "Processando..."
              : "Solicitar minha Análise"}
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            Gratuito para solicitar. Você só paga R$ 20 (taxa única) se decidir
            acessar o relatório pronto.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
