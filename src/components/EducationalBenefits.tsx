import { Check } from "lucide-react";

const educationalBenefits = [
  "Substitui o excesso de telas",
  "Estimula criatividade e foco",
  "Desenvolve coordenação motora",
  "Incentiva paciência e concentração",
  "Fortalece o convívio familiar"
];

const EducationalBenefits = () => {
  return (
    <section className="bg-background section-padding">
      <div className="section-container px-4 sm:px-6">
        <div className="max-w-xl mx-auto">
          <div className="bg-accent/5 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-accent/20">
            <h3 className="font-bold text-center text-foreground mb-4 sm:mb-6">
              ✅ Benefícios Educacionais
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {educationalBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3">
                  <div className="checkmark-circle w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-foreground font-medium text-sm sm:text-base">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalBenefits;