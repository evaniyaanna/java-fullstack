class course{
    String name;
    int duration;
    int studentno;

    course(String name,int duration,int studentno){
        this.name=name;
        this.duration=duration;
        this.studentno=studentno;
        total+=studentno;
    }

    final String creator="mashupstack";
    static int total=0;

    static class Platform {

        static void displayPlatformMessage() {
            System.out.println("Courses are hosted on CodeMentor");
        }
    }

     void displayDetails() {
        System.out.println("Course Name: " + name);
        System.out.println("Duration: " + duration + " weeks");
        System.out.println("Students Enrolled: " + studentno);
        System.out.println("Course Creator: " + creator);
        System.out.println();
    }
}

public class CourseTest {
    public static void main(String[] args) {
        course c1 = new course("Java Programming", 8, 30);
        course c2 = new course("Python Programming", 6, 25);
        
        c1.displayDetails();
        c2.displayDetails();

        System.out.println("Total Students Enrolled: " + course.total);
        course.Platform.displayPlatformMessage();
    }
    
}
