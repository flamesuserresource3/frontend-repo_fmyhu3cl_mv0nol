import { motion, AnimatePresence } from "framer-motion";

export default function Preview({ sections }) {
  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-black/5 bg-white/70 backdrop-blur p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Live Preview</h2>
          <p className="text-sm text-slate-600 mb-6">This is a static preview generated from your prompt. It updates instantly.</p>
          <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-50">
            <div className="h-10 border-b border-slate-200 flex items-center gap-1 px-3 bg-slate-50">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            </div>
            <div className="p-8">
              <AnimatePresence mode="popLayout">
                {sections.map((section, idx) => (
                  <motion.div
                    key={idx}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="mb-10 last:mb-0"
                  >
                    <h3 className="text-2xl font-semibold text-slate-900 mb-2">{section.title}</h3>
                    <p className="text-slate-600 mb-4">{section.subtitle}</p>
                    {section.cta && (
                      <button className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-white shadow hover:bg-indigo-700">
                        {section.cta}
                      </button>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
