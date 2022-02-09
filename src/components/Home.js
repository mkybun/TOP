import 'animate.css';
import Map from './Map';

export default function Home() {
  return (
    <div>
      <section>
        <img
          className="brulee"
          alt="brulee"
          src="https://i.ibb.co/3f3Kwnn/brulee.jpg"
        />
        <div className="container">
          <div id="animate" className="animate__animated animate__fadeIn">
            Online Ordering Now Available!
            <div></div>
            <button className="ordernow">
              <a href="https://www.tasteofpariscarryout.com/">Order Now!</a>
            </button>
          </div>
        </div>
      </section>

      <section className="visitus">
        <div className="visit-title">
          <span>Visit Us</span>
        </div>

        <div className="outerinfo">
          <div className="left-container">
            <Map />
          </div>

          <div className="right-container">
            <text>161 North Seymour Avenue, Mundelein, Illinois 60060</text>
            <h1>Hours</h1>
          </div>
        </div>
      </section>
    </div>
  );
}
