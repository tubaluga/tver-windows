import Image from "next/image";
import TopCornerImage from "@/public/top_corner.svg";
import BottomCornerImage from "@/public/bottom_corner.svg";

const HeroImage = ({ image }) => {
    return (
        <div className="relative">
            <div className="absolute left-0">
                <Image src={TopCornerImage} alt={"Image"} />
            </div>
            <div className="p-[26px] w-full h-full flex items-center place-content-center">
                <Image src={image} alt={"Image"} />
            </div>
            <div className="absolute bottom-0 right-0">
                <Image src={BottomCornerImage} alt={"Image"} />
            </div>
        </div>
    );
};

export default HeroImage;
