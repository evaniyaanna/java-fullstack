class student{
    private String name;
    private int rollno;
    private int percentage;
    
    public String getName(){
        return name;
    }
    public void setName(String n){
        this.name=n;
    }
    public int getRollno(){
        return rollno;
    }
    public void setRollno(int r){
        this.rollno=r;
    }
    public int getPercentage(){
        return percentage;
    }
    public void setPercentage(int p){
        this.percentage=p;
    }
}

public class StudentTest {
    public static void main(String[] args){
        student s=new student();
        s.setName("evaniya");
        s.setRollno(24);
        s.setPercentage(80);
       System.out.println( "name:"+s.getName()+"\nrollno:"+s.getRollno()+"\npercentage:"+s.getPercentage());

    }
    
}
