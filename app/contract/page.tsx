import Link from 'next/link'
import { Download, FileText } from 'lucide-react'

const contracts = [
  {
    title: 'Service Agreement',
    description: 'Our standard service agreement outlining the scope of debt resolution services and client responsibilities.',
    fileSize: '245 KB',
  },
  {
    title: 'Debt Consolidation Terms',
    description: 'Detailed terms and conditions specific to our debt consolidation services.',
    fileSize: '189 KB',
  },
  {
    title: 'Power of Attorney',
    description: 'Legal document authorizing Debt Mukti to negotiate on your behalf with creditors.',
    fileSize: '156 KB',
  },
  {
    title: 'Confidentiality Agreement',
    description: 'Binding confidentiality agreement ensuring your financial information remains private.',
    fileSize: '128 KB',
  },
  {
    title: 'Settlement Agreement Template',
    description: 'Template for settlement agreements reached with individual creditors.',
    fileSize: '198 KB',
  },
  {
    title: 'Payment Plan Agreement',
    description: 'Agreement for customized payment plans tailored to your financial situation.',
    fileSize: '167 KB',
  },
]

export default function ContractsPage() {
  return (
    <main className="min-h-screen flex flex-col px-5">

      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-16 lg:py-24 rounded-[40px]">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-balance">Contracts & Agreements</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Download and review all our service agreements and legal documents
          </p>
        </div>
      </section>

      {/* Contracts Grid */}
      <section className=" mx-auto py-16 lg:py-24">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Available Documents</h2>
          <p className="text-foreground opacity-80">
            All documents are available for download. Please review them carefully before signing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contracts.map((contract, index) => (
            <div key={index} className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="text-primary shrink-0 mt-1">
                  <FileText size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-primary mb-2">{contract.title}</h3>
                  <p className="text-foreground opacity-80 text-sm leading-relaxed mb-4">{contract.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Size: {contract.fileSize}</span>
                    <button className="flex items-center gap-2 bg-primary-blue text-white px-4 py-2 rounded-full hover:opacity-80 transition-opacity text-sm font-medium">
                      <Download size={16} />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-primary-light-blue text-primary-foreground py-16 lg:py-24 rounded-[40px]">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Need Clarification?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Our legal and financial experts are ready to explain any terms and help you understand your agreements.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-blue text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
          >
            Contact Our Experts
          </Link>
        </div>
      </section>
    </main>
  )
}
