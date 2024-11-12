import { Footer } from "../comps/Footer";
import ItemsGrid from "../comps/ItemsGrid";
import Navbar from "../comps/Navbar";
import { useLocation } from "react-router-dom";

export default function FakeReport() {
  const location = useLocation();
  const { matchedNickname } = location.state || {};

  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 w-full bg-bgmain justify-center items-center">
          <div className="mt-10 text-whitetext">
            <ItemsGrid matchedNickname={matchedNickname} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
