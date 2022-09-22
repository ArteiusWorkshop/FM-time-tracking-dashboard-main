import Head from "next/head";
import React, { FC } from "react";

interface Props {
  title?: string;
  pageDescription?: string;
  children?: React.ReactNode;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const DesktopLayout: FC<Props> = ({
  title = "Frontend Mentor - Expenses chart component solution",
  pageDescription = "Solution",
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        <meta
          property="og:image"
          content={`${origin}/img/desktop-preview.jpg`}
        />
      </Head>

      <main className="data-grid">{children}</main>
    </>
  );
};
