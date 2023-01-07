import NavBar from "./components/navbar";
import Footer from "./components/footer";
import './globals.css';

import { AnalyticsWrapper } from './components/analytics';

export default async function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>SPAICS 22-23</title>
      </head>
      <body>
        <NavBar/>
        {children}
        <Footer/>
        <AnalyticsWrapper/>
      </body>
    </html>
  );
}