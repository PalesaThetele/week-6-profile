import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex="-1"
      className="mx-auto max-w-3xl px-5 py-16 text-center"
    >
      <p className="text-6xl font-bold text-teal-700">404</p>

      <h1 className="mt-4 text-2xl font-bold text-gray-800">
        Page not found
      </h1>

      <p className="mt-3 text-gray-600">
        Sorry, we couldn't find the page you requested.
      </p>

      <Link
        to="/"
        className="mt-7 inline-block rounded-lg bg-todo-turquoise px-6 py-3 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
      >
        Return home
      </Link>
    </main>
  );
}
