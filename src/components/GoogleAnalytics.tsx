"use client"

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!gaId) return;

    const w = window as unknown as {
      dataLayer?: any[];
      gtag?: (...args: any[]) => void;
    };

    w.dataLayer = w.dataLayer || [];
    w.gtag =
      w.gtag ||
      function gtag(...args: any[]) {
        w.dataLayer!.push(args);
      };

    const pagePath = `${pathname}${window.location.search || ""}`;
    w.gtag("config", gaId, { page_path: pagePath });
  }, [gaId, pathname]);

  return null;
}
