### 文件输入输出流

#### FileReader和FileWriter

FileReader和FileWriter专门用来处理字符流，内部使用`FileInputStream`和`FileOutputStream`处理物理I/O，FileReader和FileWriter只是进行字符和字节的相互转换处理。这两个类每次只能处理一个字符，

如果需要一次处理多个字符需要使用`BufferedReader`和`PrintWriter`。

示例:

```java
import java.io.FileReader;
import java.io.FileWriter;
import java.io.BufferedReader;
import java.io.PrintWriter;
import java.io.IOException;

public class CopyLines {
    public static void main(String[] args) throws IOException {

        BufferedReader inputStream = null;
        PrintWriter outputStream = null;

        try {
            inputStream = new BufferedReader(new FileReader("xanadu.txt"));
            outputStream = new PrintWriter(new FileWriter("characteroutput.txt"));

            String l;
            while ((l = inputStream.readLine()) != null) {
                outputStream.println(l);
            }
        } finally {
            if (inputStream != null) {
                inputStream.close();
            }
            if (outputStream != null) {
                outputStream.close();
            }
        }
    }
}
```

**注意:**  FileReader和FileWriter读取到的数据是以int类型存储的，BufferedReader和PrintWriter是String类型。

除了字符和行以外，还有许多种方法来构造文本输入和输出。有关更多信息，请参见[扫描和格式化](https://docs.oracle.com/javase/tutorial/essential/io/scanfor.html)。

