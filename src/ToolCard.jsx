import { useState } from 'react'

/* ── Tool Card component ── */
export default function ToolCard({ tool: t, delay, why, dimmed, onClick }) {
  const [expanded, setExpanded] = useState(false)
  const d = t.details

  return (
    <div className={`tool-card fade-up${dimmed ? ' dimmed' : ''}`} style={{ animationDelay: `${delay}s` }}>
      <div className="tool-icon-wrap">{t.icon}</div>
      <div className="tool-body">
        <div className="tool-top">
          <span className="tool-name">{t.name}</span>
          <span className={`badge badge-${t.tier}`}>{t.tier}</span>
          {t.hasTrial && <span className="trial-badge">Free trial</span>}
          <span className="tool-cat">{t.cat}</span>
        </div>
        {why && <div className="tool-why">{why}</div>}
        <p className="tool-desc">{t.desc}</p>
        <div className="tool-meta">
          <span className="meta-price">{t.price === 0 ? 'Free' : `$${t.price}/mo`}</span>
          {t.affiliateUrl && (
            <a
              className="affiliate-link"
              href={t.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClick}
            >
              Try {t.name} →
            </a>
          )}
          {d && (
            <button className="learn-more-btn" onClick={() => setExpanded(!expanded)}>
              {expanded ? 'Show less ↑' : 'Learn more ↓'}
            </button>
          )}
        </div>

        {expanded && d && (
          <div className="tool-details">
            <div className="detail-section">
              <div className="detail-label">What it is</div>
              <p className="detail-text">{d.what}</p>
            </div>
            <div className="detail-section">
              <div className="detail-label">How it works</div>
              <p className="detail-text">{d.how}</p>
            </div>
            <div className="detail-section">
              <div className="detail-label">Key features</div>
              <ul className="detail-features">
                {d.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
            <div className="detail-row">
              <div className="detail-section half">
                <div className="detail-label">Free trial</div>
                <p className="detail-text">{d.trial}</p>
              </div>
              <div className="detail-section half">
                <div className="detail-label">Platform</div>
                <p className="detail-text">{d.platform}</p>
              </div>
            </div>
            <div className="detail-section">
              <div className="detail-label">Best for</div>
              <p className="detail-text">{d.bestFor}</p>
            </div>
            {t.affiliateUrl && (
              <a
                className="detail-cta"
                href={t.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClick}
              >
                Try {t.name} free →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
