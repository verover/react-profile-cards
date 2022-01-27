import React, { useEffect } from 'react';
import ProfileList from '../ProfileList/ProfileList';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../actions/ProfileAction';
import { API_URL } from '../../config/constant';
import Loading from '../Common/Loading';

export const GET_PROFILES = "GET_LIST_PROFILES"

function Profile(props){
    const dispatch = useDispatch();
    
    const { loading } = useSelector(
        state => ({
          error: state.profiles.error,
          loading: state.profiles.loading
        })
    );

    useEffect(() => {
        dispatch(getUserProfile())
    }, [dispatch]);

    return (
        <section className='w-full'>
            <p className='text-sm text-right w-full mb-2'>Source: {API_URL}</p>
            {loading===true ? 
            <Loading/> : 
            <main className='grid grid-row sm:grid-cols-4 gap-3'>
                <ProfileList/>
            </main>}
        </section>
    );
}


export default connect()(Profile);