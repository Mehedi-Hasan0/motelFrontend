import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Route";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </>
  );
}

export default App;
