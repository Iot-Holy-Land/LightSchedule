import { Main } from "./components/main/main";
import { Reset } from "styled-reset";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Reset />
        <Main />
      </div>
    </QueryClientProvider>
  );
};
