import { Toaster } from "sonner";

import { Sidebar, Tasks } from "@/components";

function App() {
  return (
    <>
      <Toaster richColors position="top-center" />
      <div className="flex">
        <Sidebar />
        <Tasks />
      </div>
    </>
  );
}

export default App;
