import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Leadership from './pages/Leadership';
import Adventures from './pages/Adventures';
import AdventureCategory from './pages/AdventureCategory';
import ExpeditionDetail from './pages/ExpeditionDetail';
import WorldMapPage from './pages/WorldMap';
import DestinationDetail from './pages/DestinationDetail';
import About from './pages/About';
import Now from './pages/Now';
import FieldNotes from './pages/FieldNotes';
import FieldNoteDetail from './pages/FieldNoteDetail';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

const routes = [
  { path: '/', element: Home },
  { path: '/work', element: Work },
  { path: '/work/:slug', element: CaseStudyDetail },
  { path: '/leadership', element: Leadership },
  { path: '/adventures', element: Adventures },
  { path: '/adventures/:category', element: AdventureCategory },
  { path: '/adventures/:category/:slug', element: ExpeditionDetail },
  { path: '/destinations', element: WorldMapPage },
  { path: '/destinations/:slug', element: DestinationDetail },
  { path: '/about', element: About },
  { path: '/now', element: Now },
  { path: '/field-notes', element: FieldNotes },
  { path: '/field-notes/:slug', element: FieldNoteDetail },
  { path: '/projects', element: Projects },
  { path: '/contact', element: Contact },
];

export default function App() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {routes.map(({ path, element: Element }) => (
              <Route
                key={path}
                path={path}
                element={
                  <PageTransition>
                    <Element />
                  </PageTransition>
                }
              />
            ))}
            <Route
              path="*"
              element={
                <PageTransition>
                  <NotFound />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
