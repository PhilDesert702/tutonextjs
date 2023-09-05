"use client"  // "use client" sert a mettre en "mode client"
import Link from "next/link" // cela permet de creer des liens en Next.js

export default function Home() {
  return (
    <main>
      <Link href="/">Home</Link>
      <Link href="/cv">CV</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/jeu">Jeu</Link>
    </main>
  )
}

// M: mode server
// U: mode user
