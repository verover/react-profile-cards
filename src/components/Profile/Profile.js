import React, { useEffect } from 'react';
import ProfileList from '../ProfileList/ProfileList';
import { useDispatch } from 'react-redux';
import { getUserProfile } from '../../actions/ProfileAction';
import { API_URL } from '../../config/constant';

export const GET_PROFILES = "GET_LIST_PROFILES"

function Profile(){
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getUserProfile())
    },);
    return (
        <section className='w-full'>
            <p className='text-sm text-right w-full mb-2'>Source: {API_URL}</p>
            <main className='grid grid-row sm:grid-cols-4 gap-3'>
                <ProfileList/>
            </main>
        </section>
    );
}
export default Profile;