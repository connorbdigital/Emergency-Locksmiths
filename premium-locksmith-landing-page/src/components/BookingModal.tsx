import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, MapPin, ShieldCheck, Phone, ArrowRight, Building2, Home, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO, WIRRAL_POSTCODES } from '../data/locksmithData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'residential' | 'commercial';
  initialPostcode?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialType = 'residential',
  initialPostcode = ''
}) => {
  const [step, setStep] = useState<number>(1);
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial'>(initialType);
  const [propertySubtype, setPropertySubtype] = useState<string>('Homeowner');
  const [postcode, setPostcode] = useState<string>(initialPostcode);
  const [address, setAddress] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<string>('Morning (08:30 - 12:00)');
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>(['Anti-Snap Lock Check']);
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  if (!isOpen) return null;

  const toggleConcern = (concern: string) => {
    if (selectedConcerns.includes(concern)) {
      setSelectedConcerns(selectedConcerns.filter(c => c !== concern));
    } else {
      setSelectedConcerns([...selectedConcerns, concern]);
    }
  };

  const handlePostcodeLookup = (pc: string) => {
    setPostcode(pc.toUpperCase());
  };

  const matchedArea = WIRRAL_POSTCODES.find(area => 
    postcode.trim().toUpperCase().startsWith(area.postcode)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const randomRef = 'NWL-' + Math.floor(10000 + Math.random() * 90000);
      setBookingRef(randomRef);
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#38bdf8', '#10b981', '#ffffff']
        });
      } catch (err) {
        console.error(err);
      }
    }, 900);
  };

  const resetForm = () => {
    setStep(1);
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#090e1a] border border-cyan-500/20 rounded-3xl shadow-2xl shadow-cyan-950/50 overflow-hidden z-10 my-8">
        {/* Glow accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-slate-900/40">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">100% Free • No Obligation</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <h3 className="text-lg font-bold text-white">Book 36-Point Property Security Check</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 max-h-[78vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Audit Slot Confirmed • £0.00 Due</span>
                </span>
                <h4 className="text-2xl font-bold text-white mb-2">You're All Booked In!</h4>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Our certified Master Locksmith technician will arrive to conduct your comprehensive 36-point physical security audit.
                </p>
              </div>

              {/* Confirmation card */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 text-left space-y-3 font-mono text-xs text-slate-300">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Reference:</span>
                  <span className="text-cyan-400 font-bold">{bookingRef}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Property Category:</span>
                  <span className="text-white capitalize">{propertyType} ({propertySubtype})</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Wirral Coverage Area:</span>
                  <span className="text-white">{postcode || 'Wallasey / Wirral'}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Selected Window:</span>
                  <span className="text-emerald-400">{selectedSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Inspection Fee:</span>
                  <span className="text-emerald-400 font-bold">100% FREE (£0.00)</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/40 text-xs text-cyan-200 text-left flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 flex-shrink-0 text-cyan-400 mt-0.5" />
                <p>
                  We have dispatched a confirmation SMS & email to <strong className="text-white">{phone || 'your phone'}</strong>. If you require emergency lockout assistance right now instead, please call our 24/7 direct line directly.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="flex-1 inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all shadow-lg shadow-cyan-500/25"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Master Locksmith ({BUSINESS_INFO.phoneDisplay})</span>
                </a>
                <button
                  type="button"
                  onClick={resetForm}
                  className="py-3 px-6 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Progress Indicator */}
              <div className="flex items-center justify-between pb-2">
                {[1, 2, 3].map((stepNum) => (
                  <div key={stepNum} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                        step === stepNum
                          ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/40'
                          : step > stepNum
                          ? 'bg-emerald-500 text-slate-950'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {step > stepNum ? '✓' : stepNum}
                    </div>
                    {stepNum < 3 && (
                      <div className={`w-16 sm:w-28 h-0.5 mx-2 ${step > stepNum ? 'bg-emerald-500/60' : 'bg-slate-800'}`} />
                    )}
                  </div>
                ))}
              </div>

              {/* STEP 1: Property & Postcode */}
              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-slate-400 mb-2">
                      1. Select Property Classification
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          setPropertyType('residential');
                          setPropertySubtype('Homeowner');
                        }}
                        className={`p-4 rounded-2xl border text-left flex flex-col space-y-2 transition-all ${
                          propertyType === 'residential'
                            ? 'bg-cyan-950/40 border-cyan-500 text-white ring-2 ring-cyan-500/30'
                            : 'bg-slate-900/50 border-white/5 text-slate-400 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <Home className={`w-5 h-5 ${propertyType === 'residential' ? 'text-cyan-400' : 'text-slate-400'}`} />
                          {propertyType === 'residential' && <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full font-mono">Selected</span>}
                        </div>
                        <span className="font-bold text-white text-sm">Domestic / Home</span>
                        <span className="text-xs text-slate-400">Homeowners, Landlords, Tenants, Flats & Cottages</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setPropertyType('commercial');
                          setPropertySubtype('Retail / Shopfront');
                        }}
                        className={`p-4 rounded-2xl border text-left flex flex-col space-y-2 transition-all ${
                          propertyType === 'commercial'
                            ? 'bg-cyan-950/40 border-cyan-500 text-white ring-2 ring-cyan-500/30'
                            : 'bg-slate-900/50 border-white/5 text-slate-400 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <Building2 className={`w-5 h-5 ${propertyType === 'commercial' ? 'text-cyan-400' : 'text-slate-400'}`} />
                          {propertyType === 'commercial' && <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full font-mono">Selected</span>}
                        </div>
                        <span className="font-bold text-white text-sm">Commercial / Business</span>
                        <span className="text-xs text-slate-400">Offices, Retail, Warehouses, Schools, Facilities</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-slate-400 mb-2">
                      Property Role / Structure
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {(propertyType === 'residential'
                        ? ['Homeowner', 'Landlord / Rental', 'Tenant', 'Holiday Let', 'New Build Move-In']
                        : ['Retail / Shopfront', 'Corporate Office', 'Warehouse / Industrial', 'Hospitality / Pub', 'School / Clinic']
                      ).map(sub => (
                        <button
                          key={sub}
                          type="button"
                          onClick={() => setPropertySubtype(sub)}
                          className={`text-xs px-3.5 py-2 rounded-xl border transition-all ${
                            propertySubtype === sub
                              ? 'bg-cyan-500 text-slate-950 font-semibold border-cyan-400'
                              : 'bg-slate-900 border-white/10 text-slate-300 hover:border-white/30'
                          }`}
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Postcode lookup */}
                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-slate-400 mb-2">
                      2. Wirral Postcode (Coverage Check)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="e.g. CH45, CH48, CH41..."
                        value={postcode}
                        onChange={(e) => handlePostcodeLookup(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-white/15 rounded-xl text-white font-mono placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 uppercase text-sm"
                        required
                      />
                    </div>

                    {matchedArea ? (
                      <div className="mt-2.5 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center space-x-2 text-xs text-emerald-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>
                          <strong>Free Check Available:</strong> {matchedArea.name} ({matchedArea.postcode}) • Mobile tech response time ~{matchedArea.dispatchTime}
                        </span>
                      </div>
                    ) : postcode.length >= 2 ? (
                      <div className="mt-2.5 p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center space-x-2 text-xs text-cyan-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>All Wirral, Chester & surrounding North West addresses are covered 100% free with no call-out fee.</span>
                      </div>
                    ) : null}
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-slate-400 mb-2">
                      Address / Street Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 14 Column Road, West Kirby"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-white/15 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 text-sm"
                      required
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!address || !postcode}
                    className="w-full py-3.5 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-semibold flex items-center justify-center space-x-2 transition-all shadow-lg shadow-cyan-500/20"
                  >
                    <span>Proceed to Inspection Date & Focus</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* STEP 2: Date & Concerns */}
              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-slate-400 mb-2">
                      Select Desired Inspection Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                      </div>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-white/15 rounded-xl text-white focus:outline-none focus:border-cyan-400 text-sm"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-slate-400 mb-2">
                      Preferred Arrival Window
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        { time: 'Morning', desc: '08:30 - 12:00' },
                        { time: 'Afternoon', desc: '12:00 - 17:00' },
                        { time: 'Evening', desc: '17:00 - 20:00' },
                      ].map(slot => (
                        <button
                          key={slot.time}
                          type="button"
                          onClick={() => setSelectedSlot(`${slot.time} (${slot.desc})`)}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            selectedSlot.includes(slot.time)
                              ? 'bg-cyan-950/60 border-cyan-400 text-white ring-1 ring-cyan-400'
                              : 'bg-slate-900 border-white/10 text-slate-400 hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center space-x-1.5 text-xs text-cyan-400 font-mono mb-0.5">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{slot.time}</span>
                          </div>
                          <span className="text-xs font-semibold text-white block">{slot.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-slate-400 mb-2">
                      Key Areas to Audit (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        'Anti-Snap Lock Check',
                        'Insurance BS3621 Compliance',
                        'uPVC / Composite Gearbox Check',
                        'Patio & Bifold Door Sliders',
                        'Window Locks & Hinges',
                        'Commercial Panic / Fire Bars',
                        'Moving Into New Property',
                        'Keys Lost / Unknown Copies'
                      ].map(concern => (
                        <button
                          key={concern}
                          type="button"
                          onClick={() => toggleConcern(concern)}
                          className={`p-2.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${
                            selectedConcerns.includes(concern)
                              ? 'bg-cyan-950/40 border-cyan-500 text-cyan-200'
                              : 'bg-slate-900 border-white/10 text-slate-400 hover:border-white/20'
                          }`}
                        >
                          <span>{concern}</span>
                          {selectedConcerns.includes(concern) && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="py-3 px-5 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 text-sm font-medium"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="flex-1 py-3 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold flex items-center justify-center space-x-2 transition-all shadow-lg shadow-cyan-500/20 text-sm"
                    >
                      <span>Next: Contact & Confirm Check</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact & Submission */}
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-slate-400 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rachel Higgins"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-white/15 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 text-sm"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs uppercase font-mono tracking-wider text-slate-400 mb-1.5">
                        Telephone Number (for dispatch SMS) *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 07923 555661 or 0151..."
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2.5 bg-slate-900 border border-white/15 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase font-mono tracking-wider text-slate-400 mb-1.5">
                        Email Address (for security report) *
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. rachel@example.co.uk"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 bg-slate-900 border border-white/15 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-slate-400 mb-1.5">
                      Specific Notes or Access Instructions (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Parking available on driveway, stiff front composite handle, side gate key missing..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-4 py-2 bg-slate-900 border border-white/15 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 text-sm"
                    />
                  </div>

                  {/* Summary Guarantee */}
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 space-y-1.5 text-xs text-slate-300">
                    <div className="flex items-center space-x-2 text-emerald-400 font-semibold">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Locksmiths Wirral Free Check Guarantee:</span>
                    </div>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-400 pl-1">
                      <li>Total Cost: £0.00 (No call-out fee, no survey charge)</li>
                      <li>CRB / DBS Checked Certified Master Locksmith</li>
                      <li>Written vulnerability checklist with no sales pressure</li>
                    </ul>
                  </div>

                  <div className="flex space-x-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="py-3 px-5 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 text-sm font-medium"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting || !fullName || !phone || !email}
                      className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 disabled:opacity-50 text-slate-950 font-bold flex items-center justify-center space-x-2 transition-all shadow-lg shadow-cyan-500/25 text-sm"
                    >
                      {isSubmitting ? (
                        <span>Securing Your Free Audit Slot...</span>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          <span>Confirm 100% Free Security Check</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
