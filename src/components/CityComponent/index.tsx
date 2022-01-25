import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CityState } from "../../static/interfaces/city";

const CityComponent = () => {
  const [state, setState] = useState<CityState>();
  const id = useParams().id;

  useEffect(() => {
    fetch(
      `https://api.corona-19.kr/korea/beta/?serviceKey=pIP6u7bWlkAhJGrDZf1vdFiqB28CjgHnS`
    )
      .then((res) => res.json())
      .then((res) => {
        if (id) setState(res[id]);
      });
  }, [id]);

  return (
    <>
      {state && (
        <div>
          <h1>{state.countryNm}</h1>
          <div>
            <ul>
              <li>
                <p>총합</p>
                <p>{state.totalCnt}</p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
export default CityComponent;
