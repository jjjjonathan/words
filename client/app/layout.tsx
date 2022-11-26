import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <html>
    <head />
    <body>{children}</body>
  </html>
);

export default Layout;
