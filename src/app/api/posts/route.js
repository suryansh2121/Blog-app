import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const cat = searchParams.get("cat");

  const POST_PER_PAGE = 4;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    where: {
      ...(cat && { catSlug: cat }),
    },
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);
    
    // Return response correctly
    return NextResponse.json({ posts, count }, { status: 200 });
  } catch (err) {
    console.error("Error fetching posts:", err);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
};

// CREATE A POST
export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return NextResponse.json({ message: "Not Authenticated!" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user.email },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (err) {
    console.error("Error creating post:", err);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
};
