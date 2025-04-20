import Companies from "../LandingPage/Companies"
import JobCategory from "../LandingPage/JobCategory"
import LandingPage from "../LandingPage/LandingPage"
import Subscribe from "../LandingPage/Subscribe"
import Testimonials from "../LandingPage/Testimonials"
import Working from "../LandingPage/Working"

const HomePage = () => {
    return (
        <div className="min-h-[100vh] bg-woodsmoke-950 font-['Commissioner']">

            <LandingPage />
            <Companies />
            <JobCategory />
            <Working />
            <Testimonials />
            <Subscribe />

        </div>

    )
}
export default HomePage