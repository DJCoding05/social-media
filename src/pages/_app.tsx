import { api } from "~/utils/api";
import { ClerkProvider } from '@clerk/nextjs';
import type { AppProps } from 'next/app'
import { ThemeProvider } from "@material-tailwind/react/context/theme";
import { dark } from '@clerk/themes';

import "~/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ClerkProvider {...pageProps} 
        appearance={{
        baseTheme: dark,
        elements: {
          card: 'bg-black',
          rootBox: 'border-2 border-neutral-500 rounded-xl',
          internal: 'hidden',
          socialButtonsBlockButton: 'border-neutral-500'
        }
        }}
      >
        <Component {...pageProps} />
      </ClerkProvider>
    </ThemeProvider>
  );
}

export default api.withTRPC(MyApp);
