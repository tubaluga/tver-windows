import { FrontDoorsGroupProfiles } from "@/app/lib/product_profile_model";
import ProfileCard from "./card";
import ProfileHeader from "./profile_header";
import ProfileGroupSection from "./profile_group_section";

const GroupProfileItem = ({ group }) => {
    return (
        <div>
            <div className="pt-16">
                <ProfileGroupSection name={group.name} />
            </div>
            <div className="flex flex-wrap justify-between gap-10 mt-16">
                {group.profiles.map((profile, index) => (
                    <ProfileCard key={index} profile={profile} />
                ))}
            </div>
        </div>
    );
};

const DoorsProfiles = ({ header, model }) => {
    return (
        <div>
            <ProfileHeader name={"Профили"} label={header} />

            {model.map((group, index) => (
                <GroupProfileItem key={index} group={group} />
            ))}
        </div>
    );
};

export const FrontDoorProfiles = () => {
    return <DoorsProfiles header={"Входные двери"} model={FrontDoorsGroupProfiles} />;
};

export const InteriorDoorProfiles = () => {
    return <DoorsProfiles header={"Межкомнатные двери"} model={FrontDoorsGroupProfiles} />;
};

export const PortalDoorProfiles = () => {
    return <DoorsProfiles header={"Порталы"} model={FrontDoorsGroupProfiles} />;
};

export const BalconyProfiles = () => {
    return <DoorsProfiles header={"Балконы и лоджии"} model={FrontDoorsGroupProfiles} />;
};

export default DoorsProfiles;
