"use strict";
exports.id = 1452;
exports.ids = [1452];
exports.modules = {

/***/ 98263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-ca10d0b2",
  "path": "/database/mongodb/installation.html",
  "title": "Install MongoDB",
  "lang": "zh-CN",
  "frontmatter": {
    "sidebar": "auto"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "From an archive file",
      "slug": "from-an-archive-file",
      "children": [
        {
          "level": 3,
          "title": "Install MongoDB",
          "slug": "install-mongodb-1",
          "children": []
        },
        {
          "level": 3,
          "title": "Run MongoDB",
          "slug": "run-mongodb",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "From Linux package manager",
      "slug": "from-linux-package-manager",
      "children": [
        {
          "level": 3,
          "title": "Install on Red Hat",
          "slug": "install-on-red-hat",
          "children": []
        },
        {
          "level": 3,
          "title": "Install on Ubuntu",
          "slug": "install-on-ubuntu",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Run MongoDB",
      "slug": "run-mongodb-1",
      "children": []
    },
    {
      "level": 2,
      "title": "Procedure",
      "slug": "procedure",
      "children": []
    },
    {
      "level": 2,
      "title": "Uninstall MongoDB",
      "slug": "uninstall-mongodb",
      "children": []
    },
    {
      "level": 2,
      "title": "MongoDB包下面的组件",
      "slug": "mongodb包下面的组件",
      "children": [
        {
          "level": 3,
          "title": "mongod",
          "slug": "mongod",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "database/mongodb/installation.md",
  "git": {
    "updatedTime": 1639064924000,
    "contributors": [
      {
        "name": "codingoer",
        "email": "codingoer@163.com",
        "commits": 1
      }
    ]
  }
}


/***/ }),

/***/ 34047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ installation_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/database/mongodb/installation.html.vue?vue&type=template&id=0a282b88



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="install-mongodb" tabindex="-1"><a class="header-anchor" href="#install-mongodb" aria-hidden="true">#</a> Install MongoDB</h1><p>MongoDB有两个版本：<strong>Community-社区版</strong> 和 <strong>Enterprise-企业版</strong>。一般都使用的是<code>社区版</code>，企业版有一些高级特性，技术支持比较好，其实差别不大，社区版足够使用。</p><h2 id="from-an-archive-file" tabindex="-1"><a class="header-anchor" href="#from-an-archive-file" aria-hidden="true">#</a> From an archive file</h2><h3 id="install-mongodb-1" tabindex="-1"><a class="header-anchor" href="#install-mongodb-1" aria-hidden="true">#</a> Install MongoDB</h3><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>使用二进制安装文件，需要安装依赖</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> libcurl openssl
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> libcurl4 openssl
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol><li>下载二进制版本的MongoDB，<a href="https://www.mongodb.com/download-center/community" target="_blank" rel="noopener noreferrer">官网链接`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li>使用<code>tar</code>命令解压文件</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> -xzvf <span class="token operator">&lt;</span>tgz file<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>将解压出来的文件拷贝到MongoDB运行的目录</li><li>添加环境变量<br> MongoDB二进制文件在<code>bin</code>目录，确认其在<code>PATH</code>，修改 编辑<code>profile</code>文件，添加路径</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/profile
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token operator">&lt;</span>mongodb-install-directory<span class="token operator">&gt;</span>/bin:<span class="token environment constant">\$PATH</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="run-mongodb" tabindex="-1"><a class="header-anchor" href="#run-mongodb" aria-hidden="true">#</a> Run MongoDB</h3><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>注意相关文件夹权限</p></div><ol><li>创建数据文件夹<br> 在第一次启动之前，创建<code>mongod</code>进程将要写如数据的文件夹，默认路径<code>/data/db</code>，如果制定了其他文件夹，必须制定<code>dbpath</code>选项</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /data/db
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>设置文件夹权限<br> 启动<code>mongod</code>之前，确定当前账户有<strong>读和写</strong>这个文件夹的权限</li><li>启动MongoDB<br> 通过<code>mongod</code>命令来启动MongoDB，特殊情况下还可以指定数据文件夹的路径</li></ol><p><strong>通用情况</strong></p><p>如果<code>PATH</code>系统环境变量包含了<code>mongod</code>的二进制文件，并且使用默认的数据路径(/data/db)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mongod
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>指定数据路径</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mongod --dbpath <span class="token operator">&lt;</span>path to data directory<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>指定mongod路径</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&lt;</span>path to binary<span class="token operator">&gt;</span>/mongod
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="4"><li>检验MongoDB是否启动成功，观察日志文件</li></ol><blockquote><p>[initandlisten] waiting for connections on port 27017</p></blockquote><h2 id="from-linux-package-manager" tabindex="-1"><a class="header-anchor" href="#from-linux-package-manager" aria-hidden="true">#</a> From Linux package manager</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>使用Linux软件包管理器安装</p></div><p>MongoDB针对不同的Linux发行版本，提供了官方支持的软件包。</p><table><thead><tr><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">包名称</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">说明</th></tr></thead><tbody><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">mongodb-org</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">会自动安装如下四个包组件</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">mongodb-org-server</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">包含mongo进程，初始化脚本，配置文件(<code>/etc/mongod.conf</code>)</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">mongodb-org-mongos</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">包含mongo守护进程</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">mongodb-org-shell</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">包含mongo shell</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">mongodb-org-tools</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">包含一些mongo工具组件</td></tr></tbody></table><h3 id="install-on-red-hat" tabindex="-1"><a class="header-anchor" href="#install-on-red-hat" aria-hidden="true">#</a> Install on Red Hat</h3><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>只支持64位操作系统</p></div><blockquote><p><strong>使用.rpm包管理器，推荐的安装方式</strong></p></blockquote><p>MongoDB软件包不存在CentOS默认的包仓库中。但是MongoDB需要一个专用的仓库，在这个仓库中提供了专门的包，首先要将它添加到服务器的仓库中。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vi</span> /etc/yum.repos.d/mongodb-org.repo
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>mongodb-org-4.0<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>MongoDB Repository
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>https://repo.mongodb.org/yum/redhat/<span class="token variable">\$releasever</span>/mongodb-org/4.0/x86_64/
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>https://www.mongodb.org/static/pgp/server-4.0.asc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在往下继续进行之前，先校验一下MongoDB仓库是否存在<code>yum</code>程序中。<code>repolist</code>命令显示了可用的仓库列表。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum repolist
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>输出如下信息 <img src="http://image.hualihai.cn/blog/348be742-54c4-42de-a481-211ffeeed505" alt="MongoDB repo"></p><p>接下来使用yum安装MongoDB</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum -y <span class="token function">install</span> mongodb-org
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>安装指定版本的MongoDB</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> -y mongodb-org-4.0.8 mongodb-org-server-4.0.8 mongodb-org-shell-4.0.8 mongodb-org-mongos-4.0.8 mongodb-org-tools-4.0.8
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>阻止<code>yum</code>自动升级MongoDB，在 <strong>/etc/yum.conf</strong> 添加排除指令</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">exclude</span><span class="token operator">=</span>mongodb-org,mongodb-org-server,mongodb-org-shell,mongodb-org-mongos,mongodb-org-tools
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="install-on-ubuntu" tabindex="-1"><a class="header-anchor" href="#install-on-ubuntu" aria-hidden="true">#</a> Install on Ubuntu</h3><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>只支持64位 LTS发型版本</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>必须升级 <strong>glibc</strong> 到2.23版本</p></div><div class="custom-container danger"><p class="custom-container-title">Important</p><p>Ubuntu提供的非官方的<code>mongodb</code>包与MongoDB官方支持的包有冲突，并且官方也不维护。所以使用MongoDB官方的<code>mongodb-org</code>包。</p></div><p>先查看系统是否安装Ubuntu提供的mongo包，然后卸载</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> list --installed <span class="token operator">|</span> <span class="token function">grep</span> mongodb
<span class="token function">sudo</span> <span class="token function">apt</span> remove mongodb
<span class="token function">sudo</span> <span class="token function">apt-get</span> purge mongo*
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>导入包管理系统使用的公钥，Ubuntu包管理系统(例如<code>dpkg</code>或者<code>apt</code>)要求供应商使用密钥签署软件包，从而确保软件包的一致性和真实性</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="http://image.hualihai.cn/blog/7d7729ca-aaac-4d87-9789-1464c804821e" alt="导入秘钥"></p><p>创建仓库文件，创建<code>/etc/apt/sources.list.d/mongodb-org-4.0.list</code>文件，添加如下信息</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/mongodb-org-4.0.list
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>重新加载本地包仓库</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>安装MongoDB软件包</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y mongodb-org
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>安装特殊版本的MongoDB</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y mongodb-org<span class="token operator">=</span><span class="token number">4.0</span>.8 mongodb-org-server<span class="token operator">=</span><span class="token number">4.0</span>.8 mongodb-org-shell<span class="token operator">=</span><span class="token number">4.0</span>.8 mongodb-org-mongos<span class="token operator">=</span><span class="token number">4.0</span>.8 mongodb-org-tools<span class="token operator">=</span><span class="token number">4.0</span>.8
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="http://image.hualihai.cn/blog/4cc64bc8-05c5-4efa-9012-d8b953ac7a47" alt="安装异常"></p><p>修复依赖关系</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -f
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>再次执行<code>sudo apt-get install -y mongodb-org</code></p><p><img src="http://image.hualihai.cn/blog/8f066501-64ba-4d76-bb1f-548f0d2f672e" alt="安装截图"> 系统会自动创建<code>mongodb</code>用户和用户组 <img src="http://image.hualihai.cn/blog/27e455bf-59dc-422b-826c-456425c0b7a3" alt="安装截图"></p><h2 id="run-mongodb-1" tabindex="-1"><a class="header-anchor" href="#run-mongodb-1" aria-hidden="true">#</a> Run MongoDB</h2><p>默认情况下，MongoDB会使用<code>mongod</code>用户和一些默认的文件路径来运行</p><ul><li>/var/lib/mongo （数据文件夹）</li><li>/var/log/mongodb （日志文件夹）</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>如果使用包管理工具安装，默认文件夹都会创建，并且文件夹的用户和用户组的权限都是<code>mongod</code></p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>如果使用二进制包安装，不会创建数据文件夹和日志文件夹</p></div><p>手动创建文件夹</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /var/lib/mongo
<span class="token function">mkdir</span> -p /var/log/mongodb
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>默认情况下，MongoDB使用<code>mongod</code>用户来运行，修改文件夹权限</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chown</span> -R mongod:mongod <span class="token operator">&lt;</span>directory<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>MongoDB包含了一个配置文件(<code>/etc/mongod.conf</code>),要想制定其他的日志或者数据文件路径，要修改配置文件</p><ul><li><code>storage.dbPath</code> 指定了数据文件路径（<strong>/some/data/directory</strong>）</li><li><code>systemLog.path</code> 指定了日志文件路径（<strong>/some/log/directory/mongod.log</strong>）</li></ul><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>注意新文件夹权限，并重启服务</p></div><h2 id="procedure" tabindex="-1"><a class="header-anchor" href="#procedure" aria-hidden="true">#</a> Procedure</h2><p>启动<code>mongod</code>进程</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> mongod start
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>校验MongoDB是否启动成功，通过日志文件 <strong>/var/log/mongodb/mongod.log</strong></p><blockquote><p>waiting for connections on port 27017</p></blockquote><p>默认的端口号是27017，配置在 <strong>/etc/mongod.conf</strong></p><p>设置开机启动</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chkconfig</span> mongod on
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>重启MongoDB</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> mongod restart
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>通过观察日志（<code>/var/log/mongodb/mongod.log</code>）可查看执行的重要信息或错误信息。</p><p>停止Mongo服务</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> mongod stop
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>运行<code>mongo</code>命令连接本地默认端口27017的<code>mongod</code>服务</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mongo
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="uninstall-mongodb" tabindex="-1"><a class="header-anchor" href="#uninstall-mongodb" aria-hidden="true">#</a> Uninstall MongoDB</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>全卸载MongoDB，包括配置，数据文件，不可回滚。备份好数据</p></div><ol><li>停止服务</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> mongod stop
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>移除安装的MongoDB包</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum erase <span class="token variable"><span class="token variable">\$(</span><span class="token function">rpm</span> -qa <span class="token operator">|</span> <span class="token function">grep</span> mongodb-org<span class="token variable">)</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> purge mongodb-org*
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>移除数据文件夹</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rm</span> -r /var/log/mongodb
<span class="token function">sudo</span> <span class="token function">rm</span> -r /var/lib/mongo
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="mongodb包下面的组件" tabindex="-1"><a class="header-anchor" href="#mongodb包下面的组件" aria-hidden="true">#</a> MongoDB包下面的组件</h2><h3 id="mongod" tabindex="-1"><a class="header-anchor" href="#mongod" aria-hidden="true">#</a> mongod</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>mongod</code>是MongoDB系统中主要的守护进程，处理数据请求，管理数据存取，执行后台一些管理操作。</p></div><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/database/mongodb/installation.html.vue?vue&type=template&id=0a282b88

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/database/mongodb/installation.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const installation_html = (__exports__);

/***/ }),

/***/ 83744:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ })

};
;
//# sourceMappingURL=1452.app.js.map