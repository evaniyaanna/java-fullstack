public class course {
    
        String coursename;
        int duration;

        static int coursecount=0;

        final String centername="mashupstack";

        course(){
            coursename="java fullstack";
            duration=8;
            coursecount++;
        }

        course(String coursename,int duration){
            this.coursename=coursename;
            this.duration=duration;
        }

        class CourseMaterial{
            void display(){
                System.out.println("Materials provided for this course.");
            }
        }
        void displayDetails() {
            System.out.println("Course Name: " + coursename);
            System.out.println("Duration: " + duration + " weeks");
            System.out.println("Training Center: " + centername);

            CourseMaterial material = new CourseMaterial();
            material.display();
            System.out.println();
        }
    public static void main(String[]args){
        course c1=new course();
        course c2=new course("python",6);
        c1.displayDetails();
        c2.displayDetails();

        System.out.println("Total Courses Created: " + course.coursecount);
    }
}
