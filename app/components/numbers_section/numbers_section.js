const NumberModel = [
    {
        number: 12,
        text: "На рынке",
        suffix: "Лет",
    },
    {
        number: 18,
        text: "Профиля",
        suffix: "Видов",
    },
    {
        number: 5,
        text: "Гарантия",
        suffix: "Лет",
    },
    {
        number: 7,
        text: "Установка",
        suffix: "Дней",
    },
];

const NumberItem = ({ item }) => {
    return (
        <div className="flex flex-col items-center gap-6">
            <div className="flex flex-row gap-2">
                <p className="text-4xl font-semibold text-background proportional-nums leading-8">{item.number}</p>
                <p className="text-secondary text-xs font-normal uppercase self-end">{item.suffix}</p>
            </div>
            <p className="uppercase text-base text-secondary max-w-40 text-center">{item.text}</p>
        </div>
    );
};

const NumberSection = () => {
    return (
        <section className="bg-primary">
            <div className="grid lg:grid-cols-4 grid-cols-2 py-14 gap-y-12 lg:divide-x divide-secondary-600">
                {NumberModel.map((item, index) => (
                    <NumberItem key={index} item={item} />
                ))}
            </div>
        </section>
    );
};

export default NumberSection;
