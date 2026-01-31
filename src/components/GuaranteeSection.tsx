import { ShieldCheck, Lock, Zap } from "lucide-react";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";

const GuaranteeSection = () => {
  return (
    <section className="bg-background section-padding">
      <div className="section-container px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <ScrollAnimation variant="scale">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-accent/10 rounded-full flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation variant="fadeUp" delay={0.1}>
            <h2 className="text-foreground mb-3 sm:mb-4 px-2">
              🔒 Compra 100% Segura e{" "}
              <span className="text-accent">Sem Riscos</span>
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-4">
              Você tem <strong className="text-foreground">7 dias de garantia incondicional</strong>. Se não gostar, devolvemos seu dinheiro sem perguntas.
            </p>
          </ScrollAnimation>
          
          <StaggerContainer className="flex flex-wrap justify-center gap-3 sm:gap-6" staggerDelay={0.1}>
            <StaggerItem>
              <div className="flex items-center gap-2 bg-card rounded-full px-3 sm:px-4 py-2 shadow-soft">
                <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-foreground font-medium text-xs sm:text-sm">Pagamento seguro</span>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex items-center gap-2 bg-card rounded-full px-3 sm:px-4 py-2 shadow-soft">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-foreground font-medium text-xs sm:text-sm">Privacidade protegida</span>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex items-center gap-2 bg-card rounded-full px-3 sm:px-4 py-2 shadow-soft">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-foreground font-medium text-xs sm:text-sm">Acesso imediato</span>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
