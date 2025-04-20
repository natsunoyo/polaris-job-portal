import { Button, TextInput } from "@mantine/core"

const Subscribe = () => {
    return <div className="mt-20 flex item-center bg-woodsmoke-900 mx-20 py-3 rounded-xl justify-around">
        <div className="text-4xl w-2/5 text-center text-semibold text-silver-sand-200">
            Не хочете пропускати важливих новин щодо <span className="text-purple-heart-500">нових вакансій?</span>
        </div>

        <div className="flex gap-4 rounded-xl bg-woodsmoke-700 px-3 py-2 items-center">
            <TextInput
                className="[&_input]:text-silver-sand-200 font-semibold"
                variant="unstyled"
                placeholder="your@email.com"
                size="xl"

            />
            <Button size="lg" className="rounded-xl" variant="filled" color="purpleHeart.4">Підписатися</Button>

        </div>
    </div>
}
export default Subscribe