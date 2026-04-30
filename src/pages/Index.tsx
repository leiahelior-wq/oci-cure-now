import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Sparkles, Heart, Coins, Crown, Flame, Check, Star, Quote, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import ebookHero from "@/assets/ebook-hero.png";
import logoOci from "@/assets/logo-oci.png";

const CHECKOUT_URL = "https://pay.kiwify.com.br/BucM9vK";

const Index = () => {
  const scrollToCheckout = () => {
    window.open(CHECKOUT_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* ============ HERO ============ */}
      <header className="relative bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
        <nav className="relative z-10 container mx-auto px-6 py-6 flex items-center justify-between">
          <a href="#" className="flex items-center" aria-label="Protocolo OCI">
            <img src={logoOci} alt="Protocolo OCI - Seja Obcecada Pela Sua Cura Interior" width={160} height={64} className="h-14 w-auto" />
          </a>
          <Button variant="cta" size="lg" onClick={scrollToCheckout} className="hidden sm:inline-flex">
            Quero Minha Cura <ArrowRight />
          </Button>
        </nav>

        <div className="relative z-10 container mx-auto px-6 pt-8 pb-20 md:pt-16 md:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Para Mulheres Cansadas de Sofrer</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-primary mb-6">
              <span className="italic">Basta!</span> As 5 Feridas Emocionais estão <span className="text-gradient-gold">te destruindo</span> no amor, dinheiro e autoestima.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Cansada de padrões autodestrutivos? <strong className="text-foreground">Não é sua culpa.</strong> É a raiz. E ela pode ser arrancada. Este é o seu chamado: o <em className="text-primary font-semibold">PROTOCOLO OCI</em> está aqui para te libertar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="cta" size="hero" onClick={scrollToCheckout}>
                Pare de Adiar Sua Felicidade <ArrowRight className="!size-5" />
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground flex-wrap">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>Garantia 7 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <span>+2.000 mulheres</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute -inset-10 bg-gradient-to-br from-accent/40 to-secondary/60 blur-3xl rounded-full" />
            <img
              src={ebookHero}
              alt="eBook Protocolo OCI - Seja Obcecada Pela Sua Cura Interior"
              width={1024}
              height={1024}
              className="relative w-full max-w-md mx-auto animate-float drop-shadow-2xl rounded-3xl"
            />
          </div>
        </div>
      </header>

      {/* ============ DOR ============ */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-destructive mb-4 block">A Verdade Brutal</span>
            <h2 className="font-display text-4xl md:text-6xl font-semibold text-primary leading-tight">
              Pare de se enganar: seus problemas <br className="hidden md:block" />
              não são <em className="text-destructive">azar</em>. São <span className="text-gradient-gold">sintomas.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {[
              "Você atrai sempre o mesmo tipo de relacionamento tóxico?",
              "O dinheiro nunca para na sua mão, por mais que você se esforce?",
              "Sua autoestima é um yo-yo, vivendo de validação externa?",
              "Você procrastina seus sonhos e se sente incapaz de mudar?",
              "Vive com um vazio que nada preenche, como se algo estivesse fundamentalmente errado?",
              "Sente que se sabota toda vez que está prestes a vencer?",
            ].map((dor, i) => (
              <Card key={i} className="p-6 border-border bg-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <Flame className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">{dor}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-plum rounded-3xl p-10 md:p-14 text-center shadow-deep">
            <p className="text-2xl md:text-3xl font-display italic text-primary-foreground leading-snug mb-8">
              "Esses não são defeitos. São <span className="text-gradient-gold not-italic font-semibold">gritos de socorro</span> das suas 5 Feridas Emocionais não curadas. E elas estão te mantendo cativa."
            </p>
            <Button variant="cta" size="hero" onClick={scrollToCheckout}>
              Chega de Sofrer — Liberte-se Agora
            </Button>
          </div>
        </div>
      </section>

      {/* ============ SOLUÇÃO ============ */}
      <section className="py-24 bg-gradient-blush relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 max-w-6xl relative">
          <div className="text-center mb-16">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4 block">A Única Saída Real</span>
            <h2 className="font-display text-4xl md:text-6xl font-semibold text-primary leading-tight mb-6">
              O Protocolo OCI é <em className="text-gradient-gold">a resposta</em> definitiva.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Chega de terapias intermináveis e soluções paliativas. O <strong className="text-primary">PROTOCOLO OCI</strong> é um guia direto, prático e transformador de <strong>7 passos</strong> que te leva pela mão para arrancar a raiz das suas feridas emocionais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-14">
            {[
              { icon: Heart, title: "Amor Autêntico", desc: "Desenvolva relacionamentos verdadeiros, plenos e sem máscaras." },
              { icon: Coins, title: "Prosperidade Real", desc: "Atraia e mantenha a abundância financeira sem culpa ou autosabotagem." },
              { icon: Crown, title: "Autoestima Inabalável", desc: "Construa o amor próprio que você merece — independente de qualquer um." },
              { icon: Sparkles, title: "Liberdade Definitiva", desc: "Reescreva sua história e viva sem medo, sem padrões, sem amarras." },
            ].map((b, i) => (
              <Card key={i} className="p-8 bg-card/80 backdrop-blur-sm border-border hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-plum flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <b.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-primary mb-3">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="cta" size="hero" onClick={scrollToCheckout}>
              Sua Liberdade Começa Agora
            </Button>
          </div>
        </div>
      </section>

      {/* ============ 8 PASSOS ============ */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-20" />
        <div className="container mx-auto px-6 max-w-5xl relative">
          <div className="text-center mb-16">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-gold mb-4 block">O Caminho Sem Volta</span>
            <h2 className="font-display text-4xl md:text-6xl font-semibold text-primary-foreground leading-tight mb-6">
              Os <span className="text-gradient-gold">7 Passos</span> do Protocolo OCI
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Cada página é um passo acionável. Você não vai apenas ler — você vai <em>agir</em> e <em>transformar</em>.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { n: "01", t: "Obsessão e Responsabilidade", d: "Assuma o controle total da sua cura." },
              { n: "02", t: "Descubra Sua Ferida Dominante", d: "Identifique o inimigo invisível." },
              { n: "03", t: "O Padrão Invisível", d: "Desvende o que te sabota no inconsciente." },
              { n: "04", t: "Sua Sombra Revelada", d: "Encare aquilo que você se recusou a ver." },
              { n: "05", t: "Seja a Mãe e o Pai que Você Precisou", d: "Cure sua criança interior de uma vez por todas." },
              { n: "06", t: "O Perdão que Liberta", d: "Solte as amarras do passado e respire de novo." },
              { n: "07", t: "Acreditar em Algo Maior", d: "Conecte-se com sua força superior e viva obcecada pela sua cura." },
            ].map((p) => (
              <div key={p.n} className="group flex items-center gap-6 p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-gold/40 transition-all duration-300">
                <div className="font-display text-5xl md:text-6xl font-semibold text-gradient-gold w-20 flex-shrink-0">{p.n}</div>
                <div className="flex-1">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-primary-foreground mb-1">{p.t}</h3>
                  <p className="text-primary-foreground/70">{p.d}</p>
                </div>
                <ArrowRight className="w-6 h-6 text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Button variant="cta" size="hero" onClick={scrollToCheckout}>
              Estou Pronta Para Cumprir o Protocolo
            </Button>
          </div>
        </div>
      </section>

      {/* ============ PROVA SOCIAL ============ */}
      <section className="py-24 bg-gradient-blush">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4 block">Prova Real</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary leading-tight">
              Elas já se obcecaram pela cura. <br />
              <em className="text-gradient-gold">Veja o que elas dizem.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Marina S., 34", role: "Saiu de um relacionamento tóxico", text: "Eu repetia o mesmo padrão há 10 anos. Em 30 dias com o Protocolo OCI, entendi a raiz e tive coragem de me escolher pela primeira vez." },
              { name: "Camila R., 42", role: "Empresária", text: "Faturamento triplicou em 4 meses. O Protocolo me mostrou que meu bloqueio com dinheiro era sobre merecimento, não estratégia. Mudou tudo." },
              { name: "Júlia T., 29", role: "Psicóloga", text: "Direto, sem rodeios e profundo. Cada passo é uma virada de chave. Hoje eu me olho no espelho e finalmente me amo de verdade." },
            ].map((d, i) => (
              <Card key={i} className="p-8 bg-card border-border shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                <Quote className="w-10 h-10 text-accent mb-4" />
                <p className="text-foreground leading-relaxed italic mb-6">"{d.text}"</p>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
                </div>
                <div>
                  <div className="font-semibold text-primary">{d.name}</div>
                  <div className="text-sm text-muted-foreground">{d.role}</div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-14">
            <Button variant="cta" size="hero" onClick={scrollToCheckout}>
              Faça Como Elas — Transforme Sua Vida
            </Button>
          </div>
        </div>
      </section>

      {/* ============ OFERTA ============ */}
      <section id="oferta" className="py-24 bg-gradient-plum relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />
        <div className="container mx-auto px-6 max-w-4xl relative">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-destructive/20 border border-destructive/40 mb-6 backdrop-blur-sm">
              <Clock className="w-4 h-4 text-gold animate-pulse" />
              <span className="text-sm font-bold text-primary-foreground uppercase tracking-wider">Oferta Por Tempo Limitado</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-semibold text-primary-foreground leading-tight mb-6">
              O valor da sua cura <br />
              é <em className="text-gradient-gold">inestimável.</em>
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              O custo de manter suas feridas abertas é <strong className="text-gold">infinitamente maior</strong> do que qualquer investimento na sua libertação.
            </p>
          </div>

          <Card className="bg-card border-2 border-gold/30 shadow-deep p-8 md:p-12 rounded-3xl">
            <div className="text-center mb-8">
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-2">PROTOCOLO OCI</h3>
              <p className="text-muted-foreground italic">Seja Obcecada Pela Sua Cura Interior · eBook Completo</p>
            </div>

            <ul className="space-y-3 mb-8 max-w-md mx-auto">
              {[
                "8 passos práticos e acionáveis",
                "Mapa completo das 5 Feridas Emocionais",
                "Acesso imediato após a compra",
                "Compatível com celular, tablet e computador",
                "Bônus: meditações guiadas para cada passo",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-gold-foreground" strokeWidth={3} />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="text-center mb-8">
              <p className="text-muted-foreground line-through text-lg">De R$ 197,00</p>
              <div className="flex items-baseline justify-center gap-2 my-2">
                <span className="font-display text-2xl text-primary">R$</span>
                <span className="font-display text-7xl md:text-8xl font-bold text-gradient-plum">47</span>
                <span className="font-display text-2xl text-primary">,00</span>
              </div>
              <p className="text-muted-foreground">à vista · ou 5x de R$ 10,40</p>
            </div>

            <Button variant="cta" size="hero" className="w-full" onClick={scrollToCheckout}>
              Sim! Eu Quero Minha Liberdade <ArrowRight className="!size-6" />
            </Button>

            <div className="flex items-start justify-center gap-2 mt-6 text-sm text-muted-foreground">
              <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span><strong className="text-primary">Garantia incondicional de 7 dias.</strong> Não gostou? Devolvemos 100% do seu investimento.</span>
            </div>
          </Card>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-14">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4 block">Sem Mais Desculpas</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary">
              Suas dúvidas. <em className="text-gradient-gold">Sua liberdade.</em>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "O Protocolo OCI é para mim?", a: "SIM, se você está cansada de sofrer e pronta para AÇÃO e MUDANÇA REAL. Se você ainda quer ficar reclamando da vida, este protocolo não é para você." },
              { q: "Preciso de terapia antes?", a: "Não. Este protocolo é um guia prático e autônomo para você iniciar sua cura. Ele pode complementar qualquer outro método, mas não depende de nenhum." },
              { q: "Quanto tempo leva a cura?", a: "A cura é uma jornada. Este eBook te dá os 8 primeiros passos FUNDAMENTAIS. Os resultados começam na sua primeira leitura e prática consciente." },
              { q: "E se eu não gostar?", a: "Você tem 7 dias para experimentar. Se não sentir a diferença, devolvemos 100% do seu investimento. Sem perguntas, sem burocracia." },
              { q: "Como recebo o material?", a: "Acesso imediato por e-mail logo após a confirmação do pagamento. PDF + bônus liberados na hora." },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-2xl px-6 shadow-soft">
                <AccordionTrigger className="font-display text-lg md:text-xl font-semibold text-primary hover:no-underline text-left">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <Button variant="cta" size="hero" onClick={scrollToCheckout}>
              Garanta Seu Protocolo OCI Agora
            </Button>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial" />
        <div className="container mx-auto px-6 max-w-4xl relative text-center">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-6 block">A Decisão É Sua</span>
          <h2 className="font-display text-5xl md:text-7xl font-semibold text-primary leading-[1.05] mb-8">
            Quanto vale a sua <em className="text-gradient-gold">liberdade?</em>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-4">
            A vida que você sonha não vai bater na sua porta. Você precisa <strong>construí-la</strong>, passo a passo, curando o que te impede.
          </p>
          <p className="text-xl md:text-2xl text-primary font-display italic mb-12">
            Pare de adiar a mulher poderosa, amada e próspera que você nasceu para ser.
          </p>

          <Button variant="cta" size="hero" onClick={scrollToCheckout} className="text-xl md:text-2xl">
            Eu Quero Me Libertar — Acessar Agora
          </Button>

          <p className="mt-6 text-sm text-muted-foreground">Sua obsessão pela cura começa <strong className="text-primary">AGORA.</strong></p>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6 text-center space-y-4">
          <div className="inline-flex bg-background rounded-2xl p-4 shadow-soft">
            <img src={logoOci} alt="Protocolo OCI" width={180} height={72} loading="lazy" className="h-16 w-auto" />
          </div>
          <div className="flex justify-center gap-6 text-sm text-primary-foreground/70 flex-wrap">
            <a href="#" className="hover:text-gold transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-gold transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gold transition-colors">Contato</a>
          </div>
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Protocolo OCI. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
