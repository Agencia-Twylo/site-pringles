type IconProps = { className?: string };

export function SearchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" className={className} aria-hidden>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </svg>
  );
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <circle cx="12" cy="7.5" r="4.5" />
      <path d="M3.5 21c0-4.7 3.8-8 8.5-8s8.5 3.3 8.5 8z" />
    </svg>
  );
}

export function PortugalFlag({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <clipPath id="pt-flag">
        <circle cx="12" cy="12" r="12" />
      </clipPath>
      <g clipPath="url(#pt-flag)">
        <rect width="24" height="24" fill="#e3141c" />
        <rect width="9.6" height="24" fill="#046a38" />
        <circle cx="9.6" cy="12" r="4.4" fill="#ffd200" />
        <path d="M7.4 9.4h4.4v3.6a2.2 2.2 0 0 1-4.4 0z" fill="#e3141c" stroke="#fff" strokeWidth=".6" />
      </g>
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowDownIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M12 4v16M6 14l6 6 6-6" />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.4-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" className={className} aria-hidden>
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <path d="M10.5 5h3" />
      <circle cx="12" cy="18.5" r=".6" fill="currentColor" />
    </svg>
  );
}

export function CrownIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 32" fill="none" stroke="currentColor" strokeWidth={3} strokeLinejoin="round" className={className} aria-hidden>
      <path d="M4 8l9 9 11-14 11 14 9-9-4 21H8z" />
    </svg>
  );
}

export function SunIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" className={className} aria-hidden>
      <circle cx="24" cy="24" r="8" />
      <circle cx="24" cy="24" r="4.5" />
      <path d="M24 3v7M24 38v7M3 24h7M38 24h7M9.2 9.2l5 5M33.8 33.8l5 5M38.8 9.2l-5 5M14.2 33.8l-5 5" />
    </svg>
  );
}

export function FlameIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 30" fill="currentColor" className={className} aria-hidden>
      <path d="M12.6 1c.6 4.2-1.3 6.4-3.4 8.8C7 12.3 4 15.1 4 19.6 4 25 7.8 29 12.4 29c4.9 0 8.6-3.8 8.6-9.1 0-3.4-1.6-6-3-7.6.1 2.3-.7 4.1-2.2 5 .4-5.6-.9-11.2-3.2-16.3m-.2 16.6c.6 2.6 3.2 3.9 3.2 6.6 0 2.1-1.5 3.6-3.3 3.6-2 0-3.5-1.6-3.5-3.7 0-2.6 2.6-4.2 3.6-6.5" />
    </svg>
  );
}

export function ChiliIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 24" fill="currentColor" className={className} aria-hidden>
      <path d="M14.2 1.2c.5-.4 1.2-.3 1.5.2.3.4.2 1-.2 1.3-.8.6-1.2 1.4-1.3 2.3 1.4.5 2.4 1.9 2.2 3.5-.6 6.4-5.6 12.6-12.4 14.4-1.2.3-2-1.1-1.1-1.9 3.6-3.2 5.9-7.6 6.4-12.4.2-1.8 1.7-3.1 3.5-3.2.1-1.6.9-3.1 2.4-4.2" />
    </svg>
  );
}

export function ChevronUpIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="m6 15 6-6 6 6" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M5 19C4 11 9 5 19 4c1 9-4 15-12 15z" />
      <path d="M5 19c3-5 6-8 10-11" />
    </svg>
  );
}

export function SmileIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14.5c2.2 2.4 5.8 2.4 8 0" />
      <path d="M9 9.5h.01M15 9.5h.01" strokeWidth={2.6} />
    </svg>
  );
}

export function ChipIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M3.5 14C5 8 11 4.5 17 5.5c3 .5 4 2.5 3 5-2 5-9 8.5-14 7.5-2-.4-3-2-2.5-4z" />
      <path d="M7 14c3-1 7-3.5 9.5-6.5M9 16.5c3-1 6-3 8-5" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round" className={className} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M16.6 3c.3 2.3 1.7 3.9 4 4.1v3.1c-1.5.1-2.8-.4-4-1.2v6.1c0 3.6-2.7 5.9-5.8 5.9-3.3 0-5.8-2.6-5.8-5.8 0-3.6 3.2-6.2 6.9-5.6v3.3c-1.7-.4-3.5.6-3.5 2.4 0 1.4 1.1 2.5 2.4 2.5 1.6 0 2.5-1 2.5-2.8V3z" />
    </svg>
  );
}

export function YouTubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22 8.2c-.2-1.6-1-2.7-2.6-2.9C16.9 5 12 5 12 5s-4.9 0-7.4.3C3 5.5 2.2 6.6 2 8.2 1.8 9.6 1.8 12 1.8 12s0 2.4.2 3.8c.2 1.6 1 2.7 2.6 2.9C7.1 19 12 19 12 19s4.9 0 7.4-.3c1.6-.2 2.4-1.3 2.6-2.9.2-1.4.2-3.8.2-3.8s0-2.4-.2-3.8M10 15V9l5.2 3z" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 21v-7.5H16l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21z" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" className={className} aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" className={className} aria-hidden>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
