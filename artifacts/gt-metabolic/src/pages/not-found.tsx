import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <p className="mt-2 text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link href="/" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
