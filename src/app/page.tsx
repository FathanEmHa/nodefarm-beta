import { Wallet2, ArrowLeftRight, Zap, ListChecks } from 'lucide-react';
import StatCard from '@/components/StatCard';
import ActivityTable from '@/components/ActivityTable';
import { summaryStats, recentActivity } from '@/lib/mock-data';

export const metadata = {
  title: 'Dashboard — NodeFarm',
  description: 'Overview of your airdrop farming wallets, transactions, and active tasks.',
};

export default function DashboardPage() {
  return (
    <>
      <div className="page-header">
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--foreground)',
                margin: 0,
              }}
            >
              Dashboard
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '0.875rem', marginTop: 4 }}>
              Overview of your airdrop farming activity
            </p>
          </div>

          {/* Live badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              background: 'rgba(16,185,129,0.1)',
              border: '1px solid rgba(16,185,129,0.3)',
              borderRadius: 8,
              padding: '0.375rem 0.75rem',
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#10b981',
                display: 'inline-block',
                boxShadow: '0 0 8px #10b981',
              }}
            />
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#10b981' }}>
              Live — Demo
            </span>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* Stat Cards */}
        <div
          id="stat-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          <StatCard
            id="stat-total-wallets"
            title="Total Wallets"
            value={summaryStats.totalWallets}
            subtitle="Tracked addresses"
            icon={<Wallet2 size={20} />}
            accentColor="#3b82f6"
          />
          <StatCard
            id="stat-total-txs"
            title="Total Transactions"
            value={summaryStats.totalTransactions}
            subtitle="Across all wallets"
            icon={<ArrowLeftRight size={20} />}
            accentColor="#8b5cf6"
          />
          <StatCard
            id="stat-farming-score"
            title="Farming Score"
            value={summaryStats.farmingScore}
            subtitle="Average across wallets"
            icon={<Zap size={20} />}
            accentColor="#f59e0b"
          />
          <StatCard
            id="stat-active-tasks"
            title="Active Tasks"
            value={summaryStats.activeTasks}
            subtitle="In progress"
            icon={<ListChecks size={20} />}
            accentColor="#10b981"
          />
        </div>

        {/* Recent Activity */}
        <div className="card" style={{ padding: 0 }}>
          <div
            style={{
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <h2 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--foreground)', margin: 0 }}>
                Recent Activity
              </h2>
              <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: 2 }}>
                Latest on-chain transactions across all wallets
              </p>
            </div>
            <span
              style={{
                fontSize: '0.7rem',
                color: 'var(--muted)',
                background: 'var(--surface-elevated)',
                border: '1px solid var(--border)',
                borderRadius: 6,
                padding: '2px 8px',
              }}
            >
              {recentActivity.length} records
            </span>
          </div>
          <ActivityTable activities={recentActivity} />
        </div>
      </div>
    </>
  );
}