import Skeleton from "../skeleton/Skeleton";

const CardSkeleton = ({ times = 1 }) => {
  return (
    <>
      {Array.from({ length: times }).map((_, index) => (
        <div className="card" key={index}>
          <Skeleton className="imageContainer" />
          <div className="textContainer">
            <Skeleton style={{ height: "20px" }} />
            <Skeleton style={{ width: "70%", height: "17px" }} />
            <Skeleton style={{ width: "97px", height: "34px" }} />
            <div className="bottom">
              <div className="features">
                <Skeleton style={{ width: "97px", height: "27px" }} />
                <Skeleton style={{ width: "97px", height: "27px" }} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardSkeleton;
