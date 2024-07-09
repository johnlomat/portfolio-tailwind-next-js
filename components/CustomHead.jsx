import Head from "next/head";
import PropTypes from "prop-types";

const CustomHead = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta
        name="google-site-verification"
        content="O9Fqju7f6cW3gK_PGBAX3w5xL0rvMKqtuwFLeQoPIxY"
      />

      {/* Facebook meta tags */}
      <meta property="og:url" content="https://johnlomat.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="John Lomat | WordPress & WooCommerce Expert"
      />
      <meta
        property="og:description"
        content="Expert WordPress developer specializing in custom websites, WooCommerce, Elementor, Divi, ACF, and SEO optimization. Proven track record with 26 websites delivered."
      />
      <meta
        property="og:image"
        content="https://drive.google.com/uc?id=1iyJSLVN5ti5oQofPWKsbWMRfWrJOpXSO"
      />

      {/* Twitter meta tags */}
      <meta property="twitter:url" content="https://johnlomat.vercel.app/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="John Lomat | WordPress & WooCommerce Expert"
      />
      <meta
        name="twitter:description"
        content="Expert WordPress developer specializing in custom websites, WooCommerce, Elementor, Divi, ACF, and SEO optimization. Proven track record with 26 websites delivered."
      />
      <meta
        name="twitter:image"
        content="https://drive.google.com/uc?id=1iyJSLVN5ti5oQofPWKsbWMRfWrJOpXSO"
      />

      {/* Favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon-16x16.png"
      />
      <link rel="manifest" href="/images/site.webmanifest" />
    </Head>
  );
};

CustomHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
};

export default CustomHead;
