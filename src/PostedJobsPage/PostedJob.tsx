import { Tabs } from "@mantine/core"
import { activeJobs } from "../Data/PostedJobsData"
import PostedJobCard from "./PostedJobCard"

const PostedJob = () => {
    return <div className="w-1/6 mt-5">
        <div className="text-4xl font-semibold mb-5">Опубліковані вакансії</div>
        <div>
            <Tabs autoContrast variant="pills" defaultValue="active">
                <Tabs.List className="[&_button[aria-selected='false']]:!bg-woodsmoke-900 font-medium [&_button]:!bg-purple-heart-600 ">
                    <Tabs.Tab value="active">Активні [4]</Tabs.Tab>
                    <Tabs.Tab value="draft">Чернетки [1]</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="active">
                    <div className="flex flex-col gap-5 mt-5">
                        {
                            activeJobs.map((job, index) => <PostedJobCard key={index} {...job} />)
                        }
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="draft">
                    no drafts...
                </Tabs.Panel>
            </Tabs>
        </div>
    </div>
}
export default PostedJob