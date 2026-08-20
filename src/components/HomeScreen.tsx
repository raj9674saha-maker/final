import React from 'react';
import { NavTab } from '../types';
import { heroImages } from '../data/doctors';
import { 
  Search, 
  Stethoscope, 
  Activity, 
  ShieldCheck, 
  Clock, 
  Phone, 
  ChevronRight, 
  Award, 
  HeartHandshake, 
  Zap
} from 'lucide-react';

interface HomeScreenProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenAppointmentModal: (doctorId?: number) => void;
  onSelectDoctorByName?: (name: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  setActiveTab,
  onOpenAppointmentModal,
}) => {
  return (
    <div className="w-full">
      {/* Hero Section Matching Screen 3 */}
      <section className="relative w-full min-h-[560px] lg:min-h-[620px] overflow-hidden bg-[#ffffff] flex items-center">
        {/* Background Image with precise surgical room visual */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-30 lg:opacity-40 scale-100 transition-transform duration-1000"
            style={{ backgroundImage: `url(${heroImages.homeHero})` }}
          />
          {/* Subtle gradient overlay to ensure crisp typography readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff] via-[#ffffff]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff]/60 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-16 py-16 lg:py-24">
          <div className="max-w-2xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#d0e4ff] text-[#001d34] rounded-full text-[13px] font-semibold tracking-wide mb-6 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-[#005d97]" />
              <span>Excellence in Care</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-[36px] sm:text-[44px] lg:text-[50px] font-bold text-[#181c21] leading-[1.18] tracking-tight mb-5">
              Modern clinical professionalism at your service.
            </h1>

            {/* Description */}
            <p className="text-[17px] lg:text-[18px] text-[#404751] leading-relaxed mb-8 max-w-xl">
              Providing world-class medical treatments with cutting-edge technology and compassionate care. Experience healthcare designed around you.
            </p>

            {/* CTA Buttons Matching Screen 3 */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  setActiveTab('team');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#0076be] text-white font-semibold text-[15px] px-6 py-3.5 rounded-lg hover:bg-[#005d97] active:scale-[0.98] transition-all shadow-[0_4px_14px_rgba(0,118,190,0.25)] flex items-center gap-2 cursor-pointer"
              >
                <span>Find a Doctor</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('services-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-[#0076be] border border-[#c0c7d2] font-semibold text-[15px] px-6 py-3.5 rounded-lg hover:bg-[#f1f3fa] active:scale-[0.98] transition-all shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <span>Our Services</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Badges Bar */}
      <section className="w-full max-w-[1280px] mx-auto px-6 lg:px-16 -mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-[0_4px_16px_rgba(30,41,59,0.06)] border border-[#e0e2e9] flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-[#d0e4ff] text-[#005d97] flex items-center justify-center shrink-0">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-[14px] font-bold text-[#181c21]">Top Specialists</h4>
              <p className="text-[12px] text-[#404751]">Over 50+ board-certified MDs</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-[0_4px_16px_rgba(30,41,59,0.06)] border border-[#e0e2e9] flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-[#ffdcc4] text-[#8a4800] flex items-center justify-center shrink-0">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-[14px] font-bold text-[#181c21]">Advanced Robotics</h4>
              <p className="text-[12px] text-[#404751]">da Vinci Xi Surgical suite</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-[0_4px_16px_rgba(30,41,59,0.06)] border border-[#e0e2e9] flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-[#4dfe8a]/25 text-[#006d32] flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-[14px] font-bold text-[#181c21]">24/7 Emergency</h4>
              <p className="text-[12px] text-[#404751]">Immediate trauma & ICU triage</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-[0_4px_16px_rgba(30,41,59,0.06)] border border-[#e0e2e9] flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-[#ebeef4] text-[#0076be] flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-[14px] font-bold text-[#181c21]">JCI & NABH Certified</h4>
              <p className="text-[12px] text-[#404751]">International quality tier 1</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section id="services-section" className="w-full max-w-[1280px] mx-auto px-6 lg:px-16 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0076be]">Clinical Excellence</span>
            <h2 className="text-[28px] lg:text-[32px] font-bold text-[#181c21] mt-1">
              Comprehensive Medical Departments
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('team')}
            className="mt-3 md:mt-0 text-[14px] font-semibold text-[#0076be] hover:text-[#005d97] flex items-center gap-1 cursor-pointer"
          >
            <span>View all 6 departments & doctors</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service Card 1 */}
          <div className="bg-white rounded-xl p-6 border border-[#e0e2e9] hover:border-[#0076be]/50 hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-lg bg-[#d0e4ff] text-[#005d97] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-[18px] font-bold text-[#181c21] mb-2">Interventional Cardiology</h3>
            <p className="text-[14px] text-[#404751] leading-relaxed mb-4">
              State-of-the-art biplane cath lab for primary angioplasty, pacemaker implantations, and pediatric structural heart corrections.
            </p>
            <button
              onClick={() => {
                setActiveTab('team');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[13px] font-semibold text-[#0076be] hover:underline flex items-center gap-1 cursor-pointer"
            >
              Consult Dr. Sushruta Sharma <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-xl p-6 border border-[#e0e2e9] hover:border-[#0076be]/50 hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-lg bg-[#d0e4ff] text-[#005d97] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="text-[18px] font-bold text-[#181c21] mb-2">Neurology & Stroke Clinic</h3>
            <p className="text-[14px] text-[#404751] leading-relaxed mb-4">
              Rapid 24/7 thrombolysis stroke pathway, advanced continuous EEG telemetry, and comprehensive movement disorder rehabilitation.
            </p>
            <button
              onClick={() => {
                setActiveTab('team');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[13px] font-semibold text-[#0076be] hover:underline flex items-center gap-1 cursor-pointer"
            >
              Consult Dr. Ananya Roy <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-xl p-6 border border-[#e0e2e9] hover:border-[#0076be]/50 hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-lg bg-[#d0e4ff] text-[#005d97] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-[18px] font-bold text-[#181c21] mb-2">Robotic Orthopedics</h3>
            <p className="text-[14px] text-[#404751] leading-relaxed mb-4">
              Sub-millimeter accuracy robotic total knee and hip replacements with minimal recovery downtime and restored full range of motion.
            </p>
            <button
              onClick={() => {
                setActiveTab('team');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[13px] font-semibold text-[#0076be] hover:underline flex items-center gap-1 cursor-pointer"
            >
              Consult Dr. Rajesh Gupta <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Emergency & Quick Consultation Callout */}
      <section className="w-full bg-[#005d97] text-white py-12 px-6 lg:px-16">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 rounded-full text-xs font-semibold">
              <Clock className="w-3.5 h-3.5 text-[#4dfe8a]" />
              <span>Available 24 Hours • 7 Days a Week</span>
            </div>
            <h3 className="text-[26px] lg:text-[30px] font-bold">
              Need Immediate Medical Assistance or Appointment?
            </h3>
            <p className="text-[15px] text-[#d0e4ff] max-w-xl">
              Our emergency triage team is ready around the clock. You can also register online in seconds or schedule a priority outpatient slot.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a
              href="tel:+18005559000"
              className="bg-white text-[#005d97] font-bold text-[14px] px-5 py-3 rounded-lg hover:bg-[#f8f9ff] transition-colors flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#ba1a1a]" />
              <span>Emergency: (800) 555-9000</span>
            </a>

            <button
              onClick={() => onOpenAppointmentModal()}
              className="bg-[#0076be] text-white border border-white/40 font-semibold text-[14px] px-6 py-3 rounded-lg hover:bg-[#004a79] transition-colors cursor-pointer shadow-sm"
            >
              Book In-Person / Video Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
