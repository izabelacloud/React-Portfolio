import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function getOffsetMinutes(timeZone, date) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    timeZoneName: 'longOffset',
  }).formatToParts(date);
  const offset = parts.find((p) => p.type === 'timeZoneName')?.value ?? 'GMT+00:00';
  const match = offset.match(/GMT([+-])(\d{2}):(\d{2})/);
  if (!match) return 0;
  const [, sign, hours, minutes] = match;
  return (sign === '-' ? -1 : 1) * (Number(hours) * 60 + Number(minutes));
}

function formatDiff(diffMinutes) {
  const abs = Math.abs(diffMinutes);
  const hours = Math.floor(abs / 60);
  const minutes = abs % 60;
  if (hours === 0 && minutes === 0) return null;
  return minutes === 0 ? `${hours}h` : `${hours}h ${minutes}m`;
}

export default function DestinationClock({ timezone }) {
  const { t, i18n } = useTranslation();
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!timezone) return null;

  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timeLabel = new Intl.DateTimeFormat(i18n.language, {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(now);

  const diffMinutes = getOffsetMinutes(timezone, now) - getOffsetMinutes(userTimezone, now);
  const diffLabel = formatDiff(diffMinutes);

  const comparisonText = !diffLabel
    ? t('localTime.same')
    : diffMinutes > 0
      ? t('localTime.ahead', { diff: diffLabel })
      : t('localTime.behind', { diff: diffLabel });

  return (
    <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-stone/40 bg-white/40 px-4 py-2 text-sm dark:border-charcoal dark:bg-white/5">
      <span className="font-semibold text-ink dark:text-warm">{t('localTime.label')}:</span>
      <span className="font-mono tabular-nums">{timeLabel}</span>
      <span className="text-muted">·</span>
      <span className="text-muted">{comparisonText}</span>
    </div>
  );
}
