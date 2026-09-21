import { NextResponse } from "next/server";
import { GetDataRepository } from "../../../../services/getData";

const ALLOWED_HOST = "api.github.com";

export async function GET(req: Request) {
  const urlData = new URL(req.url).searchParams.get("urlData");

  if (!urlData) {
    return NextResponse.json(
      { message: "Parâmetro 'urlData' é obrigatório." },
      { status: 400 }
    );
  }

  // Impede que o parâmetro seja usado para a rota buscar qualquer host (SSRF).
  let target: URL;
  try {
    target = new URL(urlData);
  } catch {
    return NextResponse.json({ message: "'urlData' inválida." }, { status: 400 });
  }
  if (target.protocol !== "https:" || target.hostname !== ALLOWED_HOST) {
    return NextResponse.json(
      { message: `Apenas URLs de https://${ALLOWED_HOST} são permitidas.` },
      { status: 400 }
    );
  }

  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
  };
  if (process.env.GIT_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GIT_TOKEN}`;
  }

  try {
    const data = await GetDataRepository(target.toString(), { headers });
    return NextResponse.json({ data });
  } catch (err) {
    console.error("Falha ao consultar a API do GitHub:", err);
    return NextResponse.json(
      { message: "Não foi possível carregar os repositórios." },
      { status: 502 }
    );
  }
}
