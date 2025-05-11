import { TextInput, Avatar } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";


const LandingPage = () => {
    return (
        <div className="flex gap-20 items-center px-20">

            {/* Slogans and self-ad */}
            <div className="flex flex-col w-[50%] gap-3">
                <div className="text-7xl text-silver-sand-200 leading-tight font-bold">Знайди свою
                    <span className="text-purple-heart-500"> першу роботу</span> разом із нами!</div>
                <div className="text-2xl text-silver-sand-200 "> Шлях до великого починається з першого кроку. Обери свою першу роботу.
                </div>

                {/* Text Input */}
                <div className="flex gap-5 mt-5">
                    <TextInput className="bg-purple-heart-800/50 rounded-lg p-1 px-5 text-silver-sand-200 [&_input]:text-silver-sand-200" variant="unstyled" label="Назва посади" placeholder="Software Engineer" color="purpleHeart.2" />
                    <TextInput className="bg-purple-heart-800/50 rounded-lg p-1 px-5 text-silver-sand-200 [&_input]:text-silver-sand-200 " variant="unstyled" label="Зайнятість" placeholder="Повна зайнятість" />


                    {/* Search Button */}
                    <div className="flex items-center justify-center h-full w-20 ">
                        <IconSearch color="black" className="bg-purple-heart-300 p-1 rounded-xl h-[85%] w-[85%] hover:bg-purple-heart-500 active:bg-purple-heart-700 active:text-silver-sand-200 cursor-pointer" />
                    </div>
                </div>

            </div>

            {/* Image and mini-cards*/}

            <div className="w-[45%] flex items-center justify-center">
                <div className="w-[60rem] relative">
                    <img src="src\assets\dream-job-violet.png" alt="Reaching for a star" />

                    {/* Avatar mini-card */}
                    <div className="w-fit absolute top-[60%] left-[-15%] border-purple-heart-500 border rounded-lg p-2 backdrop-blur-md">
                        <div className="text-center mb-1 text-sm text-silver-sand-200">10k+ вже знайшли омріяну роботу</div>
                        <Avatar.Group className="justify-center">
                            <Avatar src="src\assets\avatars\avatar1.jpg" />
                            <Avatar src="src\assets\avatars\avatar2.png" />
                            <Avatar src="src\assets\avatars\avatar3.jpg" />
                            <Avatar src="src\assets\avatars\avatar4.jpg" />
                            <Avatar src="src\assets\avatars\avatar5.jpg" />
                            <Avatar>9k+</Avatar>
                        </Avatar.Group>

                    </div>

                    {/* Job listing mini card*/}
                    <div className="w-fit absolute top-[25%] right-[-10%] border-purple-heart-500 border rounded-lg p-2 backdrop-blur-md gap-5 flex flex-col">
                        <div className="flex gap-2 items-center">
                            <div className="w-10 h-10 p-1 ">
                                <img src="src\assets\google-logo.png" alt="google logo" />
                            </div>
                            <div className="text-sm text-silver-sand-200">
                                <div>Software Engineer</div>
                                <div className="text-xs">Вінниця</div>
                            </div>

                        </div>
                        <div className="flex gap-2 text-silver-sand-200 justify-between text-xs">
                            <span>1 день тому</span>
                            <span>120+ applicants</span>
                        </div>
                    </div>



                </div>

            </div>
        </div>

    )
}

export default LandingPage;
