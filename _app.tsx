import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { MediaContextProvider } from "utils/media";
import { Noto_Sans, Playfair_Display } from "next/font/google";


const notoSans = Noto_Sans({
  variable: "--ff-sans",
  subsets: ["latin-ext"],
  weight: ["400", "700", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--ff-serif",
  subsets: ["latin-ext"],
  weight: ["400", "700"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --ff-sans: ${notoSans.style.fontFamily};
          --ff-serif: ${playfairDisplay.style.fontFamily};
        }
      `}</style>

   <MediaContextProvider disableDynamicMediaQueries>
  <Component {...pageProps} />
</MediaContextProvider>
    </>
  );
}

export default MyApp;
