

class HelloWorld {
    public static void main(String[] args) {
        int n = 40;
        int p = 3;
        
        
        System.out.printf("%.3f", Sqrt(n,p));
    }
    
    //O(log n)
    static double Sqrt(int n , int p){
        int s = 0;
        int e = n;
        double root = 0.0;
        
        while (s <= e){
            int m = s + (e-s)/2;
            if (m * m == n){
                return m;
            }
            if (m * m > n){
                e = m -1;
                
            }else {
                s = m + 1;
            }
        }
        
        double incr = 0.1;
        for (int j = 0; j < p; j++){
            while (root * root <= n){
                root += incr;
            }
            root -= incr;
            incr /= 10;
        }
        return root;
    }
}
