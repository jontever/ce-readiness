import type { Metadata } from 'next'
import './globals.css'
import GovHeader from '@/components/GovHeader'
import GovFooter from '@/components/GovFooter'
import { AssessmentProvider } from '@/context/AssessmentContext'

export const metadata: Metadata = {
  title: {
    template: '%s – CE Readiness',
    default: 'CE Readiness – Cyber Essentials Preparation Tool',
  },
  description:
    'Free open-source tool to help UK organisations prepare for Cyber Essentials certification. Not an official assessment.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="govuk-template">
      <head>
        {/* govuk-frontend loaded from CDN to ensure fonts are served correctly */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/govuk-frontend@5.4.0/dist/govuk/govuk-frontend.min.css"
        />
      </head>
      <body className="govuk-template__body">
        <a href="#main-content" className="govuk-skip-link">
          Skip to main content
        </a>
        <AssessmentProvider>
          <GovHeader />
          <div className="govuk-width-container">
            <main className="govuk-main-wrapper" id="main-content">
              {children}
            </main>
          </div>
          <GovFooter />
        </AssessmentProvider>
      </body>
    </html>
  )
}
