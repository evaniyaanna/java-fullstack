import java.util.regex.Matcher;
import java.util.regex.Pattern;
public class day13 {
@SuppressWarnings("unchecked")
static void findno(String message){
    Pattern pattern=Pattern.compile("\\d{10}");
    Matcher matcher=pattern.matcher(message);
    boolean matchFound = matcher.find();
    if(matchFound) {
      System.out.println("Match found\n"+"no:"+matcher.group());
    } else {
      System.out.println("No phone numbers found.");
    }
}

    public static void main(String[]args){
       String message=" call me at 9497814409";
       findno(message);
    }
}
