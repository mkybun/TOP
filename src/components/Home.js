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
                      

                      <div className='outeraddy'>
                      <p className='addy'>161 North Seymour Avenue</p>
                      <p className='addy'>Mundelein, Illinois 60060</p>
                      </div>
                   

                      <div className='outerhours'>
                      <p className='hours title2'>Hours</p>
                          <p className='hours monday'>Monday: Closed</p>
                          <p className='hours t2s'>Tuesday through Saturday:</p>
                          <p>Breakfast: 6am to 11am</p>
                          <p>Lunch: 11am to 2:30pm</p>
                          <p>Dinner: 4:30pm to 9pm</p>
</div>

                  
          </div>
        </div>
      </section>
    </div>
  );
}
