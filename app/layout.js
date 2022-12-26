import NavBar from "./components/navbar";
import './globals.css';

export default async function RootLayout({ children }) {
  return (
    <html>
      {/* <head></head> */}
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}