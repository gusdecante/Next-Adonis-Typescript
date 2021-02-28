import { AuthProvider, useAuth } from "../contexts/auth";
import "../styles/theme.scss";

import { NextPage } from "next";
import { useEffect } from "react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";

type CustomPage = NextPage & {
  requiresAuth?: boolean;
  redirectUnauthenticatedTo?: string;
};
interface CustomAppProps extends Omit<AppProps, "Component"> {
  Component: CustomPage;
}

function MyApp({ Component, pageProps }: CustomAppProps) {
  const { isAuthenticated, isLoading, token, logout } = useAuth();

  useEffect(() => {
    if (!isAuthenticated && !isLoading && token) {
      // Invalid token
      logout(Component.redirectUnauthenticatedTo);
    }
  }, [isLoading, isAuthenticated]);

  return (
    <>
      {Component.requiresAuth && (
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `if(!document.cookie || document.cookie.indexOf('token') === -1)
            {location.replace(
              "/login?next=" +
                encodeURIComponent(location.pathname + location.search)
            )}
            else {document.documentElement.classList.add("render")}`,
            }}
          />
        </Head>
      )}
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
