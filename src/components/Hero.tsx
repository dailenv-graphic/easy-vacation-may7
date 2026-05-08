import ReservationStepper from './ReservationStepper';

export default function Hero() {
  return (
    <section id="reserve-form" className="relative w-full bg-white overflow-hidden scroll-mt-24 lg:min-h-[849px] lg:flex lg:items-center">
      <picture>
        <source media="(min-width: 1024px)" srcSet="/images/Hero-1920-1080.png" />
        <img
          src="/images/MobileHERO.png"
          alt=""
          className="absolute top-0 left-0 w-full h-auto lg:inset-0 lg:w-full lg:h-full lg:object-cover"
        />
      </picture>

      <div className="relative z-10 w-full container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-[110px] lg:mt-0">
          <div className="flex items-center justify-center">
            <img src="/images/Sticker.png" alt="" className="w-full h-auto max-w-3xl" />
          </div>
          <div className="flex items-center justify-center mt-[180px] lg:mt-0">
            <ReservationStepper />
          </div>
        </div>
      </div>
    </section>
  );
}
