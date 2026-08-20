import React, { useState, useRef } from 'react';
import { PatientRegistrationData, NavTab } from '../types';
import { 
  Camera, 
  Upload, 
  CheckCircle2, 
  AlertCircle, 
  User, 
  Phone, 
  Mail, 
  Calendar, 
  FileText, 
  ArrowRight,
  ShieldCheck,
  X
} from 'lucide-react';

interface RegistrationScreenProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenAppointmentModal: () => void;
  onRegisteredSuccess: (patient: PatientRegistrationData) => void;
}

export const RegistrationScreen: React.FC<RegistrationScreenProps> = ({
  setActiveTab,
  onOpenAppointmentModal,
  onRegisteredSuccess
}) => {
  const [formData, setFormData] = useState<PatientRegistrationData>({
    fullName: '',
    email: '',
    contactNumber: '',
    age: '',
    gender: '',
    dob: '',
    bloodGroup: '',
    maritalStatus: '',
    disease: '',
    password: ''
  });

  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilePreview, setProfilePreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [registeredPatient, setRegisteredPatient] = useState<PatientRegistrationData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg(null);
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please upload a valid image file (PNG, JPG, GIF).');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setErrorMsg('Image size exceeds 5MB limit.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setProfilePreview(reader.result as string);
      setFormData((prev) => ({ ...prev, profileImageUrl: reader.result as string }));
      setErrorMsg(null);
    };
    reader.readAsDataURL(file);
  };

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Validation
    if (!formData.fullName.trim()) {
      setErrorMsg('Full Name is required.');
      return;
    }
    if (!formData.email.trim()) {
      setErrorMsg('Email Address is required.');
      return;
    }
    if (!formData.contactNumber.trim()) {
      setErrorMsg('Contact Number is required.');
      return;
    }
    if (!formData.age || parseInt(formData.age) < 0) {
      setErrorMsg('Please enter a valid age.');
      return;
    }
    if (!formData.gender) {
      setErrorMsg('Please select your gender.');
      return;
    }
    if (!formData.dob) {
      setErrorMsg('Date of Birth is required.');
      return;
    }
    if (!formData.password) {
      setErrorMsg('Password is required.');
      return;
    }
    if (formData.password.length < 6) {
      setErrorMsg('Password must be at least 6 characters long.');
      return;
    }
    if (formData.password !== confirmPassword) {
      setErrorMsg('Passwords do not match.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `SMI-PAT-${Math.floor(100000 + Math.random() * 900000)}`;
      const completedRecord: PatientRegistrationData = {
        ...formData,
        id: generatedId,
        registeredAt: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })
      };

      setRegisteredPatient(completedRecord);
      onRegisteredSuccess(completedRecord);
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 600);
  };

  return (
    <div className="w-full min-h-[calc(100vh-140px)] flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8 bg-[#f8f9ff]">
      {/* Registration Success Card View */}
      {registeredPatient ? (
        <div className="w-full max-w-[760px] bg-white rounded-2xl shadow-[0_12px_32px_rgba(30,41,59,0.08)] border border-[#e0e2e9] overflow-hidden animate-in fade-in zoom-in duration-300">
          <div className="bg-[#005d97] p-8 text-white text-center relative">
            <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-10 h-10 text-[#4dfe8a]" />
            </div>
            <h2 className="text-[26px] font-bold">Registration Successful!</h2>
            <p className="text-[#d0e4ff] text-[15px] mt-1">
              Welcome to Sushruta Medical Institute. Your patient profile has been generated.
            </p>
          </div>

          <div className="p-8 space-y-6">
            {/* Patient Digital Identity Card */}
            <div className="bg-[#f1f3fa] rounded-xl p-6 border border-[#c0c7d2]/40 relative overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#c0c7d2]/40 pb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-full bg-[#0076be] text-white flex items-center justify-center font-bold text-xl overflow-hidden border-2 border-white shadow-xs">
                    {registeredPatient.profileImageUrl ? (
                      <img
                        src={registeredPatient.profileImageUrl}
                        alt={registeredPatient.fullName}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span>{registeredPatient.fullName.charAt(0)}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#181c21]">{registeredPatient.fullName}</h3>
                    <p className="text-[13px] text-[#005d97] font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-[#006d32]" />
                      <span>UHID: {registeredPatient.id}</span>
                    </p>
                  </div>
                </div>
                <div className="text-right sm:text-right">
                  <span className="text-xs text-[#707882] block">Registration Date</span>
                  <span className="text-xs font-semibold text-[#181c21]">{registeredPatient.registeredAt}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-xs">
                <div>
                  <span className="text-[#707882] block">Age & Gender</span>
                  <span className="font-semibold text-[#181c21] capitalize">
                    {registeredPatient.age} yrs • {registeredPatient.gender}
                  </span>
                </div>
                <div>
                  <span className="text-[#707882] block">Blood Group</span>
                  <span className="font-semibold text-[#005d97]">
                    {registeredPatient.bloodGroup || 'Not Specified'}
                  </span>
                </div>
                <div>
                  <span className="text-[#707882] block">Contact</span>
                  <span className="font-semibold text-[#181c21]">
                    {registeredPatient.contactNumber}
                  </span>
                </div>
                <div>
                  <span className="text-[#707882] block">Marital Status</span>
                  <span className="font-semibold text-[#181c21] capitalize">
                    {registeredPatient.maritalStatus || 'N/A'}
                  </span>
                </div>
              </div>

              {registeredPatient.disease && (
                <div className="mt-4 pt-3 border-t border-[#c0c7d2]/30 text-xs">
                  <span className="text-[#707882] block mb-0.5">Reported Condition:</span>
                  <p className="text-[#181c21] italic bg-white/70 p-2 rounded-md">
                    "{registeredPatient.disease}"
                  </p>
                </div>
              )}
            </div>

            {/* Next Steps Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => onOpenAppointmentModal()}
                className="flex-1 bg-[#0076be] text-white py-3 px-5 rounded-lg text-sm font-semibold hover:bg-[#005d97] transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Doctor Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setRegisteredPatient(null);
                  setFormData({
                    fullName: '',
                    email: '',
                    contactNumber: '',
                    age: '',
                    gender: '',
                    dob: '',
                    bloodGroup: '',
                    maritalStatus: '',
                    disease: '',
                    password: ''
                  });
                  setConfirmPassword('');
                  setProfilePreview(null);
                }}
                className="py-3 px-5 rounded-lg border border-[#c0c7d2] text-[#404751] hover:bg-[#f1f3fa] text-sm font-semibold transition-colors cursor-pointer"
              >
                Register Another Patient
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Patient Registration Form Matching Screen 5 */
        <main className="w-full max-w-[800px] bg-white rounded-xl shadow-[0_8px_24px_rgba(30,41,59,0.08)] border border-[#e0e2e9] overflow-hidden">
          {/* Header Matching Screen 5 */}
          <header className="bg-[#005d97] p-6 sm:p-8 text-white">
            <h1 className="text-[24px] md:text-[28px] font-bold mb-2">
              Patient Registration
            </h1>
            <p className="text-[14px] md:text-[15px] opacity-90 leading-relaxed text-[#d0e4ff]">
              Please fill out the form below to register as a new patient at Sushruta Medical Institute.
            </p>
          </header>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            {errorMsg && (
              <div className="p-4 bg-[#ffdad6] border border-[#ba1a1a]/30 rounded-lg flex items-center gap-3 text-[#93000a] text-sm">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-[14px] font-medium text-[#181c21] block" htmlFor="fullName">
                  Full Name *
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-[#c0c7d2] bg-white px-3.5 py-2.5 text-[15px] text-[#181c21] focus:outline-none focus:border-[#0076be] focus:ring-3 focus:ring-[#0076be]/15 transition-all"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-[14px] font-medium text-[#181c21] block" htmlFor="email">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-[#c0c7d2] bg-white px-3.5 py-2.5 text-[15px] text-[#181c21] focus:outline-none focus:border-[#0076be] focus:ring-3 focus:ring-[#0076be]/15 transition-all"
                />
              </div>

              {/* Contact Number */}
              <div className="space-y-1.5">
                <label className="text-[14px] font-medium text-[#181c21] block" htmlFor="contactNumber">
                  Contact Number *
                </label>
                <input
                  id="contactNumber"
                  name="contactNumber"
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-[#c0c7d2] bg-white px-3.5 py-2.5 text-[15px] text-[#181c21] focus:outline-none focus:border-[#0076be] focus:ring-3 focus:ring-[#0076be]/15 transition-all"
                />
              </div>

              {/* Age */}
              <div className="space-y-1.5">
                <label className="text-[14px] font-medium text-[#181c21] block" htmlFor="age">
                  Age *
                </label>
                <input
                  id="age"
                  name="age"
                  type="number"
                  min="0"
                  max="120"
                  required
                  placeholder="e.g. 35"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-[#c0c7d2] bg-white px-3.5 py-2.5 text-[15px] text-[#181c21] focus:outline-none focus:border-[#0076be] focus:ring-3 focus:ring-[#0076be]/15 transition-all"
                />
              </div>

              {/* Gender */}
              <div className="space-y-1.5">
                <label className="text-[14px] font-medium text-[#181c21] block" htmlFor="gender">
                  Gender *
                </label>
                <select
                  id="gender"
                  name="gender"
                  required
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-[#c0c7d2] bg-white px-3.5 py-2.5 text-[15px] text-[#181c21] focus:outline-none focus:border-[#0076be] focus:ring-3 focus:ring-[#0076be]/15 transition-all"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Date of Birth */}
              <div className="space-y-1.5">
                <label className="text-[14px] font-medium text-[#181c21] block" htmlFor="dob">
                  Date of Birth *
                </label>
                <input
                  id="dob"
                  name="dob"
                  type="date"
                  required
                  value={formData.dob}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-[#c0c7d2] bg-white px-3.5 py-2.5 text-[15px] text-[#181c21] focus:outline-none focus:border-[#0076be] focus:ring-3 focus:ring-[#0076be]/15 transition-all"
                />
              </div>

              {/* Blood Group */}
              <div className="space-y-1.5">
                <label className="text-[14px] font-medium text-[#181c21] block" htmlFor="bloodGroup">
                  Blood Group
                </label>
                <select
                  id="bloodGroup"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-[#c0c7d2] bg-white px-3.5 py-2.5 text-[15px] text-[#181c21] focus:outline-none focus:border-[#0076be] focus:ring-3 focus:ring-[#0076be]/15 transition-all"
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>

              {/* Marital Status */}
              <div className="space-y-1.5">
                <label className="text-[14px] font-medium text-[#181c21] block" htmlFor="maritalStatus">
                  Marital Status
                </label>
                <select
                  id="maritalStatus"
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-[#c0c7d2] bg-white px-3.5 py-2.5 text-[15px] text-[#181c21] focus:outline-none focus:border-[#0076be] focus:ring-3 focus:ring-[#0076be]/15 transition-all"
                >
                  <option value="">Select Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
              </div>
            </div>

            {/* Primary Complaint / Disease */}
            <div className="space-y-1.5">
              <label className="text-[14px] font-medium text-[#181c21] block" htmlFor="disease">
                Primary Complaint / Disease
              </label>
              <textarea
                id="disease"
                name="disease"
                rows={3}
                placeholder="Briefly describe your condition or reason for visit..."
                value={formData.disease}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-[#c0c7d2] bg-white px-3.5 py-2.5 text-[15px] text-[#181c21] focus:outline-none focus:border-[#0076be] focus:ring-3 focus:ring-[#0076be]/15 transition-all"
              />
            </div>

            {/* Divider Matching Screen 5 */}
            <hr className="border-[#c0c7d2]/40 my-6" />

            {/* Password Credentials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[14px] font-medium text-[#181c21] block" htmlFor="password">
                  Password *
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-[#c0c7d2] bg-white px-3.5 py-2.5 text-[15px] text-[#181c21] focus:outline-none focus:border-[#0076be] focus:ring-3 focus:ring-[#0076be]/15 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[14px] font-medium text-[#181c21] block" htmlFor="confirmPassword">
                  Confirm Password *
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full rounded-lg border border-[#c0c7d2] bg-white px-3.5 py-2.5 text-[15px] text-[#181c21] focus:outline-none focus:border-[#0076be] focus:ring-3 focus:ring-[#0076be]/15 transition-all"
                />
              </div>
            </div>

            {/* Profile Image Drag & Drop Matching Screen 5 */}
            <div className="space-y-1.5">
              <label className="text-[14px] font-medium text-[#181c21] block">
                Profile Image
              </label>

              {profilePreview ? (
                <div className="flex items-center gap-4 p-4 rounded-lg border border-[#c0c7d2] bg-[#f1f3fa]">
                  <img
                    src={profilePreview}
                    alt="Preview"
                    className="w-16 h-16 rounded-full object-cover border border-[#c0c7d2]"
                  />
                  <div className="flex-1 text-xs text-[#404751]">
                    <p className="font-semibold text-[#181c21]">Photo Uploaded</p>
                    <p className="text-[#707882]">Ready for patient identification</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setProfilePreview(null);
                      setFormData((prev) => ({ ...prev, profileImageUrl: undefined }));
                    }}
                    className="p-1.5 rounded-full hover:bg-white text-[#ba1a1a] cursor-pointer"
                    title="Remove Photo"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleFileDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`mt-1 flex justify-center rounded-lg border border-dashed px-6 py-8 bg-[#f1f3fa] transition-colors cursor-pointer text-center ${
                    isDragging
                      ? 'border-[#0076be] bg-[#d0e4ff]/30'
                      : 'border-[#c0c7d2] hover:border-[#0076be]'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="w-10 h-10 mx-auto text-[#707882] flex items-center justify-center">
                      <Camera className="w-8 h-8" />
                    </div>
                    <div className="flex text-sm leading-6 text-[#404751] justify-center items-center gap-1">
                      <span className="font-semibold text-[#005d97] hover:underline">
                        Upload a file
                      </span>
                      <span>or drag and drop</span>
                    </div>
                    <p className="text-xs text-[#707882]">PNG, JPG, GIF up to 5MB</p>
                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handleFile(e.target.files[0]);
                      }
                    }}
                  />
                </div>
              )}
            </div>

            {/* Bottom Action Line Matching Screen 5 */}
            <div className="pt-6 flex flex-col sm:flex-row gap-3 justify-between items-center border-t border-[#c0c7d2]/30">
              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setActiveTab('contact')}
                  className="w-full sm:w-auto rounded-lg border border-[#005d97] text-[#005d97] px-6 py-2.5 text-[14px] font-medium hover:bg-[#005d97]/5 transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
                <button
                  type="button"
                  onClick={() => onOpenAppointmentModal()}
                  className="w-full sm:w-auto rounded-lg border border-[#005d97] text-[#005d97] px-6 py-2.5 text-[14px] font-medium hover:bg-[#005d97]/5 transition-colors cursor-pointer"
                >
                  Book Online
                </button>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-[#0076be] text-white rounded-lg px-8 py-2.5 text-[14px] font-semibold hover:bg-[#005d97] active:scale-[0.98] transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Registering...</span>
                ) : (
                  <span>Register Patient</span>
                )}
              </button>
            </div>
          </form>
        </main>
      )}
    </div>
  );
};
