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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";

const FormSchema = z.object({
  simcstring: z.string().min(100, {
    message:
      "No class/character found in input. Check for extraneous characters at the start of the text",
  }),
});

const nicknameMapping = {
  nicki: [
    "Elenthar",
    "Synthian",
    "Goly",
    "Emosnotdead",
    "Nawrot",
    "Kicorwan",
    "Kekxoxo",
    "Laedos",
    "NatureWisp",
    "Garadal",
    "Gardarug",
    "Smoczymonke",
    "Khubi",
    "Khuubii",
    "Chleban",
    "Gutal",
    "Talax",
  ],
};

export default function CharacterLoader() {
  const [matchedNickname, setMatchedNickname] = useState<string | null>(null);
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function checkForNickname(simcString: string) {
    for (const nicknames of Object.values(nicknameMapping)) {
      for (const nickname of nicknames) {
        if (simcString.includes(nickname)) {
          setMatchedNickname(nickname);
          return;
        }
      }
    }
    setMatchedNickname(null);
  }

  function onSubmit(data: z.infer<typeof FormSchema>) {
    navigate("/report", { state: { matchedNickname } });
  }
  return (
    <div className="flex flex-col gap-8 p-6 bg-bgloader rounded-xl w-1/2">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-whitetext">
          <User className="w-5 h-5 text-cyanfake" />
          <h2 className="text-lg font-semibold uppercase">Load from Armory</h2>
          <br />
        </div>
        <h2 className="text-md font-semibold uppercase text-orangetext">
          Currently we encounter issues with armory APIs
        </h2>
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
              <SelectContent className="bg-bggray border-zinc-700 text-whitetext rounded"></SelectContent>
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
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-2/3 space-y-6"
            >
              <FormField
                control={form.control}
                name="simcstring"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          checkForNickname(e.target.value);
                        }}
                        className="min-h-[200px] bg-bggray border-zinc-700"
                        placeholder="Paste SimulationCraft string here"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <button className="text-[12px] font-bold leading-[20px] min-h-[40px] rounded p-[10px_20px] cursor-pointer uppercase tracking-custom text-blacktext opacity-[0.875] bg-[#00ff88]">
                RUN SIMGV
              </button>
            </form>
          </Form>
        </div>
      </div>
      <div className="text-sm text-zinc-400">
        Load your character from the Armory or SimC addon above
      </div>
    </div>
  );
}
