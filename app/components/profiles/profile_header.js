const ProfileHeader = ({ name, label }) => {
    return (
        <div>
            <p className="h1_sup text-secondary-700">{label}</p>
            <h1 className="text-primary pt-6">{name}</h1>
        </div>
    );
};

export default ProfileHeader;
