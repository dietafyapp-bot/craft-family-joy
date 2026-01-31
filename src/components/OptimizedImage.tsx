import * as React from "react";

export type OptimizedImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  /**
   * When true, loads eagerly and uses high fetch priority (use only for the main hero/LCP image).
   */
  priority?: boolean;
};

const OptimizedImage = React.forwardRef<HTMLImageElement, OptimizedImageProps>(
  ({ priority = false, loading, decoding, fetchPriority, ...props }, ref) => {
    const computedLoading = loading ?? (priority ? "eager" : "lazy");
    const computedDecoding = decoding ?? "async";
    const computedFetchPriority = fetchPriority ?? (priority ? "high" : "low");

    return (
      <img
        ref={ref}
        loading={computedLoading}
        decoding={computedDecoding}
        fetchPriority={computedFetchPriority}
        {...props}
      />
    );
  }
);

OptimizedImage.displayName = "OptimizedImage";

export default OptimizedImage;
