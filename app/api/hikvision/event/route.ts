import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.text();
  console.log("Evento Hikvision:", body);

  // Aqui a gente pega a foto do visitante
  // Por enquanto só loga, depois a gente manda pro Zap
  const data = {
    evento: "Visitante no portão",
    horario: new Date().toLocaleString('pt-BR'),
    raw: body.slice(0, 500)
  };

  // TODO: Enviar pro WhatsApp via Z-API / Evolution
  // await fetch(`https://api.z-api.io/instances/SUA_INSTANCIA/token/SEU_TOKEN/send-image...`)

  return NextResponse.json({ ok: true, received: data });
}

export async function GET() {
  return NextResponse.json({ status: "Forte Link API online", endpoint: "/api/hikvision/event" });
}
