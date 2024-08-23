import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { UnderConstruction } from "./components/UnderConstruction";
import { RefsProvider } from "./contexts/RefsProvider";
import { Contact } from "./pages/Contact";
import { ToastifyProvider } from "./contexts/ToastifyProvider";
import { useScrollToTop } from "./hooks/useScrollToTop";


export function Router() {
  useScrollToTop();

  return (
    <RefsProvider>
      <ToastifyProvider>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="/contact-form" element={<Contact />} />
            <Route path="/under-construction" element={<UnderConstruction />} />
          </Route>
        </Routes>
      </ToastifyProvider>
    </RefsProvider>

  )
}