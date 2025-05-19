import { Badge, Tabs } from "@mantine/core"
import JobDesc from "../JobDesc/JobDesc"
import TalentCard from "../FindTalentsPage/TalentCard"
import { useEffect, useState } from "react"

const PostedJobDesc = (props: any) => {
    const [tab, setTab] = useState("overview")
    const [arr, setArr] = useState<any>({})
    const handleTabChange = (value: any) => {
        setTab(value)
        if (value == "applicants") {
            setArr(props.applicants?.filter((x: any) => x.applicationStatus == "APPLIED"))
        }
        else if (value == "invited") {
            setArr(props.applicants?.filter((x: any) => x.applicationStatus == "INTERVIEWING"))
        }
        else if (value == "offered") {
            setArr(props.applicants?.filter((x: any) => x.applicationStatus == "OFFERED"))
        }
        else if (value == "rejected") {
            setArr(props.applicants?.filter((x: any) => x.applicationStatus == "REJECTED"))
        }
    }
    useEffect(() => {
        handleTabChange('overview')
    }, [props])

    return <div className="mt-5 w-3/4 px-12">
        {props.jobTitle ? <>
            <div className="text-4xl font-semibold mb-5 flex items-center">{props.jobTitle}
                <Badge variant="light" color="purpleHeart.4" ml="md" size="lg" >{props.jobStatus}</Badge>
            </div>
            <div className="text-2xl font-medium mb-5 text-silver-sand-400">{props.location}</div>
            <div>
                <Tabs className="p-3" variant="outline" radius='md' value={tab} onChange={handleTabChange}>
                    <Tabs.List className="[&_button]:!text-xl font-semibold 
                [&_button[data-active='true']]:!text-purple-heart-400">
                        <Tabs.Tab value="overview">Огляд</Tabs.Tab>
                        <Tabs.Tab value="applicants">Кандидати</Tabs.Tab>
                        <Tabs.Tab value="invited" >Запрошені на співбесіду</Tabs.Tab>
                        <Tabs.Tab value="offered" >Пропозиції</Tabs.Tab>
                        <Tabs.Tab value="rejected" >Відхилені кандидати</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel className="p-3 mt-4 [&>div]:w-full" value="overview">
                        <JobDesc {...props} edit={true} closed={props.jobStatus == "CLOSED"} />
                    </Tabs.Panel>

                    <Tabs.Panel className="p-3 mt-4" value="applicants">
                        <div className="flex mt-10 flex-wrap gap-5 justify-around">
                            {
                                arr?.length ? arr.map((talent: any, index: any) => <TalentCard key={index} {...talent} posted />) : <div className="text-2xl font-semibold">Немає кандидатів</div>
                            }
                        </div>
                    </Tabs.Panel>

                    <Tabs.Panel className="p-3 mt-4" value="invited">
                        <div className="flex mt-10 flex-wrap gap-5 justify-around">
                            {
                                arr?.length ? arr.map((talent: any, index: any) => <TalentCard key={index} {...talent} invited />) : <div className="text-2xl font-semibold">Немає запрошених на співбесіду</div>
                            }
                        </div>
                    </Tabs.Panel>

                    <Tabs.Panel className="p-3 mt-4" value="offered">
                        <div className="flex mt-10 flex-wrap gap-5 justify-around">
                            {
                                arr?.length ? arr.map((talent: any, index: any) => <TalentCard key={index} {...talent} offered />) : <div className="text-2xl font-semibold">Немає пропозицій</div>
                            }
                        </div>
                    </Tabs.Panel>

                    <Tabs.Panel className="p-3 mt-4" value="rejected">
                        <div className="flex mt-10 flex-wrap gap-5 justify-around">
                            {
                                arr?.length ? arr.map((talent: any, index: any) => <TalentCard key={index} {...talent} rejected />) : <div className="text-2xl font-semibold">Немає відмов</div>
                            }
                        </div>
                    </Tabs.Panel>
                </Tabs>
            </div>
        </> : <div className="min-h-[70vh] text-2xl font-semibold flex justify-center items-center">Вакансії не знайдено...</div>}
    </div>

}
export default PostedJobDesc