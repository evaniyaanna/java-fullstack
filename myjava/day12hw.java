import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
public class day12hw {
    public static void main(String[] args){
        File file=new File("log.txt");
        String data="Book order placed at 12:00 PM";
        char[] array=new char[data.length()];
        try{
            boolean value=file.createNewFile();
            if(value){
                System.out.println("The new file is created.");
            }
            else {
                 System.out.println("The file already exists.");
            } 
            
            FileWriter output=new FileWriter("log.txt");
            output.write(data);
            output.close();
            FileReader input=new FileReader("log.txt");
            
            input.read(array);
            String s=new String(array);
            System.out.println("file content");
            System.out.println(s);
             input.close();
            boolean val=file.delete();
            if (val){
                System.out.print("file deleted");
            }
            else{
                System.out.print("file not deleted");
            }
           
            
        }
        catch(Exception e) {
        e.getStackTrace();
        }
    }
    
}
