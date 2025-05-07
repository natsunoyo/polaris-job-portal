import Companies from "../Components/LandingPage/Companies"
import JobCategory from "../Components/LandingPage/JobCategory"
import LandingPage from "../Components/LandingPage/LandingPage"
import Subscribe from "../Components/LandingPage/Subscribe"
import Testimonials from "../Components/LandingPage/Testimonials"
import Working from "../Components/LandingPage/Working"

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