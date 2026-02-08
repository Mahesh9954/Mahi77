
import React from 'react';
import { Briefcase, GraduationCap, Award, Tool, Mail, Phone, Linkedin, MapPin, CheckCircle2 } from 'lucide-react';
import { Experience, Education, SkillGroup } from './types';

export const PERSONAL_INFO = {
  name: "CA Mahesh R. Solanki",
  title: "Chartered Accountant",
  tagline: "Precision in Taxation. Mastery in Compliance.",
  summary: "Chartered Accountant qualified in November 2024 (First Attempt) with hands-on experience in accounting, audit, and taxation, and a growing specialization in UAE Corporate Tax and VAT compliance.",
  location: "Surat / Ahmedabad, Gujarat, India",
  email: "solankimahesh84939@gmail.com",
  phone: "+91 93130 26285",
  linkedin: "https://www.linkedin.com/in/maheshrsolanki",
  avatar: "https://picsum.photos/seed/mahesh/400/400"
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Account and Tax Associate",
    company: "Active Bean Counter Private Limited (Anderson Global Group)",
    location: "Ahmedabad, Gujarat, India",
    period: "July 2025 – Present",
    type: "Full-time",
    responsibilities: [
      "Review financial statements from a taxation perspective.",
      "Handle UAE Corporate Tax compliance, including tax computations and return filing.",
      "Perform VAT reviews and reconciliations to ensure accuracy and regulatory compliance.",
      "Prepare working papers and tax adjustments with proper documentation.",
      "Use Excel extensively for tax calculations, reconciliations, and reporting."
    ]
  },
  {
    role: "Assistant Accountant",
    company: "Auzin Advisory Private Limited",
    location: "Surat, Gujarat, India",
    period: "March 2025 – May 2025",
    type: "Full-time",
    responsibilities: [
      "Performed bank reconciliations and ledger scrutiny.",
      "Assisted in preparation of personal income tax returns.",
      "Supported day-to-day accounting and compliance work."
    ]
  },
  {
    role: "Article Assistant",
    company: "M D Dudawala & Co.",
    location: "Surat, Gujarat, India",
    period: "April 2022 – February 2025",
    type: "Internship",
    responsibilities: [
      "Prepared income tax returns for 150+ clients, ensuring accuracy and timely filing.",
      "Managed TDS/TCS payments and filing of TDS returns.",
      "Handled GST compliance for 25+ clients across various industries.",
      "Implemented e-invoicing under GST regulations.",
      "Finalized financial statements (P&L and Balance Sheet).",
      "Conducted statutory and tax audits for Diamond & Jewellery sector clients."
    ]
  }
];

export const EDUCATIONS: Education[] = [
  {
    institution: "ICAI",
    degree: "Chartered Accountant",
    period: "April 2020 – Nov 2024",
    score: "CA Final: 61% (First Attempt)",
    achievements: ["Exemption in 4 papers (60+)", "CA Intermediate (52%)", "CA Foundation (60%)"]
  },
  {
    institution: "GSEB",
    degree: "Class XII",
    period: "March 2020",
    score: "88.71%",
    achievements: ["3rd Rank in School"]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Core Expertise",
    skills: ["UAE Corporate Tax Compliance", "VAT Review & Reconciliation", "Financial Statement Review", "Corporate Tax Return Filing"]
  },
  {
    category: "Software & Tools",
    skills: ["Excel (Expert)", "Tally ERP", "QuickBooks (QBO)", "Xero", "Genius", "Hubdoc"]
  },
  {
    category: "Soft Skills",
    skills: ["Client Communication", "Team Collaboration", "Analytical Thinking", "Time Management"]
  }
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];
