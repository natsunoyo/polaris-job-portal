import { formatDate } from "../../Services/Utilities";

const CoursesCard = (props: any) => {
    return <div className="flex flex-col gap-2">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-woodsmoke-800 rounded-md">
                    <img className="h-7" src={`/assets/companies/${props.company}.png`}
                        onError={(e) => {
                            const img = e.currentTarget;

                            if (img.src.endsWith('.svg')) {
                                img.src = `/icons/${props.company}.png`;
                            }

                            else if (img.src.endsWith('.png')) {
                                img.src = '/icons/default.png';
                            }
                        }} alt="" />
                </div>
                <div className="flex flex-col">
                    <div className="font-semibold">{props.title}</div>
                    <div className="text-sm text-silver-sand-400">{props.company}</div>
                </div>
            </div>
            <div className="text-md text-silver-sand-400">
                {formatDate(props.startDate)}- {formatDate(props.endDate)}
            </div>
        </div>
    </div>
}

export default CoursesCard