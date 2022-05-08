import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1199cefc503f71",
    pass: "ce12a9ee22d887"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject,body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Felipe Lima <felipelhol@gmail.com>',
      subject: subject,
      html: body,
    })
  };
}