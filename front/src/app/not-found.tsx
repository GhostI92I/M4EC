import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-gray-50">
      <h2 className="text-6xl font-bold text-gray-800 mb-4">404</h2>
      <p className="text-xl text-gray-600 mb-8">Page not found</p>

      <Link
        href="/"
        className="btn btn-primary text-blue-800 font-medium"
      >
        Return to Home
      </Link>
    </div>
  )
}
