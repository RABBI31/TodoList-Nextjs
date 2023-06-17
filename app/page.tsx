import dynamic from 'next/dynamic'

export default function Home() {
  const DynamicApp = dynamic(() => import('./pages/Homepage'), { ssr: false })
  return (
    <main className="">
        <DynamicApp />
    </main>
  )
}
