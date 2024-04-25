import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {
    Admin,
    DashboardLayout,
    DeleteJob,
    EditJob,
    Error,
    HomeLayout,
    Landing,
    Login,
    Profile,
    Register,
    Stats
} from './pages'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/dashboard',
                element: <DashboardLayout/>
            },
        ]
    },
])

const App = () => {
    return <RouterProvider router={router}/>

};

export default App;
