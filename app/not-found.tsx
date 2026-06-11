import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center">
      <div className="space-y-4">
        <h1 className="text-9xl font-bold text-foreground/10 tracking-tighter">404</h1>
        <h2 className="text-3xl font-bold text-foreground">Page not found</h2>
        <p className="text-muted max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        <div className="pt-8">
          <Link
            href="/en"
            className="inline-block px-8 py-4 rounded-lg text-sm font-semibold text-white bg-black hover:opacity-80 transition-opacity"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
      <div className="fixed bottom-8 text-xs text-placeholder">
        Demand Validation Protocol — PMF LP Factory
      </div>
    </div>
  );
}
