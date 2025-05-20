import TalentCard from "./TalentCard"
import Sort from "../FindJobPage/Sort"
import { useEffect, useState } from "react"
import { getAllProfiles } from "../../Services/ProfileService"
import { useDispatch, useSelector } from "react-redux"
import { resetFilter } from "../../Slices/FilterSlice"

const Talents = () => {
    const dispatch = useDispatch()
    const [talents, setTalents] = useState<any>([])
    const filter = useSelector((state: any) => state.filter)
    const [filteredTalents, setFilteredTalents] = useState<any>([])
    const sort = useSelector((state: any) => state.sort)

    useEffect(() => {
        dispatch(resetFilter())
        getAllProfiles().then((res) => {
            setTalents(res)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    useEffect(() => {
        if (sort === "За зарплатою (від найменшої до найбільшої)") {
            setTalents(
                [...talents].sort((a: any, b: any) => a.expectedSalary - b.expectedSalary)
            );
        } else if (sort === "За зарплатою (від найбільшої до найменшої)") {
            setTalents(
                [...talents].sort((a: any, b: any) => b.expectedSalary - a.expectedSalary)
            );
        }

    }, [sort])

    useEffect(() => {
        let filterTalent = talents
        // console.log(filter)

        if (filter.name) filterTalent = filterTalent.filter((talent: any) => talent.name.toLowerCase().includes(filter.name.toLowerCase()))
        if (filter["Назва посади"] && filter["Назва посади"].length > 0) {
            filterTalent = filterTalent.filter((talent: any) => filter["Назва посади"]?.some((title: any) => talent.jobTitle.toLowerCase().includes(title.toLowerCase())))
        }
        if (filter["Місце проживання"] && filter["Місце проживання"].length > 0) {
            filterTalent = filterTalent.filter((talent: any) => filter["Місце проживання"]?.some((location: any) => talent.location.toLowerCase().includes(location.toLowerCase())))
        }
        if (filter["Навички"] && filter["Навички"].length > 0) {
            filterTalent = filterTalent.filter((talent: any) => filter["Навички"]?.some((skill: any) => talent.skills?.some((talentSkill: any) => talentSkill.toLowerCase().includes(skill.toLowerCase()))))
        }
        if (filter.expectedSalary && filter.expectedSalary.length > 0) {
            filterTalent = filterTalent.filter((talent: any) => filter.expectedSalary[0] <= talent.expectedSalary && talent.expectedSalary <= filter.expectedSalary[1])
        }


        setFilteredTalents(filterTalent)
    }, [filter, talents])

    return <div className="p-5">
        <div className="flex justify-between">
            <div className="text-silver-sand-200 text-2xl font-semibold">Кандидати</div>
            <Sort />
        </div>
        <div className="mt-10 flex gap-5 flex-wrap justify-center">
            {
                filteredTalents.length
                    ? filteredTalents.map((talent: any, index: any) => <TalentCard key={index} {...talent} />)
                    : <div className="text-xl font-semibold flex items-center justify-center">За вашими критеріями кандидатів не знайдено.</div>
            }
        </div>

    </div>
}
export default Talents