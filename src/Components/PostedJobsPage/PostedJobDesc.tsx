import { Badge, Tabs } from "@mantine/core"
import JobDesc from "../JobDesc/JobDesc"
import TalentCard from "../FindTalentsPage/TalentCard"

const PostedJobDesc = (props: any) => {
    return <div className="mt-5 w-3/4 px-12">
        {props.jobTitle ? <>
            <div className="text-4xl font-semibold mb-5 flex items-center">{props.jobTitle}
                <Badge variant="light" color="purpleHeart.4" ml="md" size="lg" >{props.jobStatus}</Badge>
            </div>
            <div className="text-2xl font-medium mb-5 text-silver-sand-400">{props.location}</div>
            <div>
                <Tabs className="p-3" variant="outline" radius='md' defaultValue="overview">
                    <Tabs.List className="[&_button]:!text-xl font-semibold 
                [&_button[data-active='true']]:!text-purple-heart-400">
                        <Tabs.Tab value="overview">Огляд</Tabs.Tab>
                        <Tabs.Tab value="applicants">Кандидати</Tabs.Tab>
                        <Tabs.Tab value="invited" >Запрошені на співбесіду</Tabs.Tab>
                        <Tabs.Tab value="offered" >Пропозиції</Tabs.Tab>
                        <Tabs.Tab value="rejected" >Відхилені кандидати</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel className="p-3 mt-4 [&>div]:w-full" value="overview">
                        <JobDesc {...props} edit={true} />
                    </Tabs.Panel>

                    <Tabs.Panel className="p-3 mt-4" value="applicants">
                        <div className="flex mt-10 flex-wrap gap-5 justify-around">
                            {
                                props.applicants?.filter((x: any) => x.applicationStatus == "APPLIED").map((talent: any, index: any) => <TalentCard key={index} {...talent} posted />)
                            }
                        </div>
                    </Tabs.Panel>

                    <Tabs.Panel className="p-3 mt-4" value="invited">
                        <div className="flex mt-10 flex-wrap gap-5 justify-around">
                            {
                                props.applicants?.filter((x: any) => x.applicationStatus == "INTERVIEWING").map((talent: any, index: any) => <TalentCard key={index} {...talent} invited />)
                            }
                        </div>
                    </Tabs.Panel>

                    <Tabs.Panel className="p-3 mt-4" value="offered">
                        <div className="flex mt-10 flex-wrap gap-5 justify-around">
                            {
                                props.applicants?.filter((x: any) => x.applicationStatus == "OFFERED").map((talent: any, index: any) => <TalentCard key={index} {...talent} offered />)
                            }
                        </div>
                    </Tabs.Panel>

                    <Tabs.Panel className="p-3 mt-4" value="rejected">
                        <div className="flex mt-10 flex-wrap gap-5 justify-around">
                            {
                                props.applicants?.filter((x: any) => x.applicationStatus == "REJECTED").map((talent: any, index: any) => <TalentCard key={index} {...talent} rejected />)
                            }
                        </div>
                    </Tabs.Panel>
                </Tabs>
            </div>
        </> : <div className="min-h-[70vh] text-2xl font-semibold flex justify-center items-center">Вакансії не знайдено...</div>}
    </div>

}
export default PostedJobDesc