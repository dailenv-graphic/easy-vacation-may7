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

      {/* Badge: absolutely positioned and centered between the plane (top) and the ship (bottom) of the background image. Mobile centers it horizontally over MobileHERO (where plane and ship are stacked center). Desktop pins it over the plane/ship column on the left of Hero-1920-1080. */}
      <img
        src="/images/Sticker.png"
        alt=""
        aria-hidden="true"
        className="absolute z-10 pointer-events-none top-[180px] left-1/2 lg:top-[40%] lg:left-[22%] -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[420px] lg:w-[40%] lg:max-w-[680px] h-auto"
      />

      <div className="relative z-10 w-full container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-[420px] lg:mt-0">
          <div className="flex items-center justify-center lg:col-start-2">
            <ReservationStepper />
          </div>
        </div>
      </div>
    </section>
  );
}
