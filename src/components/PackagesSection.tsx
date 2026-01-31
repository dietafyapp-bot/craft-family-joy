import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, X, Package, ShieldCheck, Lock, Zap, Gift, Crown, Sparkles, AlertTriangle, Clock } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const TrustBadges = () => (
  <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border/50">
    <div className="trust-badge text-xs sm:text-sm">
      <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
      <span>Compra Segura</span>
    </div>
    <div className="trust-badge text-xs sm:text-sm">
      <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4" />
      <span>Satisfação Garantida</span>
    </div>
    <div className="trust-badge text-xs sm:text-sm">
      <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
      <span>Acesso Imediato</span>
    </div>
  </div>
);

const UpsellModal = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[340px] sm:max-w-sm p-0 rounded-2xl overflow-hidden border-0 gap-0">
        {/* Header de Impacto */}
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 px-4 py-4 sm:py-5 text-center relative">
          <div className="flex items-center justify-center gap-2 mb-1">
            <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 animate-pulse" />
            <span className="text-white text-lg sm:text-xl font-extrabold tracking-wide">ESPERE!</span>
          </div>
          <p className="text-white/90 text-sm sm:text-base font-semibold">OFERTA ESPECIAL PARA VOCÊ!</p>
        </div>

        {/* Conteúdo */}
        <div className="px-4 py-5 sm:px-6 sm:py-6 bg-gradient-to-b from-orange-50 to-white">
          {/* Pergunta Persuasiva */}
          <div className="text-center mb-5">
            <p className="text-gray-700 text-sm sm:text-base mb-1">Por que pagar apenas pelo básico quando você pode ter</p>
            <p className="text-base sm:text-lg font-bold text-gray-800">
              <span className="text-green-600">TUDO DO PREMIUM</span> por apenas
            </p>
            <p className="text-2xl sm:text-3xl font-extrabold text-green-600 mt-1">
              + R$ 7,00?
            </p>
          </div>

          {/* Card da Oferta */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 sm:p-5 border-2 border-green-300 border-dashed relative mb-5">
            {/* Badge Pacote Especial */}
            <div className="flex justify-center mb-3">
              <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                <Sparkles className="w-3.5 h-3.5" />
                PACOTE ESPECIAL
              </span>
            </div>

            {/* Preço */}
            <div className="text-center mb-4">
              <span className="text-muted-foreground line-through text-sm">De R$ 68,00</span>
              <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                R$ 17<span className="text-2xl sm:text-3xl">,00</span>
              </div>
              <div className="mt-2">
                <span className="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full shadow animate-pulse">
                  <Clock className="w-3 h-3" />
                  APENAS HOJE!
                </span>
              </div>
            </div>

            {/* Lista de Benefícios */}
            <div className="space-y-2">
              {[
                "+500 brinquedos de papel",
                "1000 Atividades Infantis Educativas",
                "Jogo de Tabuleiro + Gibi + Paper Toys",
                "Desenhos Bíblicos para Colorir"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-xs sm:text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="space-y-3">
            <Button 
              variant="cta" 
              size="lg" 
              className="w-full text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all font-bold py-5 sm:py-6"
              asChild
            >
              <a href="https://global.tribopay.com.br/fhhd8" target="_blank" rel="noopener noreferrer">
                🎁 QUERO O PACOTE ESPECIAL!
              </a>
            </Button>
            
            <a 
              href="https://global.tribopay.com.br/nkr0zni6gz"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center text-xs sm:text-sm text-gray-500 hover:text-gray-700 underline underline-offset-2 transition-colors py-2"
            >
              Não, obrigado. Prefiro o básico por R$ 10,00
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const PackageCard = ({ children, isPremium = false, delay = 0 }: { children: React.ReactNode; isPremium?: boolean; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={isPremium ? "relative" : ""}
    >
      {children}
    </motion.div>
  );
};

const PackagesSection = () => {
  const [showUpsellModal, setShowUpsellModal] = useState(false);

  return (
    <section id="packages" className="relative section-padding overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-transparent" />
      
      <div className="section-container px-4 sm:px-6 relative z-10">
        <ScrollAnimation variant="fadeUp">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Oferta Especial de Férias</span>
            </div>
            <h2 className="text-foreground mb-3 px-2">
              📦 Escolha o Pacote Ideal para{" "}
              <span className="text-orange-primary">Sua Família</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground px-4 max-w-xl mx-auto">
              Acesso imediato após a compra. Conteúdo digital para imprimir e usar quantas vezes quiser.
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto items-start">
          {/* Basic Package */}
          <PackageCard delay={0.1}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              {/* Badge */}
              <div className="flex justify-center mb-4 sm:mb-5">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs sm:text-sm font-bold">
                  <Package className="w-3 h-3 sm:w-4 sm:h-4" />
                  PACOTE BÁSICO
                </div>
              </div>
              
              {/* Price */}
              <div className="text-center mb-5 sm:mb-6">
                <span className="text-muted-foreground line-through text-sm">de R$ 97,00</span>
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600">
                  R$ 10<span className="text-2xl sm:text-3xl">,00</span>
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground">pagamento único</span>
              </div>
              
              {/* Features */}
              <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
                <div className="flex items-center gap-3">
                  <div className="checkmark-circle w-6 h-6 flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-foreground text-sm sm:text-base">+500 moldes de brinquedos de papel</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="checkmark-circle w-6 h-6 flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-foreground text-sm sm:text-base">Acesso digital imediato</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                  <span className="text-muted-foreground text-sm sm:text-base">Bônus educativos</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                  <span className="text-muted-foreground text-sm sm:text-base">Conteúdos extras</span>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full text-sm sm:text-base border-2 hover:bg-blue-50"
                onClick={() => setShowUpsellModal(true)}
              >
                Quero o Pacote Básico
              </Button>
              
              <TrustBadges />
            </div>
          </PackageCard>
          
          {/* Premium Package */}
          <PackageCard isPremium delay={0.25}>
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 rounded-3xl blur-lg opacity-30 animate-pulse" />
            
            <div className="relative bg-gradient-to-br from-white to-orange-50/50 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border-2 border-primary shadow-2xl">
              {/* Most Popular Badge */}
              <div className="absolute -top-4 sm:-top-5 left-1/2 transform -translate-x-1/2">
                <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs sm:text-sm font-bold px-5 sm:px-7 py-2 sm:py-2.5 rounded-full shadow-xl whitespace-nowrap">
                  <Crown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  MAIS VENDIDO
                </span>
              </div>
              
              {/* Badge */}
              <div className="flex justify-center mb-4 sm:mb-5 mt-4 sm:mt-3">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 px-4 py-2 rounded-full text-xs sm:text-sm font-bold border border-orange-200">
                  <Gift className="w-3 h-3 sm:w-4 sm:h-4" />
                  PACOTE PREMIUM
                </div>
              </div>
              
              {/* Price */}
              <div className="text-center mb-4 sm:mb-5">
                <span className="text-muted-foreground line-through text-sm sm:text-lg">De R$ 245,00</span>
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  R$ 24<span className="text-2xl sm:text-3xl">,90</span>
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground">pagamento único</span>
                <div className="mt-3">
                  <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 rounded-full border border-green-200">
                    <Sparkles className="w-3 h-3" />
                    Economize R$ 220,10
                  </span>
                </div>
              </div>
              
              {/* Main Features */}
              <div className="space-y-2.5 sm:space-y-3 mb-4 sm:mb-5">
                {[
                  "+500 moldes de brinquedos de papel",
                  "Acesso vitalício",
                  "Atualizações gratuitas",
                  "Garantia de 7 dias"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="checkmark-circle w-6 h-6 flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-foreground text-sm sm:text-base font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Divider */}
              <div className="border-t border-orange-200/50 my-4 sm:my-5" />
              
              {/* Bonus list */}
              <div className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6">
                <p className="text-xs sm:text-sm text-orange-600 font-bold mb-2 sm:mb-3 flex items-center gap-1.5">
                  <Gift className="w-4 h-4" />
                  BÔNUS INCLUSOS:
                </p>
                {[
                  "1000 Atividades Infantis Educativas",
                  "Jogo de Tabuleiro + Gibi + Paper Toys (A Criação)",
                  "Desenhos Bíblicos para Colorir"
                ].map((bonus, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-semibold flex-shrink-0">
                      BÔNUS
                    </span>
                    <span className="text-foreground text-xs sm:text-sm">{bonus}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="premium" size="lg" className="w-full text-base sm:text-lg shadow-xl hover:shadow-2xl transition-shadow" asChild>
                <a href="https://global.tribopay.com.br/ies2f" target="_blank" rel="noopener noreferrer">
                  🎁 Quero o Pacote Premium!
                </a>
              </Button>
              
              <TrustBadges />
              
              <p className="text-center text-xs sm:text-sm text-orange-600 font-medium mt-4 flex items-center justify-center gap-1.5">
                <span className="animate-pulse">⏰</span>
                Oferta por tempo limitado
              </p>
            </div>
          </PackageCard>
        </div>
      </div>

      <UpsellModal open={showUpsellModal} onOpenChange={setShowUpsellModal} />
    </section>
  );
};

export default PackagesSection;
