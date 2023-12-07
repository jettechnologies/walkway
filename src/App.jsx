import { Hero, About, Footer, Users, Offers, Spotlight, Testimonial, FrameSpotlight } from "./sections";

function App() {

  return(
    <main className="min-w-full min-h-screen border-4 border-black">
      <Hero />
      <About />
      <Users />
      <Offers />
      <Testimonial />
      <FrameSpotlight />
    </main>
  );
}

export default App;
