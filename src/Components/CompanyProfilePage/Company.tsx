import { Avatar, Divider, Tabs } from "@mantine/core"
import { IconBriefcase, IconMapPin } from "@tabler/icons-react"
import AboutCompany from "./AboutCompany"
import CompanyVacancies from "./CompanyVacancies"
import CompanyEmployees from "./CompanyEmployees"

const Company = (props: any) => {
    return <div className="w-2/3 p-3">
        {/* Company`s header */}
        <div className="relative">
            <img className="rounded-t-2xl" src="/assets/profilePage/banner.jpg" alt="" />
            <img className=" w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-woodsmoke-950 border-8 bg-woodsmoke-950" src="/icons/Glyanets.svg"
                onError={(e) => {
                    const img = e.currentTarget;

                    if (img.src.endsWith('.svg')) {
                        img.src = `/icons/${props.company}.png`;
                    }

                    else if (img.src.endsWith('.png')) {
                        img.src = '/icons/default.png';
                    }
                }}
                alt="" />
        </div>
        <div className="mt-24 px-5">
            <div className="text-3xl font-semibold flex justify-between">Глянець <Avatar.Group className="justify-center">
                <Avatar src="/avatars/avatar1.jpg" />
                <Avatar src="/avatars/avatar2.png" />
                <Avatar src="/avatars/avatar3.jpg" />
                <Avatar src="/avatars/avatar5.jpg" />
                <Avatar>3k+</Avatar>
            </Avatar.Group></div>
            <div className="text-2xl flex gap-1 items-center"> <IconBriefcase className="h-5 w-5" />Компанія</div>
            <div className="text-lg flex gap-1 items-center text-silver-sand-600">
                <IconMapPin className="h-5 w-5" />Вінниця
            </div>
        </div>
        <Divider size="xs" mx="md" my="xl" />

        {/* Tabs with company description and company`s vacancies*/}
        <div>
            <Tabs className="p-3" variant="outline" radius='md' defaultValue="about">
                <Tabs.List className="[&_button]:!text-xl font-semibold 
                [&_button[data-active='true']]:!text-purple-heart-400">
                    <Tabs.Tab value="about">
                        Про нас
                    </Tabs.Tab>
                    <Tabs.Tab value="vacancies">
                        Вакансії
                    </Tabs.Tab>
                    <Tabs.Tab value="employees" >
                        Наймані на платформі працівники
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel className="p-3 mt-4" value="about">
                    <AboutCompany />
                </Tabs.Panel>

                <Tabs.Panel className="p-3 mt-4" value="vacancies">
                    <CompanyVacancies />
                </Tabs.Panel>

                <Tabs.Panel className="p-3 mt-4" value="employees">
                    <CompanyEmployees />
                </Tabs.Panel>
            </Tabs>
        </div>
    </div>
}

export default Company