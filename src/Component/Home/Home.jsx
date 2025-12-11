import "./Home.css";
import Navbar from "/src/Component/Navbar/Navbar.jsx";
import Footer from "/src/Component/Footer/Footer.jsx";


// Import game thumbnails (keep your images)
import fort from "/src/assets/images/fortnite.jpg";
import apex from "/src/assets/images/apex.jpg";
import valo from "/src/assets/images/valo.jpg";
import cod from "/src/assets/images/cod.jpg";
import lol from "/src/assets/images/lol.jpg";
import pubg from "/src/assets/images/pubg.jpg";
import mc from "/src/assets/images/mc.jpg";
import ow from "/src/assets/images/ow.jpg";

export default function Home() {
  const games = [
    { title: "Minecraft", image: mc, link: "/mc" },
    { title: "Valorant", image: valo, link: "/valorant" },
    { title: "Apex Legends", image: apex, link: "/apex" },
    { title: "Call of Duty", image: cod, link: "/cod" },
    { title: " Fortnite", image: fort, link: "/fortnite" },
    { title: "League of Legends", image: lol, link: "/lol" },
    { title: "Overwatch 2", image: ow, link: "/ow" },
    { title: "PUBG", image: pubg, link: "/pubg" },
  ];

  return (
    <div className="home-page">
      <Navbar />
      
     
      {/* HERO */}
      <section className="hero-section">
        <div className="container text-center py-5">
          <h1 className="display-1 fw-bold text-gradient mb-4">
            FIND YOUR SQUAD
          </h1>
          <p className="lead text-light opacity-90 mb-5" style={{ maxWidth: "700px", margin: "0 auto" }}>
            Stop solo-queuing with randoms. Connect with skilled, like-minded players and dominate in every game.
          </p>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <button className="btn btn-glow btn-lg px-5 py-3 rounded-pill">
              Start Finding Teammates
            </button>
            <button className="btn btn-outline-glow btn-lg px-5 py-3 rounded-pill">
              Browse All Games
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED GAMES */}
      <section className="featured-games py-5">
        <div className="container">
          <h2 className="text-center text-gradient display-5 fw-bold mb-5">Featured Games</h2>
          <div className="row g-4 justify-content-center">
            {games.map((game) => (
              <div key={game.title} className="col-6 col-sm-4 col-md-3 col-lg-2">
                <a href={game.link} className="game-card glass">
                  <div className="game-img-wrapper">
                    <img src={game.image} alt={game.title} className="game-img" />
                    <div className="game-overlay">
                      <span className="play-text">Play Now</span>
                    </div>
                  </div>
                  <h3 className="game-title text-gradient mt-3">{game.title}</h3>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose py-5">
        <div className="container">
          <h2 className="text-center text-gradient display-5 fw-bold mb-5">Why Millions Choose Us</h2>
          <div className="row g-5">
            {[
              { icon: "Target", title: "Precision Matching", desc: "AI-powered filters: rank, playstyle, mic, region" },
              { icon: "Zap", title: "Instant Connection", desc: "No waiting. Find teammates in under 30 seconds" },
              { icon: "Shield", title: "Safe & Trusted", desc: "Verified profiles, rating system, zero toxicity" },
              { icon: "Trophy", title: "Proven Results", desc: "Used by Champion stacks & esports orgs" },
            ].map((item, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div className="feature-box glass text-center p-4">
                  <div className="feature-icon mb-3">
                    <div className="icon-glow">{item.icon}</div>
                  </div>
                  <h4 className="text-gradient">{item.title}</h4>
                  <p className="text-light opacity-80 small">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}