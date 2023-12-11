import { Hero, About, Footer, Users, Offers, Spotlight, Testimonial, FrameSpotlight } from "./sections";

function App() {

  return(
    <main className="min-w-full min-h-screen">
      <Hero />
      <About />
      <Users />
      <Offers />
      <Spotlight />
      <Testimonial />
      <FrameSpotlight />
      <Footer />
    </main>
  );
}

export default App;
