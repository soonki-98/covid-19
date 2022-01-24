import { Link } from "react-router-dom";
import ListComponent from "../../components/ListComponents";

const Home = () => {
  const cities: string[] = [
    "서울",
    "부산",
    "대구",
    "인천",
    "광주",
    "대전",
    "울산",
    "세종",
    "경기",
    "강원",
    "충북",
    "충남",
    "전북",
    "전남",
    "경북",
    "경남",
    "제주",
  ];

  return (
    <ListComponent direction="row">
      {cities.map((city, idx) => (
        <Link to={`/city/${city}`}>
          <li key={idx}>
            <span>{city}</span>
          </li>
        </Link>
      ))}
    </ListComponent>
  );
};

export default Home;
