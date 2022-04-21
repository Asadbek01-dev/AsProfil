const { Router } = require('express')
const router = Router()
const mailer = require('../nodemailer/index')

router.post('/', async (req, res) => {

    try {

        const { name, phoneNumber, title, text} = req.body

        if(!name || !phoneNumber) {
            return res.status(400).json({message: `Name va number jo'natilmagan`})
        }

        const to = process.env.EMAIL


        const html = `
             <em>Xabar mavzusi:</em> &nbsp; <p>${title}</p>
             <br />
             <br />
             <em>Xabar matni:</em> &nbsp; <p>${text}</p>
             <br />
             <br />
             <em>Jo'natdi:</em>  &nbsp; <h3>${name}</h3>
             <br />
             <br />
             <em>Telefon raqami:</em> &nbsp; <a href="tel:+${phoneNumber}">${phoneNumber}</a>
             
             <br />
             <br />
             <br />
             <br />
             
             <a href="tel:+${phoneNumber}" style="display: block; background: #2D57C2FF; border-radius: 10px; color: #ffffff; padding: 10px 15px 11px; text-align: center;">
             Telefon qilish
             </a>
        `


        await mailer(to, title, text, html)

        res.status(200).json({message: `Xabar muvaffaqqiyatli jo'natildi!`})

    } catch (e) {
        console.log(e);
        res.status(500).json(e)
    }

})

module.exports = router