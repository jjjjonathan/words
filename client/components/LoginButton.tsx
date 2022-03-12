import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Login = styled.a`
  padding: 10px;
`;

const LoginButton = () => (
  <Link href="/login" passHref>
    <Login>login</Login>
  </Link>
);

export default LoginButton;
