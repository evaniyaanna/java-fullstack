public class day5home {
    public static void main(String[] args){
       int[][] a = {
            {100, 80, 10},   
            {120, 90, 35},   
            {110, 100, 30},  
            {130, 95, 90},   
            {100, 85, 50}    
        };
        for(int i=0;i<3;i++){
            int total=0;
            for(int j=0;j<5;j++){
                total=total+a[j][i];
            }
            System.out.println("Product " + (i + 1));
            System.out.println("Total Sales: " + total);

            if(total>=500){
                System.out.println("Target Achieved");
            }
            else if((total>=300)&&(total<=499)){
                System.out.println("Average Performance");
            }
            else{
                System.out.println("Needs Improvement");
            }
        }
    }
}
