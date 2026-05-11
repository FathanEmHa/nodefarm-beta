import { Activity } from '@/lib/mock-data';

function actionBadgeClass(action: Activity['action']) {
  const map: Record<Activity['action'], string> = {
    SWAP:   'badge badge-swap',
    BRIDGE: 'badge badge-bridge',
    MINT:   'badge badge-mint',
    STAKE:  'badge badge-stake',
  };
  return map[action];
}

function networkBadgeClass(network: string) {
  if (network === 'Ethereum') return 'badge badge-eth';
  if (network === 'Arbitrum') return 'badge badge-arb';
  return 'badge badge-linea';
}

export default function ActivityTable({ activities }: { activities: Activity[] }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table className="data-table" id="activity-table">
        <thead>
          <tr>
            <th>Wallet</th>
            <th>Network</th>
            <th>Action</th>
            <th>Protocol</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((a) => (
            <tr key={a.id} id={`activity-row-${a.id}`}>
              <td>
                <span
                  style={{
                    fontFamily: 'var(--font-geist-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--foreground)',
                  }}
                >
                  {a.wallet}
                </span>
              </td>
              <td>
                <span className={networkBadgeClass(a.network)}>{a.network}</span>
              </td>
              <td>
                <span className={actionBadgeClass(a.action)}>{a.action}</span>
              </td>
              <td style={{ color: 'var(--foreground)', fontWeight: 500 }}>
                {a.protocol}
              </td>
              <td style={{ color: 'var(--foreground)', fontWeight: 500 }}>
                {a.amount}
              </td>
              <td style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{a.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
