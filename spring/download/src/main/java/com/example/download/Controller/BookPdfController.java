package com.example.download.Controller;

import com.lowagie.text.Document;
import com.lowagie.text.Paragraph;
import com.lowagie.text.pdf.PdfWriter;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class BookPdfController {

    @GetMapping("/generate-book-pdf")
    public void generateBookPdf(HttpServletResponse response)
            throws IOException {

        // Default book details
        String title = "The Great Gatsby";
        String author = "F. Scott Fitzgerald";
        String description =
                "A classic novel about wealth, love, and the American Dream.";
        double price = 15.99;
        String publishedDate = "April 10, 1925";

        // Tell browser that this is a downloadable PDF
        response.setContentType("application/pdf");
        response.setHeader(
                "Content-Disposition",
                "attachment; filename=book-details.pdf"
        );

        try {
            Document document = new Document();

            PdfWriter.getInstance(
                    document,
                    response.getOutputStream()
            );

            document.open();

            // PDF content
            document.add(new Paragraph("Book Information"));
            document.add(new Paragraph(" "));
            document.add(new Paragraph("Title: " + title));
            document.add(new Paragraph("Author: " + author));
            document.add(new Paragraph(
                    "Description: " + description
            ));
            document.add(new Paragraph(
                    "Price: $" + price
            ));
            document.add(new Paragraph(
                    "Published Date: " + publishedDate
            ));

            document.close();

        } catch (Exception e) {
            throw new IOException(
                    "Error generating PDF: " + e.getMessage()
            );
        }
    }

    @GetMapping("/book")
    public String showBookPage() {
        return "book";
    }
}