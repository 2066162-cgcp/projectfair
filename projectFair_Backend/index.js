const expres=require('express')
const cors=require('cors')
require('dotenv').config()
const router=require('./routes')
require('./connection')

const Eserver=expres()

Eserver.use(cors())

Eserver.use(expres.json())

Eserver.use(router)

PORT=3000 || process.eventNames.PORT

Eserver.listen(PORT,()=>{
    console.log(`server running at server: ${PORT}` );
    
})