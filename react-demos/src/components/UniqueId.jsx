import React, { useId } from 'react'

export default function UniqueId() {
   const id = useId
  return (
      <div>
          <label htmlFor={`${id}-email`}>email</label>
          <input type="email" id={`${id}-email`} />

          <br />

          <label htmlFor={`${id}-password`}>password</label>
          <input type="password" id={`${id}-password`} />
    </div>
  )
}
