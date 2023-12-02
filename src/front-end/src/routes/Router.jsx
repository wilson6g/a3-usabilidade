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
import { DeletePlatform } from "../pages/DeletePlatform";
import { DeleteGame } from "../pages/DeleteGame";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/add-game" element={<AddGame />} />
        <Route path="/add-platform" element={<AddPlatform />} />
        <Route path="/edit-game" element={<EditGame />} />
        <Route path="/delete-game" element={<DeleteGame />} />
        <Route path="/edit-platform" element={<EditPlatform />} />
        <Route path="/delete-platform" element={<DeletePlatform />} />
        <Route path="/games-management" element={<GamesManagement />} />
        <Route path="/info-game" element={<InfoGame />} />
        <Route path="/library" element={<Library />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/platform-management" element={<PlatformManagement />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
