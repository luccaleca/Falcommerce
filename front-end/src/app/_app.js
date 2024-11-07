// src/pages/_app.js
import '../app/styles/global.css'; 
import Layout from './layout'; 

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;