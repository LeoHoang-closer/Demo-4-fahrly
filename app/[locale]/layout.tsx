import { lpRegistry } from "@/lp-system/config/lp-config";

export function generateStaticParams() {
  const locales = [...new Set(lpRegistry.map((lp) => lp.locale))];
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
