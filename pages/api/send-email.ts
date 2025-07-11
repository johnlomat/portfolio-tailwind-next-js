import nodemailer from 'nodemailer'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email, name, message } = req.body

  if (!email || !name || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const mailOptions = {
    from: 'Website Inquiry <no-reply@johnquery.com>',
    to: 'edwardlomat1503@gmail.com',
    replyTo: email,
    subject: `New inquiry from ${name}`,
    text: message,
    html: `<p>${message}</p>`,
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  try {
    const info = await transporter.sendMail(mailOptions)
    return res.status(250).json({
      success: `Message delivered to ${info.accepted}`,
    })
  } catch (err: any) {
    return res.status(500).json({
      error: `Error sending email: ${err.message}`,
    })
  }
}
