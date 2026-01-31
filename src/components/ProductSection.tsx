import { ScrollAnimation } from "@/components/ui/scroll-animation";
import OptimizedImage from "@/components/OptimizedImage";
import productShowcase from "@/assets/product-showcase.webp";

const ProductSection = () => {
  return (
    <section className="bg-background section-padding">
      <div className="section-container px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          {/* Image */}
          <ScrollAnimation variant="slideLeft" className="order-2 lg:order-1">
            <OptimizedImage
              src={productShowcase}
              alt="Variedade de moldes de brinquedos de papel"
              width={500}
              height={500}
              className="rounded-2xl sm:rounded-3xl shadow-card w-full"
            />
          </ScrollAnimation>

          {/* Content */}
          <ScrollAnimation variant="slideRight" className="order-1 lg:order-2">
            <h2 className="text-foreground mb-3 sm:mb-4 text-center lg:text-left">
              🧩 Mais de 500 Moldes
              <br className="sm:hidden" /> de Brinquedos de Papel para{" "}
              <span className="text-orange-primary">Educar Brincando</span>
              <br className="sm:hidden" /> em Casa
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground mb-3 sm:mb-4 text-center lg:text-left">
              Um kit digital completo com moldes prontos para imprimir, recortar e
              montar, criado para incentivar a criatividade das crianças enquanto
              promove aprendizado saudável e tempo de qualidade em família.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground text-center lg:text-left">
              Uma alternativa simples e criativa para pais que desejam afastar os
              filhos do excesso de telas e fortalecer valores como paciência,
              dedicação e convivência familiar.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

