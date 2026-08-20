import React, { useState } from 'react';
import { heroImages } from '../data/doctors';
import { NavTab } from '../types';
import { 
  Building2, 
  Award, 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  X, 
  Clock, 
  Calendar,
  ChevronRight
} from 'lucide-react';

interface AboutScreenProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenAppointmentModal: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({
  setActiveTab,
  onOpenAppointmentModal
}) => {
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [showLearnMoreModal, setShowLearnMoreModal] = useState(false);

  return (
    <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-16 py-12 lg:py-16 space-y-12 lg:space-y-16">
      {/* About Medicare Hero Section Matching Screen 4 */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Text Content Side */}
        <div className="flex flex-col gap-6">
          <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#181c21] leading-[1.18] tracking-tight">
            Compassionate Care, Clinical Precision
          </h1>

          <p className="text-[17px] lg:text-[18px] text-[#404751] leading-relaxed">
            At Sushruta Medical Institute, we combine decades of medical expertise with a deeply compassionate approach. Our commitment is to provide world-class healthcare, ensuring every patient receives the attention, respect, and cutting-edge treatment they deserve.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => setShowLearnMoreModal(true)}
              className="bg-[#005d97] text-white px-7 py-3.5 rounded-lg text-[15px] font-semibold hover:bg-[#004a79] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
            >
              Learn More
            </button>
            <button
              onClick={() => setShowHistoryModal(true)}
              className="border border-[#005d97] text-[#005d97] px-7 py-3.5 rounded-lg text-[15px] font-semibold hover:bg-[#005d97]/5 active:scale-[0.98] transition-all cursor-pointer"
            >
              Our History
            </button>
          </div>
        </div>

        {/* Hero Image Side */}
        <div className="relative h-[340px] sm:h-[400px] lg:h-[430px] rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(30,41,59,0.08)] bg-[#ebeef4] border border-[#c0c7d2]/30 group">
          <img
            src={heroImages.aboutPhoto}
            alt="A doctor talking warmly to a smiling patient in a bright hospital corridor"
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>
      </section>

      {/* Stats Counter Section Matching Screen 4 */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#f1f3fa] rounded-2xl p-8 lg:p-12 shadow-xs border border-[#c0c7d2]/30">
        {/* Stat 1 */}
        <div className="flex flex-col items-center text-center gap-2">
          <div className="text-[40px] lg:text-[48px] font-bold text-[#005d97] tracking-tight">
            100%
          </div>
          <div className="text-[18px] lg:text-[20px] font-semibold text-[#181c21]">
            Satisfaction Rate
          </div>
          <p className="text-[14px] lg:text-[15px] text-[#404751] max-w-[260px]">
            Consistent excellence in patient care and feedback.
          </p>
        </div>

        {/* Stat 2 (with middle borders on md+) */}
        <div className="flex flex-col items-center text-center gap-2 md:border-l md:border-r border-[#c0c7d2]/50 px-4">
          <div className="text-[40px] lg:text-[48px] font-bold text-[#005d97] tracking-tight">
            75+
          </div>
          <div className="text-[18px] lg:text-[20px] font-semibold text-[#181c21]">
            Years Experience
          </div>
          <p className="text-[14px] lg:text-[15px] text-[#404751] max-w-[260px]">
            A legacy of medical innovation and community service.
          </p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center text-center gap-2">
          <div className="text-[40px] lg:text-[48px] font-bold text-[#005d97] tracking-tight">
            9000+
          </div>
          <div className="text-[18px] lg:text-[20px] font-semibold text-[#181c21]">
            Happy Patients
          </div>
          <p className="text-[14px] lg:text-[15px] text-[#404751] max-w-[260px]">
            Lives improved through dedicated medical attention.
          </p>
        </div>
      </section>

      {/* Core Institutional Pillars */}
      <section className="pt-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0076be]">The Sushruta Promise</span>
          <h2 className="text-[26px] lg:text-[30px] font-bold text-[#181c21] mt-1">
            Built on Integrity, Driven by Healing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-[#e0e2e9] shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-[#d0e4ff] text-[#005d97] flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-[17px] font-bold text-[#181c21] mb-2">Heritage of Sushruta</h3>
            <p className="text-[14px] text-[#404751] leading-relaxed">
              Named after Maharshi Sushruta, revered as the founding father of surgery. We honor this timeless legacy with surgical precision and ethical care.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#e0e2e9] shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-[#d0e4ff] text-[#005d97] flex items-center justify-center mb-4">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-[17px] font-bold text-[#181c21] mb-2">Patient-First Philosophy</h3>
            <p className="text-[14px] text-[#404751] leading-relaxed">
              Every diagnosis is communicated transparently with personalized rehabilitation pathways and dedicated case nurses.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#e0e2e9] shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-[#d0e4ff] text-[#005d97] flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-[17px] font-bold text-[#181c21] mb-2">NABH & JCI Accreditations</h3>
            <p className="text-[14px] text-[#404751] leading-relaxed">
              Maintaining gold-standard sterile hospital environments, zero-infection ICUs, and 100% compliance with international clinical safety.
            </p>
          </div>
        </div>
      </section>

      {/* History Modal */}
      {showHistoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#c0c7d2]/40 overflow-hidden relative animate-in fade-in zoom-in duration-200">
            <div className="px-6 py-4 bg-[#f8f9ff] border-b border-[#e6e8ef] flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-[#005d97]">
                <Building2 className="w-5 h-5" />
                <h3 className="font-bold text-lg text-[#181c21]">Our 75-Year Heritage & Evolution</h3>
              </div>
              <button
                onClick={() => setShowHistoryModal(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#707882] hover:bg-[#ebeef4] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 max-h-[65vh] overflow-y-auto space-y-6">
              <div className="relative border-l-2 border-[#0076be] pl-6 ml-3 space-y-6">
                <div className="relative">
                  <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#0076be] border-2 border-white ring-4 ring-[#d0e4ff]" />
                  <span className="text-xs font-bold text-[#0076be] uppercase">1949 — Founding Vision</span>
                  <h4 className="text-[16px] font-bold text-[#181c21] mt-0.5">Community Dispensary to Modern Institute</h4>
                  <p className="text-[13px] text-[#404751] mt-1 leading-relaxed">
                    Established by pioneering physicians with a charter to deliver advanced surgical and clinical care to all citizens with uncompromised ethics.
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#0076be] border-2 border-white ring-4 ring-[#d0e4ff]" />
                  <span className="text-xs font-bold text-[#0076be] uppercase">1985 — Specialized Multi-Specialty Towers</span>
                  <h4 className="text-[16px] font-bold text-[#181c21] mt-0.5">Cardiology & Neurology Wings</h4>
                  <p className="text-[13px] text-[#404751] mt-1 leading-relaxed">
                    Expanded to a 400-bed tertiary care center introducing the region’s first continuous catheterization suite and pediatric ICU.
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#0076be] border-2 border-white ring-4 ring-[#d0e4ff]" />
                  <span className="text-xs font-bold text-[#0076be] uppercase">2018 — Robotic Surgery Center</span>
                  <h4 className="text-[16px] font-bold text-[#181c21] mt-0.5">da Vinci Robotic & Oncology Pavilion</h4>
                  <p className="text-[13px] text-[#404751] mt-1 leading-relaxed">
                    Commissioned world-class robotic surgical consoles and genomic cancer profiling labs, training over 100 fellows annually.
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#006d32] border-2 border-white ring-4 ring-[#4dfe8a]/40" />
                  <span className="text-xs font-bold text-[#006d32] uppercase">Today — Smart Digital Healthcare</span>
                  <h4 className="text-[16px] font-bold text-[#181c21] mt-0.5">Seamless Digital Patient Experience</h4>
                  <p className="text-[13px] text-[#404751] mt-1 leading-relaxed">
                    Integrating online registration, instant specialist appointments, telemedicine, and synchronized electronic health records.
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 py-3.5 bg-[#f8f9ff] border-t border-[#e6e8ef] flex justify-between items-center">
              <button
                onClick={() => {
                  setShowHistoryModal(false);
                  setActiveTab('team');
                }}
                className="text-xs font-semibold text-[#0076be] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Meet Our Team</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setShowHistoryModal(false)}
                className="bg-[#0076be] text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-[#005d97] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Learn More Modal */}
      {showLearnMoreModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-[#c0c7d2]/40 overflow-hidden relative animate-in fade-in zoom-in duration-200">
            <div className="px-6 py-4 bg-[#f8f9ff] border-b border-[#e6e8ef] flex items-center justify-between">
              <h3 className="font-bold text-lg text-[#181c21]">About Sushruta Medical Institute</h3>
              <button
                onClick={() => setShowLearnMoreModal(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#707882] hover:bg-[#ebeef4] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 text-[14px] text-[#404751] space-y-4">
              <p>
                Sushruta Medical Institute is a premier tertiary care hospital dedicated to providing holistic, patient-centered healthcare. Our multidisciplinary medical teams leverage the latest medical advancements, precision robotic surgery, and advanced diagnostics.
              </p>
              <div className="bg-[#f1f3fa] p-4 rounded-xl space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#005d97] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#006d32]" />
                  <span>500+ Hospital Beds & 80 ICU Suites</span>
                </div>
                <div className="flex items-center gap-2 text-[#005d97] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#006d32]" />
                  <span>24x7 In-house Pharmacy & Blood Bank</span>
                </div>
                <div className="flex items-center gap-2 text-[#005d97] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#006d32]" />
                  <span>Dedicated Patient Navigation & Insurance Desk</span>
                </div>
              </div>
            </div>

            <div className="px-6 py-3.5 bg-[#f8f9ff] border-t border-[#e6e8ef] flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowLearnMoreModal(false);
                  onOpenAppointmentModal();
                }}
                className="bg-[#0076be] text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-[#005d97] transition-colors cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
