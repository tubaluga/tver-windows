import { PlasticWindowsProfiles } from "@/app/lib/product_profile_model";
import ProfileCard from "./card";
import ProfileHeader from "./profile_header";

const PlasticWindowsProfileList = () => {
    return (
        <div>
            <ProfileHeader name={"Профили"} label={"Пластиковые окна"} />
            <div className="flex flex-wrap gap-10 mt-16">
                {PlasticWindowsProfiles.map((profile, index) => (
                    <ProfileCard key={index} profile={profile} />
                ))}
            </div>
        </div>
    );
};

export default PlasticWindowsProfileList;
