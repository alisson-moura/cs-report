import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto relative flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="text-lg font-bold text-primary">
            Painel de Satisfação
          </span>
        </Link>

        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6">
          <Link
            href="#como-funciona"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Como funciona
          </Link>
          <Link
            href="#demo"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Demonstração
          </Link>
          <Link
            href="#beneficios"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Benefícios
          </Link>
          <Link
            href="#preco"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Preço
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <Button size="sm" className="animate-bounce" asChild>
              <Link href="#solicitar">Solicitar Relatório</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 p-4">
                  <Link
                    href="#como-funciona"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    Como funciona
                  </Link>
                  <Link
                    href="#demo"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    Demonstração
                  </Link>
                  <Link
                    href="#beneficios"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    Benefícios
                  </Link>
                  <Button asChild>
                    <Link href="#solicitar">Solicitar Relatório</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
