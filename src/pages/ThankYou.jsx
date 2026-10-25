import { Link } from "react-router-dom";

export default function ThankYou({ formData }) {
  const accountTypes = {
    personal: "Personal",
    student: "Student",
    professional: "Professional",
  };

  return (
    <main
      id="main-content"
      tabIndex="-1"
      className="mx-auto max-w-3xl px-5 py-12"
    >
      <section className="rounded-3xl bg-white p-8 text-center shadow-sm sm:p-12">
        <div
          aria-hidden="true"
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-3xl text-teal-800"
        >
          ✓
        </div>

        <h1 className="mt-6 text-3xl font-bold text-gray-800">
          Thank you, {formData.fullName || "there"}!
        </h1>

        <p role="status" className="mt-4 text-gray-600">
          Your demo registration was successful.
        </p>

        {formData.email ? (
          <dl className="mx-auto mt-8 max-w-md space-y-3 rounded-xl bg-gray-50 p-5 text-left">
            <div>
              <dt className="text-sm text-gray-500">Email address</dt>
              <dd className="font-medium text-gray-800">{formData.email}</dd>
            </div>

            <div>
              <dt className="text-sm text-gray-500">Account type</dt>
              <dd className="font-medium text-gray-800">
                {accountTypes[formData.accountType] || "Not specified"}
              </dd>
            </div>
          </dl>
        ) : (
          <p className="mt-4 text-sm text-gray-600">
            You can register to see your confirmation details here.
          </p>
        )}

        <Link
          to="/form"
          className="mt-8 inline-block rounded-lg bg-todo-turquoise px-6 py-3 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
        >
          Back to registration
        </Link>
      </section>
    </main>
  );
}
