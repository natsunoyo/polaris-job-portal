import { Badge, Tabs } from "@mantine/core"
import JobDesc from "../JobDesc/JobDesc"
import { talentsData } from "../../Data/TalentsData"
import TalentCard from "../FindTalentsPage/TalentCard"

const PostedJobDesc = () => {
    return <div className="mt-5 w-3/4 px-12">
        <div className="text-4xl font-semibold mb-5 flex items-center">Software Engineer
            <Badge variant="light" color="purpleHeart.4" ml="md" size="lg" >Badge</Badge>
        </div>
        <div className="text-2xl font-medium mb-5 text-silver-sand-400">Location</div>
        <div>
            <Tabs className="p-3" variant="outline" radius='md' defaultValue="overview">
                <Tabs.List className="[&_button]:!text-xl font-semibold 
                [&_button[data-active='true']]:!text-purple-heart-400">
                    <Tabs.Tab value="overview">
                        Огляд
                    </Tabs.Tab>
                    <Tabs.Tab value="applicants">
                        Кандидати
                    </Tabs.Tab>
                    <Tabs.Tab value="invited" >
                        Запрошені на співбесіду
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel className="p-3 mt-4 [&>div]:w-full" value="overview">
                    <JobDesc edit />
                </Tabs.Panel>

                <Tabs.Panel className="p-3 mt-4" value="applicants">
                    <div className="flex mt-10 flex-wrap gap-5 justify-around">
                        {
                            talentsData.map((talent, index) => index < 6 && <TalentCard key={index} {...talent} posted />)
                        }
                    </div>
                </Tabs.Panel>

                <Tabs.Panel className="p-3 mt-4" value="invited">
                    <div className="flex mt-10 flex-wrap gap-5 justify-around">
                        {
                            talentsData.map((talent, index) => index < 6 && <TalentCard key={index} {...talent} invited />)
                        }
                    </div>
                </Tabs.Panel>
            </Tabs>
        </div>
    </div>
}
export default PostedJobDesc