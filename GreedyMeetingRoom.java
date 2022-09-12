// Online Java Compiler
// Use this editor to write, compile and run your Java code online
import java.util.*;
class HelloWorld {
    public static void main(String[] args) {
        
       int N = 6;
int [] start = {1,3,0,5,8,5};
int [] end =  {2,4,6,7,9,9};

//Output --> 4 

System.out.print(maxMeetings(start, end, N));
    }
        public static int maxMeetings(int start[], int end[], int n)
    {
        // add your code here
        ArrayList<Pair> list = new ArrayList<>();    
    
        for(int i=0;i<n;i++) {
            list.add(new Pair(start[i], end[i]));
        }
        
        Collections.sort(list, (p1, p2) -> p1.end - p2.end);
       
    
     
        int res = 1;
        int prev = list.get(0).end;
        
        for(int i=1;i<n;i++) {
            if(list.get(i).start > prev) {
                res++;
                prev = list.get(i).end;
                
            }
        }
        
        return res;
    }
    
    static class Pair {
        int start;
        int end;
        
        Pair(int start, int end) {
            this.start = start;
            this.end = end;
        }
    } 
    
}
