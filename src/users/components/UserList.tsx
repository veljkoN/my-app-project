import React from 'react'
import { Popover } from 'react-bootstrap'
import './UserList.css'
import { UserObject }  from '../page/Users'
import { PopOver } from '../../shared/UIElements/Popover'
import Table from 'react-bootstrap/Table'

interface UserProps {
    users:UserObject[]
}

const UserList:React.FC<UserProps> = ({ users }) => {
    if (users.length===0) {
        return ( 
            <div>
                No user found
            </div>
        )
    }
    return (
        <div className='
            table-responsive 
            container-fluid'
        >
            <Table className='
                table
                table-bordered
                table-centered
                align-middle'
            >
                <thead className='table-primary'>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users && users.map(( user:UserObject ) => 
                    <tr key={user.id}>
                        <td>
                            { user.id }
                        </td>
                        <td>
                            { user.name }
                        </td>
                        <td>
                            { user.username }
                        </td>
                        <td>
                            { user.email }
                        </td>
                        <td className="address">
                            <PopOver address={user.address} popover={
                                <Popover id="popover-basic">
                                    <Popover.Content>
                                        <strong>
                                            { user.address.street }
                                        </strong>
                                        <strong>
                                            { user.address.suite }, 
                                        </strong><br/>
                                        <strong>
                                            { user.address.city } 
                                        </strong><br/>
                                        <span className='text-info'>
                                            Zipcode: 
                                        </span>
                                            { user.address.zipcode }<br/>
                                        <span className='text-info'>
                                            Geo: </span>
                                            { `lat: ${ user.address.geo.lat }, 
                                               lng: ${ user.address.geo.lng }` }
                                    </Popover.Content>
                                </Popover>
                            }/>
                        </td>
                        <td>
                            { user.phone }
                        </td>
                        <td>
                            { user.website }
                        </td>
                        <td className="td-address">
                            <b className="td-company-name">
                                { user.company.name }
                            </b><br/>
                            { user.company.catchPhrase }<br/>
                            <i>
                                ({user.company.bs})
                            </i>
                        </td>
                    </tr>)
                }
                </tbody>
            </Table>
        </div>
    )
}

export default UserList
