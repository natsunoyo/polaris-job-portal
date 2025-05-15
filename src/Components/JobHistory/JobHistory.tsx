import { Tabs } from "@mantine/core"
import JobHistoryCard from "./JobHistoryCard"
import { useEffect, useState } from "react";
import { getAllJobs } from "../../Services/JobService";
import { useSelector } from "react-redux";


const JobHistory = () => {
    const profile = useSelector((state: any) => state.profile)
    const user = useSelector((state: any) => state.user)
    const [activeTab, setActiveTab] = useState<any>('APPLIED');
    const [jobList, setJobList] = useState<any>([])
    const [showList, setShowList] = useState<any>([])

    useEffect(() => {
        getAllJobs().then((res) => {
            setJobList(res)
            setShowList(res.filter((job: any) => {
                let found = false;
                job.applicants?.forEach((applicant: any) => {
                    if (applicant.applicantID == user.id && applicant.applicationStatus == "APPLIED") {
                        found = true;
                    }
                })
                return found
            }))
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const handleTabChange = (value: string | null) => {
        setActiveTab(value)
        if (value == "SAVED") {
            setShowList(jobList.filter((job: any) => profile.savedJobs?.includes(job.id)))
        }
        else {
            setShowList(jobList.filter((job: any) => {
                let found = false;
                job.applicants?.forEach((applicant: any) => {
                    if (applicant.applicantID == user.id && applicant.applicationStatus == value) {
                        found = true;
                    }
                })
                return found
            }))
        }
    }

    return <div className="">
        <div className="text-4xl font-semibold mb-5 pl-3 pt-3">Історія</div>
        <div>
            <Tabs value={activeTab} onChange={handleTabChange} className="p-3" variant="outline" radius='md' defaultValue="applied" keepMounted={false}>
                <Tabs.List className="[&_button]:!text-xl font-semibold 
            [&_button[data-active='true']]:!text-purple-heart-400">
                    <Tabs.Tab value="APPLIED">
                        Подані заявки
                    </Tabs.Tab>
                    <Tabs.Tab value="SAVED">
                        Збережені
                    </Tabs.Tab>
                    <Tabs.Tab value="OFFERED" >
                        Пропозиції
                    </Tabs.Tab>
                    <Tabs.Tab value="PENDING" >
                        Співбесіди
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel className="p-3 mt-4" value={activeTab}>
                    <div className="mt-10 flex gap-5 flex-wrap justify-center">
                        {
                            showList.map((item: any, index: any) => <JobHistoryCard key={index} {...item} {...{ [activeTab.toLowerCase()]: true }} />)
                        }

                    </div>
                </Tabs.Panel>
            </Tabs>
        </div>

    </div>
}

export default JobHistory