import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from '../../actions/AllDataActions'
import { USERS_SUCCESS } from '../../actions/userActions/UsersActionsTypes'
import { RootStore } from '../../Store'
import UserList from '../components/UserList'

export type UserObject = {
    id: number
    name: string,
    username: string, 
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    }
    phone: string,
    website: string,
        company: {
            name: string,
            catchPhrase: string,
            bs: string
        }
    }

const Users:React.FC = () => {
    const usersState = useSelector((state:RootStore)=>state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllData(USERS_SUCCESS,'users'))
    }, [dispatch])

    return (
        <div>
            <h2 className="text-center mt-2 mb-2">List of Users</h2>
            { usersState.users && <UserList users={usersState.users }/>}
        </div>
    )
}

export default Users
