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
            <div className="govuk-phase-banner">
              <p className="govuk-phase-banner__content">
                <strong className="govuk-tag govuk-phase-banner__content__tag">Beta</strong>
                <span className="govuk-phase-banner__text">
                  This is a working tool to help organisations prepare for Cyber Essentials
                  certification. Your responses are stored in this browser only — nothing is sent
                  to a server.{' '}
                  <a
                    href="https://github.com/jontever/ce-readiness/issues"
                    className="govuk-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Give feedback on GitHub
                  </a>
                  .
                </span>
              </p>
            </div>
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
