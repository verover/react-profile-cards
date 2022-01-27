import { RefreshIcon } from '@heroicons/react/outline'
import { connect, useDispatch } from 'react-redux';
import { getUserProfile } from '../../actions/ProfileAction';

function Header(state) {
    const dispatch = useDispatch()
    const handleReload = (state) => {
        dispatch(getUserProfile())
    }
    return (
        <header className='flex justify-between items-center pb-2 '>
            <div className='flex items-center'>
                <div>
                    <h1 className='mr-5 text-lg'>User Profile Lists</h1>
                    <p className='mr-5 text-md opacity-50'>Mini Projects</p>
                </div>
            </div>
            <button id='refresh' onClick={handleReload} className="btn-primary btn-group">
                <RefreshIcon className='refresh hover:animate-spin w-4 h-4 mr-3' />load another data
            </button>
        </header>
    )
}
const mapStateToProps = (state) => {
    return { 
        loading: state.profiles.loading 
    }
}
export default connect(mapStateToProps)(Header)