import { useState } from "react";
import { Loader2, Sparkles } from "lucide-react";

export default function PromptForm({ onGenerate }) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      onGenerate(prompt.trim());
    } finally {
      setLoading(false);
    }
  };

  const examplePrompts = [
    "A modern startup landing page for a fintech app",
    "A cozy cafe website with menu and location",
    "A portfolio hero for a product designer",
  ];

  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <form onSubmit={handleSubmit} className="bg-white/70 backdrop-blur rounded-2xl border border-black/5 p-4 sm:p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <label htmlFor="prompt" className="sr-only">Describe the website</label>
              <textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the website you want to generate..."
                rows={3}
                className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/50"
              />
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
                {examplePrompts.map((ex) => (
                  <button
                    type="button"
                    key={ex}
                    onClick={() => setPrompt(ex)}
                    className="rounded-full border border-slate-200 px-3 py-1 hover:bg-slate-50 transition"
                  >
                    {ex}
                  </button>
                ))}
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-indigo-600 text-white px-4 py-3 font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Generating
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" />
                  Generate
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
