// app/api/search/route.js
import prisma from "@/utils/connect";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  if (!query || typeof query !== 'string') {
    return new Response(JSON.stringify({ error: 'Invalid search query' }), { status: 400 });
  }

  try {
    const posts = await prisma.post.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: 'insensitive' } },
          { desc: { contains: query, mode: 'insensitive' } }
        ],
      },
    });

    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  }
}
