import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const hostEmail = process.env.SENDGRID_ACCOUNT_EMAIL;
    const hostTemplateId = process.env.SENDGRID_GET_IN_TOUCH_HOST_TEMPLATE_ID;
    const templateId = process.env.SENDGRID_GET_IN_TOUCH_TEMPLATE_ID;

    if (!hostEmail || !hostTemplateId || !templateId) {
      return NextResponse.json({ error: "Missing env" }, { status: 400 });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const hostEmailData = {
      from: { email: hostEmail },
      to: { email: hostEmail },
      replyTo: { email },
      dynamicTemplateData: { email, message, name },
      templateId: hostTemplateId,
    };

    const userEmailData = {
      from: { email: hostEmail },
      to: { email },
      dynamicTemplateData: { name, message },
      templateId,
    };

    await Promise.all([sgMail.send(hostEmailData), sgMail.send(userEmailData)]);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
