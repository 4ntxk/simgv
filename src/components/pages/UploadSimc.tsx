import { AlertTriangle } from "lucide-react";
import CharacterLoader from "../comps/CharacterLoader";
import Navbar from "../comps/Navbar";
import { Alert, AlertDescription } from "../ui/alert";
import { Footer } from "../comps/Footer";

const UploadSimc = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 w-full bg-bgmain justify-center items-center">
        <div className="px-4 py-2 w-1/2 mx-auto text-center bg-bggray mt-5 rounded">
          <a href="#" className="text-sm font-bold text-orangetext">
            This is alpha build, that works only on dungeon slots as different
            mapping was used to raids and delves/world events slots. Read our
            newest posts on Developer Blog to understand all the intricacies.
          </a>
          <span className="ml-1 text-sm text-blacktext font-bold">
            <span className="text-orangetext hover:text-whitetext pr-1">
              <a href="https://discord.com/invite/86EF64Q">Sign up</a>
            </span>
            for our closed beta in next month!
          </span>
        </div>
        <div className="flex flex-col items-center mt-5">
          <CharacterLoader></CharacterLoader>
        </div>
        <div className="flex justify-center mt-10">
          <Alert
            variant="destructive"
            className="w-1/2 rounded text-blacktext font-bold bg-alert"
          >
            <AlertTriangle className="h-4 w-4 " />
            <AlertDescription className="text-sm ">
              Results are only as good as latest API Keys provider.
              SimulationCraft can help you identify only what were the ItemsID
              markings assigned to your class specialization. Leave a star on
              <a href="#" className="underline text-whitetext ml-1">
                github.
              </a>{" "}
              Dive into SimGV get yourself involved and contribute!
            </AlertDescription>
          </Alert>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default UploadSimc;
