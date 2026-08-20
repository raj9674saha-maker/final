/**
 * Sushruta Medical Institute Web Application
 * Featuring modern clinical care, doctors directory, about institute, patient registration, and appointment scheduling.
 */

import React, { useState, useEffect } from 'react';
import { NavTab, Appointment, PatientRegistrationData, Doctor } from './types';
import { doctorsData } from './data/doctors';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeScreen } from './components/HomeScreen';
import { AboutScreen } from './components/AboutScreen';
import { TeamScreen } from './components/TeamScreen';
import { RegistrationScreen } from './components/RegistrationScreen';
import { ContactScreen } from './components/ContactScreen';
import { AppointmentsListScreen } from './components/AppointmentsListScreen';
import { AppointmentModal } from './components/AppointmentModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('team');
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState<boolean>(false);
  const [selectedDoctorIdForBooking, setSelectedDoctorIdForBooking] = useState<number | undefined>(undefined);
  const [contactDoctorContext, setContactDoctorContext] = useState<Doctor | null>(null);

  const [registeredPatient, setRegisteredPatient] = useState<PatientRegistrationData | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 'APT-821940',
      patientName: 'Alex Morgan',
      patientEmail: 'alex.morgan@example.com',
      patientPhone: '+1 (555) 234-5678',
      doctorId: 1,
      doctorName: 'Dr. Sushruta Sharma',
      department: 'Cardiology',
      date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      timeSlot: '10:00 AM',
      type: 'In-Person Consultation',
      notes: 'Routine cardiovascular wellness check-up and ECG review.',
      status: 'Confirmed',
      createdAt: 'Today'
    }
  ]);

  const handleOpenAppointmentModal = (doctorId?: number) => {
    setSelectedDoctorIdForBooking(doctorId);
    setIsAppointmentModalOpen(true);
  };

  const handleBookDoctorFromTeam = (doctorId: number) => {
    setSelectedDoctorIdForBooking(doctorId);
    setIsAppointmentModalOpen(true);
  };

  const handleContactDoctorFromTeam = (doctor: Doctor) => {
    setContactDoctorContext(doctor);
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddAppointment = (newAppt: Appointment) => {
    setAppointments((prev) => [newAppt, ...prev]);
  };

  const handleCancelAppointment = (id: string) => {
    setAppointments((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9ff] text-[#181c21] font-['Inter',sans-serif]">
      {/* Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAppointmentModal={() => handleOpenAppointmentModal()}
        appointmentsCount={appointments.length}
      />

      {/* Main Screen Content */}
      <main className="flex-1 flex flex-col">
        {activeTab === 'home' && (
          <HomeScreen
            setActiveTab={setActiveTab}
            onOpenAppointmentModal={() => handleOpenAppointmentModal()}
          />
        )}

        {activeTab === 'about' && (
          <AboutScreen
            setActiveTab={setActiveTab}
            onOpenAppointmentModal={() => handleOpenAppointmentModal()}
          />
        )}

        {activeTab === 'team' && (
          <TeamScreen
            onBookDoctor={handleBookDoctorFromTeam}
            onContactDoctor={handleContactDoctorFromTeam}
          />
        )}

        {activeTab === 'register' && (
          <RegistrationScreen
            setActiveTab={setActiveTab}
            onOpenAppointmentModal={() => handleOpenAppointmentModal()}
            onRegisteredSuccess={(patient) => setRegisteredPatient(patient)}
          />
        )}

        {activeTab === 'contact' && (
          <ContactScreen
            setActiveTab={setActiveTab}
            onOpenAppointmentModal={() => handleOpenAppointmentModal()}
            contactDoctorContext={contactDoctorContext}
          />
        )}

        {activeTab === 'appointments' && (
          <AppointmentsListScreen
            appointments={appointments}
            onCancelAppointment={handleCancelAppointment}
            onOpenBookingModal={() => handleOpenAppointmentModal()}
            setActiveTab={setActiveTab}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => {
          setIsAppointmentModalOpen(false);
          setSelectedDoctorIdForBooking(undefined);
        }}
        initialDoctorId={selectedDoctorIdForBooking}
        currentPatient={registeredPatient}
        onAddAppointment={handleAddAppointment}
      />
    </div>
  );
}
