import React, { useState, useEffect } from 'react';
import { Doctor, Appointment, PatientRegistrationData } from '../types';
import { doctorsData } from '../data/doctors';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  CheckCircle2, 
  CalendarPlus, 
  FileText, 
  Building2, 
  MapPin, 
  ShieldCheck 
} from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoctorId?: number;
  currentPatient: PatientRegistrationData | null;
  onAddAppointment: (appointment: Appointment) => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialDoctorId,
  currentPatient,
  onAddAppointment
}) => {
  const [selectedDoctorId, setSelectedDoctorId] = useState<number>(initialDoctorId || 1);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  const [consultationType, setConsultationType] = useState<'In-Person Consultation' | 'Video Follow-up' | 'Emergency Priority'>('In-Person Consultation');
  
  const [patientName, setPatientName] = useState<string>('');
  const [patientEmail, setPatientEmail] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  
  const [confirmedBooking, setConfirmedBooking] = useState<Appointment | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    if (initialDoctorId) {
      setSelectedDoctorId(initialDoctorId);
    }
  }, [initialDoctorId]);

  useEffect(() => {
    if (currentPatient) {
      setPatientName(currentPatient.fullName);
      setPatientEmail(currentPatient.email);
      setPatientPhone(currentPatient.contactNumber);
      if (currentPatient.disease) {
        setNotes(currentPatient.disease);
      }
    }
  }, [currentPatient]);

  // Set default appointment date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setSelectedDate(tomorrow.toISOString().split('T')[0]);
    setSelectedTimeSlot('10:00 AM');
  }, []);

  if (!isOpen) return null;

  const currentDoctor = doctorsData.find((d) => d.id === selectedDoctorId) || doctorsData[0];

  const timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM'
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    if (!patientName.trim()) {
      setValidationError('Please enter your full name.');
      return;
    }
    if (!patientPhone.trim()) {
      setValidationError('Please enter your contact phone number.');
      return;
    }
    if (!selectedDate) {
      setValidationError('Please choose an appointment date.');
      return;
    }
    if (!selectedTimeSlot) {
      setValidationError('Please choose a preferred time slot.');
      return;
    }

    const newAppt: Appointment = {
      id: `APT-${Math.floor(100000 + Math.random() * 900000)}`,
      patientName: patientName.trim(),
      patientEmail: patientEmail.trim(),
      patientPhone: patientPhone.trim(),
      doctorId: currentDoctor.id,
      doctorName: currentDoctor.name,
      department: currentDoctor.dept,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      type: consultationType,
      notes: notes.trim(),
      status: 'Confirmed',
      createdAt: new Date().toLocaleDateString()
    };

    onAddAppointment(newAppt);
    setConfirmedBooking(newAppt);
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#c0c7d2]/40 overflow-hidden relative max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#005d97] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <CalendarPlus className="w-5 h-5 text-[#4dfe8a]" />
            <div>
              <h3 className="text-lg font-bold">Book Outpatient Consultation</h3>
              <p className="text-xs text-[#d0e4ff]">Sushruta Medical Institute • Rapid Scheduling</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {confirmedBooking ? (
            /* Booking Confirmation Slip */
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 bg-[#4dfe8a]/20 text-[#006d32] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-[22px] font-bold text-[#181c21]">Appointment Confirmed!</h4>
                <p className="text-sm text-[#404751] mt-1">
                  A confirmation SMS & email have been dispatched to your contact details.
                </p>
              </div>

              {/* Printable Slip Card */}
              <div className="bg-[#f1f3fa] rounded-xl p-5 border border-[#c0c7d2]/40 text-left max-w-md mx-auto space-y-3.5 text-xs">
                <div className="flex justify-between items-center border-b border-[#c0c7d2]/40 pb-3">
                  <div>
                    <span className="text-[#707882] block">Booking Reference</span>
                    <span className="text-sm font-bold text-[#005d97]">{confirmedBooking.id}</span>
                  </div>
                  <span className="px-2.5 py-1 bg-[#006d32] text-white font-bold rounded-full text-[11px]">
                    {confirmedBooking.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-[#707882] block">Attending Doctor</span>
                    <span className="font-semibold text-[#181c21] text-[13px]">{confirmedBooking.doctorName}</span>
                    <span className="text-[#005d97] block font-medium">{confirmedBooking.department}</span>
                  </div>
                  <div>
                    <span className="text-[#707882] block">Date & Time</span>
                    <span className="font-semibold text-[#181c21] text-[13px]">{confirmedBooking.date}</span>
                    <span className="text-[#0076be] block font-medium">{confirmedBooking.timeSlot}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 border-t border-[#c0c7d2]/30 pt-3">
                  <div>
                    <span className="text-[#707882] block">Patient Name</span>
                    <span className="font-semibold text-[#181c21]">{confirmedBooking.patientName}</span>
                  </div>
                  <div>
                    <span className="text-[#707882] block">Location</span>
                    <span className="font-semibold text-[#181c21]">{currentDoctor.roomNo}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-[#707882] pt-2 border-t border-[#c0c7d2]/30">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#006d32]" />
                  <span>Please present this slip at Reception Desk on arrival.</span>
                </div>
              </div>

              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={() => {
                    setConfirmedBooking(null);
                    onClose();
                  }}
                  className="bg-[#0076be] text-white text-xs font-semibold px-6 py-2.5 rounded-lg hover:bg-[#005d97] transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleBooking} className="space-y-5">
              {validationError && (
                <div className="p-3 bg-[#ffdad6] text-[#93000a] text-xs rounded-lg font-medium">
                  {validationError}
                </div>
              )}

              {/* Doctor Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#181c21] block">
                  Select Specialist Doctor *
                </label>
                <select
                  value={selectedDoctorId}
                  onChange={(e) => setSelectedDoctorId(Number(e.target.value))}
                  className="w-full text-xs md:text-sm bg-[#f8f9ff] border border-[#c0c7d2] rounded-lg p-2.5 text-[#181c21] font-medium focus:outline-none focus:border-[#0076be]"
                >
                  {doctorsData.map((doc) => (
                    <option key={doc.id} value={doc.id}>
                      {doc.name} — {doc.dept} ({doc.exp})
                    </option>
                  ))}
                </select>

                <div className="flex items-center gap-2 p-2 bg-[#f1f3fa] rounded-md text-[11px] text-[#404751]">
                  <Clock className="w-3.5 h-3.5 text-[#0076be]" />
                  <span>Visiting Hours: {currentDoctor.timings} ({currentDoctor.roomNo})</span>
                </div>
              </div>

              {/* Consultation Type */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#181c21] block">
                  Consultation Mode
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs font-medium">
                  {(['In-Person Consultation', 'Video Follow-up', 'Emergency Priority'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setConsultationType(type)}
                      className={`p-2 rounded-lg border text-center transition-all cursor-pointer ${
                        consultationType === type
                          ? 'bg-[#d0e4ff] border-[#005d97] text-[#001d34] font-bold shadow-2xs'
                          : 'bg-white border-[#c0c7d2] text-[#404751] hover:bg-[#f1f3fa]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date and Time Slot Picker */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#181c21] block">
                    Appointment Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full text-xs md:text-sm bg-[#f8f9ff] border border-[#c0c7d2] rounded-lg p-2.5 text-[#181c21] focus:outline-none focus:border-[#0076be]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#181c21] block">
                    Preferred Time Slot *
                  </label>
                  <select
                    value={selectedTimeSlot}
                    onChange={(e) => setSelectedTimeSlot(e.target.value)}
                    className="w-full text-xs md:text-sm bg-[#f8f9ff] border border-[#c0c7d2] rounded-lg p-2.5 text-[#181c21] focus:outline-none focus:border-[#0076be]"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Patient Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-[#c0c7d2]/30 pt-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#181c21] block">
                    Patient Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full text-xs md:text-sm bg-white border border-[#c0c7d2] rounded-lg p-2.5 text-[#181c21] focus:outline-none focus:border-[#0076be]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#181c21] block">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    className="w-full text-xs md:text-sm bg-white border border-[#c0c7d2] rounded-lg p-2.5 text-[#181c21] focus:outline-none focus:border-[#0076be]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#181c21] block">
                  Email (Optional for e-prescription)
                </label>
                <input
                  type="email"
                  placeholder="john.doe@example.com"
                  value={patientEmail}
                  onChange={(e) => setPatientEmail(e.target.value)}
                  className="w-full text-xs md:text-sm bg-white border border-[#c0c7d2] rounded-lg p-2.5 text-[#181c21] focus:outline-none focus:border-[#0076be]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#181c21] block">
                  Reason for Visit / Symptoms
                </label>
                <textarea
                  rows={2}
                  placeholder="Brief note on symptoms or past medical history..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full text-xs md:text-sm bg-white border border-[#c0c7d2] rounded-lg p-2.5 text-[#181c21] focus:outline-none focus:border-[#0076be]"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-3 border-t border-[#c0c7d2]/30">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg border border-[#c0c7d2] text-[#404751] text-xs font-semibold hover:bg-[#f1f3fa] transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#0076be] text-white rounded-lg text-xs font-semibold hover:bg-[#005d97] active:scale-[0.98] transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
                >
                  <CalendarPlus className="w-4 h-4" />
                  <span>Confirm Appointment</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
