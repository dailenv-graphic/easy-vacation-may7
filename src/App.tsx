import { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Star, Clock, Search, Gift, Calendar, Users, MapPin, HelpCircle, Lightbulb, Building2, Plane, CreditCard, Globe, Shield, Menu, X } from 'lucide-react';
import HelloBar from './components/HelloBar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import LocationDates from './components/LocationDates';
import TeamCollaborationSection from './components/TeamCollaborationSection';
import CTAButton from './components/CTAButton';
import ImageLightbox, { LightboxCard } from './components/ImageLightbox';
function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [currentResort, setCurrentResort] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lightboxCard, setLightboxCard] = useState<LightboxCard | null>(null);

  const scrollToReservation = () => {
    const target = document.getElementById('reserve-form');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const destinations = [
    {
      destination: 'CARIBBEAN',
      description: 'Crystal waters and island ports',
      image: '/images/Caribbean.webp'
    },
    {
      destination: 'BAHAMAS',
      description: 'Pink sand beaches and clear blue water',
      image: '/images/bahamas.jpg'
    },
    {
      destination: 'MEXICO',
      description: 'Cabo, Canc\u00fan, and the Riviera Maya',
      image: '/images/Mexico.webp'
    }
  ];

  const nextDestination = () => {
    setCurrentResort((prev) => (prev + 1) % destinations.length);
  };

  const prevDestination = () => {
    setCurrentResort((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  const goToDestination = (index: number) => {
    setCurrentResort(index);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'What exactly is this event?',
      answer: 'An invitation-only 60-minute preview of our members-only travel program. We\'re looking for real couples to walk through the program with our team, share an honest review, and provide feedback. Every couple that completes the preview walks out with a complimentary 8-day / 7-night cruise certificate including airfare.',
    },
    {
      question: 'Are there any fees or obligations?',
      answer: 'No obligation to purchase anything during or after the preview. Each preview is limited to 12 couples — we require a credit card to secure one of those spots in your name. We only charge a $40 no-show fee if you don\'t attend your scheduled time. Show up, and your card is never charged. Port fees and taxes are not included in this deal. This offer is valued at over $2,000!',
    },
    {
      question: 'What kind of program is this?',
      answer: 'A members-only travel program that grants Insider Access to exclusive rates on cruises, hotels, and condos. The full details — pricing, inventory, terms — are walked through in your 60-minute preview. You\'ll see real numbers, real options, and decide for yourself whether the program is a fit.',
    },
    {
      question: 'Where can I cruise to?',
      answer: 'The cruise certificate is redeemable to multiple destinations including the Caribbean, Bahamas, and Mexico. Specific availability and blackout dates are determined by the fulfillment partner and shared at the preview.',
    },
    {
      question: 'What if we can\'t make our scheduled time?',
      answer: 'Life happens. Just call or text our concierge line at least 24 hours before your preview and we\'ll move you to another date and time at no charge. No-shows without rescheduling are charged the $40 no-show fee. Couples who repeatedly no-show forfeit eligibility for future previews.',
    },
  ];

  const bentoTiles = [
    {
      image: '/images/retail_.png',
      icon: Globe,
      title: 'Real Savings',
      description: 'Trade overpriced retail bookings for true insider pricing on cruises, hotels, and condos.',
    },
    {
      image: '/images/membership.png',
      icon: CreditCard,
      title: 'Vacation Insider Access',
      description: 'Members-only access to exclusive rates not available to the general public.',
    },
    {
      image: '/images/technology.png',
      icon: Lightbulb,
      title: 'Modern Booking Technology',
      description: 'Smart travel solutions for couples who want more from their vacations.',
    },
    {
      image: '/images/hotel.png',
      icon: MapPin,
      title: 'Premium Cruise & Hotel Network',
      description: 'Major cruise lines, premium hotels, and full-service condos worldwide.',
    },
  ];

  const eligibilityCards = [
    {
      icon: Clock,
      title: '60-Minute Preview',
      description: 'Both partners attend the full 60-minute preview. Reviewers who leave early forfeit the cruise certificate and airfare.',
    },
    {
      icon: CreditCard,
      title: 'Valid ID Required',
      description: 'Valid photo ID and the credit card on file required for check-in at the venue.',
    },
    {
      icon: Calendar,
      title: 'Age Requirement',
      description: 'Both partners must be between the ages of 35 and 70 to attend.',
    },
    {
      icon: Plane,
      title: 'Available to Travel',
      description: 'Couples who can use their cruise certificate within the booking window (18 months from issue date).',
    },
    {
      icon: Lightbulb,
      title: 'Open to New Ideas',
      description: 'We\'re looking for couples interested in previewing a modern travel program and sharing honest feedback.',
    },
  ];

  const howItWorks = [
    {
      icon: Search,
      title: '1. Qualify',
      description:
        'Answer a few quick questions about your travel habits to confirm your eligibility for our preview.',
    },
    {
      icon: Calendar,
      title: '2. Schedule',
      description:
        'Select a date and time at a location convenient to you (Sheraton Augusta, GA or Fairfield Inn Columbia, SC).',
    },
    {
      icon: Users,
      title: '3. Confirm',
      description:
        'Add a credit card to secure your spot. Previews are limited to 12 couples — your card holds two seats in your name. We charge a $40 no-show fee if you don\u2019t attend, otherwise no charge.',
    },
    {
      icon: Gift,
      title: '4. Attend & Receive',
      description:
        'Walk out with your 8/7 cruise certificate plus airfare the moment your preview ends. Issued in person at the venue — no mailed certificates.',
    },
  ];

  const testimonials = [
    {
      name: 'Mark & Sarah D.',
      location: 'Augusta, GA',
      rating: 5,
      text: 'Almost canceled the morning of, but glad we showed up. The preview was actually interesting and only took an hour. Booked our Caribbean trip three months later through the program and saved over $1,800 vs. what we\'d have paid retail.',
    },
    {
      name: 'Jennifer & Mike T.',
      location: 'Columbia, SC',
      rating: 5,
      text: 'We were skeptical we\'d actually get the cruise. We did. Booked seven nights to Mexico with airfare for two and the math worked out better than anything we had ever seen online.',
    },
    {
      name: 'David & Patricia K.',
      location: 'North Augusta, SC',
      rating: 5,
      text: 'Fair trade. We gave them 60 minutes of honest feedback, they gave us a free cruise. The preview was genuinely interesting and there was no pressure. We left with the certificate just like they promised.',
    },
  ];

  return (
    <div className="min-h-screen bg-background-grey-50">
      {/* Top announcement bar (Hello bar) */}
      <HelloBar />

      {/* Header */}
      <div className="relative z-40">
        <header className="bg-white text-gray-900 py-3 md:py-4 shadow-lg">
        <div className="relative max-w-7xl mx-auto px-4 flex items-center justify-center md:justify-between gap-4">
          <div className="flex items-center gap-3 md:gap-4">
            <img src="/images/logo.svg" alt="Eazy Vacations" className="h-12 md:h-16 lg:h-20 w-auto flex-shrink-0" />
          </div>
          <nav className="hidden md:flex items-center gap-5 lg:gap-8 text-sm lg:text-base font-semibold text-gray-700">
            <a href="#cruise" className="hover:text-oange-700 transition-colors">The Cruise</a>
            <a href="#locations" className="hover:text-oange-700 transition-colors">Locations</a>
            <a href="#how-it-works" className="hover:text-oange-700 transition-colors">How It Works</a>
            <a href="#faq" className="hover:text-oange-700 transition-colors">FAQ</a>
          </nav>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-md text-gray-900 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden border-t border-gray-100 bg-white flex flex-col py-2"
          >
            <a href="#cruise" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 hover:text-oange-700 transition-colors">The Cruise</a>
            <a href="#locations" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 hover:text-oange-700 transition-colors">Locations</a>
            <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 hover:text-oange-700 transition-colors">How It Works</a>
            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 hover:text-oange-700 transition-colors">FAQ</a>
          </nav>
        )}
      </header>
      </div>

      <Hero />

      {/* SECTION 03: Trust Bar (full-width metrics row) */}
      <TrustBar />

      {/* SECTION 6: TeamCollaborationSection (IMAGE SLIDER) */}
      <TeamCollaborationSection onCtaClick={scrollToReservation} />

      {/* Overlay: Tour dates & locations card row */}
      <LocationDates onReserve={scrollToReservation} />

      {/* SECTION 7: How It Works */}
      <section id="how-it-works" className="relative py-12 md:py-16 lg:py-20 xl:py-24 overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 overflow-hidden bg-white">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-100"
          >
            <source src="https://jonburtondesign.com/SecretShopper/media/HERO.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              Reserve Your Spot in 4 Simple Steps
            </h2>
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed px-4">
              Our process is simple. We invite real couples to preview our travel program in person. You give us 60 minutes at the venue; we hand you a complimentary 8/7 cruise certificate when you walk out. Fair trade — if you show up.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {howItWorks.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-xl p-5 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-teal-600 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary-blue-950 mb-2 sm:mb-3">{title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16 px-4">
            <CTAButton onClick={scrollToReservation}>RESERVE MY SPOT</CTAButton>
            <p className="mt-4 text-xs sm:text-sm text-white/80 mx-auto leading-relaxed drop-shadow-md sm:whitespace-nowrap">
              Port fees and taxes are not included in this deal. This offer is valued at over $2,000!
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8: Why Section with Bento Grid */}
      <section className="relative py-12 md:py-16 lg:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
              <div className="relative">
                <div className="absolute -inset-8 md:-inset-16 pointer-events-none opacity-30 md:opacity-100">
                  <img
                    src="/images/map-image.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                    Why Are We
                    <br />
                    Doing This<span className="text-teal-500">?</span>
                  </h2>

                  <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-lg">
                    Online travel reviews don't always tell the whole story. We're inviting real couples to come preview our members-only travel program in person, walk through it with our team for 60 minutes, and share an honest review of what they see. In exchange, every couple that completes the preview walks out with a complimentary 8-day / 7-night cruise plus roundtrip airfare. Port fees and taxes are not included in this deal. This offer is valued at over $2,000! Real reviews from real couples help us build a better program.
                  </p>

                  <p className="text-teal-600 font-medium italic mb-8">
                    "Real reviews from real couples, building a better travel program."
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-auto">
                    <CTAButton onClick={scrollToReservation}>RESERVE MY SPOT</CTAButton>

                    <div className="hidden sm:flex items-center -space-x-3">
                      <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md">
                        <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100" alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md">
                        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100" alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md">
                        <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100" alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600 shadow-md">
                        12
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-3 md:gap-4 h-auto lg:h-[750px]">
                {bentoTiles.map(({ image, icon: Icon, title, description }) => (
                  <button
                    key={title}
                    type="button"
                    onClick={() => setLightboxCard({ image, icon: Icon, title, description, variant: 'overlay' })}
                    aria-label={`View ${title}`}
                    className="group col-span-12 md:col-span-6 row-span-2 relative rounded-2xl md:rounded-3xl shadow-lg text-white flex flex-col justify-between min-h-[400px] md:min-h-[180px] overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-oange-700/40"
                  >
                    <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="relative z-10 p-5 md:p-6 bg-gradient-to-b from-black/20 via-transparent to-transparent">
                      <Icon className="w-10 h-10 text-white transition-all duration-300 group-hover:scale-110 drop-shadow-lg" />
                    </div>
                    <div className="relative z-10 p-5 md:p-6 pt-8 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                      <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
                      <p className="text-white text-sm leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => setLightboxCard({
                    image: '/images/breath.jpg',
                    icon: Building2,
                    title: 'Real Couples, Real Reviews',
                    description: 'We design the program based on honest feedback from couples who actually use it.',
                    variant: 'side',
                  })}
                  aria-label="View Real Couples, Real Reviews"
                  className="group col-span-12 row-span-1 relative rounded-2xl md:rounded-3xl shadow-lg border border-blue-100 flex items-center gap-4 min-h-[100px] overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:border-teal-300 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-oange-700/40"
                >
                  <img src="/images/breath.jpg" alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="relative z-10 flex items-center gap-4 w-full px-5 md:px-6 py-5 md:py-6 bg-gradient-to-r from-white/95 via-white/85 to-white/70">
                    <Building2 className="w-10 h-10 text-teal-600 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:text-teal-700" />
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">Real Couples, Real Reviews</h3>
                      <p className="text-gray-900 text-sm leading-relaxed font-medium">
                        We design the program based on honest feedback from couples who actually use it.
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: Explore Your Way - Destination Carousel */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4 md:mb-6">Explore Your Way</h2>
          <p className="text-gray-600 text-center mb-6 md:mb-8 max-w-4xl mx-auto text-balance">Choose from premium cruise destinations around the world with your 8-Day Cruise Certificate.</p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentResort * 100}%)` }}
            >
              {destinations.map((dest) => (
                <div key={dest.destination} className="min-w-full h-full relative">
                  <img
                    src={dest.image}
                    alt={dest.destination}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 md:mb-6">
                      <MapPin className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">{dest.destination}</h3>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide text-white/90">{dest.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Individual Destination Indicators */}
          <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToDestination(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentResort === index
                    ? 'w-8 h-2 bg-white'
                    : 'w-2 h-2 bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          <button
            onClick={prevDestination}
            className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 sm:p-3 md:p-4 shadow-lg transition-all z-10"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextDestination}
            className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 sm:p-3 md:p-4 shadow-lg transition-all z-10"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </div>

        <div className="container mx-auto px-4 mt-6">
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">This is not a timeshare promotion.</span>
          </div>
        </div>
      </section>

      {/* SECTION 11/13: Vacation Insider Preview Eligibility Requirements */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Who Is Eligible to Attend?
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              We're inviting couples who value quality travel and are ready to commit to attending the full preview. Guests must meet these requirements:
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-12 sm:mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="group">
                <div className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-blue-600 p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-white text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 drop-shadow-lg">Couples Requirement</h3>
                    <p className="text-white leading-relaxed drop-shadow-md text-sm sm:text-base">Both partners attend together at the venue. We're inviting couples who make travel decisions as a team.</p>
                  </div>
                </div>
              </div>

              {eligibilityCards.map(({ icon: Icon, title, description }) => (
                <div key={title} className="group">
                  <div className="relative overflow-hidden bg-white p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border-2 border-gray-200 hover:border-teal-400 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative z-20">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-teal-100 group-hover:bg-teal-200 rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-colors">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-teal-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 transition-colors">{title}</h3>
                      <p className="text-gray-600 leading-relaxed transition-colors text-sm sm:text-base">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 15: Testimonials */}
      <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://jonburtondesign.com/SecretShopper/images/images/Sandles.png"
            alt="Sandals Resort Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-900/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              What Insiders Are Saying
            </h2>
            <p className="text-cyan-200 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4">
              Couples are loving the insider access and the cruise certificate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto mb-8 md:mb-12">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 sm:hover:scale-105">
                <div className="flex items-center gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-oange-700 text-oange-700" />
                  ))}
                </div>
                <p className="text-white text-base sm:text-lg mb-4 sm:mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-white/20 pt-3 sm:pt-4">
                  <p className="font-bold text-cyan-300 text-base sm:text-lg">— {testimonial.name}</p>
                  <p className="text-sm text-cyan-200/80">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 px-4">
            <CTAButton onClick={scrollToReservation}>RESERVE MY SPOT</CTAButton>
            <p className="mt-4 text-xs sm:text-sm text-cyan-100/90 max-w-2xl mx-auto leading-relaxed">
              Port fees and taxes are not included in this deal. This offer is valued at over $2,000!
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 16: FAQ Accordion */}
      <section id="faq" className="py-12 md:py-16 lg:py-20 bg-background-grey-100 scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-blue-800 text-center mb-8 md:mb-12 px-4">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-2 border-gray-200 rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-4 md:px-6 py-4 md:py-5 flex items-center justify-between bg-white hover:bg-gray-50 active:bg-gray-100 transition-colors min-h-[60px]"
                >
                  <span className="font-bold text-sm md:text-base text-primary-blue-950 text-left flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary-blue-600 flex-shrink-0" />
                    {faq.question}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-6 h-6 sm:w-7 sm:h-7 text-primary-blue-600 flex-shrink-0 ml-2" />
                  ) : (
                    <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7 text-primary-blue-600 flex-shrink-0 ml-2" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-4 md:px-6 py-4 md:py-5 bg-gray-50 border-t-2 border-gray-200">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-primary-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12 px-4">
            <CTAButton onClick={scrollToReservation}>RESERVE MY SPOT</CTAButton>
            <p className="mt-4 text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Port fees and taxes are not included in this deal. This offer is valued at over $2,000!
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 15 (Final CTA): Reserve Your Spot */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden bg-white">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-100"
          >
            <source src="https://jonburtondesign.com/SecretShopper/media/FinalCTA.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 py-12 md:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-oange-700 text-white text-xs sm:text-sm font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full shadow-lg mb-4 md:mb-6">
              <Star className="w-3.5 h-3.5 fill-white text-white" />
              Only 12 Spots Available
            </div>
            <div className="mb-4 md:mb-6">
              <div className="text-white font-bold text-xl md:text-2xl drop-shadow-lg">
                <span className="text-primary-yellow-400">VACATION INSIDER</span> | PREVIEW INVITATION
              </div>
              <div className="text-sm text-white/80 mt-1 drop-shadow-lg">Walk out with a complimentary 8/7 cruise certificate plus airfare for two</div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">Reserve Your Spot</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-6 drop-shadow-lg">
              Each preview is limited to 12 couples. Once your seat is reserved, we hold it exclusively for you and turn other couples away from that time. Securing your seat takes 90 seconds.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 mb-6">
              <Shield className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">This is not a timeshare promotion.</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center -space-x-3">
                  <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md">
                    <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md">
                    <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100" alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="text-white text-sm">
                  Limited to <span className="font-bold">12 couples</span> per preview
                </div>
              </div>
              <div className="flex justify-center pt-2">
                <CTAButton onClick={scrollToReservation}>RESERVE MY SPOT</CTAButton>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full relative -mb-1 z-10">
          <img
            src="/images/vector-object.png"
            alt=""
            className="w-full h-auto block"
          />
        </div>
      </section>

      {/* SECTION 17: Footer */}
      <footer className="bg-white text-gray-900 pt-8 md:pt-10 lg:pt-12 pb-8 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <img src="/images/logo.svg" alt="Eazy Vacations" className="h-20 md:h-28 w-auto mb-4" />
            <div className="text-center">
              <div className="text-gray-900 font-semibold text-sm md:text-base tracking-wide">VACATION INSIDER PREVIEW</div>
            </div>
            <div className="text-sm text-teal-600 mb-6 text-center max-w-2xl">Become a Vacation Insider in 60 minutes. Walk out with a complimentary 8-day / 7-night cruise certificate including airfare. Port fees and taxes are not included in this deal. This offer is valued at over $2,000.</div>

            <a
              href="https://www.google.com/search?q=eazy+vacations#lrd=0x4e05ab669ac60d51:0x4b84d2b42ec32a89,1"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 mb-6 px-4 py-2.5 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all"
              aria-label="See our Google Reviews"
            >
              <svg viewBox="0 0 48 48" className="w-7 h-7 flex-shrink-0" aria-hidden="true">
                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 7.9-11.3 7.9-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z"/>
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 19 13 24 13c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.4 6.3 14.7z"/>
                <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.4-4.5 2.3-7.2 2.3-5.3 0-9.7-3.3-11.3-7.9l-6.5 5C9.6 39.6 16.2 44 24 44z"/>
                <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.5l6.2 5.2C40.7 35.7 44 30.3 44 24c0-1.2-.1-2.3-.4-3.5z"/>
              </svg>
              <div className="flex flex-col items-start leading-tight">
                <div className="flex items-center gap-1">
                  <span className="text-base font-bold text-gray-900">4.9</span>
                  <span className="flex" aria-label="4.9 out of 5 stars">
                    {[0, 1, 2, 3, 4].map(i => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </span>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 group-hover:text-teal-600 transition-colors">
                  Google Reviews
                </span>
              </div>
            </a>

            <div className="max-w-3xl text-center mb-6">
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Guest is responsible for port fees & taxes. Travel certificates are valid for 18 months from issue date and are issued in person at the venue at the conclusion of the preview only. There are no mailed certificates. A $40 no-show fee applies if you do not attend your scheduled preview and do not reschedule at least 24 hours in advance. Offers are valid for two adults, 21 years of age or older. One offer per household within any 18-month period. Non-transferable; no cash value. Recipient is responsible for all applicable reservation processing fees, taxes, port fees, fuel surcharges, gratuities, and incidentals. Peak season surcharges may apply. Blackout dates apply. Specific airlines, cruise lines, ships, and itineraries are subject to availability and cannot be guaranteed and are determined by the fulfillment partner. Offers cannot be combined with any other offer. This is not a timeshare promotion. Void where prohibited by law.
              </p>
            </div>

            <div className="text-center">
              <p className="mb-4 text-sm text-gray-600">
                © 2026 <strong>Eazy Vacations, LLC</strong>. All Rights Reserved. Not a timeshare solicitation.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm">
                <button onClick={() => setShowPrivacyModal(true)} className="text-gray-900 hover:text-teal-600 transition-colors">Privacy Policy</button>
                <span className="text-gray-400">|</span>
                <button onClick={() => setShowTermsModal(true)} className="text-gray-900 hover:text-teal-600 transition-colors">Terms & Conditions</button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {showTermsModal && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-2 sm:p-4" onClick={() => setShowTermsModal(false)}>
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white text-gray-900 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between border-b-4 border-oange-700">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Terms & Conditions</h2>
              <button onClick={() => setShowTermsModal(false)} className="text-gray-900 hover:text-teal-600 transition-colors ml-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="overflow-y-auto max-h-[calc(95vh-80px)] sm:max-h-[calc(90vh-100px)] px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
              <div className="space-y-6 text-gray-700">
                <div>
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Effective Date:</strong> January 16, 2026
                  </p>
                  <p className="mb-4">
                    Welcome to the <strong>Eazy Vacations, LLC</strong> Vacation Insider Preview Program (the "Program"). By applying for, participating in, or using any part of the Program, you ("Participant," "you") agree to be bound by these Terms & Conditions. If you do not agree, you may not participate.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary-blue-950 mb-3">1. Eligibility</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Participants must be at least 21 years old.</li>
                    <li>In some cases, Participants must apply as a couple between the ages of 35 and 70. Both individuals must meet Program and resort requirements.</li>
                    <li>Participants must provide accurate and complete information during application and throughout the Program.</li>
                    <li>Participants must possess valid travel documents when required, such as a government-issued ID and a major credit card for check-in.</li>
                    <li><strong>Eazy Vacations, LLC</strong> may deny, pause, or revoke participation for failure to meet eligibility requirements, misuse of the Program, or providing false information.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary-blue-950 mb-3">2. Program Participation</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Assignments may include visiting designated resorts, evaluating services, completing surveys, or participating in a 60-minute Vacation Insider Preview session.</li>
                    <li>Participants agree to provide honest, unbiased, and accurate feedback and to follow resort rules, local laws, and Program guidelines.</li>
                    <li>Failure to complete an assignment or session as directed may result in forfeiture of compensation or incentives and removal from the Program.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary-blue-950 mb-3">3. Compensation & Incentives</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Participants may receive free or discounted accommodations, reimbursements, savings certificates (such as the 8-Day / 7-Night Cruise certificate including airfare for two), or other incentives as specified.</li>
                    <li>All compensation terms will be provided in writing before an assignment is accepted.</li>
                    <li>Participants are responsible for their own transportation to and from the destination, including airfare and ground transfers, unless expressly stated otherwise.</li>
                    <li>Participants are responsible for required travel documents and for incidental charges such as resort fees ($149 activation for certificates), deposits, gratuities, parking, and room service.</li>
                    <li>Participants are solely responsible for reporting and paying any taxes on compensation or incentives received.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary-blue-950 mb-3">Contact Information</h3>
                  <p className="mb-2"><strong>Eazy Vacations, LLC</strong></p>
                  <p className="mb-1">Email: <a href="mailto:concierge@eazyvacations.com" className="text-teal-600 hover:underline">concierge@eazyvacations.com</a></p>
                  <p className="mb-1">Phone: <a href="tel:7546540078" className="text-teal-600 hover:underline">754-654-0078</a></p>
                </div>

                <div className="text-center pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    © 2026 <strong>Eazy Vacations, LLC</strong>. All Rights Reserved. Not a timeshare solicitation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-2 sm:p-4" onClick={() => setShowPrivacyModal(false)}>
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white text-gray-900 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between border-b-4 border-oange-700">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Privacy Policy</h2>
              <button onClick={() => setShowPrivacyModal(false)} className="text-gray-900 hover:text-teal-600 transition-colors ml-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="overflow-y-auto max-h-[calc(95vh-80px)] sm:max-h-[calc(90vh-100px)] px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
              <div className="space-y-6 text-gray-700">
                <div>
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Effective Date:</strong> January 16, 2026 | <strong>Last Updated:</strong> January 16, 2026
                  </p>
                  <p className="mb-4">
                    <strong>Eazy Vacations, LLC</strong> ("we," "our," "us") operates the Vacation Insider Preview Program ("Program"). We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, share, and safeguard information when you visit our websites or participate in the Program.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary-blue-950 mb-3">Information We Collect</h3>
                  <p className="mb-3">When you register for our Vacation Insider Preview Program, we collect the following information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Name and Partner's Name</strong> - To identify eligible couples for our preview sessions.</li>
                    <li><strong>Mobile Phone Number</strong> - For concierge scheduling and session coordination.</li>
                    <li><strong>Email Address</strong> - For confirmation and communication purposes.</li>
                    <li><strong>Location Preference</strong> - To assign you to your preferred preview session venue.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary-blue-950 mb-3">Communications</h3>
                  <p>
                    By submitting your phone number, you authorize <strong>Eazy Vacations, LLC</strong> to contact you via phone or SMS for the express purpose of scheduling your 60-minute Vacation Insider Preview session and coordinating your 8-day / 7-night cruise certificate incentive.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary-blue-950 mb-3">Promotional Incentive</h3>
                  <p>
                    The 8-Day / 7-Night Cruise certificate (including airfare for two) is provided as a thank-you for full attendance at an <strong>Eazy Vacations, LLC</strong> Vacation Insider Preview. Qualification is subject to the eligibility criteria stated on the registration form, including married/cohabitating status and valid identification.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary-blue-950 mb-3">Our Commitment to Privacy</h3>
                  <p>
                    This Policy reflects our commitment to combine quality products and services with integrity in our dealings with users. It is designed to help you understand how we collect, use, and protect the personal information you provide.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary-blue-950 mb-3">Contact Information</h3>
                  <p className="mb-2"><strong>Eazy Vacations, LLC</strong></p>
                  <p className="mb-1">Email: <a href="mailto:concierge@eazyvacations.com" className="text-teal-600 hover:underline">concierge@eazyvacations.com</a></p>
                  <p className="mb-1">Phone: <a href="tel:7546540078" className="text-teal-600 hover:underline">754-654-0078</a></p>
                </div>

                <div className="text-center pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    © 2026 <strong>Eazy Vacations, LLC</strong>. All Rights Reserved. Not a timeshare solicitation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <ImageLightbox card={lightboxCard} onClose={() => setLightboxCard(null)} />
    </div>
  );
}

export default App;
