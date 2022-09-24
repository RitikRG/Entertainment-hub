import React, {useEffect, useState} from 'react'


const Provider = (props) => {
  

  return (
    <>
      <div className='w-full bg-neutral-700 px-3 py-2 my-2 text-slate-50 rounded-lg '>
        <h6 className=''>Providers:</h6>
        <div className='flex overflow-auto space-x-3'>
        <div>
          <p>

          { props.provider.flatrate.map((c)=>{
            const data = `${c.provider_name} ${``} || `
            return data
          })}
          </p>
        </div>
        </div>
      </div>
    </>
  )
}

export default Provider
