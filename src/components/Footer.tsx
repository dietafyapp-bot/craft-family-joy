import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/OptimizedImage";
import familyImage from "@/assets/family-time.webp";
const Footer = () => {
  const scrollToPackages = () => {
    document.getElementById("packages")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <footer className="bg-foreground text-white py-8 sm:py-12">
      <div className="section-container text-center px-4 sm:px-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
          Pronto para transformar o tempo dos seus filhos?
        </h3>
        <p className="text-white/80 mb-4 sm:mb-6 max-w-lg mx-auto text-base sm:text-lg">
          Invista em momentos de criatividade, aprendizado e conexão familiar.
        </p>

        <Button variant="cta" size="lg" onClick={scrollToPackages} className="mb-6 sm:mb-8 text-sm sm:text-base">
          🎁 Quero Começar Agora
        </Button>

        <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg mb-6 sm:mb-8">
          <OptimizedImage src={familyImage} alt="Família feliz brincando com brinquedos de papel bíblicos" width={768} height={512} className="w-full h-auto object-cover" />
        </div>

        <div className="border-t border-white/20 pt-4 sm:pt-6">
          <p className="text-xs sm:text-sm text-white/60">
            © {new Date().getFullYear()} Kit Brinquedos de Papel. Todos os direitos
            reservados.
          </p>
          <p className="text-[10px] sm:text-xs text-white/40 mt-2">Este produto é digital. Após a compra, você receberá acesso imediato aos materiais</p>
        </div>
      </div>
    </footer>;
};
export default Footer;