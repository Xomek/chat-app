import { FC } from "react";
import { Aside, Header } from "../../components";

const Layout: FC = ({ children }) => {
   return (
      <>
         <Aside />
         <main>
            <Header />
            {children}
         </main>
      </>
   );
};

export default Layout;
