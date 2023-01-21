import NavBar from "./components/navbar";
import Footer from "./components/footer";
import './globals.css';

import { AnalyticsWrapper } from './components/analytics';
import JSFailWarning from "./components/jsFailWarning";
import Script from "next/script";

export default async function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>SPAICS 22-23</title>
        <Script id="warning-remover">
          {`
            if (document.getElementById('warning')) {
                document.getElementById('warning').remove();
            }
          `}
        </Script>
      </head>
      <body>
        <NavBar/>
        {children}
        <Footer/>
        <AnalyticsWrapper/>
        <JSFailWarning/>
      </body>
    </html>
  );
}