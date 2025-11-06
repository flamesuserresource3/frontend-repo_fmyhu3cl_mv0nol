import { Rocket, Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-sm">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-sm leading-tight text-slate-600">AI Website Builder</p>
            <h1 className="text-lg font-semibold tracking-tight text-slate-900">Prompt to Page</h1>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-sm text-slate-600">
          <Sparkles className="h-4 w-4 text-indigo-500" />
          <span>Type a prompt — see a site preview instantly</span>
        </div>
      </div>
    </header>
  );
}
