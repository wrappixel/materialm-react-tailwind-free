import UpgradePlan from "/src/assets/images/backgrounds/upgrade.svg";
import { Button } from "src/components/ui/button";

const Upgrade = () => {
  return (
    <>
      <div className="px-5 mt-2 relative">
        <div className="bg-lightprimary py-4 px-5 rounded-xl ">
          <div className="grid grid-cols-12">
            <div className="col-span-7">
              <h6 className="text-base text-dark">Check Pro Version</h6>
              <Button variant="default" className="mt-3 rounded-full font-medium" render={<a href="https://wrappixel.com/templates/materialm-tailwind-react-admin-template/?ref=376#demos" target="_blank" >Check</a>} />
            </div>
            <img src={UpgradePlan} alt="upgrade" className="absolute h-24 w-24 inset-e-0" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Upgrade;
