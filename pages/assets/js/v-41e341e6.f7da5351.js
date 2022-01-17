"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[4803],{58105:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-41e341e6",path:"/server/proxy/shadowsockets.html",title:"使用Shadowsocks创建SOCKS5代理服务器",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"安装Shadowsocks",slug:"安装shadowsocks",children:[]},{level:2,title:"搭建服务端（Linux）",slug:"搭建服务端-linux",children:[]},{level:2,title:"搭建客户端（Linux）",slug:"搭建客户端-linux",children:[]},{level:2,title:"注意事项",slug:"注意事项",children:[]}],filePathRelative:"server/proxy/shadowsockets.md",git:{updatedTime:1639064924e3,contributors:[{name:"codingoer",email:"codingoer@163.com",commits:1}]}}},92712:(s,n,a)=>{a.r(n),a.d(n,{default:()=>o});const e=(0,a(66252).uE)('<h1 id="使用shadowsocks创建socks5代理服务器" tabindex="-1"><a class="header-anchor" href="#使用shadowsocks创建socks5代理服务器" aria-hidden="true">#</a> 使用Shadowsocks创建SOCKS5代理服务器</h1><p><code>shadowsockets</code>是一种轻量级的<code>SOCKS5</code>web代理工具，主要用于绕过某些网站和web协议上的网络审查和屏蔽。</p><h2 id="安装shadowsocks" tabindex="-1"><a class="header-anchor" href="#安装shadowsocks" aria-hidden="true">#</a> 安装Shadowsocks</h2><p>首先要安装<code>pip</code>，通过pip来安装shadowsockets。pip是一个非常强大的包管理系统，用来安装和管理使用<code>Python</code>语言编写的软件。</p><ol><li>安装pip，pip并不在CentOS核心包里面，所以需要用到Epel包仓库。</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> -y epel-release\n<span class="token function">sudo</span> yum <span class="token function">install</span> -y python-pip\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2"><li>校验是否安装成功</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip --version\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>pip常用命令</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip <span class="token function">install</span> <span class="token punctuation">[</span>package_name<span class="token punctuation">]</span>\npip uninstall <span class="token punctuation">[</span>package_name<span class="token punctuation">]</span>\npip search <span class="token punctuation">[</span>package_name<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="4"><li>安装Shadowsocks</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip <span class="token function">install</span> shadowsocks\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="搭建服务端-linux" tabindex="-1"><a class="header-anchor" href="#搭建服务端-linux" aria-hidden="true">#</a> 搭建服务端（Linux）</h2><p>在etc目录下创建shadowsocks文件夹，并创建config.json文件.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;server&quot;</span><span class="token operator">:</span><span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;local_address&quot;</span><span class="token operator">:</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;local_port&quot;</span><span class="token operator">:</span><span class="token number">1080</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;port_password&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>\n         <span class="token property">&quot;8989&quot;</span><span class="token operator">:</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span>\n         <span class="token property">&quot;9001&quot;</span><span class="token operator">:</span><span class="token string">&quot;123456&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;timeout&quot;</span><span class="token operator">:</span><span class="token number">600</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;method&quot;</span><span class="token operator">:</span><span class="token string">&quot;aes-256-cfb&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;fast_open&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>启动/停止命令</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssserver -c /etc/shadowsocks.json -d start\nssserver -c /etc/shadowsocks.json -d stop\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="搭建客户端-linux" tabindex="-1"><a class="header-anchor" href="#搭建客户端-linux" aria-hidden="true">#</a> 搭建客户端（Linux）</h2><p>在etc目录下创建shadowsocks文件夹，并创建config.json文件.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;server&quot;</span><span class="token operator">:</span><span class="token string">&quot;x.x.x.x&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;server_port&quot;</span><span class="token operator">:</span><span class="token number">8989</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;local_address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;local_port&quot;</span><span class="token operator">:</span><span class="token number">1080</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;timeout&quot;</span><span class="token operator">:</span><span class="token number">300</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;method&quot;</span><span class="token operator">:</span><span class="token string">&quot;aes-256-cfb&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;fast_open&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;workers&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;prefer_ipv6&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>启动命令</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>sslocal -c /etc/shadowsocks/config.json\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><p>在搭建客户端时，本地IP地址<code>local_address</code>不要写成<code>127.0.0.1</code>或者内网IP<code>172.16.2.32</code>，要将本地IP地址设置成<code>0.0.0.0</code>。</p><p>如果将<code>local_address</code>地址设置成<code>127.0.0.1</code>，那么在局域网内，其他机器不能通过sockets代理，需要把IP设置<code>0.0.0.0</code></p><p>!&gt; <code>127.0.0.1</code>和<code>0.0.0.0</code>的区别？</p>',26),p={},o=(0,a(83744).Z)(p,[["render",function(s,n){return e}]])},83744:(s,n)=>{n.Z=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}}}]);