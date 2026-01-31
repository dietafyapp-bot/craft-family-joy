import { Smartphone, Lightbulb, Hand, Heart } from "lucide-react";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";

const benefits = [
  {
    icon: Smartphone,
    title: "Substitui o Excesso de Telas",
    description: "Ajuda a tirar as crianças do celular e do tablet de forma leve, divertida e saudável.",
    bgColor: "bg-red-benefit"
  },
  {
    icon: Lightbulb,
    title: "Estimula a Criatividade",
    description: "Desenvolve imaginação, concentração e pensamento criativo desde cedo.",
    bgColor: "bg-yellow-benefit"
  },
  {
    icon: Hand,
    title: "Desenvolve a Coordenação Motora",
    description: "Atividades de recortar, colar e montar fortalecem habilidades essenciais.",
    bgColor: "bg-blue-benefit"
  },
  {
    icon: Heart,
    title: "Fortalece o Tempo em Família",
    description: "Momentos simples que aproximam pais e filhos e criam memórias duradouras.",
    bgColor: "bg-pink-benefit"
  }
];

const BenefitsSection = () => {
  return (
    <section className="bg-background section-padding">
      <div className="section-container px-4 sm:px-6">
        <ScrollAnimation variant="fadeUp">
          <h2 className="text-center text-foreground mb-6 sm:mb-10 px-2">
            🎯 Por Que Escolher Nossos{" "}
            <span className="text-orange-primary">Brinquedos Educativos?</span>
          </h2>
        </ScrollAnimation>
        
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto" staggerDelay={0.15}>
          {benefits.map((benefit, index) => (
            <StaggerItem key={index}>
              <div 
                className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-card hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${benefit.bgColor} rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default BenefitsSection;
