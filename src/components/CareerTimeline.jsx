import { useMemo } from 'react';

const MONTHS = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };

function parseMonthYear(str) {
  const [mon, year] = str.trim().split(' ');
  return { month: MONTHS[mon] ?? 0, year: parseInt(year, 10) };
}

export default function CareerTimeline({ items }) {
  const segments = useMemo(() => {
    const now = new Date();
    const parsed = items.map((item) => {
      const [startStr, endStr] = item.period.split(' - ');
      const start = parseMonthYear(startStr);
      const isCurrent = endStr.trim() === 'Present';
      const end = isCurrent ? { month: now.getMonth(), year: now.getFullYear() } : parseMonthYear(endStr);
      const months = Math.max((end.year - start.year) * 12 + (end.month - start.month) + 1, 1);
      return { ...item, start, end, isCurrent, months };
    });
    return [...parsed].reverse();
  }, [items]);

  const totalMonths = segments.reduce((sum, seg) => sum + seg.months, 0);

  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex min-w-[640px] gap-1">
        {segments.map((seg) => (
          <div
            key={`${seg.company}-${seg.period}`}
            className="flex flex-col gap-2"
            style={{ flexBasis: `${(seg.months / totalMonths) * 100}%`, flexGrow: 1, minWidth: '80px' }}
          >
            <div className={`h-2 rounded-full ${seg.isCurrent ? 'bg-accent' : 'bg-stone/60 dark:bg-charcoal'}`} />
            <div className="text-xs">
              <p className="font-semibold text-ink dark:text-warm">
                {seg.start.year}
                {seg.isCurrent ? ' - Now' : seg.end.year !== seg.start.year ? ` - ${seg.end.year}` : ''}
              </p>
              <p className="mt-0.5 truncate text-muted dark:text-stone" title={seg.company}>
                {seg.company.replace(/,.*$/, '')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
