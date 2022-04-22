const BASE_URL = 'https://asprofil.uz'

const name = document.querySelector('input#name');
const phoneNumber = document.querySelector('input#phoneNumber');
const title = document.querySelector('input#title');
const text = document.querySelector('textarea#text');
const button = document.querySelector('button#button__send');

button.onclick = async function(){
    if(!name.value.trim() || !phoneNumber.value.trim()){
        alert(`Ism va telefon raqamni kiriting`)
        return
    }

    const params = {
        name: name.value,
        phoneNumber: phoneNumber.value,
        title: title.value,
        text: text.value
    }

    await fetch(`${BASE_URL}/api/mail`, {
        method: 'POST',

        body: JSON.stringify(params),

        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(() => {
        alert(`Xabar muvaffaqqiyatli jo'natildi!`)
    }).catch(err => {
        alert(`Xabar jo'natishda xatolik`)
        console.log(err)
    })


}