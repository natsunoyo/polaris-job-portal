// components/PrivateRoute.tsx
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const user = useSelector((state: any) => state.user);

    const isLoggedIn = user && user.id != null;

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
