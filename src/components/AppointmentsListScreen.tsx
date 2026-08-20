import React from 'react';
import { Appointment, NavTab } from '../types';
import { 
  Calendar, 
  Clock, 
  User, 
  MapPin, 
  Phone, 
  CalendarPlus, 
  CheckCircle2, 
  Trash2, 
  AlertCircle,
  FileText
} from 'lucide-react';

interface AppointmentsListScreenProps {
  appointments: Appointment[];
  onCancelAppointment: (id: string) => void;
  onOpenBookingModal: () => void;
  setActiveTab: (tab: NavTab) => void;
}

export const AppointmentsListScreen: React.FC<AppointmentsListScreenProps> = ({
  appointments,
  onCancelAppointment,
  onOpenBookingModal,
  setActiveTab
}) => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-16 py-12 lg:py-16 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#e0e2e9] pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0076be]">Patient Care</span>
          <h1 className="text-[28px] md:text-[34px] font-bold text-[#181c21] tracking-tight mt-1">
            My Booked Consultations
          </h1>
          <p className="text-xs md:text-sm text-[#404751] mt-1">
            Manage your scheduled outpatient doctor visits and e-consultations.
          </p>
        </div>

        <button
          onClick={onOpenBookingModal}
          className="bg-[#0076be] text-white px-5 py-2.5 rounded-lg text-xs md:text-sm font-semibold hover:bg-[#005d97] transition-all shadow-sm flex items-center gap-2 cursor-pointer w-fit"
        >
          <CalendarPlus className="w-4 h-4" />
          <span>Book New Consultation</span>
        </button>
      </div>

      {appointments.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-[#e0e2e9] max-w-lg mx-auto shadow-2xs space-y-4">
          <div className="w-16 h-16 bg-[#d0e4ff] text-[#005d97] rounded-full flex items-center justify-center mx-auto">
            <Calendar className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-[#181c21]">No Scheduled Appointments</h3>
          <p className="text-xs md:text-sm text-[#404751] leading-relaxed">
            You haven't scheduled any doctor visits yet. You can find our medical specialists or book an appointment online anytime.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={() => setActiveTab('team')}
              className="px-4 py-2 border border-[#005d97] text-[#005d97] rounded-lg text-xs font-semibold hover:bg-[#005d97]/5 transition-colors cursor-pointer"
            >
              Browse Doctors
            </button>
            <button
              onClick={onOpenBookingModal}
              className="px-4 py-2 bg-[#0076be] text-white rounded-lg text-xs font-semibold hover:bg-[#005d97] transition-colors cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {appointments.map((appt) => (
            <div
              key={appt.id}
              className="bg-white rounded-xl p-6 border border-[#e0e2e9] shadow-[0_4px_16px_rgba(30,41,59,0.05)] hover:border-[#0076be]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3 border-b border-[#e0e2e9] pb-3">
                  <div>
                    <span className="text-[11px] font-bold text-[#0076be] uppercase tracking-wider">
                      {appt.department}
                    </span>
                    <h3 className="text-[18px] font-bold text-[#181c21] mt-0.5">
                      {appt.doctorName}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#4dfe8a]/20 text-[#006d32]">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{appt.status}</span>
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                  <div className="flex items-center gap-2 text-[#404751]">
                    <Calendar className="w-4 h-4 text-[#0076be]" />
                    <span className="font-medium text-[#181c21]">{appt.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#404751]">
                    <Clock className="w-4 h-4 text-[#0076be]" />
                    <span className="font-medium text-[#181c21]">{appt.timeSlot}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#404751]">
                    <User className="w-4 h-4 text-[#0076be]" />
                    <span>Patient: <strong>{appt.patientName}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-[#404751]">
                    <FileText className="w-4 h-4 text-[#0076be]" />
                    <span>Ref: <strong>{appt.id}</strong></span>
                  </div>
                </div>

                {appt.notes && (
                  <div className="bg-[#f1f3fa] p-2.5 rounded-lg text-xs text-[#404751] mb-4">
                    <span className="font-semibold text-[#181c21] block">Note / Reason:</span>
                    <p className="italic">{appt.notes}</p>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-[#e0e2e9] flex justify-between items-center text-xs">
                <span className="text-[#707882]">Type: <strong>{appt.type}</strong></span>
                <button
                  onClick={() => onCancelAppointment(appt.id)}
                  className="text-[#ba1a1a] hover:text-[#93000a] flex items-center gap-1 font-semibold hover:underline cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Cancel Booking</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
