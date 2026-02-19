import { siteData } from "@/data";


export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col px-5">

      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-16 lg:py-24 rounded-[40px]">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-balance">Privacy Policy</h1>
          <p className="text-lg opacity-90">Last updated: January 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <div className="prose prose-lg max-w-none space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
            <p className="text-foreground opacity-80 leading-relaxed">
              Debt Mukti ("we", "our", or "us") operates the website. This page informs you of our policies regarding the
              collection, use, and disclosure of personal data when you use our Service and the choices you have associated
              with that data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Information Collection and Use</h2>
            <p className="text-foreground opacity-80 leading-relaxed mb-4">
              We collect several different types of information for various purposes to provide and improve our Service to
              you.
            </p>
            <h3 className="text-xl font-bold text-primary mb-2">Types of Data Collected:</h3>
            <ul className="list-disc list-inside space-y-2 text-foreground opacity-80">
              <li>Personal Data: Name, email address, phone number, postal address, cookies and usage data</li>
              <li>Usage Data: Browser type, IP address, pages visited, time and date of visits</li>
              <li>Financial Information: Debt details and financial situation (for consultation purposes only)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Use of Data</h2>
            <p className="text-foreground opacity-80 leading-relaxed mb-4">Debt Mukti uses the collected data for various purposes:</p>
            <ul className="list-disc list-inside space-y-2 text-foreground opacity-80">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To provide customer care and support</li>
              <li>To gather analysis or valuable information to improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Security of Data</h2>
            <p className="text-foreground opacity-80 leading-relaxed">
              The security of your data is important to us but remember that no method of transmission over the Internet or
              method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect
              your Personal Data, we cannot guarantee its absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Changes to This Privacy Policy</h2>
            <p className="text-foreground opacity-80 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy
              Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Contact Us</h2>
            <p className="text-foreground opacity-80 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-foreground opacity-80 leading-relaxed mt-2">
              Email: {siteData.email}
              <br />
              Phone: {siteData.phone}
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}
