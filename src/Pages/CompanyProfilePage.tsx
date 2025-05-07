import { Button } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link, useNavigate } from "react-router-dom"
import Company from "../Components/CompanyProfilePage/Company";
import SimilarCompanies from "../Components/CompanyProfilePage/SimilarCompaines";

const CompanyProfilePage = () => {
    const navigate = useNavigate();


    return <div className="min-h-[100vh] bg-woodsmoke-950 font-['Commissioner']">

        <Link className="my-4 px-5 inline-block" to="/talents">
            <Button onClick={() => navigate(-1)} leftSection={<IconArrowLeft size={20} />} variant="light" color="purpleHeart.2">Назад</Button>
        </Link>
        <div className="flex gap-15">
            <Company />
            <SimilarCompanies />
        </div>
    </div>
}

export default CompanyProfilePage