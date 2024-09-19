import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET SINGLE POST
export const GET = async (req, { params }) => {
  const { slug } = params;

  if (!slug) {
    return NextResponse.json({ message: "Slug is required!" }, { status: 400 });
  }

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },  // Increment views count
      include: { user: true },  // Include user information in the response
    });

    return NextResponse.json(post, { status: 200 });
  } catch (err) {
    console.error("Error fetching single post:", err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};
