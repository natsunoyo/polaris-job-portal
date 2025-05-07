import { Avatar, Rating } from "@mantine/core";
import { testimonials } from "../../Data/Data.tsx";

const Testimonials = () => {
    return <div>
        <div className="text-4xl text-center text-silver-sand-200 mt-20 pb-5">
            Що про нас кажуть <span className="text-purple-heart-400">користувачі</span>?
        </div>

        {/* 100% true testimonials fr fr source: trust me bro*/}
        <div className="flex justify-evenly gap-8">

            {
                testimonials.map((item, index) => <div key={index} className="flex flex-col gap-3 w-[24%] border border-purple-heart-600 rounded-xl p-3 mt-10">
                    <div className="flex gap-2 items-center">
                        <Avatar className="!h-14 !w-14" src={`src/assets/avatars/${item.avatar}`} />
                        <div>
                            <div className="text-xl font-semibold text-silver-sand-200">{item.name}</div>
                            <Rating value={item.rating} fractions={2} color="violet" readOnly />
                        </div>
                    </div>
                    <div className=" text-silver-sand-400">
                        {item.testimonial}
                    </div>
                </div>)
            }

        </div>
    </div>
}
export default Testimonials;