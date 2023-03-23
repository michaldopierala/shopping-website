// import React from 'react'

// export default function Url() {
// //   return (
// //     <div>
// //         { 
//         window.open('https://www.google.com/', '_blank')
// //         }
// //     </div>
// //   )
// }

import React from 'react'
import { useParams } from 'react-router-dom'

export default function Url() {
        const { extension } = useParams()

        // var __html = require('/url/x.html');
        // var template = { __html: __html };



   return (
        // <div dangerouslySetInnerHTML={template} />
       <div>url: {extension}</div>
   )
}


// src="../url/x.html"