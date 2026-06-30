import { useState, type ReactNode } from "react";

const PASSWORD = "K0s!r3s34rch#2026";

export function PasswordGate({ children }: { children: ReactNode }) {
  const [authenticated, setAuthenticated] = useState(
    () => sessionStorage.getItem("kos-auth") === "true"
  );
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem("kos-auth", "true");
      setAuthenticated(true);
    } else {
      setError(true);
      setInput("");
    }
  };

  if (authenticated) return <>{children}</>;

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4">
        <h1 className="text-xl font-bold text-text text-center">KOS Research</h1>
        <p className="text-sm text-text-muted text-center">Enter password to continue</p>
        <input
          type="password"
          value={input}
          onChange={(e) => { setInput(e.target.value); setError(false); }}
          placeholder="Password"
          autoFocus
          className="w-full px-3 py-2 rounded-lg border border-border bg-surface text-text text-sm
            focus:outline-none focus:border-accent placeholder:text-text-muted"
        />
        {error && <p className="text-xs text-danger text-center">Wrong password</p>}
        <button
          type="submit"
          className="w-full px-3 py-2 rounded-lg bg-accent text-white text-sm font-medium
            hover:bg-accent-hover transition-colors"
        >
          Enter
        </button>
      </form>
    </div>
  );
}
