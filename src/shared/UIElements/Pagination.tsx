import React, {useState} from 'react'
import { Pagination } from 'react-bootstrap'
import './Pagination.css'

interface PaginationProps {
    paginationNumber:number[]
    numberPage:any
    setNumberPage:React.Dispatch<React.SetStateAction<number>>
}

const PaginationUI:React.FC<PaginationProps> = ({ paginationNumber, setNumberPage, numberPage }) => {
    const [ active, setActive ] = useState(0)

    const pageClick = (page:number) => {
        setNumberPage(page)
        setActive(page)
    }
    const nextClick = () => {
        if ( numberPage +1 < paginationNumber.length ) {
            setNumberPage((prev:number)=> prev + 1) 
            setActive(active + 1)
        }
    }
    const prevClick = () => {
        if ( numberPage > paginationNumber[0] ) {
            setNumberPage((prev:number)=> prev - 1) 
            setActive(active - 1)
        }
    }
    let items:any[] = [];
    const divider = <div className="next-pagination"></div>
    items.push( <React.Fragment key={ paginationNumber.length + 1 }>
                    <Pagination.Prev  
                        onClick = { prevClick } 
                        disabled = {numberPage === paginationNumber[0] && true } 
                    />
                        { divider }
                </React.Fragment>)
    paginationNumber.forEach((number)=>{
        items.push(
            <Pagination.Item 
                key={number} 
                active={number === active}  
                onClick={()=>pageClick(number)}
            >
                { number+1 }
            </Pagination.Item>,
        ) 
    })
    items.push( <React.Fragment key={ paginationNumber.length + 2 }>
                    { divider }
                    <Pagination.Next 
                        onClick = { nextClick }  
                        disabled = { numberPage +1 === paginationNumber.length && true }
                    />
                </React.Fragment>)
    return (
        <div className='container-fluid'>
            <Pagination size="sm">
                { items }
            </Pagination>
        </div>
    )
}

export default PaginationUI
