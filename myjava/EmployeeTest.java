class employee{
    private String name;
    private int id;
    private String department;
    private double salary;

    public String getName(){
        return name;
    }
    public void setName(String n){
        this.name=n;
    }
    public int getId(){
        return id;
    }
    public void setId(int i){
        this.id=i;
    }
    public String getDepartment(){
        return department;
    }
    public void setDepartment(String d){
        this.department=d;
    }
    public double getSalary(){
        return salary;
    }
    public void setSalary(int s){
        this.salary=s;
    }
}

public class EmployeeTest {
    public static void main(String[]args){
        employee e1=new employee();
        employee e2=new employee();
        e1.setName("evaniya");
        e1.setId(1);
        e1.setDepartment("finance");
        e1.setSalary(25000);
        System.out.println("employee 1");
        System.out.println("name:"+e1.getName()+"\nid:"+e1.getId()+"\ndepartment:"+e1.getDepartment()+"\nsalary:"+e1.getSalary());

        e2.setName("ardra");
        e2.setId(2);
        e2.setDepartment("IT");
        e2.setSalary(20000);
        System.out.println("employee 2");
        System.out.println("name:"+e2.getName()+"\nid:"+e2.getId()+"\ndepartment:"+e2.getDepartment()+"\nsalary:"+e2.getSalary());
    }
}
