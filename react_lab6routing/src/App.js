import {Route, Routes} from "react-router-dom";
import Products from "./pages/Products";
import Layout from "./pages/Layout";
import ProductPage from "./components/ProductPage/ProductPage";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route index element={<Products/>}/>
                <Route path={"products"} element={<Products/>}/>
                <Route path={"products/search/:search"} element={<Products/>}/>
                <Route path={"category/:category/products"} element={<Products/>}/>
                <Route path={"products/:id"} element={<ProductPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
