import React, { useState } from 'react'

export const hoverFn = (estado = false) => {
    const [hover, setHover] = useState(estado)



    console.log(estado);
}

