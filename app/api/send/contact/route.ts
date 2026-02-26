import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  try {
    await resend.emails.send({
      from: "Tech Babes <support@techbabes.dev>",
      to: "thetechbabesinc@gmail.com",
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
     <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9f9f9; padding: 40px 0;">
        <tr>
          <td align="center">
            <table width="560" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
              
              <!-- Header -->
              <tr>
                <td align="center" style="padding: 32px 40px 24px;">
                  <img src="https://techbabes.dev//logo.png" alt="Tech Babes" width="100" style="display: block;" />
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding: 36px 40px;">

                  <!-- From field -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                    <tr>
                      <td style="background-color: #fce4ec; border-radius: 10px; padding: 16px 20px;">
                        <p style="margin: 0 0 4px; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #f48fb1; font-weight: bold;">From</p>
                        <p style="margin: 0; font-size: 15px; color: #333333; font-weight: bold;">${name}</p>
                        <p style="margin: 4px 0 0; font-size: 14px; color: #78909c;">${email}</p>
                      </td>
                    </tr>
                  </table>

                  <!-- Message field -->
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="background-color: #e1f5fe; border-radius: 10px; padding: 16px 20px;">
                        <p style="margin: 0 0 10px; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #64b5d9; font-weight: bold;">Message</p>
                        <p style="margin: 0; font-size: 15px; color: #333333; line-height: 1.7;">${message}</p>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td align="center" style="padding: 20px 40px 32px;">
                  <p style="margin: 0; font-size: 12px; color: #aaaaaa;">
                    Sent via the contact form at <a href="https://techbabes.dev" style="color: #f48fb1; text-decoration: none;">techbabes.dev</a>
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
      </html>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
