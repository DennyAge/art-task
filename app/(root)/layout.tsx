import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <div className="mx-auto max-w-7xl">
        <div className="mt-10 px-5">{children}</div>
      </div>
    </main>
  );
};
export default Layout;
