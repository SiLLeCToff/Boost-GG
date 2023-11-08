import {
    ADMIN_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    MAIN_ROUTE,
    DASHBOARD_ROUTE,
    PAYMENT_ROUTE,
    PROFILE_ROUTE,
} from "../utils/consts";
import Admin from "../pages/Admin.tsx";
import Dashboard from "../pages/Dashboard.tsx";
import Profile from "../pages/Profile.tsx";


export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>
    }
];

export const employeeRoutes = [
    {
        path: DASHBOARD_ROUTE,
        Component: <Dashboard/>
    }
];

export const authRoutes = [
    {
        path: PROFILE_ROUTE,
        Component: <Profile/>
    }
]

export const publicRoutes = [
    {
        path: DASHBOARD_ROUTE,
        Component: <Dashboard/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Dashboard/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <Dashboard/>
    },
    {
        path: MAIN_ROUTE,
        Component: <Dashboard/>
    },
    {
        path: PAYMENT_ROUTE,
        Component: <Dashboard/>
    }

];
