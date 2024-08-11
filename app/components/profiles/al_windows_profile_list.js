import { PlasticWindowsProfiles } from "@/app/lib/product_profile_model";
import ProfileCard from "./card";
import ProfileHeader from "./profile_header";
import ProfileGroupSection from "./profile_group_section";

const AlWindowsProfileList = () => {
    return (
        <div>
            <ProfileHeader name={"Профили"} label={"Алюминиевые окна"} />
            <div className="pt-16">
                <ProfileGroupSection name={"Теплые"} />
            </div>
            <div className="flex flex-wrap gap-10 mt-16">
                {PlasticWindowsProfiles.map((profile, index) => (
                    <ProfileCard key={index} profile={profile} />
                ))}
            </div>

            <div className="pt-20">
                <ProfileGroupSection name={"Холодные"} />
            </div>
            <div className="flex flex-wrap gap-10 mt-16">
                {PlasticWindowsProfiles.map((profile, index) => (
                    <ProfileCard key={index} profile={profile} />
                ))}
            </div>
        </div>
    );
};

export default AlWindowsProfileList;
