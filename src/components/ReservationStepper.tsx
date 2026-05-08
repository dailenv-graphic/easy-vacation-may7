import { useState } from 'react';
import { Check, ChevronDown, ArrowRight, ArrowLeft, Calendar, MapPin, User, Mail, Phone, Loader2, Info } from 'lucide-react';
import 'add-to-calendar-button';
import { venues } from '../data/venues';

function to24h(time12: string): string {
  const match = time12.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return '00:00';
  let hours = parseInt(match[1], 10);
  const minutes = match[2];
  const meridiem = match[3].toUpperCase();
  if (meridiem === 'PM' && hours !== 12) hours += 12;
  if (meridiem === 'AM' && hours === 12) hours = 0;
  return `${String(hours).padStart(2, '0')}:${minutes}`;
}

function addMinutes(time24: string, minutesToAdd: number): string {
  const [h, m] = time24.split(':').map(Number);
  const total = h * 60 + m + minutesToAdd;
  const nh = Math.floor((total % (24 * 60)) / 60);
  const nm = total % 60;
  return `${String(nh).padStart(2, '0')}:${String(nm).padStart(2, '0')}`;
}

interface FormData {
  fullName: string;
  partnerName: string;
  email: string;
  phone: string;
  bothAdults: string;
  travelsYearly: string;
  incomeQualified: string;
  consent: boolean;
  location: string;
  date: string;
  time: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
  cardZip: string;
}

const EMPTY_FORM_DATA: FormData = {
  fullName: '',
  partnerName: '',
  email: '',
  phone: '',
  bothAdults: '',
  travelsYearly: '',
  incomeQualified: '',
  consent: false,
  location: '',
  date: '',
  time: '',
  cardNumber: '',
  cardExpiry: '',
  cardCvc: '',
  cardZip: ''
};

const locations = venues.map(v => ({ value: v.formValue, label: v.formValue }));

const steps = [
  { id: 1, label: 'Qualify' },
  { id: 2, label: 'Schedule' },
  { id: 3, label: 'Confirm' },
  { id: 4, label: 'Attend & Receive' }
];

interface ReservationStepperProps {
  initialData?: Partial<FormData>;
}

export default function ReservationStepper({ initialData }: ReservationStepperProps = {}) {
  const [step, setStep] = useState(1);
  const [qualifierPassed, setQualifierPassed] = useState(false);
  const [data, setData] = useState<FormData>({ ...EMPTY_FORM_DATA, ...initialData });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const selectedVenue = venues.find(v => v.formValue === data.location);
  const availableDates = selectedVenue?.schedule ?? [];
  const selectedDay = availableDates.find(d => d.date === data.date);
  const availableTimes = selectedDay?.times ?? [];

  const handleLocationChange = (value: string) => {
    setData(prev => ({ ...prev, location: value, date: '', time: '' }));
  };

  const handleDateChange = (value: string) => {
    setData(prev => ({ ...prev, date: value, time: '' }));
  };

  const isStep1Valid =
    data.location !== '' && data.date !== '' && data.time !== '';

  const isQualifierValid =
    data.bothAdults === 'yes' &&
    data.travelsYearly === 'yes' &&
    data.incomeQualified === 'yes';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const phoneDigits = data.phone.replace(/\D/g, '');

  const emailValid = emailRegex.test(data.email.trim());
  const phoneValid = phoneDigits.length === 10;

  const isStep2Valid =
    data.fullName.trim() !== '' &&
    data.partnerName.trim() !== '' &&
    emailValid &&
    phoneValid &&
    data.consent;

  const isStep3Valid =
    data.cardNumber.trim() !== '' &&
    data.cardExpiry.trim() !== '' &&
    data.cardCvc.trim() !== '' &&
    data.cardZip.trim() !== '';

  const handleSubmit = async () => {
    if (!isStep3Valid || isSubmitting) return;
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 800));
    setIsSubmitting(false);
    setStep(4);
  };

  return (
    <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 px-6 py-5 border-b border-white/20">
        <h2 className="text-white font-bold text-xl md:text-2xl text-center">
          Reserve Your Spot in 4 Simple Steps
        </h2>
      </div>

      <div className="p-5">
        {step < 4 && <Stepper currentStep={step} />}

        {step === 1 && (
          <div className="space-y-3">
            <p className="text-gray-600 text-sm mb-2">
              To claim this complimentary Fly &amp; Cruise deal, you'll attend a
              friendly 60-minute presentation about{' '}
              <span className="font-semibold text-[#11B0BD]">
                saving on future travel
              </span>
              . Both partners must attend to qualify.
            </p>

            <SelectWrap>
              <select
                aria-label="Location"
                value={data.location}
                onChange={e => handleLocationChange(e.target.value)}
                className={`${selectClass} ${data.location === '' ? 'text-gray-400' : ''}`}
              >
                <option value="">Location</option>
                {locations.map(loc => (
                  <option key={loc.value} value={loc.value}>
                    {loc.label}
                  </option>
                ))}
              </select>
              <ChevronDown className={selectIconClass} />
            </SelectWrap>

            <SelectWrap>
              <select
                aria-label="Date"
                value={data.date}
                disabled={!data.location}
                onChange={e => handleDateChange(e.target.value)}
                className={`${selectClass} ${data.date === '' ? 'text-gray-400' : ''} ${!data.location ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                <option value="">{data.location ? 'Date' : 'Select location first'}</option>
                {availableDates.map(d => (
                  <option key={d.date} value={d.date}>
                    {d.day}
                  </option>
                ))}
              </select>
              <ChevronDown className={selectIconClass} />
            </SelectWrap>

            <SelectWrap>
              <select
                aria-label="Time"
                value={data.time}
                disabled={!data.date}
                onChange={e => update('time', e.target.value)}
                className={`${selectClass} ${data.time === '' ? 'text-gray-400' : ''} ${!data.date ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                <option value="">{data.date ? 'Time' : 'Select date first'}</option>
                {availableTimes.map(t => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <ChevronDown className={selectIconClass} />
            </SelectWrap>
          </div>
        )}

        {step === 2 && !qualifierPassed && (
          <div className="space-y-3">
            <p className="text-gray-600 text-sm mb-1">
              Answer a few quick questions about your travel habits to confirm
              your eligibility for our preview.
            </p>

            {data.bothAdults === 'no' && (
              <DisqualifierBanner message="This offer is reserved for couples where both partners are between 35 and 70 years old." />
            )}
            <YesNo
              label="Are both partners between the ages of 35 and 70?"
              value={data.bothAdults}
              onChange={v => update('bothAdults', v)}
            />

            {data.travelsYearly === 'no' && (
              <DisqualifierBanner message="This offer is designed for households that travel at least once per year." />
            )}
            <YesNo
              label="Do you take a vacation at least once per year?"
              value={data.travelsYearly}
              onChange={v => update('travelsYearly', v)}
            />

            {data.incomeQualified === 'no' && (
              <DisqualifierBanner message="This offer requires a minimum household income of $75,000 to qualify for the complimentary Fly & Cruise deal." />
            )}
            <YesNo
              label="Is your household income $75,000 or more?"
              value={data.incomeQualified}
              onChange={v => update('incomeQualified', v)}
            />
          </div>
        )}

        {step === 2 && qualifierPassed && (
          <div className="space-y-3">
            <p className="text-gray-600 text-sm mb-1">
              Tell us who's attending and how we should send your confirmation
              by email and SMS.
            </p>

            <Input
              value={data.fullName}
              onChange={v => update('fullName', v)}
              placeholder="Your Name"
            />

            <Input
              value={data.partnerName}
              onChange={v => update('partnerName', v)}
              placeholder="Partner's Name"
            />

            <div>
              <Input
                type="email"
                value={data.email}
                onChange={v => update('email', v)}
                placeholder="Email"
                invalid={data.email.trim() !== '' && !emailValid}
              />
              {data.email.trim() !== '' && !emailValid && (
                <p className="mt-1 text-xs text-red-600">
                  Please enter a valid email address.
                </p>
              )}
            </div>

            <div>
              <Input
                type="tel"
                inputMode="tel"
                value={data.phone}
                onChange={v => {
                  const digits = v.replace(/\D/g, '').slice(0, 10);
                  let formatted = digits;
                  if (digits.length > 6) {
                    formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
                  } else if (digits.length > 3) {
                    formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
                  } else if (digits.length > 0) {
                    formatted = `(${digits}`;
                  }
                  update('phone', formatted);
                }}
                placeholder="Phone (10 digits)"
                invalid={phoneDigits.length > 0 && phoneDigits.length !== 10}
              />
              {phoneDigits.length > 0 && phoneDigits.length !== 10 && (
                <p className="mt-1 text-xs text-red-600">
                  Please enter a 10-digit phone number.
                </p>
              )}
            </div>

            <label className="flex items-start gap-2.5 pt-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={data.consent}
                onChange={e => update('consent', e.target.checked)}
                className="mt-0.5 w-4 h-4 flex-shrink-0 rounded border-2 border-gray-300 text-[#11B0BD] focus:ring-2 focus:ring-[#11B0BD]/40 cursor-pointer"
              />
              <span className="text-xs text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                I confirm both partners will attend the full 60-minute preview
                and consent to receive confirmation by email and SMS. Message
                and data rates may apply.
              </span>
            </label>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-3">
            <p className="text-gray-600 text-sm mb-1">
              Add a credit card to secure your spot. Previews are limited to 12
              couples — your card holds two seats in your name. We charge a{' '}
              <strong className="text-gray-900">$40 no-show fee</strong> if you
              don't attend, otherwise no charge.
            </p>

            <Input
              value={data.cardNumber}
              onChange={v => update('cardNumber', v)}
              placeholder="Card Number"
            />

            <div className="grid grid-cols-3 gap-2">
              <Input
                value={data.cardExpiry}
                onChange={v => update('cardExpiry', v)}
                placeholder="MM/YY"
              />
              <Input
                value={data.cardCvc}
                onChange={v => update('cardCvc', v)}
                placeholder="CVC"
              />
              <Input
                value={data.cardZip}
                onChange={v => update('cardZip', v)}
                placeholder="ZIP"
              />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#002147] mb-1">
              You're confirmed!
            </h3>
            <p className="text-gray-600 text-sm mb-5">
              Walk out with your 8/7 cruise certificate plus airfare the moment
              your preview ends. Issued in person at the venue — no mailed
              certificates.
            </p>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-4 space-y-3 text-left">
              <Confirm icon={<User className="w-3.5 h-3.5 text-[#11B0BD]" />} label="Attendee" value={data.fullName} />
              <Confirm icon={<User className="w-3.5 h-3.5 text-[#11B0BD]" />} label="Partner" value={data.partnerName} />
              <Confirm icon={<Mail className="w-3.5 h-3.5 text-[#11B0BD]" />} label="Email" value={data.email} />
              <Confirm icon={<Phone className="w-3.5 h-3.5 text-[#11B0BD]" />} label="Phone" value={data.phone} />
              <Confirm icon={<MapPin className="w-3.5 h-3.5 text-[#11B0BD]" />} label="Venue" value={data.location} />
              <Confirm icon={<Calendar className="w-3.5 h-3.5 text-[#11B0BD]" />} label="When" value={`${selectedDay?.day ?? data.date} at ${data.time}`} />
            </div>

            {selectedVenue && selectedDay && data.time && (
              <div className="mt-5 flex flex-col items-center gap-2">
                <p className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                  Save the date
                </p>
                <add-to-calendar-button
                  name="Eazy Vacations Insider Preview"
                  description={
                    "Your 60-minute Vacation Insider Preview reservation. Both partners must attend to qualify for the complimentary 8-day / 7-night Fly & Cruise certificate. Questions? Call 754-654-0078."
                  }
                  startDate={selectedDay.date}
                  endDate={selectedDay.date}
                  startTime={to24h(data.time)}
                  endTime={addMinutes(to24h(data.time), 60)}
                  timeZone="America/New_York"
                  location={`${selectedVenue.venueName}, ${selectedVenue.address}`}
                  options="['Apple','Google','iCal','Outlook.com','Yahoo']"
                  buttonStyle="round"
                  lightMode="light"
                  label="Add to Calendar"
                  listStyle="dropup-static"
                  hideBranding="true"
                />
              </div>
            )}
          </div>
        )}

        {step < 4 && (() => {
          const onQualifier = step === 2 && !qualifierPassed;
          const continueEnabled =
            (step === 1 && isStep1Valid) ||
            (onQualifier && isQualifierValid) ||
            (step === 2 && qualifierPassed && isStep2Valid);
          const handleContinue = () => {
            if (step === 1) setStep(2);
            else if (onQualifier) setQualifierPassed(true);
            else if (step === 2 && qualifierPassed) setStep(3);
          };
          const handleBack = () => {
            if (step === 2 && qualifierPassed) setQualifierPassed(false);
            else if (step === 2) setStep(1);
            else if (step === 3) setStep(2);
          };
          return (
          <div className="flex gap-2 pt-4">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="flex-1 font-medium py-2.5 px-3 rounded-xl border-2 border-gray-200 text-gray-600 hover:bg-gray-50 active:bg-gray-100 transition-all flex items-center justify-center gap-1.5 text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            )}

            {step < 3 && (
              <button
                type="button"
                onClick={handleContinue}
                disabled={!continueEnabled}
                className={`${step === 1 ? 'w-full' : 'flex-[2]'} font-bold py-2.5 px-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 text-sm ${
                  continueEnabled
                    ? 'bg-[#11B0BD] text-white hover:bg-[#0d8e98]'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {step === 3 && (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!isStep3Valid || isSubmitting}
                className={`flex-[2] font-bold py-2.5 px-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm ${
                  isStep3Valid && !isSubmitting
                    ? 'bg-[#11B0BD] text-white hover:bg-[#0d8e98]'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Reserving...
                  </>
                ) : (
                  <>
                    Reserve My Spot
                    <Check className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
          );
        })()}
      </div>
    </div>
  );
}

const inputClass =
  'w-full p-2.5 border-2 border-gray-200 rounded-xl focus:border-[#11B0BD] focus:outline-none transition-colors text-sm';
const selectClass =
  'w-full p-2.5 pr-10 border-2 border-gray-200 rounded-xl appearance-none focus:border-[#11B0BD] focus:outline-none transition-colors bg-white text-gray-700 text-sm font-medium';
const selectIconClass =
  'absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none';

function Input({
  type = 'text',
  value,
  onChange,
  placeholder,
  invalid = false,
  inputMode
}: {
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  invalid?: boolean;
  inputMode?: 'text' | 'email' | 'tel' | 'numeric' | 'decimal' | 'search' | 'url' | 'none';
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      aria-label={placeholder}
      aria-invalid={invalid || undefined}
      inputMode={inputMode}
      className={`${inputClass} ${invalid ? 'border-red-400 focus:border-red-500' : ''}`.trim()}
    />
  );
}

function SelectWrap({ children }: { children: React.ReactNode }) {
  return <div className="relative">{children}</div>;
}

function DisqualifierBanner({ message }: { message: string }) {
  return (
    <div className="flex items-start gap-2.5 bg-red-50 border border-red-300 rounded-xl p-3">
      <Info className="w-4 h-4 text-red-700 flex-shrink-0 mt-0.5" />
      <p className="text-xs text-red-700 leading-relaxed">{message}</p>
    </div>
  );
}

function YesNo({
  label,
  value,
  onChange
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="text-xs font-medium text-gray-700 mb-1">{label}</p>
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => onChange('yes')}
          className={`p-2 rounded-xl border-2 text-sm font-medium transition-all ${
            value === 'yes'
              ? 'border-[#11B0BD] bg-[#11B0BD]/10 text-[#002147]'
              : 'border-gray-200 text-gray-600 hover:border-gray-300'
          }`}
        >
          Yes
        </button>
        <button
          type="button"
          onClick={() => onChange('no')}
          className={`p-2 rounded-xl border-2 text-sm font-medium transition-all ${
            value === 'no'
              ? 'border-red-300 bg-red-50 text-red-700'
              : 'border-gray-200 text-gray-600 hover:border-gray-300'
          }`}
        >
          No
        </button>
      </div>
    </div>
  );
}

function Stepper({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex items-start justify-between mb-5">
      {steps.map((s, idx) => {
        const isActive = currentStep === s.id;
        const isComplete = currentStep > s.id;
        return (
          <div key={s.id} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  isComplete
                    ? 'bg-[#11B0BD] text-white'
                    : isActive
                    ? 'bg-[#11B0BD] text-white ring-4 ring-[#11B0BD]/20'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {isComplete ? <Check className="w-4 h-4" /> : s.id}
              </div>
              <span
                className={`text-[10px] mt-1 font-medium text-center leading-tight ${
                  isActive || isComplete ? 'text-[#002147]' : 'text-gray-400'
                }`}
              >
                {s.label}
              </span>
            </div>
            {idx < steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-2 mt-4 transition-colors ${
                  isComplete ? 'bg-[#11B0BD]' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function Confirm({
  icon,
  label,
  value
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-7 h-7 bg-[#11B0BD]/20 rounded-lg flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-[10px] text-gray-500 uppercase tracking-wide">{label}</p>
        <p className="font-semibold text-[#002147] text-sm">{value}</p>
      </div>
    </div>
  );
}
