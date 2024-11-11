import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { User, ArrowRightFromLine } from "lucide-react";

export default function CharacterLoader() {
  return (
    <div className="flex flex-col gap-8 p-6 bg-bgloader rounded-xl w-1/2">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-whitetext">
          <User className="w-5 h-5 text-cyanfake" />
          <h2 className="text-lg font-semibold uppercase">Load from Armory</h2>
          <br />
        </div>
          <h2 className="text-md font-semibold uppercase text-orangetext">Currently we encounter issues with armory APIs</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <label className="text-sm text-graytext">Region</label>
            <Select defaultValue="US">
              <SelectTrigger className="bg-bggray text-whitetext border-zinc-700 rounded ">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent className="bg-bggray text-whitetext border-zinc-700">
                <SelectItem value="US">US</SelectItem>
                <SelectItem value="EU">EU</SelectItem>
                <SelectItem value="KR">KR</SelectItem>
                <SelectItem value="TW">TW</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-graytext">Realm</label>
            <Select>
              <SelectTrigger className="bg-bggray border-zinc-700 text-gray-400 rounded">
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent className="bg-bggray border-zinc-700 text-whitetext rounded">
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-graytext">Character</label>
            <Input
              type="text"
              placeholder=""
              className="bg-bggray border-zinc-700 text-whitetext"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-zinc-700"></div>
        <span className="text-cyan-400 text-sm font-medium">OR</span>
        <div className="flex-1 h-px bg-zinc-700"></div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 text-whitetext">
          <ArrowRightFromLine className="w-5 h-5 text-cyanfake" />
          <h2 className="text-lg font-semibold uppercase">
            Load from SimC Addon
          </h2>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-sm text-whitetext">
              Copy/paste the text from the SimulationCraft addon.
            </span>
            <a href="#" className="text-sm text-orangetext">
              How to install and use the SimC addon
            </a>
          </div>
          <Textarea
            className="min-h-[200px] bg-bggray border-zinc-700"
            placeholder=""
          />
        </div>
      </div>
      <div className="text-sm text-zinc-400">
        Load your character from the Armory or SimC addon above
      </div>
      <div>
        <button className="text-[12px] font-bold leading-[20px] min-h-[40px] rounded p-[10px_20px] cursor-pointer  uppercase tracking-custom text-blacktext opacity-[0.875] bg-[#00ff88]">
          RUN SIMGV
        </button>
      </div>
    </div>
  );
}
