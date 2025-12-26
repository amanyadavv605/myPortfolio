import clsx from "clsx";

export default function Bounded({
  as: Tag = "section",
  className,
  children,
  ...rest
}) {
  return (
    <Tag
      {...rest}
      className={clsx(
        "px-4 py-10 md:px-6 md:py-14 lg:py-16",
        className
      )}
    >
      <div className="mx-auto w-full max-w-7xl">
        {children}
      </div>
    </Tag>
  );
}
