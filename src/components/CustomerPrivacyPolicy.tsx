import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

interface CustomerPrivacyPolicyProps {
  onBackToHome: () => void;
}

function SectionTitle({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <h2 className="mb-3 mt-11 border-t border-slate-200/80 pt-7 text-xl font-semibold tracking-tight text-slate-950">
      <span className="mr-2.5 text-[#1638F9]">{number}</span>
      {children}
    </h2>
  );
}

export default function CustomerPrivacyPolicy({ onBackToHome }: CustomerPrivacyPolicyProps) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Radiuz Portal Privacy Policy';

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <motion.section
      id="customer-privacy-policy"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="mx-auto w-full max-w-5xl px-6 pb-20 pt-32 sm:pt-40"
      aria-labelledby="customer-privacy-policy-title"
    >
      <button
        type="button"
        onClick={onBackToHome}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition-colors hover:border-[#1638F9]/30 hover:text-[#1638F9]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </button>

      <article className="p-6 sm:p-10">
        <header className="mb-10 border-b border-slate-200/80 pb-7">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[#1638F9]">Radiuz Portal · Customer App</p>
          <h1 id="customer-privacy-policy-title" className="mb-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-[34px]">Privacy Policy</h1>
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-500">
            <span>Effective 16 September 2026</span>
            <span>RADIUZ COMPANY LIMITED</span>
          </div>
        </header>

        <div className="text-[16px] leading-[1.65] text-slate-700 [&_p]:mb-3.5 [&_a]:text-[#1638F9] [&_a]:underline-offset-2 [&_a:hover]:underline [&_strong]:font-semibold [&_strong]:text-slate-950">
          <p>This policy explains what the <strong>Radiuz Portal</strong> app (available for iOS, Android and the web; Android package <code className="rounded bg-slate-100 px-1.5 py-0.5 text-[0.9em]">com.radiuzispportal.app</code>) collects, why, and what you can do about it. The app is provided by <strong>RADIUZ COMPANY LIMITED</strong> (&quot;Radiuz&quot;, &quot;we&quot;, &quot;us&quot;) so that customers of our internet service can manage their subscription, invoices, payments and support tickets.</p>

          <nav className="my-8 rounded-xl border border-slate-200 bg-slate-50/70 p-5" aria-label="Privacy policy contents">
            <p className="mb-2 text-sm font-bold text-slate-950">Contents</p>
            <ol className="columns-1 list-decimal space-y-1.5 pl-5 text-sm sm:columns-2">
              <li><a href="#customer-collect">Information we collect</a></li>
              <li><a href="#customer-use">How we use it</a></li>
              <li><a href="#customer-share">Who we share it with</a></li>
              <li><a href="#customer-security">Storage, security and transfers</a></li>
              <li><a href="#customer-retention">How long we keep it</a></li>
              <li><a href="#customer-rights">Your choices and rights</a></li>
              <li><a href="#customer-children">Children</a></li>
              <li><a href="#customer-changes">Changes to this policy</a></li>
              <li><a href="#customer-contact">Contact us</a></li>
            </ol>
          </nav>

          <SectionTitle number="1"><span id="customer-collect">Information we collect</span></SectionTitle>
          <h3 className="mb-1.5 mt-6 text-[16px] font-semibold text-slate-950">Account and sign-in</h3>
          <ul className="mb-3.5 list-disc space-y-1.5 pl-[22px]">
            <li><strong>Customer ID</strong> — the identifier of your Radiuz subscription, which you enter to sign in.</li>
            <li><strong>Password</strong> — sent securely to our customer portal to verify you. <strong>The app does not store your password.</strong> After sign-in it keeps only a time-limited session token in the device&apos;s secure storage.</li>
            <li><strong>Mobile number and one-time codes</strong> — if you sign in with SMS OTP, a code is sent to the mobile number registered on your subscription and checked by our portal.</li>
            <li><strong>Biometric sign-in setting</strong> — if you turn on Face ID / Touch ID / fingerprint login, the app stores only an on/off preference. Your biometric data never leaves your device; verification is performed entirely by iOS or Android.</li>
          </ul>
          <h3 className="mb-1.5 mt-6 text-[16px] font-semibold text-slate-950">Your subscription profile</h3>
          <p>After you sign in, the app retrieves the details already held on your Radiuz account and stores them on your device so screens load quickly: your name, mobile number, email address, service address (city, township, street address) and the location of your service connection. This is the data you gave us when you subscribed; the app does not collect your device&apos;s GPS location and does not request location permission.</p>
          <h3 className="mb-1.5 mt-6 text-[16px] font-semibold text-slate-950">Billing and payments</h3>
          <p>The app shows your subscription plan, invoices, transaction history and account balance from our billing system. If you pay through the app, you are handed over to the payment provider you choose (<strong>KBZPay</strong>, <strong>AYA Pay</strong> or <strong>MPU</strong>); you enter your payment details with that provider, not with us, and we receive only the payment reference and confirmation needed to credit your account.</p>
          <h3 className="mb-1.5 mt-6 text-[16px] font-semibold text-slate-950">Support tickets</h3>
          <p>When you open a support ticket we collect the subject, request type and description you write, and any <strong>photos you choose to attach</strong> (up to five). Photos are selected through the system photo picker or camera only when you tap to attach them; the app does not scan or upload your photo library.</p>
          <h3 className="mb-1.5 mt-6 text-[16px] font-semibold text-slate-950">Device and notifications</h3>
          <ul className="mb-3.5 list-disc space-y-1.5 pl-[22px]">
            <li><strong>Push notification token</strong> and basic <strong>device information</strong> (device model, operating system version) — so we can deliver notifications about your account, invoices and tickets to the right device. You can turn notifications off at any time (see <a href="#customer-rights">section 6</a>).</li>
            <li><strong>App integrity signals</strong> — to protect your account from tampered or counterfeit copies of the app, the app uses Google Play Integrity (Android) and Apple App Attest / DeviceCheck (iOS) through Firebase App Check. These services send a device attestation to Google or Apple; they do not identify you personally to us.</li>
          </ul>
          <h3 className="mb-1.5 mt-6 text-[16px] font-semibold text-slate-950">What we do not collect</h3>
          <ul className="mb-3.5 list-disc space-y-1.5 pl-[22px]">
            <li>No precise or background <strong>device location</strong>.</li>
            <li>No <strong>contacts</strong>, call logs, messages or files beyond the photos you explicitly attach.</li>
            <li>No <strong>advertising identifier</strong>, and no advertising, analytics or tracking SDKs. We do not sell personal data and do not use it for advertising.</li>
          </ul>

          <SectionTitle number="2"><span id="customer-use">How we use it</span></SectionTitle>
          <div className="mb-3.5 overflow-x-auto">
            <table className="min-w-[560px] w-full border-collapse text-[14.5px] leading-6">
              <thead className="text-left text-[12.5px] uppercase tracking-[0.06em] text-slate-500"><tr className="border-b border-slate-200"><th className="pb-2 pr-3.5 font-semibold">Purpose</th><th className="pb-2 font-semibold">Data used</th></tr></thead>
              <tbody>
                <tr className="border-b border-slate-200"><td className="py-2.5 pr-3.5">Signing you in and keeping your session secure</td><td className="py-2.5">Customer ID, session token, OTP, biometric preference, app integrity signals</td></tr>
                <tr className="border-b border-slate-200"><td className="py-2.5 pr-3.5">Showing and managing your subscription, invoices and balance</td><td className="py-2.5">Subscription profile, billing records</td></tr>
                <tr className="border-b border-slate-200"><td className="py-2.5 pr-3.5">Processing payments you initiate</td><td className="py-2.5">Invoice details, payment reference from the provider</td></tr>
                <tr className="border-b border-slate-200"><td className="py-2.5 pr-3.5">Handling your support requests</td><td className="py-2.5">Ticket contents, attachments, your contact details</td></tr>
                <tr className="border-b border-slate-200"><td className="py-2.5 pr-3.5">Sending notifications about your account, invoices and tickets</td><td className="py-2.5">Push token, device information</td></tr>
                <tr className="border-b border-slate-200"><td className="py-2.5 pr-3.5">Preventing fraud and abuse, and keeping the service reliable</td><td className="py-2.5">Session and integrity data, error logs</td></tr>
                <tr className="border-b border-slate-200"><td className="py-2.5 pr-3.5">Meeting legal, tax and accounting obligations</td><td className="py-2.5">Billing and payment records</td></tr>
              </tbody>
            </table>
          </div>

          <SectionTitle number="3"><span id="customer-share">Who we share it with</span></SectionTitle>
          <p>We share personal data only as needed to run the service:</p>
          <ul className="mb-3.5 list-disc space-y-1.5 pl-[22px]">
            <li><strong>Google LLC (Firebase)</strong> — the app uses Firebase Cloud Firestore, Authentication, Cloud Messaging, Cloud Functions and App Check to store app configuration and notifications, establish your session, deliver push notifications and verify app integrity. Google processes this data under its own <a href="https://firebase.google.com/support/privacy" rel="noopener">Firebase privacy terms</a>.</li>
            <li><strong>Payment providers</strong> — KBZPay, AYA Pay and MPU process payments you choose to make, under their own privacy policies.</li>
            <li><strong>SMS delivery providers</strong> — to send one-time sign-in codes to your registered mobile number.</li>
            <li><strong>Authorities</strong> — where required by the laws of the Republic of the Union of Myanmar or to protect our rights, customers or the public.</li>
          </ul>
          <p>We do not sell personal data, and we do not share it with advertisers or data brokers.</p>

          <SectionTitle number="4"><span id="customer-security">Storage, security and transfers</span></SectionTitle>
          <ul className="mb-3.5 list-disc space-y-1.5 pl-[22px]">
            <li>All communication between the app and our servers is encrypted in transit (HTTPS/TLS).</li>
            <li>Session tokens and profile data on your device are kept in the platform&apos;s secure storage (iOS Keychain / Android Keystore-backed storage).</li>
            <li>Passwords are verified by our portal and are not stored by the app.</li>
            <li>Account and billing data live on our servers in Myanmar and in Google Firebase, whose data centres may be located outside Myanmar. Google provides contractual and technical safeguards for such transfers.</li>
          </ul>
          <p>No system is perfectly secure. If we learn of a breach affecting your personal data we will notify you and the relevant authorities as the law requires.</p>

          <SectionTitle number="5"><span id="customer-retention">How long we keep it</span></SectionTitle>
          <ul className="mb-3.5 list-disc space-y-1.5 pl-[22px]">
            <li><strong>Account and subscription data</strong> — for as long as you are a Radiuz customer, and afterwards for the period required for billing disputes, tax and accounting (generally up to 5 years).</li>
            <li><strong>Support tickets and attachments</strong> — until the ticket is resolved and for a reasonable period afterwards for quality and dispute purposes.</li>
            <li><strong>Session tokens</strong> — expire automatically (portal sessions within 24 hours) and are removed when you sign out.</li>
            <li><strong>Push tokens and device records</strong> — removed when you sign out, uninstall the app or disable notifications.</li>
          </ul>

          <SectionTitle number="6"><span id="customer-rights">Your choices and rights</span></SectionTitle>
          <ul className="mb-3.5 list-disc space-y-1.5 pl-[22px]">
            <li><strong>Notifications</strong> — turn them off in the app&apos;s Settings, or in your phone&apos;s system settings for Radiuz Portal.</li>
            <li><strong>Biometric login</strong> — turn it on or off under Settings → Security &amp; Privacy in the app.</li>
            <li><strong>Photos and camera</strong> — the app only asks for access when you attach a photo to a ticket; you can revoke access at any time in your phone&apos;s settings.</li>
            <li><strong>Sign out</strong> — clears your session and locally stored profile data from the device.</li>
            <li><strong>Access and correction</strong> — you can view your profile in the app; to correct details on your subscription record, contact us (see below).</li>
            <li><strong>Deletion</strong> — you may ask us to delete your app account and the personal data we hold that we are not legally required to keep. Contact us using the details in <a href="#customer-contact">section 9</a> with your Customer ID; we will confirm your identity and complete the request within 30 days.</li>
          </ul>

          <SectionTitle number="7"><span id="customer-children">Children</span></SectionTitle>
          <p>Radiuz Portal is intended for account holders of Radiuz internet subscriptions and is not directed at children under 13. We do not knowingly collect personal data from children; if you believe a child has provided us data, contact us and we will delete it.</p>

          <SectionTitle number="8"><span id="customer-changes">Changes to this policy</span></SectionTitle>
          <p>We may update this policy as the app or the law changes. The effective date at the top shows the latest version; for significant changes we will notify you in the app. Continued use of the app after a change means you accept the updated policy.</p>

          <SectionTitle number="9"><span id="customer-contact">Contact us</span></SectionTitle>
          <p>RADIUZ COMPANY LIMITED<br />The Leaf Tower, Dhamma Thukha Kyaung Street, Hlaing, Yangon, Myanmar<br />Phone: <a href="tel:+959772668899">+95 9 772 668 899</a><br />Email: <a href="mailto:support@radiuz.net">support@radiuz.net</a></p>
          <p>This policy is provided in English; where a Myanmar-language version is published, the English version governs in case of conflict.</p>
        </div>

        <footer className="mt-[52px] border-t border-slate-200 pt-5 text-[13.5px] text-slate-500">
          © 2026 RADIUZ COMPANY LIMITED · Radiuz Portal Customer App · <a href="https://www.radiuz.net" rel="noopener" className="text-[#1638F9] hover:underline">radiuz.net</a>
        </footer>
      </article>
    </motion.section>
  );
}
