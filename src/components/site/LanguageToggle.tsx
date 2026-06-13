import { useI18n } from "@/lib/i18n";
import { Languages } from "lucide-react";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useI18n();
  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-border bg-card/60 p-1 text-xs font-semibold backdrop-blur ${className}`}
      role="group"
      aria-label="Language"
    >
      <Languages className="ml-2 h-3.5 w-3.5 text-muted-foreground" aria-hidden />
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-3 py-1 transition ${
          lang === "en" ? "bg-primary text-primary-foreground shadow-soft" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("ta")}
        aria-pressed={lang === "ta"}
        className={`rounded-full px-3 py-1 transition ${
          lang === "ta" ? "bg-primary text-primary-foreground shadow-soft" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        தமிழ்
      </button>
    </div>
  );
}
