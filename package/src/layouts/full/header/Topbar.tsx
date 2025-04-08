import { Icon } from "@iconify/react/dist/iconify.js";
import wrappixel_logo from "/src/assets/images/logos/logo-wrappixel.svg";
import { Link } from "react-router";
import { Dropdown } from "flowbite-react/components/Dropdown";


const Topbar = () => {
    const dropdownItems = [
        {
            id: 1,
            title: "React Preview",
            href: "https://www.wrappixel.com/templates/materialm-tailwind-react-admin-template/?ref=376#demos"
        },
        {
            id: 2,
            title: "Bootstrap Preview",
            href: "https://www.wrappixel.com/templates/materialm-admin-dashboard-template/?ref=376#demos"
        },
        {
            id: 3,
            title: "Angular Preview",
            href: "https://www.wrappixel.com/templates/materialm-material-angular-dashboard-template/?ref=376#demos"
        },
        {
            id: 4,
            title: "Vuejs Preview",
            href: "https://www.wrappixel.com/templates/materialm-vuejs-vuetify-admin-template/?ref=376#demos"
        },
        {
            id: 5,
            title: "Nextjs Preview",
            href: "https://www.wrappixel.com/templates/materialm-next-js-tailwind-dashboard-template/?ref=376#demos"
        },

        {
            id: 6,
            title: "Buy React Version",
            href: "https://www.wrappixel.com/templates/materialm-tailwind-react-admin-template/?ref=376#package-card"
        },
        {
            id: 7,
            title: "Buy Bootstrap Version",
            href: "https://www.wrappixel.com/templates/materialm-admin-dashboard-template/?ref=376#package-card"
        },
        {
            id: 8,
            title: "Buy Angular Version",
            href: "https://www.wrappixel.com/templates/materialm-material-angular-dashboard-template/?ref=376#package-card"
        },
        {
            id: 9,
            title: "Buy Vuejs Version",
            href: "https://www.wrappixel.com/templates/materialm-vuejs-vuetify-admin-template/?ref=376#package-card"
        },
        {
            id: 10,
            title: "Buy Nextjs Version",
            href: "https://www.wrappixel.com/templates/materialm-next-js-tailwind-dashboard-template/?ref=376#package-card"
        },

    ]
    return (
        <div className="py-3 px-4 bg-dark z-40 sticky top-0">
            <div className="flex items-center lg:justify-between flex-wrap justify-center">
                <div className="flex items-center gap-12">
                    <img src={wrappixel_logo} alt="logo" />
                    <div className="lg:flex items-center gap-3 hidden">
                        <Link to="https://support.wrappixel.com/" className="flex items-center gap-1 text-white bg-transparent hover:bg-primary py-2 px-3 rounded-md">
                            <Icon icon="tabler:lifebuoy" className="shrink-0 text-[19px]" />
                            <h4 className="text-sm font-medium leading-none text-white">Support</h4>
                        </Link>
                        <Link to="https://www.wrappixel.com" className="flex items-center gap-1 text-white bg-transparent hover:bg-primary py-2 px-3 rounded-md">
                            <Icon icon="tabler:gift" className="shrink-0 text-[19px]" />
                            <h4 className="text-sm font-medium leading-none text-white">Templates</h4>
                        </Link>
                        <Link to="https://www.wrappixel.com/hire-us/" className="flex items-center gap-1 text-white bg-transparent hover:bg-primary py-2 px-3 rounded-md">
                            <Icon icon="tabler:briefcase" className="shrink-0 text-[19px]" />
                            <h4 className="text-sm font-medium leading-none text-white">Hire Us</h4>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap justify-center lg:mt-0 mt-2">
                    <h4 className="text-lg font-medium text-white">Check MaterialM Premium Version</h4>
                    <Dropdown label={
                        <div className="flex items-center gap-1">
                            <Icon icon="tabler:device-laptop" className="text-lg" />
                            <p className="text-[15px]">Live Preview</p>
                        </div>
                    } color="outlineprimary" size="sm" className="py-2" >
                        {
                            dropdownItems.slice(0,5).map((item) => {
                                return (
                                    <Dropdown.Item className="flex items-center gap-1 text-sm py-2.5 px-4 group" target="_blank" as={Link} to={item.href} icon={() => <Icon icon="tabler:external-link" className="text-lg text-link group-hover:text-primary" />}>{item.title}</Dropdown.Item>
                                )
                            })
                        }
                    </Dropdown>
                    <Dropdown label={
                        <div className="flex items-center gap-1">
                            <Icon icon="tabler:shopping-cart" className="text-lg" />
                            <p className="text-[15px]">Buy Now</p>
                        </div>
                    } color="primary" size="sm" >
                        {
                            dropdownItems.slice(5,10).map((item) => {
                                return (
                                    <Dropdown.Item className="flex items-center gap-1 text-sm py-2.5 px-4 group" target="_blank" as={Link} to={item.href} icon={() => <Icon icon="tabler:external-link" className="text-lg text-link group-hover:text-primary" />}>{item.title}</Dropdown.Item>
                                )
                            })
                        }
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default Topbar