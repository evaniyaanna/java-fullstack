//import packages from user defined packages
import profile.userinput;
import greetings.greetingdisplay;
//main class
public class display {
    public static void main(String[] args){
        //create object for userinput
        userinput user=new userinput();
        //get user name
        String name=user.getname();
        //create object for greeting
        greetingdisplay greeting=new greetingdisplay();
        //display greeting using entered name
        greeting.greetings(name);
    }
}
