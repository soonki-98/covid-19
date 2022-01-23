import { StyledList } from "./styles";

interface Props {
  lists: string[];
  direction?: "row" | "col";
}

const ListComponent = ({ lists, direction = "col" }: Props) => {
  return (
    <StyledList direction={direction}>
      {lists.map((list) => {
        return (
          <li key={list}>
            <span>{list}</span>
          </li>
        );
      })}
    </StyledList>
  );
};

export default ListComponent;
