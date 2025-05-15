import { IconArrowLeft, IconComet, IconSparkles } from "@tabler/icons-react"
import SignUp from "../Components/SignUpLoginPages/SignUp"
import { useLocation, useNavigate } from "react-router-dom"
import Login from "../Components/SignUpLoginPages/Login";
import { Button } from "@mantine/core";

const SignUpPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return <div className="min-h-[90vh] bg-woodsmoke-950 font-['Commissioner'] overflow-hidden relative">
        <Button className="!absolute left-5 top-5 z-10" onClick={() => navigate("/")} leftSection={<IconArrowLeft size={20} />} variant="light" color="purpleHeart.2">На головну</Button>
        <div className={`w-[100vw] h-[100vh] transition-all ease-in-out duration-500 flex [&>*]:flex-shrink-0 ${location.pathname == '/signup' ? '-translate-x-1/2' : 'translate-x-0'}`}>
            <Login />
            <div className=" flex left-[87%] absolute text-purple-heart-200">
                <IconSparkles stroke={1.2} size={190} />
            </div >
            <div className=" flex top-[10%] right-[45%] rotate-90 absolute text-purple-heart-200">
                <IconComet stroke={1.2} size={170} />
            </div>
            <div className={`w-1/2 h-full  transition-all ease-in-out duration-500 ${location.pathname == "/signup" ? "rounded-r-full" : "rounded-l-full"} bg-woodsmoke-900 flex flex-col items-center justify-center gap-3`}>
                <div className="flex gap-3 items-center" >
                    <img src="\assets\star.svg" className="h-35 w-35" />
                    <div className="text-8xl font-semibold flex gap-5 text-purple-heart-400">Polaris</div>
                </div>
                <div className="text-3xl text-woodsmoke-300 font-semibold">
                    Your guiding star of your career journey
                </div>
            </div>
            <div className="flex bottom-[0%] right-[40%] rotate-180 absolute text-purple-heart-200">
                <IconSparkles stroke={1.2} size={120} />
            </div>
            <SignUp />
        </div>
    </div>
}

export default SignUpPage