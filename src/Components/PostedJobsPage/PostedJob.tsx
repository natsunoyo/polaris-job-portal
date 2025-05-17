import { Tabs } from "@mantine/core"
import PostedJobCard from "./PostedJobCard"
import { useEffect, useState } from "react"

const PostedJob = (props: any) => {
    const [activeTab, setActiveTab] = useState<string | null>('ACTIVE')
    useEffect(() => {
        setActiveTab(props.job?.jobStatus || 'ACTIVE')
    }, [props.job])

    return <div className="w-1/6 mt-5">
        <div className="text-4xl font-semibold mb-5">Опубліковані вакансії</div>
        <div>
            <Tabs autoContrast variant="pills" value={activeTab} onChange={setActiveTab}>
                <Tabs.List className="[&_button[aria-selected='false']]:!bg-woodsmoke-900 font-medium [&_button]:!bg-purple-heart-600 ">
                    <Tabs.Tab value="ACTIVE">
                        Активні [{props.jobList?.filter((job: any) => job?.jobStatus === "ACTIVE").length}]
                    </Tabs.Tab>
                    <Tabs.Tab value="DRAFT">
                        Чернетки [{props.jobList?.filter((job: any) => job?.jobStatus === "DRAFT").length}]
                    </Tabs.Tab>
                    <Tabs.Tab value="CLOSED">
                        Закриті [{props.jobList?.filter((job: any) => job?.jobStatus === "CLOSED").length}]
                    </Tabs.Tab>

                </Tabs.List>
            </Tabs>
        </div>

        <div className="flex flex-col gap-5 mt-5">
            {
                props.jobList?.filter((job: any) => job?.jobStatus == activeTab).map((item: any, index: any) => < PostedJobCard key={index} {...item} />)
            }
        </div>



    </div>
}
export default PostedJob