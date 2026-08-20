import React, { useState, useMemo } from 'react';
import { Doctor } from '../types';
import { doctorsData, heroImages } from '../data/doctors';
import { 
  History, 
  ArrowRight, 
  X, 
  Award, 
  Clock, 
  Star, 
  Search, 
  CalendarPlus, 
  Mail, 
  Phone, 
  MapPin,
  CheckCircle2
} from 'lucide-react';

interface TeamScreenProps {
  onBookDoctor: (doctorId: number) => void;
  onContactDoctor: (doctor: Doctor) => void;
}

export const TeamScreen: React.FC<TeamScreenProps> = ({
  onBookDoctor,
  onContactDoctor
}) => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [activeDeptFilter, setActiveDeptFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const departments = ['All', 'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Oncology', 'Dermatology'];

  const filteredDoctors = useMemo(() => {
    return doctorsData.filter((doc) => {
      const matchesDept = activeDeptFilter === 'All' || doc.dept.toLowerCase() === activeDeptFilter.toLowerCase();
      const matchesSearch = 
        doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.dept.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.specializations.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesDept && matchesSearch;
    });
  }, [activeDeptFilter, searchQuery]);

  return (
    <div className="w-full">
      {/* Hero Banner Matching Screen 1 */}
      <section className="relative min-h-[300px] md:min-h-[400px] w-full flex items-center justify-center overflow-hidden bg-[#e0e2e9]">
        {/* Background Image: Hospital corridor with glass walls */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImages.teamHero})` }}
        />
        {/* Exact gradient overlay matching reference design */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9ff]/90 via-[#f8f9ff]/75 to-[#f8f9ff]/40 z-10" />

        <div className="relative z-20 w-full max-w-[1280px] mx-auto px-6 lg:px-16 py-12 md:py-16 text-center md:text-left">
          {/* Pill Badge: Expert Care */}
          <span className="inline-block px-3 py-1 bg-[#0076be]/10 text-[#0076be] font-medium text-[13px] rounded-full mb-4 shadow-2xs">
            Expert Care
          </span>

          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#181c21] tracking-tight mb-3">
            Our Medical Specialists
          </h1>

          <p className="text-[16px] md:text-[18px] text-[#404751] max-w-2xl md:mx-0 mx-auto leading-relaxed">
            Dedicated professionals committed to delivering excellence in healthcare through innovation, compassion, and continuous learning.
          </p>
        </div>
      </section>

      {/* Doctors Grid Section */}
      <section className="w-full max-w-[1280px] mx-auto px-6 lg:px-16 py-12 md:py-16">
        {/* Section Header Matching Screen 1 */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-[26px] md:text-[32px] font-semibold text-[#181c21] mb-2 tracking-tight">
            Meet Our Expert Doctors
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#404751] leading-relaxed">
            Our team of specialists brings decades of combined experience to provide you with the highest standard of medical care.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Department Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDeptFilter(dept)}
                className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-all cursor-pointer ${
                  activeDeptFilter === dept
                    ? 'bg-[#0076be] text-white shadow-xs'
                    : 'bg-[#ebeef4] text-[#404751] hover:bg-[#e0e2e9]'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#707882] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search doctor or condition..."
              className="w-full pl-9 pr-3 py-1.5 text-[13px] bg-white border border-[#c0c7d2] rounded-lg text-[#181c21] focus:outline-none focus:border-[#0076be] focus:ring-2 focus:ring-[#0076be]/20 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#707882] hover:text-[#181c21] cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Bento Grid Layout Matching Screen 1 */}
        {filteredDoctors.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-[#e0e2e9]">
            <p className="text-[16px] text-[#404751] font-medium">No doctors found matching your filter.</p>
            <button
              onClick={() => {
                setActiveDeptFilter('All');
                setSearchQuery('');
              }}
              className="mt-3 text-[13px] text-[#0076be] font-semibold hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doc) => (
              <div
                key={doc.id}
                className="group relative bg-white rounded-[16px] overflow-hidden border border-[#e0e2e9] hover:border-[#0076be]/40 shadow-[0_4px_12px_rgba(30,41,59,0.05)] hover:shadow-[0_8px_24px_rgba(30,41,59,0.08)] transition-all duration-300 flex flex-col h-full"
              >
                {/* Doctor Photo Header */}
                <div className="relative h-64 w-full overflow-hidden bg-[#ebeef4]">
                  <img
                    src={doc.image}
                    alt={`Portrait of ${doc.name}`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Graceful fallback to default medical portrait
                      (e.target as HTMLImageElement).src = heroImages.modalDoctorFallback;
                    }}
                  />

                  {/* Department Badge in Top Right */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full bg-white/95 backdrop-blur-xs text-[#005d97] font-medium text-[12px] border border-[#c0c7d2]/30 shadow-2xs">
                      {doc.dept}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Doctor Content Body */}
                <div className="p-4 flex flex-col flex-grow relative z-10 -mt-4 bg-white rounded-t-[16px]">
                  <h3 className="text-[19px] font-semibold text-[#181c21] mb-1">
                    {doc.name}
                  </h3>

                  <p className="text-[13px] text-[#707882] flex items-center gap-1.5 mb-4">
                    <History className="w-4 h-4 text-[#707882]" />
                    <span>{doc.exp}</span>
                  </p>

                  {/* Bottom Action Line with Know More link */}
                  <div className="mt-auto pt-3 border-t border-[#e0e2e9] flex items-center justify-between">
                    <button
                      onClick={() => setSelectedDoctor(doc)}
                      className="text-[#0076be] font-medium text-[14px] hover:text-[#005d97] flex items-center gap-1 transition-colors group/btn cursor-pointer"
                    >
                      <span>Know More</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>

                    <button
                      onClick={() => onBookDoctor(doc.id)}
                      className="text-xs font-semibold px-2.5 py-1 rounded bg-[#d0e4ff] text-[#001d34] hover:bg-[#0076be] hover:text-white transition-colors cursor-pointer"
                    >
                      Book Slot
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Doctor Detail Modal Matching Screen 2 */}
      {selectedDoctor && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-2xl rounded-[16px] shadow-[0_8px_28px_rgba(30,41,59,0.14)] border border-[#c0c7d2]/40 overflow-hidden relative flex flex-col md:flex-row max-h-[90vh]">
            {/* Close Modal Button */}
            <button
              onClick={() => setSelectedDoctor(null)}
              className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/70 hover:bg-[#ebeef4] text-[#181c21] transition-colors backdrop-blur-xs cursor-pointer shadow-xs"
              aria-label="Close Doctor Details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Side */}
            <div className="w-full md:w-2/5 h-48 md:h-auto relative bg-[#f1f3fa] shrink-0">
              <img
                src={selectedDoctor.image}
                alt={selectedDoctor.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = heroImages.modalDoctorFallback;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent md:hidden" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white hidden md:block right-0 left-auto w-1/3" />
            </div>

            {/* Modal Content Side */}
            <div className="w-full md:w-3/5 p-6 flex flex-col overflow-y-auto">
              {/* Header Info */}
              <div className="mb-4">
                <span className="inline-block px-2.5 py-0.5 bg-[#0076be]/10 text-[#0076be] font-medium text-[12px] rounded-full mb-1.5">
                  {selectedDoctor.dept}
                </span>
                <h3 className="text-[22px] md:text-[24px] font-bold text-[#181c21] leading-tight">
                  {selectedDoctor.name}
                </h3>
                <p className="text-[13px] text-[#707882] flex items-center gap-1.5 mt-1 font-medium">
                  <Award className="w-4 h-4 text-[#0076be]" />
                  <span>{selectedDoctor.exp}</span>
                  <span className="text-[#c0c7d2]">•</span>
                  <span>{selectedDoctor.qualification}</span>
                </p>
              </div>

              {/* About Section */}
              <div className="mb-4">
                <h4 className="text-[13px] text-[#181c21] font-semibold mb-1">
                  About
                </h4>
                <p className="text-[13px] text-[#404751] leading-relaxed">
                  {selectedDoctor.bio}
                </p>
              </div>

              {/* Specializations & Timings Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
                <div className="bg-[#f1f3fa] p-3 rounded-lg border border-[#e0e2e9]/50">
                  <h4 className="text-[11px] text-[#404751] font-semibold uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-[#0076be]" />
                    <span>Specializations</span>
                  </h4>
                  <ul className="text-[12px] text-[#181c21] space-y-1">
                    {selectedDoctor.specializations.map((spec, i) => (
                      <li key={i} className="flex items-start gap-1.5 leading-tight">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0076be] mt-1 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#f1f3fa] p-3 rounded-lg border border-[#e0e2e9]/50 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[11px] text-[#404751] font-semibold uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#0076be]" />
                      <span>Timings & Suite</span>
                    </h4>
                    <p className="text-[12px] text-[#181c21] font-medium leading-relaxed">
                      {selectedDoctor.timings}
                    </p>
                    <p className="text-[11px] text-[#707882] mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#0076be]" />
                      <span>{selectedDoctor.roomNo}</span>
                    </p>
                  </div>
                  <div className="mt-2 text-[11px] text-[#006d32] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Accepting New Patients</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action CTAs */}
              <div className="mt-auto pt-3 border-t border-[#c0c7d2]/30 flex justify-end gap-3">
                <button
                  onClick={() => {
                    const doc = selectedDoctor;
                    setSelectedDoctor(null);
                    onContactDoctor(doc);
                  }}
                  className="px-4 py-2 rounded-lg border border-[#0076be] text-[#0076be] font-medium text-[13px] hover:bg-[#0076be]/5 transition-colors cursor-pointer"
                >
                  Contact
                </button>
                <button
                  onClick={() => {
                    const docId = selectedDoctor.id;
                    setSelectedDoctor(null);
                    onBookDoctor(docId);
                  }}
                  className="px-4 py-2 rounded-lg bg-[#0076be] text-white font-medium text-[13px] hover:bg-[#005d97] transition-colors shadow-[0_4px_12px_rgba(30,41,59,0.08)] flex items-center gap-1.5 cursor-pointer"
                >
                  <CalendarPlus className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
