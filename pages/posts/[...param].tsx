import * as React from 'react';
import { useRouter } from 'next/router';
export interface ParamPageProps {
}

export default function ParamPage (props: ParamPageProps) {
    const router = useRouter();
  return (
    <div>
      <h1>param page</h1>
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}
