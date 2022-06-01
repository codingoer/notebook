import{r as a,c as o,a as e,b as d,w as c,F as r,d as s,e as n,o as i}from"./app.df89ce13.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const p={},u=s(`<h1 id="page" tabindex="-1"><a class="header-anchor" href="#page" aria-hidden="true">#</a> Page</h1><p>VuePress is markdown-centered. Each markdown file inside your project is a standalone page.</p><h2 id="routing" tabindex="-1"><a class="header-anchor" href="#routing" aria-hidden="true">#</a> Routing</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u2514\u2500 docs
   \u251C\u2500 guide
   \u2502  \u251C\u2500 getting-started.md
   \u2502  \u2514\u2500 README.md
   \u251C\u2500 contributing.md
   \u2514\u2500 README.md
   \u2514\u2500 .vuepress
      \u2514\u2500 config.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><table><thead><tr><th>Relative Path</th><th>Route Path</th></tr></thead><tbody><tr><td><code>/README.md</code></td><td><code>/</code></td></tr><tr><td><code>/index.md</code></td><td><code>/</code></td></tr><tr><td><code>/contributing.md</code></td><td><code>/contributing.html</code></td></tr><tr><td><code>/guide/README.md</code></td><td><code>/guide/</code></td></tr><tr><td><code>/guide/page.md</code></td><td><code>/guide/page.html</code></td></tr></tbody></table>`,5),h={class:"custom-container tip"},m=e("p",{class:"custom-container-title"},"Tips",-1),g=e("p",null,[n("By default, both "),e("code",null,"README.md"),n(" and "),e("code",null,"index.md"),n(" would be converted to "),e("code",null,"index.html"),n(" and generate a slash-ending route path. However, it might cause conflicts if you want to keep both of the two files.")],-1),b=n("In such case, you can set the "),_=n("pagePatterns"),f=n(" to avoid one of them being processed by VuePress, e.g. use "),v=e("code",null,"['**/*.md', '!**/README.md', '!.vuepress', '!node_modules']",-1),k=n(" to exclude all "),x=e("code",null,"README.md",-1),E=n(" files."),R=s(`<h2 id="config-file" tabindex="-1"><a class="header-anchor" href="#config-file" aria-hidden="true">#</a> Config file</h2><p>Vuepress\u9ED8\u8BA4\u7684\u914D\u7F6E\u6587\u4EF6\u5728docs\u76EE\u5F55\u4E0B\u9762\u7684.vuepress\u76EE\u5F55\u4E2D\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u914D\u7F6E\u6587\u4EF6\u7684\u4F4D\u7F6E\uFF0C\u6211\u662F\u653E\u5728\u4E86\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u9762\u7684config\u6587\u4EF6\u4E0B\u3002</p><p>\u5728package.json\u4E2D\u6307\u5B9A\u6587\u4EF6\u4F4D\u7F6E\u5373\u53EF\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs --clean-cache --clean-temp --config config/config.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs --clean-cache --clean-temp --config config/config.ts&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,4);function q(y,w){const t=a("RouterLink");return i(),o(r,null,[u,e("div",h,[m,g,e("p",null,[b,d(t,{to:"/guide/reference/config.html#pagepatterns"},{default:c(()=>[_]),_:1}),f,v,k,x,E])]),R],64)}var M=l(p,[["render",q],["__file","page-routing.html.vue"]]);export{M as default};
