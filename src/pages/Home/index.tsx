import { Link } from "react-router-dom";
import ListComponent from "../../components/ListComponents";
import { cities } from "../../static/constant/city";

const Home = () => {
  const citiesKor = cities.map((city) => Object.keys(city)[0]);
  const citiesEng = cities.map((city) => Object.values(city)[0]);
  return (
    <ListComponent direction="row">
      {citiesKor.map((city, idx) => (
        <Link key={idx} to={`/city/${citiesEng[idx]}`}>
          <li>
            <span>{city}</span>
          </li>
        </Link>
      ))}
    </ListComponent>
  );
};

export default Home;
