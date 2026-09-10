import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

interface PrivacyPolicyProps {
  onBackToHome: () => void;
}

function SectionTitle({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <h2 className="mb-3 mt-11 text-xl font-semibold tracking-tight text-slate-950">
      <span className="mr-2.5 text-[#1638F9]">{number}</span>
      {children}
    </h2>
  );
}

export default function PrivacyPolicy({ onBackToHome }: PrivacyPolicyProps) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Radiuz Privacy Policy';

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <motion.section
      id="privacy-policy"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="mx-auto w-full max-w-5xl px-6 pb-20 pt-32 sm:pt-40"
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

      <article className="p-6 sm:p-10">
        <header className="mb-10 border-b border-slate-200/80 pb-7">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[#1638F9]">Radiuz App</p>
          <h1 id="privacy-policy-title" className="mb-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-[34px]">Privacy Policy</h1>
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-500">
            <span>Effective 7 September 2026</span>
            <span>Applies to the Radiuz app for iOS and Android (com.radiuzisp.app)</span>
          </div>
        </header>

        <div className="text-[16px] leading-[1.65] text-slate-700 [&_p]:mb-3.5 [&_a]:text-[#1638F9] [&_a]:underline-offset-2 [&_a:hover]:underline [&_strong]:font-semibold [&_strong]:text-slate-950">
          <p>The Radiuz app (&quot;the App&quot;) is an internal staff tool operated by <strong>RADIUZ COMPANY LIMITED</strong> (&quot;we&quot;, &quot;us&quot;). It is used by authorized employees and contractors of internet service providers running the Radiuz OSS/BSS platform to manage work schedules, helpdesk tickets, customers, subscriptions, invoices, and payments. This policy explains what information the App collects from its users, how it is used, and the choices available to you.</p>
          <p>The App is not a consumer product. Access requires a staff account provisioned by your organization&apos;s administrator; the App has no self-service account creation.</p>

          <SectionTitle number="1">Information we collect</SectionTitle>
          <p>We collect the following data from users of the App. All of it is associated with your staff account.</p>
          <div className="mb-2 overflow-x-auto">
            <table className="min-w-[560px] w-full border-collapse text-[14.5px] leading-6">
              <thead className="text-left text-[12.5px] uppercase tracking-[0.06em] text-slate-500">
                <tr className="border-b border-slate-200">
                  <th className="pr-3.5 pb-2 font-semibold">Data</th>
                  <th className="pr-3.5 pb-2 font-semibold">When it is collected</th>
                  <th className="pb-2 font-semibold">Why</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200"><td className="whitespace-nowrap py-2.5 pr-3.5 font-medium text-slate-950">Email address</td><td className="py-2.5 pr-3.5">When you sign in</td><td className="py-2.5">Authenticating your staff account</td></tr>
                <tr className="border-b border-slate-200"><td className="whitespace-nowrap py-2.5 pr-3.5 font-medium text-slate-950">Work content</td><td className="py-2.5 pr-3.5">When you write ticket comments or descriptions, or attach photos</td><td className="py-2.5">Operating the helpdesk workflow; content is stored with the related ticket and attributed to your account</td></tr>
                <tr className="border-b border-slate-200"><td className="whitespace-nowrap py-2.5 pr-3.5 font-medium text-slate-950">Staff user ID</td><td className="py-2.5 pr-3.5">While you use the App</td><td className="py-2.5">Attributing your actions in audit history, and attaching identity to analytics and crash reports</td></tr>
                <tr className="border-b border-slate-200"><td className="whitespace-nowrap py-2.5 pr-3.5 font-medium text-slate-950">Device identifiers</td><td className="py-2.5 pr-3.5">While you use the App</td><td className="py-2.5">App analytics and integrity verification (a Firebase installation identifier and the platform&apos;s vendor/app-scoped device identifier)</td></tr>
                <tr className="border-b border-slate-200"><td className="whitespace-nowrap py-2.5 pr-3.5 font-medium text-slate-950">Usage data</td><td className="py-2.5 pr-3.5">While you use the App</td><td className="py-2.5">Understanding which screens are used, to improve the App (screen-view events)</td></tr>
                <tr className="border-b border-slate-200"><td className="whitespace-nowrap py-2.5 pr-3.5 font-medium text-slate-950">Crash data</td><td className="py-2.5 pr-3.5">If the App crashes</td><td className="py-2.5">Diagnosing and fixing defects (stack traces, device model and OS version, the screens visited before the crash)</td></tr>
              </tbody>
            </table>
          </div>
          <p>The App does not collect your device&apos;s location, contacts, health data, financial account details, or browsing history.</p>

          <SectionTitle number="2">How we use information</SectionTitle>
          <ul className="mb-3.5 list-disc space-y-1.5 pl-[22px]">
            <li><strong>To provide the service</strong> — signing you in, syncing tickets and schedules, storing the comments and photos you attach to work items.</li>
            <li><strong>To keep the service secure</strong> — the App uses Firebase App Check with Apple App Attest (iOS) and Google Play Integrity (Android) to verify that requests come from a genuine, unmodified copy of the App before our systems accept them.</li>
            <li><strong>To improve the App</strong> — aggregate screen-view analytics and crash reports tell us what to fix and improve.</li>
          </ul>

          <SectionTitle number="3">Advertising and tracking</SectionTitle>
          <p>The App shows no advertising, contains no advertising SDKs, and does not use your data to track you across other companies&apos; apps or websites. We do not sell personal information, and we do not share it with data brokers. On iOS, the App does not access the advertising identifier (IDFA). On Android, an advertising-ID permission is present solely because the analytics library declares it; the identifier is used only for the analytics described above, never for advertising.</p>

          <SectionTitle number="4">Customer records you work with</SectionTitle>
          <p>In the course of your work, the App displays business records — customer names, contact details, addresses, subscriptions, invoices, and service history — belonging to the organization you work for. That organization is the controller of those records; the App is a tool through which its authorized staff access them. This policy covers data collected about <em>you</em> as an App user; the handling of customer records is governed by your organization&apos;s own policies and applicable law.</p>

          <SectionTitle number="5">Service providers</SectionTitle>
          <p>The App uses Google Firebase (Google LLC) for analytics, crash reporting, app-integrity verification, and tenant configuration. Google processes this data on our behalf under the <a href="https://firebase.google.com/support/privacy" rel="noopener">Firebase Data Processing and Security Terms</a>. Work data (tickets, comments, photos) is stored on servers operated for your organization&apos;s Radiuz platform.</p>

          <SectionTitle number="6">Storage and security</SectionTitle>
          <ul className="mb-3.5 list-disc space-y-1.5 pl-[22px]">
            <li>All communication between the App and our servers uses TLS encryption.</li>
            <li>On your device, session credentials are kept in the operating system&apos;s secure storage (Keychain on iOS, Keystore-backed storage on Android), and cached work data is stored encrypted.</li>
            <li>App data is excluded from device cloud backups on Android.</li>
            <li>Access to work data is limited to authenticated staff of your organization, according to the roles and permissions your administrator assigns.</li>
          </ul>

          <SectionTitle number="7">Retention</SectionTitle>
          <p>Analytics and crash data are retained according to Firebase&apos;s standard retention periods. Work content you create (comments, photos, ticket changes) is retained as part of your organization&apos;s business records for as long as that organization requires. Session data on your device is deleted when you log out.</p>

          <SectionTitle number="8">Deleting your account and data</SectionTitle>
          <p>Staff accounts are managed by your organization&apos;s administrator. To request deletion of your account and the personal data associated with it, contact your administrator or email us at the address below. Requests are honored within 30 days. Records your organization must keep for legitimate business or legal reasons (for example, audit history of ticket changes) may be retained in a form no longer attributed to you.</p>
          <p className="my-[18px] rounded-r-lg border-l-[3px] border-[#1638F9] bg-slate-100 px-[18px] py-3.5 text-[15px]">You can also submit a deletion request without using the App by emailing <strong><a href="mailto:support@radiuz.net">support@radiuz.net</a></strong> from your registered address.</p>

          <SectionTitle number="9">Children</SectionTitle>
          <p>The App is a workplace tool for authorized staff and is not directed at children. We do not knowingly collect information from anyone under 16.</p>

          <SectionTitle number="10">Changes to this policy</SectionTitle>
          <p>If we change this policy, we will update it at this address and revise the effective date above. Material changes will additionally be announced to your organization&apos;s administrator.</p>

          <SectionTitle number="11">Contact</SectionTitle>
          <p>Questions about this policy or your data can be sent to RADIUZ COMPANY LIMITED:</p>
          <ul className="mb-3.5 list-disc space-y-1.5 pl-[22px]">
            <li>Email — <a href="mailto:support@radiuz.net">support@radiuz.net</a></li>
            <li>Phone — <a href="tel:+959695930350">+95 9 695 930 350</a></li>
            <li>Website — <a href="https://www.radiuz.net" rel="noopener">www.radiuz.net</a></li>
          </ul>
        </div>

        <footer className="mt-[52px] border-t border-slate-200 pt-5 text-[13.5px] text-slate-500">
          © 2026 RADIUZ COMPANY LIMITED · Radiuz App for iOS and Android · <a href="https://www.radiuz.net" rel="noopener" className="text-[#1638F9] hover:underline">radiuz.net</a>
        </footer>
      </article>
    </motion.section>
  );
}
