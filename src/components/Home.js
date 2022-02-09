import 'animate.css'
import Map from './Map'


export default function Home() {
    return (
        <div>
        <section>
            <img className="brulee" alt='brulee' src="https://i.ibb.co/3f3Kwnn/brulee.jpg" />
            <div className='container'>
                <div id='animate' className="animate__animated animate__fadeIn">Online Ordering Now Available!
                    <div></div>
                    <button className="ordernow">
                    <a href="https://www.tasteofpariscarryout.com/">Order Now!</a>
                    </button></div>
            </div>
            </section>

            <section className='visitus'>
                <h1>Visit Us</h1>
                <Map/>
            </section>
            
            </div>
    )
}