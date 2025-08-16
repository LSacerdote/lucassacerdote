import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["lucassacerdote227@gmail.com"],
      subject: `Nova Mensagem do Portfólio de ${name}`,
      replyTo: email,
      html: `
        <h1>Nova mensagem recebida do seu portfólio!</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error({ error });
      return NextResponse.json(
        { error: "Ocorreu um erro ao enviar o e-mail." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Mensagem enviada com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Ocorreu um erro interno no servidor." },
      { status: 500 }
    );
  }
}
