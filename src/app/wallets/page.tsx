'use client';

import { useState } from 'react';
import { Plus, Wallet2, TrendingUp } from 'lucide-react';
import AddWalletModal from '@/components/AddWalletModal';
import { wallets } from '@/lib/mock-data';

function networkBadgeClass(network: string) {
  if (network === 'Ethereum') return 'badge badge-eth';
  if (network === 'Arbitrum') return 'badge badge-arb';
  return 'badge badge-linea';
}

function ScoreBar({ score }: { score: number }) {
  const color =
    score >= 80 ? '#10b981' : score >= 60 ? '#3b82f6' : score >= 40 ? '#f59e0b' : '#ef4444';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div className="progress-bar" style={{ width: 80, flexShrink: 0 }}>
        <div
          className="progress-fill"
          style={{ width: `${score}%`, background: color }}
        />
      </div>
      <span style={{ fontSize: '0.8rem', fontWeight: 600, color }}>{score}</span>
    </div>
  );
}

export default function WalletsPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="page-header">
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--foreground)', margin: 0 }}>
              Wallets
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '0.875rem', marginTop: 4 }}>
              Manage your tracked farming wallets
            </p>
          </div>
          <button
            id="add-wallet-btn"
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            <Plus size={16} />
            Add Wallet
          </button>
        </div>
      </div>

      <div className="page-content">
        {/* Stats row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: '1rem',
            marginBottom: '1.5rem',
          }}
        >
          <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Wallet2 size={20} color="var(--accent)" />
            <div>
              <p style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                Total Wallets
              </p>
              <p style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--foreground)', lineHeight: 1 }}>
                {wallets.length}
              </p>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <TrendingUp size={20} color="#10b981" />
            <div>
              <p style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                Avg Score
              </p>
              <p style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--foreground)', lineHeight: 1 }}>
                {Math.round(wallets.reduce((a, w) => a + w.farmingScore, 0) / wallets.length)}
              </p>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '1.2rem' }}>⛓</span>
            <div>
              <p style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                Networks
              </p>
              <p style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--foreground)', lineHeight: 1 }}>
                {new Set(wallets.map((w) => w.network)).size}
              </p>
            </div>
          </div>
        </div>

        {/* Wallet table */}
        <div className="card" style={{ padding: 0 }}>
          <div
            style={{
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid var(--border)',
            }}
          >
            <h2 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--foreground)', margin: 0 }}>
              Wallet List
            </h2>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table" id="wallets-table">
              <thead>
                <tr>
                  <th>Address</th>
                  <th>Label</th>
                  <th>Network</th>
                  <th>Farming Score</th>
                  <th>Transactions</th>
                  <th>Last Active</th>
                </tr>
              </thead>
              <tbody>
                {wallets.map((w) => (
                  <tr key={w.id} id={`wallet-row-${w.id}`}>
                    <td>
                      <span
                        style={{
                          fontFamily: 'var(--font-geist-mono)',
                          fontSize: '0.8rem',
                          color: 'var(--accent)',
                        }}
                      >
                        {w.address}
                      </span>
                    </td>
                    <td>
                      <span style={{ fontWeight: 600, color: 'var(--foreground)' }}>
                        {w.label}
                      </span>
                    </td>
                    <td>
                      <span className={networkBadgeClass(w.network)}>{w.network}</span>
                    </td>
                    <td>
                      <ScoreBar score={w.farmingScore} />
                    </td>
                    <td style={{ color: 'var(--foreground)', fontWeight: 500 }}>
                      {w.txCount}
                    </td>
                    <td style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
                      {w.lastActive}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showModal && <AddWalletModal onClose={() => setShowModal(false)} />}
    </>
  );
}
