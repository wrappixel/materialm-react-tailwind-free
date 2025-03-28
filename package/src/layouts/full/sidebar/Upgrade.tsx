import { Button } from "flowbite-react";
import UpgradePlan from "/src/assets/images/backgrounds/upgrade.svg";
import { Link } from "react-router";
const Upgrade = () => {
  return (
    <>
      <div className="px-5 mt-2 relative">
        <div className="bg-lightprimary py-4 px-5 rounded-xl ">
          <div className="grid grid-cols-12">
            <div className="col-span-7">
              <h6 className="text-base text-dark">Check Pro
              Version</h6>
              <Button color={"primary"} className="mt-3 rounded-full font-medium" target="_blank" as={Link} to="https://www.wrappixel.com/templates/materialm-tailwind-react-admin-template/?ref=376#demos">
                Check
              </Button>
            </div>
            <img src={UpgradePlan} alt="upgrade" className="absolute h-24 w-24 end-0" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Upgrade;
