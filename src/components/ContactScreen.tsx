import React, { useState } from 'react';
import { Doctor, NavTab } from '../types';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  ShieldAlert, 
  CalendarPlus,
  HelpCircle
} from 'lucide-react';

interface ContactScreenProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenAppointmentModal: () => void;
  contactDoctorContext?: Doctor | null;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({
  setActiveTab,
  onOpenAppointmentModal,
  contactDoctorContext
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState(
    contactDoctorContext ? `Inquiry regarding ${contactDoctorContext.name}` : 'General Consultation Inquiry'
  );
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-16 py-12 lg:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0076be]">Patient Care Desk</span>
        <h1 className="text-[32px] md:text-[40px] font-bold text-[#181c21] tracking-tight mt-1">
          Contact Sushruta Medical Institute
        </h1>
        <p className="text-[15px] md:text-[16px] text-[#404751] mt-2 leading-relaxed">
          We are here to assist you with medical inquiries, appointments, admission guidance, and 24x7 emergency response.
        </p>
      </div>

      {/* Main Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Quick Contact Cards */}
        <div className="space-y-4">
          {/* Emergency Card */}
          <div className="bg-[#ffdad6]/50 border border-[#ba1a1a]/30 p-5 rounded-xl">
            <div className="flex items-center gap-3 mb-2 text-[#ba1a1a]">
              <ShieldAlert className="w-6 h-6" />
              <h3 className="text-[16px] font-bold">24x7 Emergency & Trauma</h3>
            </div>
            <p className="text-xs text-[#404751] mb-3">
              Direct red line to Emergency Triage & Cardiac Resuscitation:
            </p>
            <a
              href="tel:+18005559000"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#ba1a1a] text-white rounded-lg text-xs font-bold hover:bg-[#93000a] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(800) 555-9000</span>
            </a>
          </div>

          {/* Hospital Address */}
          <div className="bg-white border border-[#e0e2e9] p-5 rounded-xl shadow-2xs space-y-2">
            <div className="flex items-center gap-2.5 text-[#005d97]">
              <MapPin className="w-5 h-5" />
              <h4 className="font-bold text-[15px] text-[#181c21]">Institute Campus</h4>
            </div>
            <p className="text-xs text-[#404751] leading-relaxed">
              Sushruta Medical Institute Main Complex<br />
              100 Health Sciences Boulevard, Medical District<br />
              Sector 4, Central Health City, 110025
            </p>
          </div>

          {/* Contact Details */}
          <div className="bg-white border border-[#e0e2e9] p-5 rounded-xl shadow-2xs space-y-3">
            <div className="flex items-center gap-2.5 text-[#005d97]">
              <Phone className="w-5 h-5" />
              <h4 className="font-bold text-[15px] text-[#181c21]">Helpdesk & Appointments</h4>
            </div>
            <div className="text-xs text-[#404751] space-y-1">
              <p>• General Enquiry: <span className="font-semibold text-[#181c21]">+1 (555) 019-2830</span></p>
              <p>• OPD Appointments: <span className="font-semibold text-[#181c21]">+1 (555) 019-2831</span></p>
              <p>• Email: <span className="font-semibold text-[#0076be]">care@sushrutamedical.org</span></p>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="bg-white border border-[#e0e2e9] p-5 rounded-xl shadow-2xs space-y-2">
            <div className="flex items-center gap-2.5 text-[#005d97]">
              <Clock className="w-5 h-5" />
              <h4 className="font-bold text-[15px] text-[#181c21]">Clinical Timings</h4>
            </div>
            <div className="text-xs text-[#404751] space-y-1">
              <p>• Outpatient OPD: <strong>Mon - Sat, 8:00 AM - 8:00 PM</strong></p>
              <p>• Diagnostics & Imaging: <strong>24 Hours</strong></p>
              <p>• Inpatient Visiting: <strong>4:00 PM - 7:00 PM Daily</strong></p>
            </div>
          </div>
        </div>

        {/* Right 2-Columns: Inquiry Form */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 sm:p-8 border border-[#e0e2e9] shadow-[0_4px_20px_rgba(30,41,59,0.05)]">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-[#4dfe8a]/20 text-[#006d32] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-[22px] font-bold text-[#181c21]">Thank You for Reaching Out</h3>
              <p className="text-sm text-[#404751] max-w-md mx-auto leading-relaxed">
                Your message has been assigned to our Patient Coordination desk. A representative will contact you within 2 hours during business hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setMessage('');
                }}
                className="mt-4 px-6 py-2.5 bg-[#0076be] text-white rounded-lg text-xs font-semibold hover:bg-[#005d97] transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="border-b border-[#e0e2e9] pb-4">
                <h3 className="text-[20px] font-bold text-[#181c21]">Send an Online Medical Inquiry</h3>
                <p className="text-xs text-[#707882] mt-1">
                  Have a question about specific doctors, surgery estimates, or second opinions? Let us know.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#181c21]">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs md:text-sm bg-white border border-[#c0c7d2] rounded-lg p-2.5 text-[#181c21] focus:outline-none focus:border-[#0076be]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#181c21]">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs md:text-sm bg-white border border-[#c0c7d2] rounded-lg p-2.5 text-[#181c21] focus:outline-none focus:border-[#0076be]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#181c21]">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="john.doe@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs md:text-sm bg-white border border-[#c0c7d2] rounded-lg p-2.5 text-[#181c21] focus:outline-none focus:border-[#0076be]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#181c21]">Inquiry Subject</label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full text-xs md:text-sm bg-white border border-[#c0c7d2] rounded-lg p-2.5 text-[#181c21] focus:outline-none focus:border-[#0076be]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#181c21]">Your Message / Clinical Question *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Please describe how we can assist you..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full text-xs md:text-sm bg-white border border-[#c0c7d2] rounded-lg p-2.5 text-[#181c21] focus:outline-none focus:border-[#0076be]"
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-2">
                <p className="text-[11px] text-[#707882]">
                  Protected under strict medical confidentiality protocols.
                </p>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#0076be] text-white px-7 py-3 rounded-lg text-xs font-semibold hover:bg-[#005d97] active:scale-[0.98] transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
