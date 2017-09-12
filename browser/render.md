## 浏览器的渲染过程： 
>1. 首先获取html，然后构建dom树 
>2. 其次根据css构建render树，render树中不包含定位和几何信息 
>3. 最后构建布局树，布局是含有元素的定位和几何信息

**notes**:  
一般最好触发元素的重构，避免元素的回流；
    比如 <font color="Brown">通过添加class来添加css样式</font> ，而不是直接在DOM上设置;  
    操作块元素，最好使其<font color="Brown">脱离文档流</font>，比如设置position：absolute或者fixed，或者display：none，等操作结束后在显示。