// src/pages/_app.js
import '../app/styles/global.css'; 
import Layout from './layout';
import { AuthProvider } from '@/context/AuthContext'; 

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
        </AuthProvider>
    );
}

export default MyApp;