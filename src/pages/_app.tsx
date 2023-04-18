import { useRouter } from "next/router";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import type { AppProps } from "next/app";
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
import { api } from "~/utils/api";

import "~/styles/globals.css";
import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";

const publicPages = ["/", "/sign-in/[[...index]]", "/sign-up/[[...index]]"];
const MyApp = ({
  Component,
  pageProps: { ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const layout = getLayout(<Component {...pageProps} />);
  const router = useRouter();
  return (
    <div>
       <ClerkProvider {...pageProps}>
      {publicPages.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <>
          <SignedIn>
            {layout}
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      )}
    </ClerkProvider>
    </div>
  );
};

export default api.withTRPC(MyApp);
