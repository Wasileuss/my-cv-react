import { Suspense } from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div className="wrapper">
            <Header />
            <main className="page">
                <div className="page__container">
                    <Suspense fallback={null}>
                        <Outlet />
                    </Suspense>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
