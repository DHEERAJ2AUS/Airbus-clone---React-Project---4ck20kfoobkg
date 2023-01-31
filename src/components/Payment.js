import React , {useContext} from 'react'
import {MediumContext} from '../context/MediumContext'

const Payment = ({data}) => {

    const { des , ret  } = useContext(MediumContext)

    return (
        <div className='payment' >
            <div className='payment1' >
                <h1 className='ticketdetail' >Ticket Detail</h1>
                <div className='flightname' >
                    <div className='text-6xl font-medium place-self-center' ><h1>{data.from}</h1></div>
                    <div className='flex flex-col' >
                        <img
                            src="https://media0.giphy.com/media/hVxJUqWXVrCGTDpnVU/giphy.gif?cid=790b761144290eb0b81c365ba65adaefbd0a829c4da1fd76&rid=giphy.gif"
                            alt="logo"
                            width={130}
                            height={80}
                        />
                    </div>
                    <div className='text-6xl font-medium place-self-center' ><h1>{data.to}</h1></div>
                </div>
                <div className='durair' >
                            <h1 className='text-xl my-1' ><span className='text-xl'>Duration: </span> {data.duration} </h1>
                            <h1 className='text-xl my-1' ><span className='text-xl'>Airplane Name: </span>{data.airlineName}</h1>
                </div>
                <div className='flex justify-around items-center p-2 mt-5' >
                    <div className='mr-5 flex flex-col items-center' >
                        <div className='departure'>
                            <h1 className='text-3xl  font-lg' >Departure</h1>
                            <p  className='text-xl' ><h2><span>Date: </span>{des}</h2></p>
                            <p className='text-xl' ><h2><span>Time: </span>{data.departure.departureTime}</h2></p>
                        </div>
                        <div className='return'>
                            <h1 className='text-3xl font-lg' >Return</h1>
                            <p className='text-xl' ><h2><span>Date: </span> {ret}</h2></p>
                            <p className='text-xl' ><h2><span>Time: </span> {data.return.returnTime}</h2></p>
                        </div>
                    </div>
                    <div className='ml-5' >
                            <div className=' faresummary' >
                                <h1 className='text-5xl mb-3 ' >Fare Summary</h1>
                                <div className='border-b-1 mb-3' >
                                    <h1 className='text-xl' ><span className='text-2xl'>Flight Price: </span>Rs. {data.price}</h1>
                                    <h1 className='text-xl' ><span className='text-2xl'>Extra Charge: </span>Rs. 500</h1>
                                </div>
                                <h1 className='text-xl border-b-2 border-t-2 ' ><span className='text-2xl'>Total </span>Rs. {parseInt(data.price) + 500}</h1>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment