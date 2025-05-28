import Chart from "../components/chart";
import Mform from '../components/Mforms'
import QuoteGenerator from "../components/QuoteGenerator";
import WeatherApp from "../components/weathercard"
function Home() {
 

  return (
    <div>
      
    
      <div className="charts">
          <Chart/>
          
        </div>
        <div>
          <Mform/>
          <QuoteGenerator />
          <WeatherApp/>
        </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum,
            consequatur. Ratione animi dolor nisi aliquid provident sed culpa
            pariatur perspiciatis quidem porro, delectus voluptate neque dicta
            atque autem doloremque sapiente.
          </p>
        <div>
          <img
            src="https://images.pexels.com/photos/170164/pexels-photo-170164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="bird" width="700px"
          />
            
          
          
          <p>
            Explore our website demo to see how our features work and experience
            the user-friendly design. This preview gives you a glimpse of what
            we offer—easy navigation, fast performance, and a sleek interface.
            Try it out and see how we can meet your needs!
          </p>

          <hr />
        </div>
        
        
      
    </div>
  );
}

export default Home;
