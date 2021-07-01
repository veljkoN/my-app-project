import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from '../../Store'
import TodoList from '../components/TodoList'
import PaginationUI from '../../shared/UIElements/Pagination'
import { getAllData } from '../../actions/AllDataActions'
import { TODOS_SUCCESS } from '../../actions/todosActions/TodosActionsType'

export type todoObject = {
    userId:number
    id:number
    title:string
    completed:boolean
}

const Todos:React.FC = () => {
    const [ todosPerPage, setTodosPerPage ] = useState<todoObject[]>([])
    const [ paginationNumber, setPaginationNumber ] = useState<number[]>([])
    const [ numberPage, setNumberPage ] = useState(0)
    const todosState = useSelector((state:RootStore)=>state.todos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllData(TODOS_SUCCESS,'todos'))
      }, [dispatch]);
    useEffect(()=>{
        if(todosState.todos){
            const numbers = Array.from(Array(todosState.todos.length/10).keys())
            setPaginationNumber(numbers)
            setTodosPerPage(todosState.todos.slice(numberPage*10,numberPage*10+10))
        }
    },[todosState.todos,numberPage])
    
    if (!todosState.todos) return <h2>Loading...</h2>
    return (
        <div className="container">
           <h2 className="
                text-center 
                mt-2 
                mb-2"
            >
            List of Todos
            </h2>
           <PaginationUI 
                paginationNumber={paginationNumber} 
                numberPage={numberPage} 
                setNumberPage={setNumberPage}
            />
           <TodoList todos={todosPerPage} />
           
        </div>  
    )
}

export default Todos
