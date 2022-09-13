import "../styles/globals.css";

const None = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || None;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
