import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/IndexPage/IndexPage";
import AboutPage from "./pages/AboutPage/AboutPage.page";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from "./components/error/ErrorFallback.component";
import Layout from "./components/layout/Layout.component";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallBack}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Layout>Not Found</Layout>}/>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
