export const TechIcon = ({
  component,
  alt,
}: {
  component: React.ElementType;
  alt: string;
}) => {
  const Component = component;
  return (
    <>
      <Component
        className="size-10 fill-[url(#tech-icon-gradient)]"
        alt={alt}
      />
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="rgb(110 231 183)" />
          <stop offset="100%" stopColor="rgb(56 18 248)" />
        </linearGradient>
      </svg>
    </>
  );
};
