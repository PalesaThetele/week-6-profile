import { Link, useParams } from "react-router-dom";

export default function ItemDetails() {
  const { itemId } = useParams();

  return (
    <main
      id="main-content"
      tabIndex="-1"
      className="mx-auto max-w-3xl px-5 py-12"
    >
      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
          Task details
        </p>

        <h1 className="mt-3 text-3xl font-bold text-gray-800">
          Task #{itemId}
        </h1>

        <p className="mt-4 leading-7 text-gray-600">
          This page reads the task identifier directly from the URL using
          React Router's useParams hook.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block font-semibold text-teal-700 underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
        >
          Return home
        </Link>
      </section>
    </main>
  );
}

