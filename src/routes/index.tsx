import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, CheckCircle2, MessageCircle, PawPrint, ShieldCheck, Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import { Logo } from "@/components/Logo";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import heroPet from "@/assets/hero-pet.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <Logo size="md" />
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#recursos" className="hover:text-foreground transition-colors">Recursos</a>
            
            <a href="#depoimentos" className="hover:text-foreground transition-colors">Depoimentos</a>
          </nav>
          <div className="flex items-center gap-2">
            {user ? (
              <Link to="/dashboard">
                <Button size="sm" className="text-white border-0" style={{ background: "var(--gradient-brand)" }}>
                  Ir para o painel
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/login"><Button variant="ghost" size="sm">Entrar</Button></Link>
                <Link to="/signup">
                  <Button size="sm" className="text-white border-0" style={{ background: "var(--gradient-brand)" }}>
                    Criar conta
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/20 border border-secondary/30">
              <Sparkles className="h-3.5 w-3.5" style={{ color: "var(--petroleum)" }} />
              <span className="text-xs font-medium" style={{ color: "var(--petroleum-deep)" }}>
                Gestão completa para pet shops e banhistas
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-foreground">
              O sistema inteligente para pet shops{" "}
              <span style={{ background: "var(--gradient-brand)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                venderem mais
              </span>{" "}
              e fidelizarem clientes.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Cadastre pets, histórico de atendimentos, banhos, vacinas, alimentação, financeiro e WhatsApp.
              Tudo em <strong className="text-foreground">um só lugar</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/signup">
                <Button size="lg" className="text-white border-0 shadow-[var(--shadow-brand)] w-full sm:w-auto" style={{ background: "var(--gradient-brand)" }}>
                  Começar agora grátis <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <MessageCircle className="mr-2 h-4 w-4" /> Falar no WhatsApp
              </Button>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
              {["Sistema 100% online e seguro", "Fácil de usar e completo", "Suporte humanizado"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" style={{ color: "var(--turquoise)" }} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl opacity-30 blur-3xl" style={{ background: "var(--gradient-brand)" }} />
            <img
              src={heroPet}
              alt="Profissional de pet shop com cão golden retriever usando o ConectaPet"
              width={1280}
              height={1280}
              className="relative rounded-3xl shadow-[var(--shadow-card)] w-full aspect-square object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="recursos" className="py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--turquoise)" }}>
              Tudo que seu pet shop precisa
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Mais organização, mais controle, mais clientes fiéis
            </h2>
            <p className="text-muted-foreground">
              Funcionalidades pensadas para pet shops, banho e tosa e clínicas veterinárias.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-secondary/50 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-[var(--shadow-card)]"
              >
                <div
                  className="h-12 w-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <f.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-1.5">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div
            className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-[var(--shadow-brand)]"
            style={{ background: "var(--gradient-hero)" }}
          >
            <PawPrint className="absolute top-6 right-6 h-32 w-32 text-white/5" />
            <PawPrint className="absolute bottom-6 left-6 h-24 w-24 text-white/5" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              A tecnologia que aproxima você do seu cliente e do seu pet
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Entre com sua conta Google e comece a usar em segundos.
            </p>
            <Link to="/signup">
              <Button size="lg" className="bg-white text-foreground hover:bg-white/90 shadow-xl">
                Criar minha conta grátis <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <Logo size="sm" />
          <p className="text-sm text-muted-foreground">© 2026 ConectaPet. Feito com 🐾 para pet shops.</p>
        </div>
      </footer>
    </div>
  );
}

const features = [
  { icon: Users, title: "Cadastro completo de clientes e pets", desc: "Tudo organizado: tutores, contatos, histórico, observações e preferências." },
  { icon: Calendar, title: "Agendamentos e lembretes", desc: "Calendário visual com confirmação e lembretes automáticos via WhatsApp." },
  { icon: PawPrint, title: "Banho, tosa e histórico", desc: "Vacinas, alimentação, alergias e comportamento — tudo em um clique." },
  { icon: MessageCircle, title: "WhatsApp integrado", desc: "Envie confirmações, pós-venda e campanhas direto pelo sistema." },
  { icon: TrendingUp, title: "Financeiro completo", desc: "Contas a pagar e receber, fluxo de caixa, metas e gráficos premium." },
  { icon: ShieldCheck, title: "Seguro e LGPD", desc: "Seus dados e os do seu cliente protegidos com criptografia." },
];

