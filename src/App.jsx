import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import defaultOptions from "configs/reactQuery";
import Router from "router/Router";

function App() {
  const queryClient = new QueryClient({defaultOptions});
  return (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
}

export default App;
