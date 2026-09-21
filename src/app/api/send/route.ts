import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";
import { config, MAIL_TO } from "../../../../config/emailConfig";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Corpo da requisição inválido." }, { status: 400 });
  }

  const { email, mensage, subject, name } = body ?? {};

  if (!email || !mensage || !subject || !name) {
    return NextResponse.json(
      { message: "Preencha todos os campos." },
      { status: 400 }
    );
  }
  if (!EMAIL_REGEX.test(String(email))) {
    return NextResponse.json({ message: "E-mail inválido." }, { status: 400 });
  }
  if (!config.auth.user || !config.auth.pass || !MAIL_TO) {
    console.error("Variáveis EMAIL_USER / EMAIL_PASSWORD não configuradas.");
    return NextResponse.json(
      { message: "Serviço de e-mail indisponível." },
      { status: 503 }
    );
  }

  try {
    const transport = createTransport(config);
    await transport.sendMail({
      from: `"Portfólio" <${config.auth.user}>`,
      replyTo: `"${name}" <${email}>`,
      to: MAIL_TO,
      subject,
      text: `Nome: ${name}\nE-mail: ${email}\n\n${mensage}`,
    });
    return NextResponse.json({ message: "Enviado com sucesso!" });
  } catch (err) {
    console.error("Falha ao enviar e-mail:", err);
    return NextResponse.json({ message: "Falha ao enviar." }, { status: 500 });
  }
}
