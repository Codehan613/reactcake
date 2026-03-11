import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import Loading from "@/pages/components/loading";

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
