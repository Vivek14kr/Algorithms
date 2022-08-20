
class HelloWorld {
    public static void main(String[] args) {
        int n = 5;
       search(n, 0);
    }
    
    static void search(int r, int c){
       if (r == 0){
           return;
       }
       if (c < r){
           System.out.print("*" + " ");
           search(r, c+ 1);
       }else {
           System.out.println("");
           search(r - 1, 0);
       }
    }
}
