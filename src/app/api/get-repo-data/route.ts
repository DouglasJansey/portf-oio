import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { GetDataRepository } from '../../../../services/getData'

export async function GET(req: Request) {
    const TOKEN_GIT = process.env.GIT_TOKEN;  // Acessando o token do servidor

    // Obtendo a URL completa da requisição
    const url = new URL(req.url);
    
    // Obtendo os parâmetros de consulta (query parameters)
    const urlData = url.searchParams.get('urlData');

    const options = {
        headers: new Headers({
            Authorization: `Bearer ${TOKEN_GIT}`,  // Usando o token no cabeçalho
            "Content-Type": "application/x-www-form-urlencoded",
        }),
    };
    if (!urlData) {
        throw new Error("urlData is null");
    }
    const data = await GetDataRepository(urlData, options)
    return  NextResponse.json({
        data
    })
}
