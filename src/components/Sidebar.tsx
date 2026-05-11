'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  LayoutDashboard,
  Wallet,
  ListChecks,
  Zap,
  Menu,
  X,
} from 'lucide-react';

const navItems = [
  { href: '/',         label: 'Dashboard', icon: LayoutDashboard },
  { href: '/wallets',  label: 'Wallets',   icon: Wallet },
  { href: '/tasks',    label: 'Tasks',     icon: ListChecks },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile hamburger */}
      <button
        id="sidebar-toggle"
        className="md:hidden fixed top-4 left-4 z-50 btn btn-ghost p-2"
        onClick={() => setOpen(!open)}
        aria-label="Toggle sidebar"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black/50"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`sidebar${open ? ' open' : ''}`}>
        {/* Logo */}
        <div className="sidebar-logo">
          <div className="flex items-center gap-2.5">
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Zap size={17} color="#fff" fill="#fff" />
            </div>
            <div>
              <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--foreground)', lineHeight: 1 }}>
                NodeFarm
              </p>
              <p style={{ fontSize: '0.65rem', color: 'var(--muted)', marginTop: 2 }}>
                Airdrop Tracker
              </p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="sidebar-nav">
          <p
            style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              padding: '0.25rem 0.875rem',
              marginBottom: '0.25rem',
            }}
          >
            Menu
          </p>
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`nav-item${isActive ? ' active' : ''}`}
                onClick={() => setOpen(false)}
                id={`nav-${label.toLowerCase()}`}
              >
                <Icon size={17} />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="sidebar-footer">
          <div
            style={{
              background: 'rgba(59,130,246,0.08)',
              border: '1px solid rgba(59,130,246,0.2)',
              borderRadius: 8,
              padding: '0.75rem',
            }}
          >
            <p style={{ fontSize: '0.7rem', color: 'var(--accent)', fontWeight: 600, marginBottom: 2 }}>
              Beta v0.1
            </p>
            <p style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>
              Demo data only. No real transactions.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
