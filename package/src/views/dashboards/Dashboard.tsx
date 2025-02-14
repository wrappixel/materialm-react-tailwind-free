import { Link } from "react-router"
import BlogCards from "src/components/dashboard/BlogCards"
import EarningReports from "src/components/dashboard/EarningReports"
import PopularProducts from "src/components/dashboard/PopularProducts"
import SalesProfit from "src/components/dashboard/SalesProfit"
import TotalFollowers from "src/components/dashboard/TotalFollowers"
import TotalIncome from "src/components/dashboard/TotalIncome"



const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-30">
    <div className="lg:col-span-8 col-span-12">
      <SalesProfit/>
    </div>
    <div className="lg:col-span-4 col-span-12">
          <div className="grid grid-cols-12 ">
            <div className="col-span-12 mb-30">
              <TotalFollowers />
            </div>
            <div className="col-span-12">
              <TotalIncome />
            </div>
          </div>
        </div>
    <div className="lg:col-span-8 col-span-12">
      <PopularProducts/>
    </div>
    <div className="lg:col-span-4 col-span-12 flex">
      <EarningReports/>
    </div>
    <div className="col-span-12">
      <BlogCards />
    </div>
    <div className="col-span-12 text-center">
      <p className="text-base">
        Design and Developed by{" "}
        <Link
          to="https://wrappixel.com/"
          target="_blank"
          className="pl-1 text-primary underline decoration-primary"
        >
          wrappixel.com
        </Link>
      </p>
    </div>
  </div>
  )
}

export default Dashboard