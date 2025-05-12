
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="retro-terminal max-w-lg w-full text-center py-10 px-6">
          <h1 className="font-press-start text-2xl mb-4">404 Error</h1>
          <p className="font-vt323 text-2xl mb-6">
            <span className="text-retro-teal">$</span> Page not found
          </p>
          <p className="font-mono mb-8">The requested file could not be found on this server.</p>
          
          <Link
            to="/"
            className="px-6 py-3 bg-retro-purple text-white font-vt323 text-xl rounded inline-block hover:scale-105 transition-transform"
          >
            $ cd /home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
