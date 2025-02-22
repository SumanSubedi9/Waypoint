import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { CitiesProvider } from "./context/CitiesContext";
import { ConfirmationProvider } from "./context/ConfirmContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";
import ErrorPage from "./components/ErrorPage";

// import Product from "./pages/Explore";
// import Pricing from "./pages/Memories";
// import Homepage from "./pages/Homepage";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";

const Homepage = lazy(() => import("./pages/Homepage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./components/SignupForm"));
const Explore = lazy(() => import("./pages/Explore"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Settings = lazy(() => import("./pages/Settings"));
const LoginHelp = lazy(() => import("./pages/LoginHelp"));
const ResetHelp = lazy(() => import("./pages/ResetHelp"));
const UserStat = lazy(() => import("./pages/UserStat"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

polyfillCountryFlagEmojis();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ConfirmationProvider>
        <CitiesProvider>
          <BrowserRouter>
            <Suspense fallback={<SpinnerFullPage />}>
              <Routes>
                <Route index element={<Homepage />} />
                <Route path="/" element={<Homepage />} />
                <Route path="explore" element={<Explore />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="login-help" element={<LoginHelp />} />
                <Route path="change-password" element={<ResetHelp />} />
                <Route
                  path="app"
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Navigate to="cities" replace />} />
                  <Route path="cities" element={<CityList />} />
                  <Route path="cities/:id" element={<City />} />
                  <Route path="countries" element={<CountryList />} />
                  <Route path="form" element={<Form />} />
                </Route>
                <Route
                  path="settings"
                  element={
                    <ProtectedRoute>
                      <Settings />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="user-stat"
                  element={
                    <ProtectedRoute>
                      <UserStat />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<PageNotFound />} />
                <Route path="oops" element={<ErrorPage />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "var(--color-dark--2)",
                color: "var(--color-light--3)",
              },
            }}
          />
        </CitiesProvider>
      </ConfirmationProvider>
    </QueryClientProvider>
  );
}
export default App;
