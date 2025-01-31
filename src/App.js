import './App.css';
import Comments from './components/comments/comments';
import Customers from './components/customers/customers';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
      <Hero />
      <Customers />
      <Comments />
      <Footer />
    </>
  );
}

export default App;
