import React, { useEffect, useState } from 'react';
import ProfileList from '../ProfileList/ProfileList';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../actions/ProfileAction';
import { API_URL } from '../../config/constant';
import Loading from '../Common/Loading';
import ProfileDetail from '../ProfileDetail/ProfileDetail'

export const GET_PROFILES = "GET_LIST_PROFILES"

function Profile(props){
    const dispatch = useDispatch();
    
    const { loading } = useSelector(
        state => ({
          error: state.profiles.error,
          loading: state.profiles.loading
        })
    );
    
    const [profile, setProfile] = useState('')

    const profileDetailPrompt = (profileData) =>{
        setProfile(profileData)
    }

    useEffect(() => {
        dispatch(getUserProfile())
    }, [dispatch]);
    console.log(profile !== "");
    return (
        <section className='w-full'>
            <p className='text-sm text-right w-full mb-2'>Source: {API_URL}</p>
            {profile !== "" ?
            <ProfileDetail profileDetailPrompt={profileDetailPrompt} profile={profile}/> : null}
            {loading===true ? 
            <Loading/> : 
            <main className='grid grid-row sm:grid-cols-4 gap-3'>
                <ProfileList profileDetailPrompt={profileDetailPrompt}/>
            </main>}
        </section>
    );
}


export default connect()(Profile);