'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface AddWalletModalProps {
  onClose: () => void;
}

const networks = ['Ethereum', 'Arbitrum', 'Linea', 'Optimism', 'Base'];

export default function AddWalletModal({ onClose }: AddWalletModalProps) {
  const [address, setAddress]   = useState('');
  const [label, setLabel]       = useState('');
  const [network, setNetwork]   = useState('Ethereum');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Demo only — no actual save
    setSubmitted(true);
    setTimeout(onClose, 1500);
  }

  return (
    <div className="modal-overlay" id="add-wallet-modal" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.5rem',
          }}
        >
          <div>
            <h2
              style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--foreground)' }}
            >
              Add Wallet
            </h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: 2 }}>
              Track a new wallet address
            </p>
          </div>
          <button
            className="btn btn-ghost"
            style={{ padding: '6px 8px' }}
            onClick={onClose}
            id="close-modal-btn"
            aria-label="Close modal"
          >
            <X size={16} />
          </button>
        </div>

        {submitted ? (
          <div
            style={{
              textAlign: 'center',
              padding: '2rem',
              color: 'var(--success)',
            }}
          >
            <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>✓</p>
            <p style={{ fontWeight: 600 }}>Wallet added! (demo only)</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label className="form-label" htmlFor="wallet-address">
                Wallet Address
              </label>
              <input
                id="wallet-address"
                className="form-input"
                type="text"
                placeholder="0x..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="form-label" htmlFor="wallet-label">
                Label
              </label>
              <input
                id="wallet-label"
                className="form-input"
                type="text"
                placeholder="e.g. Main Wallet, Burner"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="form-label" htmlFor="wallet-network">
                Network
              </label>
              <select
                id="wallet-network"
                className="form-input"
                style={{ cursor: 'pointer' }}
                value={network}
                onChange={(e) => setNetwork(e.target.value)}
              >
                {networks.map((n) => (
                  <option key={n} value={n} style={{ background: 'var(--surface)' }}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              <button
                type="button"
                className="btn btn-ghost"
                style={{ flex: 1, justifyContent: 'center' }}
                onClick={onClose}
                id="cancel-wallet-btn"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ flex: 1, justifyContent: 'center' }}
                id="submit-wallet-btn"
              >
                Add Wallet
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
