import facebookIcon from "../../assets/basicIcon/facebookIcon.svg";
import linkedinIcon from "../../assets/basicIcon/linkedinIcon.svg";

const Footer = () => {
  return (
    <footer className=" px-16 py-12 bg-[#f7f7f7] border-t border-[#dddddd] text-sm text-[#222222]">
      <section className=" flex flex-row gap-8 justify-between">
        <div className="flex flex-col gap-4 opacity-80">
          <h6 className="font-semibold">Support</h6>
          <p>Help Center</p>
          <p>Get help with a safety issue</p>
          <p>MotelCover</p>
          <p>Supporting people with disabilities</p>
          <p>Cancelation options</p>
          <p>Our Covid-19 response</p>
          <p>Report a neighborhood concern</p>
        </div>
        <div className="flex flex-col gap-4 opacity-80">
          <h6 className="font-semibold">Community</h6>
          <p>Motel.org: Disaster relief housing</p>
          <p>Combating discrimination</p>
        </div>
        <div className="flex flex-col gap-4 opacity-80">
          <h6 className="font-semibold">Hosting</h6>
          <p>Motel your home</p>
          <p>MotelCover for Hosts</p>
          <p>Explore hosting resources</p>
          <p>Visit our community forum</p>
          <p>How to host responsibly</p>
          <p>Motel friendly apartments</p>
        </div>
        <div className="flex flex-col gap-4 opacity-80">
          <h6 className="font-semibold">Motel</h6>
          <p>Newsroom</p>
          <p>MotelCover for Hosts</p>
          <p>Explore hosting resources</p>
          <p>Visit our community forum</p>
          <p>How to host responsibly</p>
          <p>Motel friendly apartments</p>
        </div>
      </section>
      <hr className="bg-[#f7f7f7] mt-10 mb-6" />
      <section className=" flex flex-row justify-between gap-10">
        <div className=" flex flex-row items-center">
          <p>© 2023 Motel, Inc.</p>
          <span className=" p-3">·</span>
          <p>Terms</p>
          <span className=" p-3">·</span>
          <p>Privacy</p>
          <span className=" p-3">·</span>
          <p>Your Privacy Choices</p>
        </div>
        <div className=" flex flex-row gap-5 min-w-[120px] items-center">
          <p>English (US)</p>
          <img src={facebookIcon} alt="Facebook" className=" w-6" />
          <img src={linkedinIcon} alt="Linkedin" className=" w-6" />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
