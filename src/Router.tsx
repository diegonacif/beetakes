import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { UnderConstruction } from "./components/UnderConstruction";
import { RefsProvider } from "./contexts/RefsProvider";
import { Contact } from "./pages/Contact";
import { ToastifyProvider } from "./contexts/ToastifyProvider";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { BudgetsPanel } from "./pages/BudgetsPanel";
import { AuthProvider } from "./contexts/AuthEmailProvider";
import { PrivateRoutes } from "./PrivateRoutes";
import { AdmLogin } from "./pages/AdmLogin";
import { ServicesFolio } from "./pages/ServicesFolio";
import { useEffect } from "react";
import ReactPixel from 'react-facebook-pixel';
import { LinkTree } from "./pages/LinkTree";
import { TipoEvento, incrementarEventoDiario } from "./hooks/useEventIncrement";

export function Router() {
  const location = useLocation();

  // Rastreia a visualização de página do pixel e no Firebase Analytics ao navegar
  useEffect(() => {
    if (location.pathname === "/") {
      incrementarEventoDiario(TipoEvento.VISITA_HOME)
    } else if (location.pathname === "/linktree") {
      incrementarEventoDiario(TipoEvento.VISITA_LINKTREE)
    } else if (location.pathname === "/contact-form") {
      incrementarEventoDiario(TipoEvento.VISITA_CONTACT_FORM)
    }

    ReactPixel.pageView();
  }, [location]);

  useScrollToTop();

  return (
    <AuthProvider>
      <RefsProvider>
        <ToastifyProvider>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<Home />} />
              <Route path="/contact-form" element={<Contact />} />
              <Route path="/linktree" element={<LinkTree />} />
              <Route path="/services/:service" element={<ServicesFolio />} />
              <Route path="/under-construction" element={<UnderConstruction />} />
              <Route path="/login" element={<AdmLogin />} />
              <Route element={<PrivateRoutes />}>
                <Route path="/budgets-panel" element={<BudgetsPanel />} />
              </Route>
            </Route>
          </Routes>
        </ToastifyProvider>
      </RefsProvider>
    </AuthProvider>
  )
}