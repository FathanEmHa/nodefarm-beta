import { tasks } from '@/lib/mock-data';
import type { Task, TaskStatus } from '@/lib/mock-data';
import { CheckCircle2, Clock, Circle } from 'lucide-react';

export const metadata = {
  title: 'Tasks — NodeFarm',
  description: 'Track your airdrop farming task progress across protocols and networks.',
};

function statusConfig(status: TaskStatus) {
  const map = {
    completed:   { label: 'Completed',   cls: 'badge badge-completed',   icon: CheckCircle2, color: '#10b981' },
    'in-progress': { label: 'In Progress', cls: 'badge badge-in-progress', icon: Clock,         color: '#3b82f6' },
    'not-started': { label: 'Not Started', cls: 'badge badge-not-started', icon: Circle,        color: '#64748b' },
  };
  return map[status];
}

function networkBadgeClass(network: string) {
  if (network === 'Ethereum') return 'badge badge-eth';
  if (network === 'Arbitrum') return 'badge badge-arb';
  return 'badge badge-linea';
}

function ProgressBar({ progress, total, status }: Pick<Task, 'progress' | 'total' | 'status'>) {
  const pct = total === 0 ? 0 : Math.round((progress / total) * 100);
  const color =
    status === 'completed'
      ? '#10b981'
      : status === 'in-progress'
      ? '#3b82f6'
      : '#374151';

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
          {progress}/{total}
        </span>
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color }}>
          {pct}%
        </span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
    </div>
  );
}

function TaskCard({ task }: { task: Task }) {
  const cfg = statusConfig(task.status);
  const Icon = cfg.icon;

  return (
    <div
      className="card"
      id={`task-card-${task.id}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Colored left accent */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 3,
          background: cfg.color,
          borderRadius: '12px 0 0 12px',
        }}
      />

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
        <div style={{ minWidth: 0 }}>
          <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--foreground)', margin: 0 }}>
            {task.title}
          </h3>
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: 3 }}>
            {task.description}
          </p>
        </div>
        <span className={cfg.cls} style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: 4 }}>
          <Icon size={10} />
          {cfg.label}
        </span>
      </div>

      {/* Badges row */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        <span
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid var(--border)',
            borderRadius: 6,
            padding: '2px 8px',
            fontSize: '0.7rem',
            color: 'var(--text-secondary)',
            fontWeight: 500,
          }}
        >
          {task.protocol}
        </span>
        <span className={networkBadgeClass(task.network)}>{task.network}</span>
      </div>

      {/* Progress */}
      <div>
        <p style={{ fontSize: '0.7rem', color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
          {task.progress}/{task.total} {task.unit} completed
        </p>
        <ProgressBar progress={task.progress} total={task.total} status={task.status} />
      </div>
    </div>
  );
}

export default function TasksPage() {
  const completed   = tasks.filter((t) => t.status === 'completed');
  const inProgress  = tasks.filter((t) => t.status === 'in-progress');
  const notStarted  = tasks.filter((t) => t.status === 'not-started');

  const overallPct = Math.round(
    (tasks.reduce((a, t) => a + t.progress, 0) /
      tasks.reduce((a, t) => a + t.total, 0)) *
      100
  );

  return (
    <>
      <div className="page-header">
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--foreground)', margin: 0 }}>
              Tasks
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '0.875rem', marginTop: 4 }}>
              Protocol interaction tasks for airdrop eligibility
            </p>
          </div>
          {/* Overall progress pill */}
          <div
            style={{
              background: 'var(--surface-elevated)',
              border: '1px solid var(--border)',
              borderRadius: 10,
              padding: '0.75rem 1rem',
              minWidth: 160,
            }}
          >
            <p style={{ fontSize: '0.65rem', color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
              Overall Progress
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div className="progress-bar" style={{ flex: 1 }}>
                <div
                  className="progress-fill"
                  style={{
                    width: `${overallPct}%`,
                    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                  }}
                />
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--foreground)' }}>
                {overallPct}%
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* Summary chips */}
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            marginBottom: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { label: 'In Progress', count: inProgress.length, color: '#3b82f6', bg: 'rgba(59,130,246,0.1)' },
            { label: 'Completed',   count: completed.length,  color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
            { label: 'Not Started', count: notStarted.length, color: '#64748b', bg: 'rgba(100,116,139,0.1)' },
          ].map(({ label, count, color, bg }) => (
            <div
              key={label}
              style={{
                background: bg,
                border: `1px solid ${color}33`,
                borderRadius: 8,
                padding: '0.5rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span style={{ fontSize: '1.1rem', fontWeight: 700, color }}>{count}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Task cards grid */}
        <div
          id="tasks-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1rem',
          }}
        >
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </>
  );
}
