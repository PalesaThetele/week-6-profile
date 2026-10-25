import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration({
  formData,
  dispatch,
  onRegistrationSuccess,
}) {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    dispatch({
      type: type === "checkbox" ? "SET_TERMS" : "UPDATE_FIELD",
      ...(type === "checkbox"
        ? { value: checked }
        : { field: name, value }),
    });

    setErrors((previous) => ({
      ...previous,
      [name]: "",
      ...(name === "password" ? { confirmPassword: "" } : {}),
    }));

    setStatus("idle");
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must contain at least 8 characters.";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!formData.accountType) {
      newErrors.accountType = "Please choose an account type.";
    }

    if (!formData.acceptedTerms) {
      newErrors.acceptedTerms = "Please accept the terms to continue.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");

    window.setTimeout(() => {
      onRegistrationSuccess();
      setStatus("success");
      navigate("/thank-you");
    }, 300);
  }

  return (
    <main
      id="main-content"
      tabIndex="-1"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-todo-background px-4 py-10 sm:px-8"
    >
      {/* Decorative background shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-todo-turquoise-light sm:-left-20 sm:-top-28 sm:h-80 sm:w-80"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-14 -top-36 h-64 w-64 rounded-full bg-todo-turquoise opacity-35 sm:-left-10 sm:-top-40 sm:h-80 sm:w-80"
      />

      <section className="relative z-10 w-full max-w-[520px] rounded-[28px] bg-white/70 px-6 py-10 shadow-sm sm:px-12 sm:py-14">
        <header className="mb-9 text-center">
          {/* Darker text improves contrast against the light background */}
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Todo Application
          </p>

          <h1 className="text-2xl font-bold tracking-wide text-todo-text sm:text-3xl">
            Welcome Onboard!
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-700 sm:text-base">
            Let’s help you meet up your tasks
          </p>
        </header>

        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-5">
            {/* Full name */}
            <div>
              <label htmlFor="fullName" className="sr-only">
                Full name
              </label>

              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={
                  errors.fullName ? "fullName-error" : undefined
                }
                className={`w-full rounded-input border bg-white px-6 py-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-700 focus-visible:border-teal-700 focus-visible:ring-2 focus-visible:ring-teal-700/40 ${
                  errors.fullName ? "border-red-600" : "border-transparent"
                }`}
              />

              {errors.fullName && (
                <p
                  id="fullName-error"
                  className="mt-2 px-4 text-xs text-red-700"
                >
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full rounded-input border bg-white px-6 py-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-700 focus-visible:border-teal-700 focus-visible:ring-2 focus-visible:ring-teal-700/40 ${
                  errors.email ? "border-red-600" : "border-transparent"
                }`}
              />

              {errors.email && (
                <p
                  id="email-error"
                  className="mt-2 px-4 text-xs text-red-700"
                >
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder="Enter password (8+ characters)"
                value={formData.password}
                onChange={handleChange}
                aria-invalid={Boolean(errors.password)}
                aria-describedby={
                  errors.password ? "password-error" : undefined
                }
                className={`w-full rounded-input border bg-white px-6 py-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-700 focus-visible:border-teal-700 focus-visible:ring-2 focus-visible:ring-teal-700/40 ${
                  errors.password ? "border-red-600" : "border-transparent"
                }`}
              />

              {errors.password && (
                <p
                  id="password-error"
                  className="mt-2 px-4 text-xs text-red-700"
                >
                  {errors.password}
                </p>
              )}
            </div>

            {/* Confirm password */}
            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm password
              </label>

              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                aria-invalid={Boolean(errors.confirmPassword)}
                aria-describedby={
                  errors.confirmPassword
                    ? "confirmPassword-error"
                    : undefined
                }
                className={`w-full rounded-input border bg-white px-6 py-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-700 focus-visible:border-teal-700 focus-visible:ring-2 focus-visible:ring-teal-700/40 ${
                  errors.confirmPassword
                    ? "border-red-600"
                    : "border-transparent"
                }`}
              />

              {errors.confirmPassword && (
                <p
                  id="confirmPassword-error"
                  className="mt-2 px-4 text-xs text-red-700"
                >
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>

          {/* Account type */}
          <div className="mt-6">
            <label
              htmlFor="accountType"
              className="mb-2 block px-2 text-sm font-medium text-gray-700"
            >
              Account type
            </label>

            <select
              id="accountType"
              name="accountType"
              value={formData.accountType}
              onChange={handleChange}
              aria-invalid={Boolean(errors.accountType)}
              aria-describedby={
                errors.accountType ? "accountType-error" : undefined
              }
              className="w-full rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              <option value="">Choose account type</option>
              <option value="personal">Personal</option>
              <option value="student">Student</option>
              <option value="professional">Professional</option>
            </select>

            {errors.accountType && (
              <p
                id="accountType-error"
                className="mt-2 px-2 text-xs text-red-700"
              >
                {errors.accountType}
              </p>
            )}
          </div>

          {/* Terms and conditions */}
          <div className="mt-5">
            <label className="flex items-start gap-3 px-1 text-sm text-gray-700">
              <input
                type="checkbox"
                name="acceptedTerms"
                checked={formData.acceptedTerms}
                onChange={handleChange}
                aria-invalid={Boolean(errors.acceptedTerms)}
                aria-describedby={
                  errors.acceptedTerms ? "terms-error" : undefined
                }
                className="mt-1 h-4 w-4 accent-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              />

              <span>
                I agree to the terms and conditions.

                {errors.acceptedTerms && (
                  <span
                    id="terms-error"
                    className="mt-1 block text-xs text-red-700"
                  >
                    {errors.acceptedTerms}
                  </span>
                )}
              </span>
            </label>
          </div>

          {/* Register button */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-9 w-full rounded-xl bg-teal-700 px-6 py-4 text-base font-semibold tracking-wide text-white transition hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700 disabled:cursor-wait disabled:opacity-70 sm:text-lg"
          >
            {status === "submitting" ? "Registering..." : "Register"}
          </button>

          {/* Sign-in navigation */}
          <p className="mt-7 text-center text-sm text-gray-700">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/")}
              className="font-semibold text-teal-700 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              Sign In
            </button>
          </p>
        </form>
      </section>
    </main>
  );
}