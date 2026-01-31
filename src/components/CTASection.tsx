import { Button } from "@/components/ui/button";
import { Zap, ShieldCheck, Printer } from "lucide-react";

const CTASection = () => {
  const scrollToPackages = () => {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-orange-light section-padding">
      <div className="section-container text-center px-4 sm:px-6">
        <h2 className="text-foreground mb-3 sm:mb-4">
          🚀 Pronto para Transformar o{" "}
          <span className="text-orange-primary">Tempo dos Seus Filhos? ✨</span>
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-foreground mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
          Comece hoje mesmo a incentivar a <strong>criatividade</strong> e o <strong>aprendizado</strong> dos seus filhos.
        </p>
        
        <Button 
          variant="cta" 
          size="lg" 
          onClick={scrollToPackages}
          className="mb-4 w-full sm:w-auto text-base sm:text-lg"
        >
          🎁 Quero Ensinar Brincando em Casa
        </Button>
        
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center text-xs sm:text-sm text-muted-foreground">
          <span className="flex items-center gap-2 justify-center">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
            Acesso imediato após a compra
          </span>
          <span className="flex items-center gap-2 justify-center">
            <Printer className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
            Conteúdo digital
          </span>
          <span className="flex items-center gap-2 justify-center">
            <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
            Garantia de 7 dias
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;