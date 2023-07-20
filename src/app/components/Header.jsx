import Link from "next/link";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <div className="bg-zinc-100 sticky">
      <div className="w-[83%] mx-auto h-[50px] flex justify-between items-center">
        <h1 className="text-blue-500 text-lg font-semibold">
          <Link href="/">OnlineStore</Link>
        </h1>
        <Searchbar />
      </div>
    </div>
  );
};

export default Header;
