import { XIcon } from '@heroicons/react/outline'
import { connect } from 'react-redux'

function ProfileDetail(props) {
    let profile = props.data.filter(profile => profile.login.uuid === props.profile)[0]
    console.log(profile);

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];


    function dateConverter(date){
        const d = new Date(date)
        return `${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}`
    }

    return (
        <div className="fixed z-50 flex justify-center items-center inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className=" relative mx-auto p-5 bg-white w-3/4 m-2 sm:w-6/12 shadow-lg rounded-md bg-none">
                {/* Header in Modal */}
                <div className='flex flex-row items-center justify-between mb-2'>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Detail Profile Cards
                    </h3>
                    <XIcon onClick={() => {props.profileDetailPrompt("")}} className='w-4 opacity-50' />
                </div>
                {/* Main Modal */}
                <div className='flex sm:flex-row flex-col sm:justify-around'>
                    <img alt={profile.login.username} className="w-32 my-3 sm:w-24 sm:h-24 max-w-sm sm:rounded-full self-center" src={profile.picture.medium} />
                    <div className='sm:flex-1 sm:ml-4'>
                        <div>
                            <p className="text-xs font-semibold">
                                Name
                            </p>
                            <p className="text-sm">
                                {`${profile.name.title}. ${profile.name.first} ${profile.name.last}`}
                            </p>
                        </div>
                        <div className='my-3'>
                            <p className="text-xs font-semibold">
                                Date of Birth
                            </p>
                            <p className="text-sm">
                                {dateConverter(profile.dob.date)}
                            </p>
                        </div>
                        <div>
                            <p className="text-xs font-semibold">
                                Age
                            </p>
                            <p className="text-sm">
                                {`${profile.dob.age} Years Old`}
                            </p>
                        </div>
                    </div>
                    <div className='sm:mt-0 flex-1 sm:mx-2 sm:pr-3 my-3 sm:border-r'>
                        <div>
                            <p className="text-xs font-semibold">
                                Address
                            </p>
                            <p className="text-sm">
                                {`${profile.location.street.name}, No. ${profile.location.street.number}, ${profile.location.city}, ${profile.location.state}, ${profile.location.country}. ${profile.location.postcode}.`}
                            </p>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div>
                            <p className="text-xs font-semibold">
                                Register Date
                            </p>
                            <p className="text-sm">
                                {dateConverter(profile.registered.date)}
                            </p>
                            <small className='opacity-70'>{`${profile.registered.age} years ago`}</small>
                        </div>
                        <div className='my-3'>
                            <p className="text-xs font-semibold">
                                Login information
                            </p>
                            <p className="text-xs">
                                Uname: {`${profile.login.username}`}
                            </p>
                            <p className="text-xs">
                                Password: {`${profile.login.password}`}
                            </p>
                        </div>
                    </div>
                </div>
                {/* Maps Modal */}
                <div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        loading: state.profiles.loading,
        data: state.profiles.data,
        error: state.profiles.error,
    }
}
export default connect(mapStateToProps)(ProfileDetail)