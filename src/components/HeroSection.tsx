import { Button } from "@/components/ui/button";
import { Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import OptimizedImage from "@/components/OptimizedImage";
import heroImage from "@/assets/hero-image.webp";

const HeroSection = () => {
  const scrollToPackages = () => {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Orange Header Bar */}
      <div className="orange-header-bar" />

      <section className="bg-orange-light py-6 sm:py-10 lg:py-16">
        <div className="section-container px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="leading-tight text-foreground mb-3 sm:mb-4 px-2"
            >
              Transforme o Tempo de Tela dos Seus Filhos em{" "}
              <span className="text-orange-primary">Criatividade</span>,{" "}
              <span className="text-orange-primary">Aprendizado</span> e{" "}
              <span className="text-orange-primary">Valores Cristãos</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-4 sm:mb-6 max-w-3xl mx-auto px-2"
            >
              Mais de 500 moldes de brinquedos de papel para imprimir e montar,
              ajudando seus filhos a desenvolverem criatividade, coordenação motora
              e bons hábitos — longe do excesso de telas.
            </motion.p>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-4 sm:mb-6 px-2"
            >
              <OptimizedImage
                src={heroImage}
                alt="Crianças brincando com brinquedos de papel educativos"
                width={672}
                height={420}
                className="rounded-2xl sm:rounded-3xl shadow-card w-full max-w-2xl mx-auto object-cover aspect-[16/10]"
                priority
              />
            </motion.div>

            {/* Support text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4"
            >
              Criado para famílias que desejam educar seus filhos com presença,
              amor e princípios saudáveis.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="px-4"
            >
              <Button
                variant="cta"
                size="xl"
                onClick={scrollToPackages}
                className="w-full sm:w-auto mb-3 sm:mb-4 text-base sm:text-lg"
              >
                🎁 Quero Ensinar Brincando em Casa
              </Button>

              {/* Microcopy */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center text-xs sm:text-sm text-muted-foreground">
                <span className="flex items-center gap-2 justify-center">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                  Acesso Imediato
                </span>
                <span className="flex items-center gap-2 justify-center">
                  <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                  Garantia de 7 Dias
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

