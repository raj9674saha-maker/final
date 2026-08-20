import React, { useState } from 'react';
import { Cross, X, Shield, FileText, HeartHandshake, Briefcase } from 'lucide-react';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <>
      <footer className="w-full px-6 lg:px-16 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-[#ebeef4] border-t border-[#c0c7d2]/60 mt-auto">
        <div className="space-y-1">
          <div className="text-[18px] font-bold text-[#181c21] flex items-center gap-2">
            <div className="w-5 h-5 rounded-sm bg-[#005d97] text-white flex items-center justify-center">
              <Cross className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            </div>
            <span>Sushruta Medical Institute</span>
          </div>
          <p className="text-[13px] text-[#404751]">
            © 2024 Sushruta Medical Institute. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-[13px]">
          <button
            onClick={() => setActiveModal('privacy')}
            className="text-[#404751] hover:text-[#005d97] hover:underline transition-all cursor-pointer font-medium"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveModal('terms')}
            className="text-[#404751] hover:text-[#005d97] hover:underline transition-all cursor-pointer font-medium"
          >
            Terms of Service
          </button>
          <button
            onClick={() => setActiveModal('rights')}
            className="text-[#404751] hover:text-[#005d97] hover:underline transition-all cursor-pointer font-medium"
          >
            Patient Rights
          </button>
          <button
            onClick={() => setActiveModal('careers')}
            className="text-[#404751] hover:text-[#005d97] hover:underline transition-all cursor-pointer font-medium"
          >
            Careers
          </button>
        </div>
      </footer>

      {/* Info Dialog Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white w-full max-w-lg rounded-xl shadow-2xl border border-[#c0c7d2]/40 overflow-hidden relative animate-in fade-in zoom-in duration-200">
            <div className="px-6 py-4 bg-[#f8f9ff] border-b border-[#e6e8ef] flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#005d97] font-semibold text-base">
                {activeModal === 'privacy' && <Shield className="w-5 h-5" />}
                {activeModal === 'terms' && <FileText className="w-5 h-5" />}
                {activeModal === 'rights' && <HeartHandshake className="w-5 h-5" />}
                {activeModal === 'careers' && <Briefcase className="w-5 h-5" />}
                <span className="capitalize">
                  {activeModal === 'privacy' && 'Privacy Policy & Data Protection'}
                  {activeModal === 'terms' && 'Terms of Service'}
                  {activeModal === 'rights' && 'Patient Charter & Rights'}
                  {activeModal === 'careers' && 'Careers at Sushruta Medical'}
                </span>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#707882] hover:bg-[#ebeef4] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 text-[14px] text-[#404751] leading-relaxed max-h-[60vh] overflow-y-auto space-y-3">
              {activeModal === 'privacy' && (
                <>
                  <p>
                    <strong>1. Clinical Confidentiality:</strong> Sushruta Medical Institute adheres to stringent HIPAA and international patient data privacy regulations. All medical records, diagnostic scans, and clinical notes are encrypted.
                  </p>
                  <p>
                    <strong>2. Data Usage:</strong> Your personal and contact information is strictly used for scheduling consultations, telemedicine sessions, billing, and clinical continuity.
                  </p>
                  <p>
                    <strong>3. Consent & Access:</strong> You retain full rights to request your medical history records and lab results at any time via the patient portal or registrar.
                  </p>
                </>
              )}

              {activeModal === 'terms' && (
                <>
                  <p>
                    <strong>1. Appointment Guidelines:</strong> Patients are requested to arrive 15 minutes prior to scheduled outpatient appointments for vitals check-in.
                  </p>
                  <p>
                    <strong>2. Emergency Protocol:</strong> For acute life-threatening medical emergencies, please dial our 24/7 hotline directly or report immediately to the Emergency Room (Gate 1).
                  </p>
                  <p>
                    <strong>3. Tele-Consultation:</strong> Online appointments require a stable network and accurate submission of existing medication summaries.
                  </p>
                </>
              )}

              {activeModal === 'rights' && (
                <>
                  <p>
                    <strong>• Right to Dignity:</strong> Respectful, compassionate care irrespective of gender, religion, background, or social status.
                  </p>
                  <p>
                    <strong>• Informed Consent:</strong> Complete transparency regarding diagnoses, treatment alternatives, surgical risks, and prognosis before any procedure.
                  </p>
                  <p>
                    <strong>• Second Opinion:</strong> Full liberty to seek a second clinical opinion with unhindered provision of case records.
                  </p>
                  <p>
                    <strong>• Transparent Billing:</strong> Clear upfront breakdown of itemized treatment estimates and insurance cashless assistance.
                  </p>
                </>
              )}

              {activeModal === 'careers' && (
                <>
                  <p>
                    Join our team of visionary healthcare professionals, nurses, surgeons, and biomedical researchers.
                  </p>
                  <div className="p-3 bg-[#f1f3fa] rounded-lg border border-[#c0c7d2]/30 text-xs space-y-1">
                    <p className="font-semibold text-[#005d97]">Open Positions (2024-2025):</p>
                    <p>• Senior Consultant - Interventional Cardiology</p>
                    <p>• Pediatric ICU Specialist Nurse (RN)</p>
                    <p>• Medical Laboratory Technologist (Pathology & Bio-Chem)</p>
                  </div>
                  <p className="text-xs text-[#707882]">
                    Send your curriculum vitae to <span className="text-[#005d97] font-medium">careers@sushrutamedical.org</span>
                  </p>
                </>
              )}
            </div>

            <div className="px-6 py-3 bg-[#f8f9ff] border-t border-[#e6e8ef] flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="bg-[#0076be] text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-[#005d97] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
