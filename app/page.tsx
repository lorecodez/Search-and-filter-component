'use server'
import { lazy, Suspense } from "react";

const List = lazy(() => import('@/app/components/List').then( module => {
    return {default: module.default}
  })
);

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<p>Loading...</p>}>
        <List data={[]}/>
      </Suspense>
    </main>
  );
}
