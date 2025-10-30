import { Mail } from "lucide-react"; // Apenas Mail é necessário do Lucide agora
import Image from "next/image";

export function Footer() {
  const companyName = "AM.dev";
  const email = "alisson.mo.moura@outlook.com.br";
  const whatsapp = "+55 17 99188-8415"; // Ajustei o número para incluir um dígito a mais, se for o caso

  const currentYear = new Date().getFullYear();
  const whatsappLink = `https://wa.me/${whatsapp.replace(/\D/g, "")}`;

  return (
    <footer
      className="border-t bg-background text-muted-foreground" // text-muted-foreground para o footer
      aria-labelledby="footer-heading"
    >
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-6">
        {/* Lado Esquerdo (Desktop) / Topo (Mobile): Links de Contato */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            // Mantém as classes de estilo para o link completo, incluindo hover
            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
          >
            <Image
              // Aqui está o ajuste para o ícone SVG
              // Adicionamos 'w-4 h-4' para o tamanho consistente
              // E 'currentColor' para herdar a cor do texto do pai
              className="text-muted-foreground w-4 h-4"
              style={{ color: "currentColor" }} // Força o SVG a usar a cor do texto pai
              src={"/whatsapp.svg"}
              alt={"WhatsApp"}
              width={16} // Estas props ainda são importantes para Next/Image
              height={16} // e para acessibilidade, mesmo com w-4 h-4
            />
            {whatsapp}
          </a>
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            {email}
          </a>
        </div>

        {/* Lado Direito (Desktop) / Baixo (Mobile): Copyright */}
        <div className="text-center text-sm md:text-right">
          <p>
            © {currentYear} {companyName}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
