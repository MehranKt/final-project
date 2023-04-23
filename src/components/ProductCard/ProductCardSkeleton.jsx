import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ProductCardSkeleton = () => {
  return (
    <SkeletonTheme baseColor="gray" highlightColor="#888">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          background: "rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: " 12px",
          padding: "10px",
          position: "relative",
          lineHeight: 1,
        }}
      >
        <Skeleton style={{ aspectRatio: "1/1", borderRadius: "10px" }} />
        <div style={{ display: "grid", gap: "5px" }}>
          <Skeleton width={70} height={10} />
          <Skeleton width={40} height={10} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default ProductCardSkeleton;
