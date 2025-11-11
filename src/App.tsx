import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { Chat } from "./components/Chat";
// import NotFound from "./pages/NotFound";


const App = () => (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chat" element={<Chat />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
);

export default App;