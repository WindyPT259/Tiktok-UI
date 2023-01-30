import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routers';
import DefaultLayout from './layouts';
import { Fragment } from 'react';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component; //component muốn dùng được pahri viết hoa chữ cái đầu, element nhận component
                        let Layout = DefaultLayout; //case # : default or 0 => lấy layout mặc định
                        //có layout
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            //layout null
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
