console.log("this is my script")

let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "john",
    "email": "john@gmail.com",
    "score": 0.48,
    "state": "undeliverable",
    "domain": "gmail.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("Clicked!")
    resultCont.innerHTML = `<img width="123" src="image/loading.svg" alt="">`
    let key = "ema_live_arA4uyz4GEesbvBgBdSSr0n7wDyMZpu7QTHWJ8oO"
    let email = document.getElementById("email").value 
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)) {
        if(result[key] !== "" && result[key]!== " "){ 
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }

    console.log(str)
    resultCont.innerHTML = str
})


