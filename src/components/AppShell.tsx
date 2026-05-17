import type { ReactNode } from 'react';

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-[100dvh] bg-[radial-gradient(circle_at_top,rgba(201,166,70,0.08),transparent_35%),linear-gradient(180deg,var(--color-washi),var(--color-paper))] text-[color:var(--color-sumi)]">
      <div className="mx-auto flex min-h-[100dvh] w-full max-w-[760px] flex-col px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-5">
        {children}
      </div>
    </div>
  );
}
