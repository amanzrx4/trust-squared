import { CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4">
      <Link to="/">
        <img src="/logo2.svg" alt="logo" className="w-16" />
      </Link>
      <CiSettings className="w-8 h-auto" />
    </div>
  );
}
