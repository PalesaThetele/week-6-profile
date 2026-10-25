
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main
      id="main-content"
      tabIndex="-1"
      className="mx-auto w-full max-w-4xl px-5 py-12 sm:py-20"
    >
      <section className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-700">
          Todo Registration
        </p>

        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
          Organise your goals, one task at a time.
        </h1>

        <p className="mt-4 max-w-2xl leading-7 text-gray-700">
          Welcome! Create your account to get started. This application
          demonstrates accessible forms, shared React state, and
          multi-page navigation.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/form"
            className="rounded-lg bg-teal-700 px-6 py-3 font-semibold text-white transition hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
          >
            Register now
          </Link>

          <Link
            to="/items/1"
            className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
          >
            View sample task
          </Link>
        </div>
      </section>
    </main>
  );
}
