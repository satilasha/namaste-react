import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Error from "./components/Error.js";
// import Grocery from "./components/Grocery.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore/appStore.js";
import Cart from "./components/Cart.js"

// chunking
// lazy loading
// code splitting
// dynamic loading
// on demand loading
// dynamic bundle loading
const Grocery = lazy(() => import("./components/Grocery.js"));

const AppLayout = () => {

    const [projectName, setProjectName] = useState()

    //dummy api call to update context
    useEffect(() => {
        const project = "Namaste React"

        setProjectName(project)
    }, [])


    return (
        < Provider store={appStore}>
            <UserContext.Provider value={{ project: projectName }}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}



const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />
    },

])


let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< RouterProvider router={appRouter} />);