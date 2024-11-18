import Navbar from "../comps/Navbar";
import { Footer } from "../comps/Footer";
import StatusComponent from "../comps/StatusComponent";
import { useLocation } from "react-router-dom";

function ReportPage() {
  const location = useLocation();
  const { matchedNickname } = location.state || {};

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 w-full bg-bgmain justify-center items-center">
        <div className="px-4 py-2 w-1/2 mx-auto text-center bg-bggray mt-5 rounded">
          <a href="#" className="text-sm font-bold text-orangetext">
            This is alpha build.
          </a>
          <span className="ml-1 text-sm text-blacktext font-bold">
            <span className="text-orangetext hover:text-whitetext pr-1">
              <a href="https://discord.com/invite/86EF64Q">Sign up</a>
            </span>
            for our closed beta in next month!
          </span>
        </div>
        <div className="flex">
          <div className="w-1/2 mx-auto justify-center mt-10">
            <StatusComponent matchedNickname={matchedNickname} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ReportPage;
