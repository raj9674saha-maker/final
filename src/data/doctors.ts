import { Doctor } from '../types';

export const doctorsData: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Sushruta Sharma',
    dept: 'Cardiology',
    exp: '15+ Years Experience',
    qualification: 'MD, DM (Cardiology), FACC',
    bio: 'Dr. Sharma is a renowned interventional cardiologist specializing in complex coronary interventions, heart failure management, and structural heart diseases. He has successfully performed over 3,500 cardiac catheterizations and is dedicated to advancing patient outcomes through minimally invasive techniques.',
    specializations: [
      'Interventional Cardiology',
      'Echocardiography & Doppler',
      'Heart Failure Management',
      'Coronary Angioplasty & Stenting'
    ],
    timings: 'Mon - Fri: 9:00 AM - 2:00 PM',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    patientsTreated: '4,800+',
    roomNo: 'Suite 204, Tower A',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  },
  {
    id: 2,
    name: 'Dr. Ananya Roy',
    dept: 'Neurology',
    exp: '12+ Years Experience',
    qualification: 'MD (Med), DM (Neurology), DNB',
    bio: 'Dr. Roy is an expert neurologist specializing in neurodegenerative disorders, acute stroke care, epilepsy, and cognitive disorders. She is recognized for her empathetic clinical approach and active research in innovative neuro-rehabilitation therapies.',
    specializations: [
      'Acute Stroke Management',
      'Multiple Sclerosis Care',
      'Comprehensive Epilepsy Care',
      'Parkinsons & Movement Disorders'
    ],
    timings: 'Tue - Sat: 10:00 AM - 4:00 PM',
    image: 'https://images.unsplash.com/photo-1594824813589-325ff7ca8066?auto=format&fit=crop&q=80&w=800',
    rating: 4.95,
    patientsTreated: '3,600+',
    roomNo: 'Suite 310, Tower B',
    availableDays: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  },
  {
    id: 3,
    name: 'Dr. Rajesh Gupta',
    dept: 'Orthopedics',
    exp: '20+ Years Experience',
    qualification: 'MS (Orthopedics), M.Ch, Fellowship in Joint Arthroplasty',
    bio: 'With more than two decades of surgical excellence, Dr. Gupta is a pioneer in robotic-assisted joint replacement, arthroscopic ligament reconstruction, and complex trauma management. He has restored active mobility to thousands of athletes and seniors.',
    specializations: [
      'Robotic Knee & Hip Replacement',
      'Sports Injury Rehabilitation',
      'Arthroscopic Surgeries',
      'Complex Spinal & Pelvic Trauma'
    ],
    timings: 'Mon, Wed, Fri: 8:00 AM - 1:00 PM',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800',
    rating: 4.88,
    patientsTreated: '6,200+',
    roomNo: 'Suite 105, Tower A',
    availableDays: ['Monday', 'Wednesday', 'Friday']
  },
  {
    id: 4,
    name: 'Dr. Priya Mukherjee',
    dept: 'Pediatrics',
    exp: '10+ Years Experience',
    qualification: 'MD (Pediatrics), DCH, FIAP',
    bio: 'Dr. Mukherjee is a compassionate pediatrician focused on holistic child wellness, neonatal intensive care, pediatric allergy & immunology, and developmental milestones. She creates a comforting, stress-free clinical environment for children and parents.',
    specializations: [
      'Pediatric Immunology & Allergy',
      'Newborn & Neonatal Intensive Care',
      'Growth & Developmental Milestones',
      'Childhood Immunization & Nutrition'
    ],
    timings: 'Mon - Sat: 11:00 AM - 5:00 PM',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
    rating: 4.97,
    patientsTreated: '5,100+',
    roomNo: 'Suite 112, Children Pavilion',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  },
  {
    id: 5,
    name: 'Dr. Vikram Sengupta',
    dept: 'Oncology',
    exp: '18+ Years Experience',
    qualification: 'MD, DM (Medical Oncology), ESMO Certified',
    bio: 'Dr. Sengupta is a leading medical oncologist specializing in immunotherapy, precision oncology, targeted chemotherapy, and personalized cancer treatments. He leads multidisciplinary tumor boards and provides comprehensive supportive cancer care.',
    specializations: [
      'Targeted & Immunotherapy Regimens',
      'Precision Genomic Oncology',
      'Chemotherapy & Infusion Care',
      'Hematologic Malignancies'
    ],
    timings: 'Tue, Thu, Sat: 9:00 AM - 3:00 PM',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
    rating: 4.92,
    patientsTreated: '4,100+',
    roomNo: 'Suite 401, Cancer Care Wing',
    availableDays: ['Tuesday', 'Thursday', 'Saturday']
  },
  {
    id: 6,
    name: 'Dr. Sneha Chatterjee',
    dept: 'Dermatology',
    exp: '8+ Years Experience',
    qualification: 'MD (Dermatology, Venereology & Leprology)',
    bio: 'Dr. Chatterjee is an expert in clinical and aesthetic dermatology, advanced laser skin treatments, dermatopathology, and trichology. She combines clinical precision with state-of-the-art dermatological technology to treat complex skin disorders.',
    specializations: [
      'Clinical & Cosmetic Dermatology',
      'Advanced Laser Therapies',
      'Acne Scar & Pigmentation Therapy',
      'Skin Cancer & Dermoscopy Screening'
    ],
    timings: 'Mon - Fri: 12:00 PM - 6:00 PM',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    rating: 4.85,
    patientsTreated: '2,900+',
    roomNo: 'Suite 218, Wellness Center',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  }
];

export const heroImages = {
  homeHero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAt8v6R8_iWezQoYdxdQpFuZo9RKNR9VtLWCk0CmGkYVXEvHvXN0JNOHhE-h2i1oXFqzsDziYtfFBZ8r28QhifqzciK8Ul7_54PsuUbv7paRBHTwhW0MXXtOVxa-rjjExJrdnwK5KfK5ojlyxxLftw8cjj8apAvIaKDWEAMcgsp56ZDdbYLsazI0C64Qikbdy0-RRzYat9GomiswOXK02Z_TqoLgPUUJXC7UBVAwTEdhz1AKVaWzow',
  teamHero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYMcUJhOXoUhDZT-SUd1TrBu_JGDCJKuq0dHLJkbGfuzZzuz7lDTEiRB7p_eTZbovKBeW3EoybWhFxHsDT7U8anrsU2HXLAHcQvI1lM98050t-e9NpVHFdBj2ZkztTHCWh4AA0FI7mfAHNO63wZvxnG6X6kjLf0UzgsnQXJ2S7Uqnh6eQfrA-JaotZKa1LFlFYC-ZuXJqpZ3OCkFJz0r2f9mX3IK2p5IqNQyDP_mmIN4_cTboiM_F7',
  aboutPhoto: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9kidG3VPFJMaCZ_KOfU4qCC59jVtGBDKs-v5zrIZ3SPchSlWCaQ5owslFb9EGUpAH8bR-aoBXGD3Ptbjf742_pwGUUnvWf8fkHRW4CkekxxtSVg3qO5D3pHzHcbZRfWn7Y8uylGBVkGRXJ8sSN5dvDRSEcdhlwyZFqG_t6jQBOic-j6cmA2fziRf-EagVxDOoRkRj6rDPF8pEOoH2hiWf0yaUqRI3ZI6NDsQmjwrtFRQaKIYo5-L6',
  modalDoctorFallback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKLKju8S2tzSYRrrP68h0LAo76-li1z19kplIhaiqucgr9TV3C1LngBWjhef-MNE-JJimo7x6oxmSeDkRRCcIYxdP9h5FhI8elJdXOHYPn-sGJ7iFKgY7rTjhCNDVpFm1c66ihWa8jo-qlPg8pJKuTrTWDkqdnKEFFnUajXxpQh9ECwRhtgK79-esioCPnZmoRnmQ95p-MShvIRIbFfsx1yAlaBj-zv48SvQcSYQUpFWZwaniZ_H7x'
};

export const hospitalServices = [
  {
    title: 'Robotic & Laparoscopic Surgery',
    desc: 'Minimally invasive state-of-the-art da Vinci robotic systems for swift recovery and precision.',
    icon: 'Activity'
  },
  {
    title: '24x7 Emergency & Trauma Center',
    desc: 'Rapid emergency response team equipped with dedicated resuscitation suites and trauma surgeons.',
    icon: 'ShieldAlert'
  },
  {
    title: 'Advanced Diagnostic Imaging',
    desc: '3 Tesla MRI, 512-Slice Spectral CT, digital mammography, and comprehensive pathology labs.',
    icon: 'Stethoscope'
  },
  {
    title: 'Critical Care & ICUs',
    desc: 'Specialized Coronary Care Unit (CCU), Pediatric ICU, and Surgical Intensive Care units.',
    icon: 'HeartPulse'
  }
];
