import { About } from './components/About';
import { AcademicHub } from './components/AcademicHub';
import { Achievements } from './components/Achievements';
import { CertificationsBlog } from './components/CertificationsBlog';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Research } from './components/Research';
import { Skills } from './components/Skills';
import { Teaching } from './components/Teaching';
import { Timeline } from './components/Timeline';
import { Testimonials } from './components/Testimonials';
import { LoadingScreen, ScrollUtilities } from './components/Utilities';
import { Ventures } from './components/Ventures';
export default function App() {
  return <><LoadingScreen/><ScrollUtilities/><Header/><main><Hero/><About/><Timeline/><Skills/><Projects/><Research/><Teaching/><Ventures/><AcademicHub/><CertificationsBlog/><Achievements/><Testimonials/><FAQ/><Contact/></main><Footer/></>;
}
