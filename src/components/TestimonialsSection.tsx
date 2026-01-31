import { Star } from "lucide-react";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-animation";
import OptimizedImage from "@/components/OptimizedImage";
import testimonialsImage from "@/assets/testimonials-kids.webp";
import avatarMaria from "@/assets/avatar-maria.webp";
import avatarJoao from "@/assets/avatar-joao.webp";
import avatarAline from "@/assets/avatar-aline.webp";

const testimonials = [
  {
    name: "Maria S.",
    text: "Meu filho montou vários brinquedos e agora prefere brincar com eles do que ficar no celular. Foi uma mudança enorme aqui em casa.",
    avatar: avatarMaria,
  },
  {
    name: "João S.",
    text: "Qualidade excelente. Minha filha melhorou muito a coordenação motora e passa horas envolvida nas atividades. Vale muito a pena.",
    avatar: avatarJoao,
  },
  {
    name: "Profª Aline — Espaço Saber",
    text: "Eu já estava sem ideias para prender a atenção dos meus alunos. Depois que comecei a usar os brinquedos de papel, eles ficaram totalmente envolvidos — e o resultado foi incrível.",
    avatar: avatarAline,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-orange-50 to-white">
      <div className="section-container px-4 sm:px-6">
        <ScrollAnimation variant="fadeUp">
          <h2 className="font-bold text-center text-primary mb-2 sm:mb-3">
            💬 O Que os Pais Dizem
          </h2>
          <p className="text-center text-muted-foreground mb-6 sm:mb-10 text-xs sm:text-sm md:text-base">
            Mais de 5.000 famílias já transformaram o tempo de tela em diversão
            criativa
          </p>
        </ScrollAnimation>

        <StaggerContainer
          className="grid gap-4 sm:gap-6 md:grid-cols-3 mb-8 sm:mb-10 max-w-5xl mx-auto"
          staggerDelay={0.15}
        >
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-md border border-orange-100 h-full">
                <div className="flex gap-1 mb-2 sm:mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-2 sm:gap-3">
                  <OptimizedImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-orange-200"
                  />
                  <p className="font-semibold text-primary text-sm sm:text-base">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollAnimation variant="scale" delay={0.2}>
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg max-w-3xl mx-auto">
            <OptimizedImage
              src={testimonialsImage}
              alt="Crianças felizes brincando com brinquedos de papel"
              width={768}
              height={512}
              className="w-full h-auto object-cover"
            />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default TestimonialsSection;

