const PromoHeader = () => {
  return (
    <div className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white py-3 sm:py-2.5 px-2 sm:px-4">
      <p className="text-sm sm:text-base md:text-lg font-extrabold animate-pulse text-center leading-snug tracking-wide">
        🔥 PROMOÇÃO EXCLUSIVA DE FÉRIAS
        <span className="hidden sm:inline"> – </span>
        <br className="sm:hidden" />
        SÓ HOJE! <span className="text-yellow-300">89% OFF</span> 🔥
      </p>
    </div>
  );
};

export default PromoHeader;
