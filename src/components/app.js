// pages/_app.js
import '../styles/globals.css';  // اپنی گلوبل اسٹائلز کو امپورٹ کریں
import '../fontawesome';          // یہاں فونٹ آئیکن لائبریری کو امپورٹ کریں

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
