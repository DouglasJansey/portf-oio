export const config = {
  service: "Gmail",
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL,
    pass: process.env.NEXT_PUBLIC_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
};
export let mailOptions = {
  from: `Nome Remetente <douglas.jansey@gmail.com>` , // Aqui você pode definir o nome que deseja exibir
  to: 'doug.jansey@gmail.com',
  subject: 'Assunto do E-mail',
  text: 'Conteúdo do E-mail'
}