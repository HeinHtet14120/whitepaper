'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"

const Sidebar = () => {
  const router = useRouter()
  const handleClick = () => {
            router.push("/")
  }
  return (
    <nav className="w-64 bg-gray-900 h-full text-white p-4">
      <div className="mb-8" onClick={handleClick}>
        <h1 className="text-xl font-bold cursor-pointer bg-gradient-to-tr from-red-500 to-red-800 text-transparent bg-clip-text">Junior Mafia docs</h1>
      </div>
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Coming Soon</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/swap" className="block font-normal py-1 px-2 hover:bg-gray-800 rounded">
              Token Swap
            </Link>
          </li>
          <li>
            <Link href="/endpoints" className="block font-normal py-1 px-2 hover:bg-gray-800 rounded">
              API Endpoints
            </Link>
          </li>
          <li>
            <Link href="/faq" className="block font-normal py-1 px-2 hover:bg-gray-800 rounded">
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar

