import { useSelector } from "react-redux";
import { getPayload } from "../../features/profile/profileSlice";
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

function ProfileList(state) {
    const payload = useSelector(getPayload)
    if(!payload.error){
        const profileData = payload.data
        return profileData.map((profile, index) => (
            <article className='cards' key={profile.login.uuid}>
                <div>
                    <img alt={profile.name.last} className="resize-none block w-16 sm:w-full max-w-sm rounded-full"
                        src={profile.picture.large} />
                </div>
                <div className="mx-2 grid grid-flow-row sm:text-center">
                    <div className="overflow-hidden flex flex-row items-center sm:justify-center">
                        <p className="truncate font-semibold pr-2 cursor-text">{profile.name.title}. {profile.name.first} {profile.name.last}</p> 
                        <img alt={profile.nat} src={`https://flagicons.lipis.dev/flags/4x3/${profile.nat.toLowerCase()}.svg`} className="w-5 h-5"/>
                    </div>
                    <div className="overflow-hidden flex flex-row items-center sm:py-1 justify-center">
                        <MailIcon className="w-5 font-light mr-2 opacity-30"/>
                        <span className="truncate">{profile.email}</span>
                    </div>
                    <div className="overflow-hidden flex flex-row items-center sm:justify-center">
                        <PhoneIcon className="w-5 font-light mr-2 opacity-30"/>
                        <span className="truncate">{profile.phone}</span>
                    </div>
                </div>
            </article>
        ))
    }
}

export default ProfileList;