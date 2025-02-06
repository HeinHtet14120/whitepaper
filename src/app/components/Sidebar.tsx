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
        <h1 className="text-xl font-bold cursor-pointer bg-gradient-to-tr from-red-500 to-red-800 text-transparent bg-clip-text">Prime AI docs</h1>
      </div>
      <section className="mb-6">
        <h2 className="text-md font-bold mb-3 text-gray-200 flex items-center">
          Documentation
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/"
              className="block font-medium text-sm py-2 px-3 rounded-md transition-colors duration-200 text-gray-500 hover:text-white"
            >
              Getting Started
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-md font-bold mb-3 text-gray-200 flex items-center">
          Coming Soon
        </h2>
        <ul className="space-y-2">
          {[
            { href: "/swap", label: "Token Swap", },
            { href: "/endpoints", label: "API Endpoints",  },
            { href: "/faq", label: "FAQ",  },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block text-sm font-medium py-2 px-3 rounded-md transition-colors duration-200 text-gray-500 hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  )
}

export default Sidebar

