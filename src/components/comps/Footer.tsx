import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="mt-10 py-4 bg-bgfooter opacity-50">
      <Separator className="mb-8" />
      <div className="flex justify-evenly">
        <div className="space-y-4 mr-44">
          <h3 className="text-whitetext font-bold tracking-custom mb-4">ETC</h3>
          <nav className="flex flex-col space-y-4 opacity-50">
            <a
              href="https://www.raidbots.com/developers"
              className="text-footertext text-sm"
            >
              Developers
            </a>
            <a
              href="https://medium.com/raidbots"
              className="text-footertext text-sm"
            >
              Blog Archive
            </a>
            <a
              href="https://www.youtube.com/watch?v=OjNpRbNdR7E&ab_channel=MeheandusRevolution"
              className="text-footertext text-sm"
            >
              Terms of Use
            </a>
            <a
              href="https://www.raidbots.com/privacy"
              className="text-footertext text-sm"
            >
              Privacy Policy
            </a>
          </nav>
        </div>
        <div className="space-y-4">
          <h3 className="text-whitetext font-bold tracking-custom mb-4">
            CONTACT
          </h3>
          <nav className="flex flex-col space-y-4 opacity-50">
            <a
              href="https://support.raidbots.com/"
              className="text-footertext  text-sm"
            >
              Support / Help
            </a>
            <a
              href="https://discord.com/invite/86EF64Q"
              className="text-footertext text-sm"
            >
              Raidbots Discord
            </a>
            <a href="#" className="text-whitetext text-sm">
              Made by Seriallos
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
