import React, { useState } from 'react';
import { NavTab } from '../types';
import { Cross, Menu, X, Home, Info, Users, PhoneCall, CalendarPlus, UserCheck, ShieldPlus } from 'lucide-react';

interface HeaderProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  onOpenAppointmentModal: (doctorId?: number) => void;
  appointmentsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenAppointmentModal,
  appointmentsCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: NavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:flex sticky top-0 w-full z-40 bg-[#f8f9ff]/90 backdrop-blur-md border-b border-[#c0c7d2]/30 shadow-xs">
        <div className="w-full max-w-[1280px] mx-auto px-8 lg:px-16 py-3.5 flex justify-between items-center">
          {/* Logo & Institute Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-[#005d97] text-white flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
              <Cross className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <span className="text-[20px] lg:text-[22px] font-bold text-[#005d97] tracking-tight">
                Sushruta Medical Institute
              </span>
            </div>
          </button>

          {/* Navigation Links */}
          <nav className="flex items-center gap-7 lg:gap-9 text-[15px]">
            <button
              onClick={() => handleNavClick('home')}
              className={`transition-colors duration-200 cursor-pointer font-medium ${
                activeTab === 'home'
                  ? 'text-[#005d97] border-b-2 border-[#005d97] font-bold pb-0.5'
                  : 'text-[#404751] hover:text-[#005d97]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`transition-colors duration-200 cursor-pointer font-medium ${
                activeTab === 'about'
                  ? 'text-[#005d97] border-b-2 border-[#005d97] font-bold pb-0.5'
                  : 'text-[#404751] hover:text-[#005d97]'
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('team')}
              className={`transition-colors duration-200 cursor-pointer font-medium ${
                activeTab === 'team'
                  ? 'text-[#005d97] border-b-2 border-[#005d97] font-bold pb-0.5'
                  : 'text-[#404751] hover:text-[#005d97]'
              }`}
            >
              Team
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`transition-colors duration-200 cursor-pointer font-medium ${
                activeTab === 'contact'
                  ? 'text-[#005d97] border-b-2 border-[#005d97] font-bold pb-0.5'
                  : 'text-[#404751] hover:text-[#005d97]'
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => handleNavClick('register')}
              className={`transition-colors duration-200 cursor-pointer font-medium flex items-center gap-1.5 ${
                activeTab === 'register'
                  ? 'text-[#005d97] border-b-2 border-[#005d97] font-bold pb-0.5'
                  : 'text-[#404751] hover:text-[#005d97]'
              }`}
            >
              <UserCheck className="w-4 h-4 text-[#0076be]" />
              <span>Register Patient</span>
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            {appointmentsCount > 0 && (
              <button
                onClick={() => handleNavClick('appointments')}
                className={`text-xs px-2.5 py-1.5 rounded-md font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                  activeTab === 'appointments'
                    ? 'bg-[#d0e4ff] text-[#001d34] font-bold'
                    : 'bg-[#ebeef4] text-[#404751] hover:bg-[#e0e2e9]'
                }`}
                title="View Booked Appointments"
              >
                <span>Appointments</span>
                <span className="w-5 h-5 bg-[#0076be] text-white rounded-full text-[11px] flex items-center justify-center font-bold">
                  {appointmentsCount}
                </span>
              </button>
            )}

            <button
              onClick={() => onOpenAppointmentModal()}
              className="bg-[#0076be] text-white text-[14px] font-medium px-4 py-2 rounded-lg hover:bg-[#005d97] active:scale-[0.98] transition-all shadow-[0_4px_12px_rgba(30,41,59,0.08)] flex items-center gap-1.5 cursor-pointer"
            >
              <CalendarPlus className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Top Header */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-[#f8f9ff]/95 backdrop-blur-md sticky top-0 z-40 border-b border-[#c0c7d2]/30 shadow-xs">
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 text-left cursor-pointer"
        >
          <div className="w-7 h-7 rounded-md bg-[#005d97] text-white flex items-center justify-center">
            <Cross className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <div>
            <span className="text-[17px] font-bold text-[#005d97]">Sushruta Medical</span>
          </div>
        </button>

        <div className="flex items-center gap-2">
          {appointmentsCount > 0 && (
            <button
              onClick={() => handleNavClick('appointments')}
              className="w-7 h-7 bg-[#d0e4ff] text-[#001d34] rounded-full text-xs font-bold flex items-center justify-center"
            >
              {appointmentsCount}
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-[#181c21] p-1.5 rounded-lg hover:bg-[#f1f3fa] transition-colors cursor-pointer"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs transition-opacity md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 md:hidden w-72 bg-[#ffffff] shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-5 border-b border-[#e6e8ef] flex items-center justify-between bg-[#f8f9ff]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#005d97] text-white flex items-center justify-center">
              <Cross className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h2 className="text-[16px] font-bold text-[#005d97] leading-tight">Sushruta Medical</h2>
              <p className="text-[11px] text-[#707882]">Excellence in Care</p>
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-1 rounded-md text-[#707882] hover:bg-[#ebeef4] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 p-4 flex flex-col gap-1.5 overflow-y-auto">
          <button
            onClick={() => handleNavClick('home')}
            className={`flex items-center gap-3 w-full text-left p-3 rounded-lg text-[15px] font-medium transition-colors cursor-pointer ${
              activeTab === 'home'
                ? 'bg-[#0076be] text-white font-semibold'
                : 'text-[#404751] hover:bg-[#f1f3fa]'
            }`}
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className={`flex items-center gap-3 w-full text-left p-3 rounded-lg text-[15px] font-medium transition-colors cursor-pointer ${
              activeTab === 'about'
                ? 'bg-[#0076be] text-white font-semibold'
                : 'text-[#404751] hover:bg-[#f1f3fa]'
            }`}
          >
            <Info className="w-5 h-5" />
            <span>About</span>
          </button>

          <button
            onClick={() => handleNavClick('team')}
            className={`flex items-center gap-3 w-full text-left p-3 rounded-lg text-[15px] font-medium transition-colors cursor-pointer ${
              activeTab === 'team'
                ? 'bg-[#0076be] text-white font-semibold'
                : 'text-[#404751] hover:bg-[#f1f3fa]'
            }`}
          >
            <Users className="w-5 h-5" />
            <span>Team</span>
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`flex items-center gap-3 w-full text-left p-3 rounded-lg text-[15px] font-medium transition-colors cursor-pointer ${
              activeTab === 'contact'
                ? 'bg-[#0076be] text-white font-semibold'
                : 'text-[#404751] hover:bg-[#f1f3fa]'
            }`}
          >
            <PhoneCall className="w-5 h-5" />
            <span>Contact</span>
          </button>

          <button
            onClick={() => handleNavClick('register')}
            className={`flex items-center gap-3 w-full text-left p-3 rounded-lg text-[15px] font-medium transition-colors cursor-pointer ${
              activeTab === 'register'
                ? 'bg-[#0076be] text-white font-semibold'
                : 'text-[#404751] hover:bg-[#f1f3fa]'
            }`}
          >
            <UserCheck className="w-5 h-5" />
            <span>Patient Registration</span>
          </button>

          <button
            onClick={() => handleNavClick('appointments')}
            className={`flex items-center justify-between w-full text-left p-3 rounded-lg text-[15px] font-medium transition-colors cursor-pointer ${
              activeTab === 'appointments'
                ? 'bg-[#0076be] text-white font-semibold'
                : 'text-[#404751] hover:bg-[#f1f3fa]'
            }`}
          >
            <div className="flex items-center gap-3">
              <CalendarPlus className="w-5 h-5" />
              <span>My Appointments</span>
            </div>
            {appointmentsCount > 0 && (
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                activeTab === 'appointments' ? 'bg-white text-[#0076be]' : 'bg-[#0076be] text-white'
              }`}>
                {appointmentsCount}
              </span>
            )}
          </button>
        </nav>

        <div className="p-4 border-t border-[#e6e8ef] bg-[#f8f9ff] space-y-2">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAppointmentModal();
            }}
            className="w-full bg-[#0076be] text-white font-medium text-[14px] py-2.5 rounded-lg hover:bg-[#005d97] transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <CalendarPlus className="w-4 h-4" />
            <span>Book Appointment</span>
          </button>
          <div className="flex items-center justify-center gap-1 text-[11px] text-[#707882] pt-1">
            <ShieldPlus className="w-3.5 h-3.5 text-[#006d32]" />
            <span>NABH & JCI Accredited Hospital</span>
          </div>
        </div>
      </aside>
    </>
  );
};
