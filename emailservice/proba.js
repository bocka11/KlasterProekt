const nodemailer = require('nodemailer');

async function main(){
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host:"smtp.ethereal.email",
        port:587,
        secure:false,
        auth:{
            user: testAccount.user,
            pass: testAccount.pass
        }
    });


    const info = await transporter.sendMail({
        from: '"Fred Foo 👻" xfbnzsufwvcidwtthw@wqcefp.online', // sender address
    to: "jmmsqnxyareuohqxnv@miucce.online", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", 
    },(error,info)=>{
        if(error){
            return console.log(error);
        }
        console.log(info);
    });
}
main();