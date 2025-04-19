// import { useEffect } from 'react'
import {
  useLocation,
  useNavigate
  //  useParams
} from 'react-router'

function Todo() {
  // const { id } = useParams()
  const { state } = useLocation()
  const navigate = useNavigate()

  console.log(state)

  // useEffect(() => {
  //   if (id === undefined) {
  //     back()
  //     return
  //   }
  // }, [id])

  const back = () => {
    navigate('/')
  }

  return (
    <div className='h-full flex flex-col'>
      <div className='h-8 flex justify-end px-2 py-1'>
        <span
          className='hover:text-amber-800 cursor-pointer'
          onClick={back}
        >
          Back
        </span>
      </div>
      {/* <div className='flex-1'>{id}</div> */}
      <div className='flex-1'>
        {state && (
          <>
            <span>
              {state.id}: {state.title}
            </span>
          </>
        )}
      </div>
    </div>
  )
}

export default Todo
