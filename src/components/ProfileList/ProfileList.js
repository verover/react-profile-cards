import { useSelector } from "react-redux";
import { getPayload } from "../../features/profile/profileSlice";

function ProfileList() {
    const payload = useSelector(getPayload)
    if(!payload.loading && !payload.error){
        const profileData = payload.data
        return profileData.map((profile, index) => (
            <article className='cursor-pointer cards rounded-lg shadow-inner shadow-blue-100 flex flex-row m-0 sm:py-2 justify-start px-3 items-center transition ease-in-out delay-200 hover:scale-95' key={profile.login.uuid}>
                <div>
                    <img alt="ok" className="block w-20 h-20 rounded-full"
                        src={profile.picture.large} />
                </div>
                <div className="overflow-hidden mx-2">
                    <div className="flex flex-row items-center">
                        <p className="truncate font-semibold pr-2 cursor-text">{profile.name.title}. {profile.name.first} {profile.name.last}</p> <img src={`https://flagicons.lipis.dev/flags/4x3/${profile.nat.toLowerCase()}.svg`} className="w-5 h-5"/>
                    </div>
                    <span className="cursor-text truncate">{profile.email}</span>
                    <p className="cursor-text">{profile.phone}</p>
                </div>
            </article>
        ))
    }
    console.log('please wait...');
    return 'please wait'
}

export default ProfileList;