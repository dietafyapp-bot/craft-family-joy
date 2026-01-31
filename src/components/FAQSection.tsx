import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";

const faqs = [
  {
    question: "O material é físico ou digital?",
    answer: "O material é 100% digital. Após a compra, você recebe acesso imediato para baixar, imprimir e usar quantas vezes quiser."
  },
  {
    question: "Preciso de internet para usar os moldes?",
    answer: "Apenas para baixar o material. Depois de salvo, você pode usar offline, imprimindo quando quiser."
  },
  {
    question: "Para qual idade o material é indicado?",
    answer: "Os moldes são indicados principalmente para crianças de 4 a 10 anos, sempre com a supervisão de um adulto."
  },
  {
    question: "Posso imprimir mais de uma vez?",
    answer: "Sim. Você pode imprimir quantas vezes quiser para uso pessoal e familiar."
  },
  {
    question: "O conteúdo é adequado para famílias cristãs?",
    answer: "Sim. O material foi pensado para incentivar criatividade, aprendizado e tempo em família, respeitando valores cristãos e uma infância saudável."
  },
  {
    question: "E se eu não gostar do material?",
    answer: "Você tem 7 dias de garantia. Se não ficar satisfeito, basta solicitar o reembolso."
  },
  {
    question: "Como recebo o acesso após a compra?",
    answer: "O acesso é liberado automaticamente após a confirmação do pagamento."
  }
];

const FAQSection = () => {
  return (
    <section className="bg-faq section-padding">
      <div className="section-container px-4 sm:px-6">
        <ScrollAnimation variant="fadeUp">
          <h2 className="text-center text-foreground mb-6 sm:mb-10">
            ❓ Perguntas <span className="text-orange-primary">Frequentes</span>
          </h2>
        </ScrollAnimation>
        
        <div className="max-w-2xl mx-auto">
          <StaggerContainer staggerDelay={0.08}>
            <Accordion type="single" collapsible className="space-y-2 sm:space-y-3">
              {faqs.map((faq, index) => (
                <StaggerItem key={index}>
                  <AccordionItem 
                    value={`item-${index}`}
                    className="bg-card rounded-xl sm:rounded-2xl border-none px-3 sm:px-5 shadow-soft overflow-hidden"
                  >
                    <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-3 sm:pb-4 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </StaggerItem>
              ))}
            </Accordion>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
