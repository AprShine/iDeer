import type { DeliveryMode } from '../../../lib/types';
import { DELIVERY_HINTS } from '../../../lib/constants';

interface DeliveryToggleProps {
  mode: DeliveryMode;
  onChange: (mode: DeliveryMode) => void;
}

const MODES: DeliveryMode[] = ['source_emails', 'combined_report', 'both'];
const LABELS: Record<DeliveryMode, string> = {
  source_emails: '逐封',
  combined_report: '合并',
  both: '两者都发',
};

export function DeliveryToggle({ mode, onChange }: DeliveryToggleProps) {
  return (
    <div className="mt-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="glass-panel inline-flex rounded-2xl border border-slate-200/80 p-1 shadow-soft">
        {MODES.map((m) => (
          <button
            key={m}
            type="button"
            className="delivery-toggle rounded-xl px-3 py-2 text-sm font-semibold text-slate-600"
            data-active={mode === m}
            onClick={() => onChange(m)}
          >
            {LABELS[m]}
          </button>
        ))}
      </div>
      <p className="text-sm leading-7 text-slate-500">{DELIVERY_HINTS[mode]}</p>
    </div>
  );
}
