import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <section className="container mx-auto text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Boost Your Productivity with WorkZenith</h1>
        <p className="text-xl mb-8">
          The ultimate productivity tool for anyone looking to enhance their work efficiency.
        </p>
      </section>
      <section className="container mx-auto text-center py-16">
        {/* <h2 className="text-3xl font-bold mb-8">How It Works</h2> */}
        {/* Step-by-step guide with illustrations */}
        <Link href="/dashboard" className="bg-orange-500 text-white py-2 px-6 rounded-full text-lg hover:text-black">Get Started</Link>
      </section>
    </div>
  )
}
