import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get('url');
  if (!url) return new Response('Missing url', { status: 400 });
  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) return new Response('Upstream error', { status: 502 });
    const contentType = res.headers.get('content-type') || 'image/jpeg';
    const data = await res.arrayBuffer();
    return new Response(data, {
      headers: {
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (e: any) {
    return new Response('Fetch failed', { status: 500 });
  }
}


