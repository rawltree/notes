### DOM level 1 
### javascript 入门
- 字符串
- 数值
- 布尔

- 数组
    ```
    var lennon = Array()
    lennon['name'] = "Jhon"
    lennon['year'] = 1940
    lennon['living'] = false
    ```
    <font color="Brown">是给数组加了3个属性，不推荐使用</font>
- 对象

#### 运算
#### 条件语句
    ```
    initialize;
    while(condition) {
        statements;
        increment;
    }
    ===
    for(initial condition; test condition; alter condition) {
        statements;
    }
    ```
#### 函数
变量作用域
>全局变量  
>局部变量  

#### 对象

#### DOM

>节点类型

1. **\*element node**
2. text node
3. attribute node
4. 

>DOM方法
 
1. getElementById  
2. getElementsByTagName  返回list
3. getElementByClassName 比较新，有些DOM实现里没有 

>属性

1. getAttribute 不属于document对象
2. setAttribute
3. childNodes
4. nodeType
5. nodeValue 文本节点值 

        <p>node value</p>
        -->  
        p.childNodes[0].nodeValue === 'node value'

>创建DOM

1. 改变页面内容 document.write && innerHTML
2. 创建元素 createElement(nodeName)
3. 创建文本节点 createTextNode(text)
4. 插入元素到dom树 appendChild && (*parentNode*)insertBefore

>ajax

1. 核心**XMLHttpRequest**

    >[fetch简介: 新一代Ajax API ](http://blog.csdn.net/renfufei/article/details/51494396)

    >new XMLHttpRequest()  
    >open(url, opition, boolean)  
    >send(null)  
    >readyState属性  

>兼容模式 标准模式

>style

1. style属性  
element.style.property = value
2. 选择器  
    *  
    .class  
    #id  
    :nth-child  (odd && even)
    parent>child
     brother

3. 浏览器对DOM支持优于css支持(表现层分离)
4. 元素追加class  
elem.className += " intro"
5. 

>js动画  (css动画)

1. 

>H5

1. The definitive Guide to HTML5 Video  
2. Modernizr库做兼容性检查
3. Dive into HTML5

>final 项目构建

