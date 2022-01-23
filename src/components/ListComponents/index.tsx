interface Props {
  lists: string[];
}

const ListComponent = ({ lists }: Props) => {
  return (
    <ul>
      {lists.map((list) => {
        return (
          <li key={list}>
            <span>{list}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default ListComponent;
