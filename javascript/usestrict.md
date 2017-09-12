## use strict
>[检查对象中的重复键](#one)  
>[未声明变量](#two)  
>[重复的参数](#three)  
>[限制使用函数中的arguments[]](#four)  


1. 检查对象中的重复键[](id='one')
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

2. 未声明变量[](id='two')

    ```
    'use strict'
    mac = '999$'
    ```

变量前面未加var，这个变量是声明在全局上下文（global context）中的，而且可能被其他地方改掉。

3. 重复的参数[](id='three')
```
function run(people, people){}
```
注意people出现了两次，因此会抛出一个错误。

4. 限制使用函数中的arguments[](id='four')
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