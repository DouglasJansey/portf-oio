import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";
import { config } from "../../../../config/emailConfig";

export async function GET() {
  return NextResponse.json({
    msg: "send",
  });
}
export async function POST(request: Request) {
  const { email, mensage, subject, name } = await request.json();
  const transport = createTransport(config);

  if (!email || !mensage || !subject || !name) throw Error('Falha no envio!');
  try{
    await transport.sendMail({
      from: `"${email}" < ${process.env.NEXT_PUBLIC_EMAIL} >`,
      to: 'douglas.jansey@gmail.com',
      subject,
      text: mensage,
    });
    return NextResponse.json({
      mesage: "Enviado com sucesso!",
    });
  }catch(err){
    throw Error('Falha ao enviar')
  }
}
