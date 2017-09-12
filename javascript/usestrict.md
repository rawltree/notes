## use strict
>[检查对象中的重复键](#检查对象中的重复键)  
>[未声明变量](#未声明变量)  
>[重复的参数](#重复的参数)    
>[限制使用函数中的arguments](#限制使用函数中的arguments)  


1. ### 检查对象中的重复键
```
var desktop = {
    cups : 0,
    books: 1,
    // ... a lot of values ...
    cups : 1
}
```
这段代码会抛出一个错误  
因为 cups 出现了两次

2. ### 未声明变量

    ```
    'use strict'
    mac = '999$'
    ```

变量前面未加var，这个变量是声明在全局上下文（global context）中的，而且可能被其他地方改掉。

3. ### 重复的参数
```
function run(people, people){}
```
注意people出现了两次，因此会抛出一个错误。

4. ### 限制使用函数中的arguments
```
var func = function(people){
    "use strict";
    arguments[0] = 'zzzzzz';
    alert(people);
}
func('lian');
// alert: 'lian';
```
arguments[0] = 'zzzzzz' 改变了参数people