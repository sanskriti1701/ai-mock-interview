import { Link } from "react-router-dom";

export const LogoContainer = () => {
  return (
    <Link to={"/"}>
      <img
        src="/assets/img/logo.png"
        alt=""
        className="min-w-10 min-h-10 object-contain"
        height={"60rem"}
        width={"60rem"}
      />
    </Link>
  );
};
