import { type FC } from "react";
import Sidebar from "./Sidebar";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="min-w-screen flex relative min-h-screen w-full h-full bg-white">
      <Sidebar />

      <div className="w-5/6 flex flex-col">
        <div className="w-full py-4 bg-white">Top Navbar</div>
        <div className="w-full flex-1 overflow-y-auto">{children}</div>
        Sid
      </div>
    </div>
  );
};

export default Layout;
