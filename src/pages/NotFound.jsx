import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-[70vh] flex flex-col items-center justify-center text-center gap-4">
      <h1 className="text-3xl font-bold">404</h1>
      <p className="text-sm text-gray-500">Page not found.</p>
      <Link to="/" className="btn btn-primary text-white">
        Back Home
      </Link>
    </div>
  );
}
