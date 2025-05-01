'use client'; // This ensures it's a client component

import '@ant-design/v5-patch-for-react-19';

export default function AntdCompatPatch({ children }) {
  return(
    <>
    {children}
    </>
  )
}

