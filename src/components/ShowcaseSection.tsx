import { ScrollAnimation } from "@/components/ui/scroll-animation";
import OptimizedImage from "@/components/OptimizedImage";
import showcaseCharacters from "@/assets/showcase-characters.webp";

const ShowcaseSection = () => {
  return (
    <section className="bg-cream section-padding">
      <div className="section-container px-4 sm:px-6">
        <ScrollAnimation variant="fadeUp">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-foreground mb-2 px-2">
              🎁 Veja Alguns dos Brinquedos que{" "}
              <span className="text-orange-primary">Você Vai Receber!</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Mais de 500 modelos para imprimir e montar
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation variant="scale" delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-card">
              <OptimizedImage
                src={showcaseCharacters}
                alt="Personagens bíblicos de papel para montar"
                width={640}
                height={480}
                className="w-full object-cover rounded-lg sm:rounded-xl"
              />
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation variant="fadeUp" delay={0.3}>
          <p className="text-center text-sm sm:text-base text-muted-foreground mt-4 sm:mt-6 px-4">
            Conteúdos pensados para estimular a criatividade e manter as
            crianças envolvidas por muito mais tempo.
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ShowcaseSection;

