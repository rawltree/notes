## 用来记录自己学过的知识点
平时真的太懒，每天写一点作为知识积累  

winter is here  
so  -----  
step out of your comfort zone  

--- 
 目录
1. Markdown语法练习  
    [Markdown 语法说明](http://www.appinn.com/markdown/)引用网友的说明([同上](http://wowubuntu.com/markdown/))  
    我的[练习](testMD.md)：主要使用  
    - 区块引用 >  
    - 代码块 \`\`\` \`\`\`  
    - 文件内部跳转 \[ ](#id) [warn:github跳转问题](https://www.zhihu.com/question/58630229/answer/191984051)  
    - 兼容html良好，图片之类的直接使用html来写吧\<img src="">  

    <img src="img/bing.png">

2. Javascript

    [严格模式](/javascript/usestrict.md) 'use strict'  
    [内置对象](/javascript/object.md)  [<font color="green">外链</font>](http://blog.csdn.net/baok1592/article/details/6478261)  
    stub...
    
3. 浏览器

    [浏览器的渲染过程](/browser/render.md)

4. tools

 >    git  

 [合并commit](http://www.jianshu.com/p/964de879904a)  
 我们可能会由于各种各样的原因提交了许多临时的 commit，而这些 commit 拼接起来才是完整的任务,  
 使用git rebase
```
# git log #提交信息
git rebase -i d1 #d1 出发点hash前8位
#选择要合并到前次的提交信息 编辑 pick为squash
#编辑汇总的commit信息
#
# if fail, use git rebase --abort
git push --force 
```

---
5. future skills

    [web Components](http://www.alloyteam.com/2015/11/we-will-be-componentized-web-long-text/)   
    机器学习-- [synaptic](http://caza.la/synaptic/#/)
    

**comment zone:**

vscode真的越来越好用了，接触了node debug，拿来做markdown编辑器也很好啊。  
最近切换了mac ubuntu win工作环境，幸亏包管理工具，能快速开始工作。  
破笔记本N卡装ubuntu，桌面不时的就卡机了，怪我安装东西太多了:(，怀念win  