import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <html>
    <script src="https://beamanalytics.b-cdn.net/beam.min.js" data-token="cea78beb-0056-47f4-8382-00f1ed721ce1" async></script>

      <Component {...pageProps} />
      <Analytics />
    </html>
  );
}

export default MyApp;
