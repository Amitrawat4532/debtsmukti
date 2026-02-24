import { siteData } from "@/data";


export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col px-5">
     

      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-16 lg:py-24 rounded-[40px]">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-balance text-white">Legal Terms</h1>
          <p className="text-lg opacity-90">Last updated: January 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <div className="prose prose-lg max-w-none space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
            <p className="text-foreground opacity-80 leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this
              agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Use License</h2>
            <p className="text-foreground opacity-80 leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Debt
              Mukti's website for personal, non-commercial transitory viewing only.
            </p>
            <p className="text-foreground opacity-80 leading-relaxed">
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground opacity-80 mt-2">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transmitting the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Disclaimer</h2>
            <p className="text-foreground opacity-80 leading-relaxed">
              The materials on Debt Mukti's website are provided "as is". Debt Mukti makes no warranties, expressed or
              implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties
              or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property
              or other violation of rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Limitations</h2>
            <p className="text-foreground opacity-80 leading-relaxed">
              In no event shall Debt Mukti or its suppliers be liable for any damages (including, without limitation, damages
              for loss of data or profit, or due to business interruption) arising out of the use or inability to use the
              materials on Debt Mukti's website, even if Debt Mukti or a Debt Mukti authorized representative has been
              notified orally or in writing of the possibility of such damage.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Accuracy of Materials</h2>
            <p className="text-foreground opacity-80 leading-relaxed">
              The materials appearing on Debt Mukti's website could include technical, typographical, or photographic errors.
              Debt Mukti does not warrant that any of the materials on this website are accurate, complete, or current. Debt
              Mukti may make changes to the materials contained on its website at any time without notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Links</h2>
            <p className="text-foreground opacity-80 leading-relaxed">
              Debt Mukti has not reviewed all of the sites linked to its website and is not responsible for the contents of
              any such linked site. The inclusion of any link does not imply endorsement by Debt Mukti of the site. Use of any
              such linked website is at the user's own risk.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">7. Modifications</h2>
            <p className="text-foreground opacity-80 leading-relaxed">
              Debt Mukti may revise these terms of service for its website at any time without notice. By using this website,
              you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">8. Governing Law</h2>
            <p className="text-foreground opacity-80 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws applicable in your
              jurisdiction, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">9. Contact Information</h2>
            <p className="text-foreground opacity-80 leading-relaxed">
              If you have any questions about these Terms & Conditions, please contact us at:
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
