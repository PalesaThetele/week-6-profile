import { Suspense, lazy, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { formReducer, initialFormData } from "./reducers/formReducer";

const Home = lazy(() => import("./pages/Home"));
const Registration = lazy(() => import("./pages/Registration"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const ItemDetails = lazy(() => import("./pages/ItemDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));

function AppLayout() {
  const [formData, dispatch] = useReducer(formReducer, initialFormData);

  function handleRegistrationSuccess() {
    // Registration data is already stored in the parent reducer.
    // The Thank You page receives this same state.
  }

  return (
    <>
      <a
        href="#main-content"
        className="absolute left-3 top-3 z-50 -translate-y-20 rounded-md bg-white px-4 py-3 font-semibold text-teal-900 shadow focus:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-700"
        >     
        Skip to main content
      </a>

      <Navbar />

      <div className="min-h-screen bg-todo-background">
        <Suspense
          fallback={
            <p className="p-8 text-center text-gray-700" role="status">
              Loading page...
            </p>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/form"
              element={
                <Registration
                  formData={formData}
                  dispatch={dispatch}
                  onRegistrationSuccess={handleRegistrationSuccess}
                />
              }
            />

            <Route
              path="/thank-you"
              element={<ThankYou formData={formData} />}
            />

            <Route path="/items/:itemId" element={<ItemDetails />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/week-6-profile">
      <AppLayout />
    </BrowserRouter>
  );
}

