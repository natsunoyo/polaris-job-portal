
import { Carousel } from '@mantine/carousel';
import { categories } from "../../Data/Data.tsx"
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

const JobCategory = () => {
    return <div className="mt-20 pb-5">
        <div className="text-4xl text-center text-semibold text-silver-sand-200 ">
            Перегляньте різні <span className="text-purple-heart-500"> категорії вакансій</span>
        </div>
        <div className="text-2xl mx-auto text-silver-sand-400 text-center w-1/2 mt-4">Обирайте вакансії, що підходять саме вам. Розпочніть свій шлях до успіху вже зараз!</div>

        <Carousel slideSize="22%" slideGap="md" loop className="mt-16 focus-visible:[&_button]:!outline-none 
        [&_button]:!bg-purple-heart-500 [&_button]:!border-none"
            nextControlIcon={<IconArrowRight className='h-8 w-8' />}
            previousControlIcon={<IconArrowLeft className='h-8 w-8' />}
        >
            {
                categories.map((category) => <Carousel.Slide>
                    <div className="flex flex-col items-center w-64 gap-2 border border-purple-heart-600 p-5 rounded-xl 
                    hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-in-out !shadow-purple-heart-300">
                        <div className="p-2 bg-purple-heart-300 rounded-full " >
                            <img className="h-8 w-8" src={`/assets/categories/${category}.svg`}
                            />
                        </div>

                        <div className="text-silver-sand-200 text-2xl font-semibold">
                            {category}
                        </div>

                        <div className="text-silver-sand-200 text-sm text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed, numquam?
                        </div>

                        <div className="text-purple-heart-500 text-lg">
                            1k+ new jobs posted
                        </div>
                    </div>
                </Carousel.Slide>)
            }
        </Carousel>




    </div>
}

export default JobCategory