public class day6home {
   
    public static void main(String[] args) {

        int[] marks = {78, 82, 91, 65, 34};

        int total = 0;
        double average;
        boolean fail = false;

       
        for (int i = 0; i < marks.length; i++) {

            if (marks[i] < 35) {
                fail = true;
                break;
            }

            total += marks[i];
        }

        
        if (fail) {
            System.out.println("Fail");
        } else {
            average = total / 5.0;

            System.out.println("Total: " + total);
            System.out.println("Average: " + average);

            if (average >= 90) {
                System.out.println("Grade: A");
            } else if (average >= 75) {
                System.out.println("Grade: B");
            } else if (average >= 60) {
                System.out.println("Grade: C");
            } else {
                System.out.println("Grade: D");
            }
        }
    }
}
    

