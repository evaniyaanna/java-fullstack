package com.example.student.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.data.repository.query.Param;

import com.example.student.Models.student;
import com.example.student.repository.studentRepository;

@Controller
public class StudentController {

    @Autowired
    private studentRepository studentRepository;

    // CREATE - Show form
    @GetMapping("/create")
    public String createAction(Model model) {
        model.addAttribute("message", "Enter Student Details");
        return "create";
    }

    // CREATE - Save student
    @PostMapping("/create")
    public String createActionProcess(student studentData, Model model) {

        studentRepository.save(studentData);

        model.addAttribute("message",
                "The Student " + studentData.getName()
                        + " has been created successfully");

        return "create";
    }

    // READ - Display all students / Search
    @GetMapping("/all")
    public String getAllStudents(Model model,
                                  @Param("keyword") String keyword) {

        List<student> students;

        if (keyword != null && !keyword.isEmpty()) {
            students = studentRepository.findAllByKeyword(keyword);
        } else {
            students = studentRepository.findAll();
        }

        model.addAttribute("students", students);

        return "list";
    }

    // UPDATE - Show edit form
    @GetMapping("/update/{id}")
    public String updateStudent(@PathVariable Integer id, Model model) {

        Optional<student> optionalStudentDetails =
                studentRepository.findById(id);

        if (optionalStudentDetails.isPresent()) {

            model.addAttribute(
                    "studentDetails",
                    optionalStudentDetails.get()
            );

            return "update";
        }

        return "redirect:/all";
    }

    // UPDATE - Save edited student
    @PostMapping("/update/{id}")
    public String updateStudent(@PathVariable Integer id,
                                student studentData) {

        Optional<student> optionalStudentDetails =
                studentRepository.findById(id);

        if (optionalStudentDetails.isPresent()) {

            student studentDetails =
                    optionalStudentDetails.get();

            studentDetails.setName(studentData.getName());
            studentDetails.setStudentClass(
                    studentData.getStudentClass()
            );
            studentDetails.setAge(studentData.getAge());

            studentRepository.save(studentDetails);
        }

        return "redirect:/all";
    }

    // DELETE - Show confirmation page
    @GetMapping("/delete/{id}")
    public String deleteStudent(@PathVariable Integer id,
                                 Model model) {

        Optional<student> optionalStudentDetails =
                studentRepository.findById(id);

        if (optionalStudentDetails.isPresent()) {

            model.addAttribute(
                    "studentDetails",
                    optionalStudentDetails.get()
            );

            return "delete";
        }

        return "redirect:/all";
    }

    // DELETE - Delete student
    @PostMapping("/delete/{id}")
    public String deleteStudent(@PathVariable Integer id) {

        studentRepository.deleteById(id);

        return "redirect:/all";
    }
}