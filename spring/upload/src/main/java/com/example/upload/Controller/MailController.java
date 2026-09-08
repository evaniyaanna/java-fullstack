package com.example.upload.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;

@Controller
public class MailController {

    @Autowired
    private JavaMailSender sender;

    public boolean sendUploadConfirmation(String fileName, long fileSize) {

        try {

            SimpleMailMessage msg = new SimpleMailMessage();

            msg.setTo("receiver@mailtrap.io");

            msg.setSubject("File Upload Successful");

            msg.setText(
                    "Hello,\n\n"
                    + "A file has been successfully uploaded.\n\n"
                    + "File Name: " + fileName + "\n"
                    + "File Size: " + fileSize + " bytes\n\n"
                    + "The file was received successfully."
            );

            sender.send(msg);

            return true;

        } catch (MailException ex) {

            System.err.println("Email error: " + ex.getMessage());

            return false;
        }
    }
}