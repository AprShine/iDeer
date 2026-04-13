import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastProvider } from "./lib/hooks/useToast";
import { PublicPage } from "./pages/public/PublicPage";
import { AdminPage } from "./pages/admin/AdminPage";
import { DesktopPage } from "./pages/desktop/DesktopPage";

export default function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/desktop" element={<DesktopPage />} />
          <Route path="/desktop/:screen" element={<DesktopPage />} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}
