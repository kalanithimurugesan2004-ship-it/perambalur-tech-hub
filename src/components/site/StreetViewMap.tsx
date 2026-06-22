import React from 'react';
import { BUSINESS } from '@/lib/business';

/**
 * StreetViewMap – renders an embedded Google Street View iframe using the
 * BUSINESS.mapEmbed URL defined in `src/lib/business.ts`.
 *
 * The component is responsive, fills its container width, and uses a modern
 * glass‑morphism container to match the site’s premium aesthetic.
 */
export const StreetViewMap: React.FC = () => {
  return (
    <section className="my-8 mx-auto max-w-5xl">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-border bg-card/80 backdrop-blur-md">
        <iframe
          src={BUSINESS.mapEmbed}
          title="Street View – SRS Computer & Service"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Gradient overlay for a premium look */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--primary)/0.12), transparent)'
          }}
        />
      </div>
    </section>
  );
};
