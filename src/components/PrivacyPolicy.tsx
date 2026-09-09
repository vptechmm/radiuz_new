import React from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface PrivacyPolicyProps {
  onBackToHome: () => void;
}

const sections = [
  {
    title: 'Information we collect',
    content: 'We collect the information you provide when you contact us or use our services, such as your name, email address, company details, and the content of your message. We may also collect limited technical information, including device, browser, and usage data, to operate and improve our website.',
  },
  {
    title: 'How we use your information',
    content: 'We use your information to respond to enquiries, provide and improve Radiuz services, communicate important updates, protect the security of our services, and meet applicable legal obligations.',
  },
  {
    title: 'How we share information',
    content: 'We do not sell your personal information. We may share it with trusted service providers that help us operate our business, or when disclosure is required to comply with law, protect our rights, or maintain the safety of our users and services.',
  },
  {
    title: 'Data retention and security',
    content: 'We retain personal information only for as long as needed for the purposes described in this policy or as required by law. We use reasonable administrative, technical, and organisational safeguards to protect information; however, no method of transmission or storage is completely secure.',
  },
  {
    title: 'Your choices',
    content: 'You may request access to, correction of, or deletion of your personal information, subject to applicable law. You can also opt out of non-essential communications at any time by following the instructions in those communications or contacting us directly.',
  },
  {
    title: 'Changes to this policy',
    content: 'We may update this policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically.',
  },
];

export default function PrivacyPolicy({ onBackToHome }: PrivacyPolicyProps) {
  return (
    <motion.section
      id="privacy-policy"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="mx-auto w-full max-w-4xl px-6 pb-20 pt-32 sm:pt-40"
      aria-labelledby="privacy-policy-title"
    >
      <button
        type="button"
        onClick={onBackToHome}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition-colors hover:border-[#1638F9]/30 hover:text-[#1638F9]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </button>

      <div className="glass-premium rounded-[28px] p-6 sm:p-10">
        <div className="mb-10 flex items-start gap-4 border-b border-slate-200/80 pb-8">
          <div className="rounded-2xl bg-[#1638F9]/10 p-3 text-[#1638F9]">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <div>
            <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#1638F9]">Radiuz</p>
            <h1 id="privacy-policy-title" className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">Privacy Policy</h1>
          </div>
        </div>

        <div className="space-y-8 text-sm leading-7 text-slate-600 sm:text-base">
          <p>
            Radiuz Company Limited respects your privacy. This policy explains how we collect, use, and protect personal information when you visit our website or contact us.
          </p>

          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-2 text-lg font-extrabold text-slate-900">{section.title}</h2>
              <p>{section.content}</p>
            </section>
          ))}

          <section>
            <h2 className="mb-2 text-lg font-extrabold text-slate-900">Contact us</h2>
            <p>
              For privacy questions or requests, email us at{' '}
              <a href="mailto:info@radiuz.net" className="font-bold text-[#1638F9] hover:underline">info@radiuz.net</a>.
            </p>
          </section>
        </div>
      </div>
    </motion.section>
  );
}
