import { Avatar } from "@mantine/core";
import { howtoapply } from "../../Data/Data";


const Working = () => {
    return <div className="mt-20 pb-5">
        <div className="text-4xl text-center text-semibold text-silver-sand-200 mb-3">
            <span className="text-purple-heart-500">Як знайти</span> роботу?
        </div>
        <div className="text-2xl mx-auto text-silver-sand-400 text-center w-1/2 mt-4 mb-4">
            Пройдіть шлях до роботи мрії без зайвого клопоту.</div>


        <div className="flex px-20 justify-between items-center">

            {/* Main image */}
            <div className="relative">
                <img className="w-[36rem] mt-5" src="/assets/dream-job-girl-with-a-laptop.png" alt="" />

                <div className="w-36 flex top-[0%] right-[-6%] absolute flex-col items-center gap-1 border border-purple-heart-600 rounded-xl py-3 px-1 backdrop-blur-md">
                    <Avatar className="h-16 w-16" src="/assets/avatars/avatar1.jpg" />
                    <div className="text-sm font-semibold text-silver-sand-200 text-center">Complete your profile</div>
                    <div className="text-xs text-silver-sand-400">70% completed</div>
                </div>
            </div>

            {/* Text describing how to apply for a job  */}
            <div className="flex flex-col gap-10">
                {
                    howtoapply.map((item, index) => <div key={index} className="flex items-center gap-4">
                        <div className="p-2.5 bg-purple-heart-300 rounded-full">
                            <img className="w-12 h-12" src={`/assets/working/${item.title}.svg`} alt="" />
                        </div>
                        <div>
                            <div className="text-xl font-semibold text-silver-sand-200">{item.title}</div>
                            <div className="text-silver-sand-400">{item.desc}</div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </div>

}

export default Working