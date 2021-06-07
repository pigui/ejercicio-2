interface ResultListItemProps {
  title: string | null | undefined;
}

const ResultListItem: React.FC<ResultListItemProps> = ({
  title,
}: ResultListItemProps) => {
  return <div>{title}</div>;
};

export default ResultListItem;
