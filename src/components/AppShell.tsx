import type { ReactNode } from 'react';

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden text-[color:var(--color-sumi)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,166,70,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(36,59,83,0.06),transparent_24%)]"
      />
      <div className="relative mx-auto flex min-h-[100dvh] w-full max-w-[820px] flex-col px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(0.85rem,env(safe-area-inset-top))] sm:px-5">
        {children}
      </div>
    </div>
  );
}
