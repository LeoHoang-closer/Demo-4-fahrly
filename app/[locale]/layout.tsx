import { lpRegistry } from "@/lp-system/config/lp-config";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
