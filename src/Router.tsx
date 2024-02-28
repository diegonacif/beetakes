import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { UnderConstruction } from "./components/UnderConstruction";
import { RefsProvider } from "./contexts/RefsProvider";


export function Router() {
  return (
    <RefsProvider>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/under-construction" element={<UnderConstruction />} />
        </Route>
      </Routes>
    </RefsProvider>

  )
}