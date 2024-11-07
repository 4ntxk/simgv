import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex flex-col w-full">
      <nav className="flex items-center justify-evenly px-4 py-2 bg-zinc-950">
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="flex items-center gap-2 text-xl font-bold text-whitetext"
          >
            <div className="w-8 h-8">
              <img
                alt="Raidbots"
                className="object-contain"
                height="32"
                src="../src/assets/raidbotslogo.png"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "contain",
                }}
                width="32"
              />
            </div>
            SIMGV
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Button className="text-orangetext">LOGIN</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="gap-2 text-orangetext">
                ENGLISH
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-zinc-900 border-zinc-800"
            >
              <DropdownMenuItem className="text-orangetext">
                ENGLISH
              </DropdownMenuItem>
              <DropdownMenuItem className="text-orangetext">
                DEUTSCH
              </DropdownMenuItem>
              <DropdownMenuItem className="text-orangetext">
                ESPAÑOL
              </DropdownMenuItem>
              <DropdownMenuItem className="text-orangetext">
                FRANÇAIS
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="text-orangetext">
            <img src="../src/assets/hamburger.png" alt="" />
          </Button>
        </div>
      </nav>
    </div>
  );
}
