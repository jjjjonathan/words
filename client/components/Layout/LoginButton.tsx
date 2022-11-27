import React from "react";
import Link from "next/link";

const LoginButton = () => (
  <Link href="/login" passHref>
    login
  </Link>
);

export default LoginButton;
