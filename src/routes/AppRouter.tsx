import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Admin from "../pages/Admin.tsx";
import Dashboard from "../pages/Dashboard.tsx";
import Profile from "../pages/Profile.tsx";
import {MAIN_ROUTE} from "../utils/consts.tsx";
import { publicRoutes} from "./routes.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";
import Main from "../pages/Main.tsx";



const AppRouter = () => {

    const isAuth = true;
    const userRole = useSelector((state: RootState) => state.auth.role)


    const ProtectedRoute = (): JSX.Element=> {
   if (userRole === "ADMIN") {
          return <Route path="/admin" element={<Admin/>} />
        } else  if (userRole === "EMPLOYEE") {
       return <Route path="/dashboard" element={<Dashboard/>}/>
        } else {
       return <Route path="/" element={<Main/>}/>
   }
    }

    return (
        <BrowserRouter>
            <Routes>
                {ProtectedRoute()}
                {isAuth && (
                    <>
                        <Route path="/profile" element={<Profile />} />
                        <Route key="/login" path="/login" element={<Navigate to={MAIN_ROUTE} />} />
                        <Route key="/registration" path="/registration" element={<Navigate to={MAIN_ROUTE}/>} />
                    </>
                )}
                {
                    publicRoutes.map(({path , Component}) => (
                        <Route key={path} path={path} element={Component} />
                    ))
                }
                <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;