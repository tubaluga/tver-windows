import Image from "next/image";
import Button from "../button/button";

const PropItem = ({ name, value }) => {
    return (
        <div className="flex flex-row justify-between">
            <p className="text-secondary-700">{name}</p>
            <p className="text-primary font-semibold">{value}</p>
        </div>
    );
};

const CardImage = ({ image }) => {
    return (
        <div className="">
            <div className="relative w-full h-[260px]">
                <div className="bg-secondary h-[200px] w-full absolute bottom-0"></div>
                <div className="absolute w-full h-[232px] left-0 right-0 bottom-7">
                    <Image
                        src={image}
                        alt="Card image"
                        fill
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

const ProfileCard = ({ profile }) => {
    return (
        <div className="lg:max-w-[399px] flex flex-col justify-between">
            <div>
                <CardImage image={profile.image} />
                <h3 className="text-primary pt-6">{profile.name}</h3>
                <p className="text-secondary-700 pt-8">{profile.description}</p>
                <div className="flex flex-col gap-2 pt-8">
                    {profile.props.map((prop, index) => (
                        <PropItem key={index} name={prop.name} value={prop.value} />
                    ))}
                </div>
            </div>

            <Button label={"Заказать"} style={"w-full mt-14"} />
        </div>
    );
};

export default ProfileCard;
