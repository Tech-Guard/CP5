import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const apiKey = 'BOxJrgUoeKlImeYzsvZcxEuPTXA5wFXU1Y6U7yux';
  const date = params.id;
  
  try {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`);
    if (!res.ok) {
      throw new Error('Falha ao buscar dados da API');
    }

    const imageData = await res.json();
    return NextResponse.json(imageData);
  } catch (error) {
    console.error('Erro ao buscar imagem da NASA:', error);
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Erro desconhecido' }, { status: 500 });
  }
}
