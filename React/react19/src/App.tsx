import CommentFormMutate from "./components/OptimisticTalk/CommentFormMutate";
import CommentList from "./components/OptimisticTalk/CommentList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4 text-blue-800">
          TanStack Query Comment Test 💬
        </h1>
        <CommentFormMutate />
        <CommentList />
      </div>
    </QueryClientProvider>
  );
}
