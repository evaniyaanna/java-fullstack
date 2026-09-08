package com.example.upload.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Controller
public class FileUploadController {

    private static final String UPLOADED_FOLDER = "uploads/";

    @Autowired
    private MailController mailController;

    // Display upload page
    @GetMapping("/uploadFile")
    public String showUploadPage() {
        return "upload";
    }

    // Handle file upload
    @PostMapping("/uploadFile")
    public String uploadFile(
            @RequestParam("file") MultipartFile file,
            Model model) {

        // Check if file is empty
        if (file.isEmpty()) {

            model.addAttribute(
                    "message",
                    "Please select a file to upload."
            );

            return "upload";
        }

        try {

            // Create uploads folder if it doesn't exist
            Path uploadPath = Paths.get(UPLOADED_FOLDER);

            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            // Get file bytes
            byte[] bytes = file.getBytes();

            // Create file path
            Path path = Paths.get(
                    UPLOADED_FOLDER + file.getOriginalFilename()
            );

            // Save file
            Files.write(path, bytes);

            // Send confirmation email
            boolean emailSent = mailController.sendUploadConfirmation(
                    file.getOriginalFilename(),
                    file.getSize()
            );

            if (emailSent) {

                model.addAttribute(
                        "message",
                        "File '" + file.getOriginalFilename()
                        + "' uploaded successfully and confirmation email sent."
                );

            } else {

                model.addAttribute(
                        "message",
                        "File uploaded successfully, but email sending failed."
                );
            }

        } catch (Exception e) {

            model.addAttribute(
                    "message",
                    "Failed to upload '"
                    + file.getOriginalFilename()
                    + "' -> "
                    + e.getMessage()
            );
        }

        return "upload";
    }
}