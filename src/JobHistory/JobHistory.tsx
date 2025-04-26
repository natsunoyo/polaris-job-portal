import { Tabs } from "@mantine/core"
import { jobList } from "../Data/JobsData"
import JobHistoryCard from "./JobHistoryCard"


const JobHistory = () => {

    return <div className="">
        <div className="text-4xl font-semibold mb-5 pl-3 pt-3">Історія</div>
        <div>
            <Tabs className="p-3" variant="outline" radius='md' defaultValue="applied" keepMounted={false}>
                <Tabs.List className="[&_button]:!text-xl font-semibold 
            [&_button[data-active='true']]:!text-purple-heart-400">
                    <Tabs.Tab value="applied">
                        Подані заявки
                    </Tabs.Tab>
                    <Tabs.Tab value="saved">
                        Збережені
                    </Tabs.Tab>
                    <Tabs.Tab value="offered" >
                        Пропозиції
                    </Tabs.Tab>
                    <Tabs.Tab value="interviewing" >
                        Співбесіди
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel className="p-3 mt-4" value="applied">
                    <div className="mt-10 flex gap-5 flex-wrap justify-center">
                        {
                            jobList.map((job, index) => <JobHistoryCard key={index} {...job} applied />)
                        }

                    </div>
                </Tabs.Panel>

                <Tabs.Panel className="p-3 mt-4" value="saved">
                    <div className="mt-10 flex gap-5 flex-wrap justify-center">
                        {
                            jobList.map((job, index) => <JobHistoryCard key={index} {...job} saved />)
                        }
                    </div>
                </Tabs.Panel>

                <Tabs.Panel className="p-3 mt-4" value="offered">
                    <div className="mt-10 flex gap-5 flex-wrap justify-center">
                        {
                            jobList.map((job, index) => <JobHistoryCard key={index} {...job} offered />)
                        }
                    </div>
                </Tabs.Panel>

                <Tabs.Panel value="interviewing" >
                    <div className="mt-10 flex gap-5 flex-wrap justify-center">
                        {
                            jobList.map((job, index) => <JobHistoryCard key={index} {...job} interviewing />)
                        }
                    </div>
                </Tabs.Panel>
            </Tabs>
        </div>

    </div>
}

export default JobHistory