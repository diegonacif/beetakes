import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { UnderConstruction } from "./components/UnderConstruction";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/under-construction" element={<UnderConstruction />} />
      </Route>
    </Routes>
  )
}