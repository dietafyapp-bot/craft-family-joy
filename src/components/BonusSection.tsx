import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-animation";
import OptimizedImage from "@/components/OptimizedImage";
import bonusAtividades from "@/assets/bonus-atividades.webp";
import bonusColorir from "@/assets/bonus-colorir.webp";
import bonusTabuleiro from "@/assets/bonus-tabuleiro.webp";

const bonuses = [
  {
    image: bonusAtividades,
    emoji: "📘",
    title: "1000 Atividades Infantis Educativas",
    description:
      "Atividades para estimular atenção, raciocínio e coordenação, ideais para uso em casa.",
  },
  {
    image: bonusTabuleiro,
    emoji: "🎲",
    title: "Jogo de Tabuleiro + Gibi + Paper Toys (A Criação)",
    description:
      "Corrida Bíblica é a maneira perfeita de desafiar seus amigos e testar seus conhecimentos bíblicos, enquanto desfrutam de horas de entretenimento em família. Receba também o Gibi 'A Criação' com Paper Toys de Adão, Eva e a Serpente.",
  },
  {
    image: bonusColorir,
    emoji: "🎨",
    title: "Desenhos Bíblicos para Colorir",
    description:
      "Aprenda as letras do alfabeto, versículos Bíblicos e muito mais enquanto se diverte colorindo! Ebook com 53 páginas.",
  },
];

const BonusSection = () => {
  return (
    <section className="bg-background section-padding">
      <div className="section-container px-4 sm:px-6">
        <ScrollAnimation variant="fadeUp">
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <h2 className="font-bold text-foreground mb-2">🎁 BÔNUS EXCLUSIVOS 🎁</h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Receba gratuitamente junto com sua compra:
            </p>
          </div>
        </ScrollAnimation>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-5xl mx-auto"
          staggerDelay={0.15}
        >
          {bonuses.map((bonus, index) => (
            <StaggerItem key={index}>
              <div className="bg-white/80 backdrop-blur-sm sm:bg-card sm:backdrop-blur-none rounded-xl sm:rounded-2xl overflow-hidden border-dashed-orange shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300">
                <div className="aspect-square sm:aspect-[4/3] overflow-hidden bg-orange-50/50">
                  <OptimizedImage
                    src={bonus.image}
                    alt={bonus.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-3 sm:p-4 lg:p-5">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-foreground mb-1.5 sm:mb-2 break-words hyphens-auto">
                    {bonus.emoji} {bonus.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {bonus.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default BonusSection;

