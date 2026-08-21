import java.util.Scanner;
import java.time.LocalDateTime;

public class day7 {

    public static double calculateAverage(int[] marks) {
        int total = 0;

        for (int mark : marks) {
            total += mark;
        }

        return (double) total / marks.length;
    }

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        
        System.out.print("Enter number of students: ");
        int n = input.nextInt();

        String[] names = new String[n];
        int[] marks = new int[n];

        for (int i = 0; i < n; i++) {
            System.out.print("Enter name of student " + (i + 1) + ": ");
            names[i] = input.next();

            System.out.print("Enter mark of " + names[i] + ": ");
            marks[i] = input.nextInt();
        }

        System.out.println("\nStudent Details:");

        for (int i = 0; i < n; i++) {
            System.out.println("Name: " + names[i]);
            System.out.println("Mark: " + marks[i]);

            if (marks[i] < 35) {
                System.out.println("Needs Improvement");
            }

            System.out.println();
        }

        double average = calculateAverage(marks);
        System.out.println("Average Mark: " + average);

        System.out.println("Current Date and Time: " + LocalDateTime.now());

        input.close();
    }
}