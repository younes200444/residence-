import { Link } from "react-router-dom";

const Home = () => {



        return <div>
                   <h1>Welcome to Residence Booking</h1>
                   <Link to="/availability">Check Available Rooms</Link> |
                   <Link to="/login">Login</Link> |
                   <Link to="/reservations">My Reservations</Link>
                 </div>
}




;

export default Home;
