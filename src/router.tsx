import {createBrowserRouter} from "react-router-dom";
import {MainPage} from "./pages/main/main.tsx";
import {ProfilePage} from "./pages/profile/profile.tsx";
import {AdPage} from "./pages/ad/ad.tsx";
import {SellerProfilePage} from "./pages/seller/profile.tsx";

export const router = createBrowserRouter([
    {path: '/', element: <MainPage />},
    {path: '/profile', element: <ProfilePage />},
    {path: '/ad/:id', element: <AdPage />},
    {path: '/seller/:id', element: <SellerProfilePage />},
])