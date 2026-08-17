//user defined package
package profile;
import java.util.Scanner;
//class for userinput
public class userinput {
   //method for handling user input
        public String getname(){
        Scanner input=new Scanner(System.in);
        System.out.println("enter your name");
        String name=input.nextLine();
        input.close();
        return name;
        }
    }
    

