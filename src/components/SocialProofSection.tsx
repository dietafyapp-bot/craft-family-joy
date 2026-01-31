import { Star } from "lucide-react";

const SocialProofSection = () => {
  return (
    <section className="bg-background section-padding">
      <div className="section-container text-center px-4 sm:px-6">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground mb-3 sm:mb-4 px-2">
          Famílias Já Estão Criando{" "}
          <span className="text-orange-primary">Momentos Mais Criativos</span> em Casa
        </h2>
        
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 italic px-4">
          "Pais que buscavam uma alternativa saudável às telas estão usando os moldes para criar momentos simples, educativos e cheios de significado com seus filhos."
        </p>
        
        {/* Green Badge */}
        <div className="inline-flex items-center gap-2 sm:gap-3 bg-accent text-accent-foreground rounded-full px-4 sm:px-8 py-3 sm:py-4 shadow-cta">
          <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
          <span className="font-bold text-sm sm:text-lg">+5.000 Famílias Satisfeitas</span>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;