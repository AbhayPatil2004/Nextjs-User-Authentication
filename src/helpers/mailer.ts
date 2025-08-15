import User from "@/models/userModel";
import nodemailer from 'nodemailer'
import bcrypt from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {

    try {

        const hashToken = await bcrypt.hash(userId.toString(), 10)

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId,
                {
                    verifyToken: hashToken,
                    verifyTokenExpiry: Date.now() + 3600000
                }
            )
        }
        else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId,
                {
                    forgotPasswordToken: hashToken,
                    forgotPasswordTokenExpiry: Date.now() + 3600000
                }
            )
        }

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "a239f06f10547c",
                pass: "****7a8e"
            }
        });

        const mailOptions = {
            from : "patilabhay484@gmail.com" ,
            to : email ,
            subject : emailType === "VERIFY" ? "Verify your email" : "Reset your password",
             html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashToken}
            </p>`
        }

        const mailresponse = await transport.sendMail(mailOptions);

        return mailresponse ;
    }
    catch (error: any) {
        throw new Error(error.message);
    }

}