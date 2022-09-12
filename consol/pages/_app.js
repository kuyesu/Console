import "../styles/App.css";
import "../styles/index.css";
import "../styles/css/article.css";
import "../styles/css/brand.css";
import "../styles/css/cta.css";
import "../styles/css/feature.css";
import "../styles/css/navbar.css";
import "../styles/css/blog.css";
import "../styles/css/features.css";
import "../styles/css/footer.css";
import "../styles/css/header.css";
import "../styles/css/possibility.css";
import "../styles/css/whatGPT3.css";
import "../styles/pages/login.css";
// import type { AppProps } from 'next/app'
import { NextUIProvider } from "@nextui-org/react";
function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
