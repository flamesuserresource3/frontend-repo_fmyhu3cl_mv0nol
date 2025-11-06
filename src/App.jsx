import { useMemo, useState } from "react";
import Header from "./components/Header";
import PromptForm from "./components/PromptForm";
import Preview from "./components/Preview";
import Footer from "./components/Footer";

function deriveSectionsFromPrompt(prompt) {
  const p = prompt.toLowerCase();
  const sections = [];

  // Simple heuristic-based section generation
  if (p.includes("portfolio") || p.includes("designer") || p.includes("developer")) {
    sections.push(
      {
        title: "Hero — Showcase Your Work",
        subtitle: "Clean, bold intro with a strong headline and a short value proposition.",
        cta: "View Projects",
      },
      {
        title: "Selected Projects",
        subtitle: "Grid of case studies with outcomes and impact.",
        cta: "See Case Studies",
      },
      {
        title: "About & Skills",
        subtitle: "Personal bio with expertise and tools you use.",
        cta: "Download Resume",
      }
    );
  }

  if (p.includes("startup") || p.includes("saas") || p.includes("app") || sections.length === 0) {
    sections.push(
      {
        title: "Hero — Launch Faster",
        subtitle: "Punchy headline with social proof and a primary action.",
        cta: "Get Started",
      },
      {
        title: "Features",
        subtitle: "Three to five benefits-focused highlights that explain the value.",
        cta: "Explore Features",
      },
      {
        title: "Pricing",
        subtitle: "Simple, transparent plans with a clear recommended option.",
        cta: "Choose Plan",
      }
    );
  }

  if (p.includes("cafe") || p.includes("restaurant") || p.includes("menu")) {
    sections.splice(0, sections.length, // replace with cafe layout
      {
        title: "Welcome to Our Cafe",
        subtitle: "Warm, cozy atmosphere with specialty coffee and fresh bakes.",
        cta: "View Menu",
      },
      {
        title: "Today's Specials",
        subtitle: "Chef-curated dishes made with seasonal ingredients.",
        cta: "Order Now",
      },
      {
        title: "Find Us",
        subtitle: "Location, hours, and contact info for easy visits.",
        cta: "Get Directions",
      }
    );
  }

  return sections;
}

export default function App() {
  const [prompt, setPrompt] = useState("");
  const sections = useMemo(() => deriveSectionsFromPrompt(prompt), [prompt]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-rose-50 text-slate-900">
      <Header />
      <main>
        <section className="pt-10 pb-2">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Create a website from a simple prompt</h2>
            <p className="mt-3 text-slate-600">
              Describe the style and purpose of your site. We'll generate a structured preview instantly.
            </p>
          </div>
        </section>

        <PromptForm onGenerate={setPrompt} />
        <Preview sections={sections} />
      </main>
      <Footer />
    </div>
  );
}
