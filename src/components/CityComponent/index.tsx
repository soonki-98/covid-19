import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CityComponent = () => {
  const [state, setState] = useState<{ countryNm: string }>();
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
        </div>
      )}
    </>
  );
};
export default CityComponent;
