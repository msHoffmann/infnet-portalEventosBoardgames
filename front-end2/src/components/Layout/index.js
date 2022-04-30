import { Header } from "./Header";
import Footer from "./Footer";

export function Layout({ children, className }) {
  return (
    <>
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </>
  );
}
