// interface PrivateRouterProps {
//   component: ComponentType;
//   path?: string;
// }

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddGame } from "../pages/AddGame";
import { AddPlatform } from "../pages/AddPlatform";
import { EditGame } from "../pages/EditGame";
import { EditPlatform } from "../pages/EditPlatform";
import { GamesManagement } from "../pages/GamesManagement";
import { InfoGame } from "../pages/InfoGame";
import { Library } from "../pages/Library/library";
import { Login } from "../pages/Login";
import { Platform } from "../pages/Platform";
import { PlatformManagement } from "../pages/PlatformManagement";
import { Register } from "../pages/Register/register";

// const PrivateRoute: FC<PrivateRouterProps> = ({
//   component: RouteComponent,
// }) => {
//   const { instance } = useMsal();
//   const account = instance.getActiveAccount();

//   const isAuthenticated = account !== null ? true : false;

//   if (isAuthenticated) {
//     return (
//       <BaseLayout>
//         <RouteComponent />
//       </BaseLayout>
//     );
//   } else {
//     toast.warn("Você não está autenticado no sistema!", {
//       toastId: "token_expired",
//     });

//     return <Navigate to="/" />;
//   }
// };

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/add-game" element={<AddGame />} />
        <Route path="/add-platform" element={<AddPlatform />} />
        <Route path="/edit-game" element={<EditGame />} />
        <Route path="/edit-platform" element={<EditPlatform />} />
        <Route path="/games-management" element={<GamesManagement />} />
        <Route path="/info-game" element={<InfoGame />} />
        <Route path="/library" element={<Library />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/platform-management" element={<PlatformManagement />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
