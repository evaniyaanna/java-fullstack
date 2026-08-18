public class day5 {
    public static void main(String[] args){
        int[]a={90,78,55,71,30};
        int i;
        for(i=0;i<a.length;i++){
             System.out.print(a[i] + " - ");
             if (a[i]>=90){
                System.out.println("Excellent");
             }
             else if((a[i]>=75)&&(a[i]<=89)){
                System.out.println("Good");
             }
             else if((a[i]>=50)&&(a[i]<=74)){
                System.out.println("Average");
             }
             else {
                System.out.println("fail");
             }
            
        }
    }
}
