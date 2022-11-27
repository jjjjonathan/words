import React from "react";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  const pageTitle = title ? `words | ${title}` : "words";

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {children}
    </div>
  );
};

export default Layout;
