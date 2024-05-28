import "./skeleton.scss";

const Skeleton = ({ times = 1, className = "", ...props }) => {
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={`skeleton ${className}`} {...props}>
          <div className="skeleton-inner" />
        </div>
      );
    });

  return <>{boxes}</>;
};

export default Skeleton;
