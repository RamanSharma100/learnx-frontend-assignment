import { type FC } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="min-w-screen flex relative min-h-screen w-full h-full bg-white">
      <Sidebar />

      <div className="w-5/6 flex flex-col">
        <Topbar />
        <div className="w-full flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
