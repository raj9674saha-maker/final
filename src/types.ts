export interface Doctor {
  id: number;
  name: string;
  dept: string;
  exp: string;
  qualification: string;
  bio: string;
  specializations: string[];
  timings: string;
  image: string;
  rating: number;
  patientsTreated: string;
  roomNo: string;
  availableDays: string[];
}

export interface PatientRegistrationData {
  id?: string;
  fullName: string;
  email: string;
  contactNumber: string;
  age: string;
  gender: 'male' | 'female' | 'other' | '';
  dob: string;
  bloodGroup: string;
  maritalStatus: string;
  disease: string;
  password?: string;
  profileImageUrl?: string;
  registeredAt?: string;
}

export interface Appointment {
  id: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  doctorId: number;
  doctorName: string;
  department: string;
  date: string;
  timeSlot: string;
  type: 'In-Person Consultation' | 'Video Follow-up' | 'Emergency Priority';
  notes?: string;
  status: 'Confirmed' | 'Pending' | 'Completed';
  createdAt: string;
}

export type NavTab = 'home' | 'about' | 'team' | 'contact' | 'register' | 'appointments';
