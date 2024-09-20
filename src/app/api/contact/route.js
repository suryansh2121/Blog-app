import prisma from "@/utils/connect";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Please fill out all fields." }), { status: 400 });
    }

    // Save message to the database
    const savedMessage = await prisma.message.create({
      data: { name, email, message },
    });

    return new Response(JSON.stringify({ success: "Message received and saved!", message: savedMessage }), { status: 200 });
  } catch (error) {
    console.error("Error saving message:", error); // Log the error to the console
    return new Response(JSON.stringify({ error: "Something went wrong." }), { status: 500 });
  }
}