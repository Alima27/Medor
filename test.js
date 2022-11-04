// const mailjet = require ('node-mailjet')
// 	.connect('f1aa3afb664fe872cf5e517d2acc4650', '7a37a2aedbf26f7d93f9c4cb9af72207')
// const request = mailjet
// 	.get("statcounters", {'version': 'v3'})
// 	.request()
// request
// 	.then((result) => {
// 		console.log(result.body)
// 	})
// 	.catch((err) => {
// 		console.log(err)
// 		console.log(err.statusCode)
// 	})

const mailjet = require ('node-mailjet')
.connect('f1aa3afb664fe872cf5e517d2acc4650', '7a37a2aedbf26f7d93f9c4cb9af72207')
const request = mailjet
.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": "xowoclbdb@firste.ml",
        "Name": "Test"
      },
      "To": [
        {
          "Email": "shigaibaev.a@gmail.com",
          "Name": "Test"
        }
      ],
      "Subject": "Greetings from Mailjet.",
      "TextPart": "My first Mailjet email",
      "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
request
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err)
    console.log(err.statusCode)
  })