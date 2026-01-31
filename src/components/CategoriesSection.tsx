import { Check } from "lucide-react";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";

const categories = [
  "Personagens bíblicos e histórias da Bíblia",
  "Heróis da Fé (Davi, Moisés, Daniel...)",
  "Arca de Noé e animais da criação",
  "Cenários bíblicos (Belém, Jerusalém...)",
  "Presépios e cenas do Natal",
  "Animais da fazenda e da natureza",
  "Carros, aviões e meios de transporte",
  "Casinhas e construções",
  "Jogos de montar e quebra-cabeças",
  "Atividades educativas e lúdicas",
  "E muito mais..."
];

const CategoriesSection = () => {
  return (
    <section className="bg-yellow-categories section-padding">
      <div className="section-container px-4 sm:px-6">
        <ScrollAnimation variant="scale">
          <div className="max-w-lg mx-auto">
            <div className="bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border-2 border-primary shadow-card">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-foreground mb-4 sm:mb-6">
                📦 Categorias Incluídas:
              </h2>
              
              <StaggerContainer className="space-y-2 sm:space-y-3" staggerDelay={0.08}>
                {categories.map((category, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="checkmark-circle w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <span className="text-foreground font-medium text-sm sm:text-base">
                        {category}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CategoriesSection;
