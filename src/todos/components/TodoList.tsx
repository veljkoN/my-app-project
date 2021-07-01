import React from 'react'
import { todoObject } from '../page/Todos'
import Table from 'react-bootstrap/Table'
import './TodoList.css'
import { upperCase } from '../../shared/utils/upperCase'

interface TodoPorps {
    todos:todoObject[]
}

const TodoList:React.FC<TodoPorps> = ({todos}) => {
    return (
        <div className='
            table-responsive 
            container'
        >
        { todos.length>0 && 
            <Table className='
                table 
                table-bordered 
                table-centered 
                align-middle'
            >
                <thead className='table-primary'>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                { todos && todos.map(( todo:todoObject ) => 
                    <tr 
                        key={todo.id} 
                        className={todo.completed? "row-done":""}
                    >
                        <td>
                            { todo.id } 
                        </td>
                        <td className={todo.completed? "title-status":""}>
                            { upperCase(todo.title) }.
                        </td>
                        <td id="check-field">
                        { todo.completed ? 
                            <i 
                                id="item-done" 
                                className="fa fa-check-circle"
                            >
                            </i>:
                            <i 
                                id="item-undone" 
                                className="fa fa-minus"
                            >
                            </i> }
                        </td>
                    </tr>)
                }
                </tbody>
            </Table> }
        </div>
    )
}

export default TodoList
