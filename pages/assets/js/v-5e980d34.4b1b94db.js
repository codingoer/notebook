"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[7288],{67297:(s,n,e)=>{e.r(n),e.d(n,{data:()=>a});const a={key:"v-5e980d34",path:"/tools/git.html",title:"Git",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Git配置",slug:"git配置",children:[]},{level:2,title:"重置提交用户信息",slug:"重置提交用户信息",children:[]},{level:2,title:"下载的工程带有submodule",slug:"下载的工程带有submodule",children:[]},{level:2,title:"本地新建项目推送到远端git仓库",slug:"本地新建项目推送到远端git仓库",children:[]},{level:2,title:"分支管理",slug:"分支管理",children:[{level:3,title:"branch",slug:"branch",children:[]},{level:3,title:"rebase",slug:"rebase",children:[]},{level:3,title:"撤销上一个版本",slug:"撤销上一个版本",children:[]}]},{level:2,title:"Gitk",slug:"gitk",children:[]}],filePathRelative:"tools/git.md",git:{updatedTime:1639064924e3,contributors:[{name:"codingoer",email:"codingoer@163.com",commits:1}]}}},91067:(s,n,e)=>{e.r(n),e.d(n,{default:()=>l});const a=(0,e(66252).uE)('<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1><h2 id="git配置" tabindex="-1"><a class="header-anchor" href="#git配置" aria-hidden="true">#</a> Git配置</h2><p>Committer: 刘强 <a href="mailto:lionel@liuqiangdeMacBook-Pro.local">lionel@liuqiangdeMacBook-Pro.local</a> 您的姓名和邮件地址基于登录名和主机名进行了自动设置。请检查它们正确 与否。您可以对其进行设置以免再出现本提示信息。运行如下命令在编辑器 中编辑您的配置文件：</p><pre><code>git config --global --edit\n</code></pre><p>设置完毕后，您可以用下面的命令来修正本次提交所使用的用户身份：</p><pre><code>git commit --amend --reset-author\n</code></pre><ul><li>全局配置</li></ul><p>git config --global user.email “you@example.com” git config --global user.name “Your Name”</p><h2 id="重置提交用户信息" tabindex="-1"><a class="header-anchor" href="#重置提交用户信息" aria-hidden="true">#</a> 重置提交用户信息</h2><ol><li>修改正确的用户名和邮箱</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config user.name <span class="token string">&#39;xxx&#39;</span>\n<span class="token function">git</span> config user.email <span class="token string">&#39;xxx@xx.com&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2"><li>Rebase之前的提交记录</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> rebase -i HEAD~8\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>需要修改某一次的提交</li></ol><p>切换至英文输入法, 按下i字母, 即可进入编辑模式, 此时用光标定位到需要修改的那一条记录, <strong>将pick修改成edit</strong></p><ol start="4"><li>重置用户信息</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> commit --amend --reset-author\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="5"><li>继续Rebase</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> rebase --continue\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>当出现 <strong>Successfully rebased and updated refs/heads/master.</strong> 结束</p><ol start="6"><li>全部rebase完成之后强退代码到远端</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push --force  origin  master\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="下载的工程带有submodule" tabindex="-1"><a class="header-anchor" href="#下载的工程带有submodule" aria-hidden="true">#</a> 下载的工程带有submodule</h2><p>https://git-scm.com/book/en/v2/Git-Tools-Submodules</p><p>当使用git clone下来的工程中带有submodule时，初始的时候，submodule的内容并不会自动下载下来的，此时，只需执行如下命令</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> submodule update --init\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="本地新建项目推送到远端git仓库" tabindex="-1"><a class="header-anchor" href="#本地新建项目推送到远端git仓库" aria-hidden="true">#</a> 本地新建项目推送到远端git仓库</h2><ul><li>创建新版本库</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone git@code.aliyun.com:lionel/txp-framework.git\n<span class="token builtin class-name">cd</span> txp-framework\n<span class="token function">touch</span> README.md\n<span class="token function">git</span> <span class="token function">add</span> README.md\n<span class="token function">git</span> commit -m <span class="token string">&quot;add README&quot;</span>\n<span class="token function">git</span> push -u origin master\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>已存在的文件夹或 Git 仓库</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> existing_folder\n<span class="token function">git</span> init\n<span class="token function">git</span> remote <span class="token function">add</span> origin git@code.aliyun.com:lionel/txp-framework.git\n<span class="token function">git</span> pull origin master --allow-unrelated-histories\n<span class="token function">git</span> config user.name <span class="token string">&quot;Lionel&quot;</span>\n<span class="token function">git</span> config user.email <span class="token string">&quot;lionel217920@163.com&quot;</span>\n<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>\n<span class="token function">git</span> commit\n<span class="token function">git</span> push -u origin master\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="分支管理" tabindex="-1"><a class="header-anchor" href="#分支管理" aria-hidden="true">#</a> 分支管理</h2><h3 id="branch" tabindex="-1"><a class="header-anchor" href="#branch" aria-hidden="true">#</a> branch</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch feature_transport_specs\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>切换分支</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout hotfix_online\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>将本地分支推送到远端</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push origin hotfix_transport_property:hotfix_transport_property\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>删除远端分支</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push origin --delete feature_simple_version\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="rebase" tabindex="-1"><a class="header-anchor" href="#rebase" aria-hidden="true">#</a> rebase</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> rebase -i HEAD~15\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> rebase -i HEAD~3\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>CONFLICT (content): Merge conflict in m-model/src/main/java/com/yht/m/enums/ForwardType.java</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> add/rm <span class="token operator">&lt;</span>conflicted_files<span class="token operator">&gt;</span>\n<span class="token function">git</span> rebase --continue\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="撤销上一个版本" tabindex="-1"><a class="header-anchor" href="#撤销上一个版本" aria-hidden="true">#</a> 撤销上一个版本</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> reset --hard HEAD^\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>修改了一个文件，但是没有提交</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token builtin class-name">.</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="gitk" tabindex="-1"><a class="header-anchor" href="#gitk" aria-hidden="true">#</a> Gitk</h2><p><code>gitk</code>is a very powerful GUI tool.</p>',51),i={},l=(0,e(83744).Z)(i,[["render",function(s,n){return a}]])},83744:(s,n)=>{n.Z=(s,n)=>{const e=s.__vccOpts||s;for(const[s,a]of n)e[s]=a;return e}}}]);