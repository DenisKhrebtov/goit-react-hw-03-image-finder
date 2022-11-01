export const Button = ({ onLoadMore }) => {
  return (
    <div>
      <button type="button" onLoadMore={onLoadMore}>
        Load More
      </button>
    </div>
  );
};
