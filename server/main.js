require('dotenv').config()
const  express = require('express')
const cors  = require('cors')
const path = require('path')

const app = express()

app.use(cors({origin: '*'}))

app.use(express.json({extended: true}))
app.use(express.urlencoded({limit: '50mb', extended: true}))
app.use(express.static(path.resolve(__dirname, '..', 'client')));

// app.use('/', async (req, res) => {
//     try {
//         return res.sendFile(__dirname, '..', 'client', 'index.html')
//     }catch (e) {
//         console.log(e)
//     }
// })

app.use('/api/mail', require('./routes/mail.routes'))

const PORT = process.env.PORT || 5000

async function start() {

    try {

        app.listen(PORT, () => {
            console.log(`Server has been started in port ${PORT}`);
        })

    } catch (error) {
        console.log(error);
    }
}

start()