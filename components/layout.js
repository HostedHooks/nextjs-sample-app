import Header from './header';
import Footer from './footer';
import Meta from './meta';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen antialiased flex flex-col">
        <Header />
        <div className="flex-1 sm:bg-gray-50">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
