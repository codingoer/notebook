import{d as n}from"./app.df89ce13.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u5F02\u5E38\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u5F02\u5E38\u5904\u7406" aria-hidden="true">#</a> \u5F02\u5E38\u5904\u7406</h1><p><strong>Java\u652F\u6301\u7684\u5F02\u5E38\u5904\u7406\u5305\u62EC\uFF1Acatch\uFF0Cthrow\uFF0Cfinally\uFF0Ctry-with-resources\uFF0Cthorws</strong></p><h2 id="catch\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#catch\u5339\u914D" aria-hidden="true">#</a> catch\u5339\u914D</h2><ul><li>\u5F02\u5E38\u5904\u7406\u5C06\u6839\u636E\u629B\u51FA\u7684\u5F02\u5E38\u7C7B\u578B\u627E\u5230\u7B2C\u4E00\u4E2A\u5339\u914D\u7684catch\u5757</li><li>\u627E\u5230\u540E\u4E0D\u518D\u6267\u884C\u5176\u4ED6catch\u5757\u7684\u4EE3\u7801</li><li>\u5982\u679C\u6CA1\u6709\u627E\u5230\u4F1A\u7EE7\u7EED\u5230\u4E0A\u5C42\u65B9\u6CD5\u4E2D\u67E5\u627E</li><li><strong>\u629B\u51FA\u7684\u5F02\u5E38\u7C7B\u578B\u662Fcatch\u4E2D\u58F0\u660E\u5F02\u5E38\u7684\u5B50\u7C7B\u4E5F\u7B97\u5339\u914D</strong></li><li>\u5C11\u7528\u57FA\u7C7BException</li></ul><h2 id="\u91CD\u65B0\u629B\u51FA\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#\u91CD\u65B0\u629B\u51FA\u5F02\u5E38" aria-hidden="true">#</a> \u91CD\u65B0\u629B\u51FA\u5F02\u5E38</h2><p>\u91CD\u65B0\u629B\u51FA\u5F02\u5E38\u7684\u597D\u5904\uFF1A</p><p>\u5F53\u524D\u5F02\u5E38\u4E0D\u592A\u9002\u5408\u5904\u7406\uFF0C\u9700\u8981\u629B\u51FA\u5230\u4E0A\u5C42\u5904\u7406\u3002</p><h2 id="finally" tabindex="-1"><a class="header-anchor" href="#finally" aria-hidden="true">#</a> finally</h2><p><strong>finally\u5185\u7684\u4EE3\u7801\u4E0D\u7BA1\u6709\u65E0\u5F02\u5E38\u53D1\u751F\uFF0C\u90FD\u4F1A\u6267\u884C\u3002\u4E00\u822C\u7528\u4E8E\u91CA\u653E\u8D44\u6E90\uFF0C\u6570\u636E\u5E93\u8FDE\u63A5\uFF0C\u6587\u4EF6\u6D41\u7B49</strong></p><ul><li>\u5982\u679C\u6CA1\u6709\u5F02\u5E38\u53D1\u751F\uFF0C\u5728try\u5185\u7684\u4EE3\u7801\u6267\u884C\u7ED3\u675F\u540E\u6267\u884C</li><li>\u5982\u679C\u6709\u5F02\u5E38\u53D1\u751F\u4E14\u88ABcatch\u6355\u83B7\uFF0C\u5728catch\u5185\u7684\u4EE3\u7801\u6267\u884C\u540E\u518D\u6267\u884C</li><li>\u5982\u679C\u6709\u5F02\u5E38\u53D1\u751F\u4F46\u6CA1\u6709\u88AB\u6355\u83B7\uFF0C\u5219\u5728\u5F02\u5E38\u629B\u7ED9\u4E0A\u5C42\u4E4B\u524D\u6267\u884C</li></ul><p>try/catch/finally\u8BED\u6CD5\u4E2D\uFF0Ccatch\u4E0D\u662F\u5FC5\u9700\u7684\uFF0C\u53EF\u4EE5\u53EA\u6709try/finally</p><p>\u51E0\u4E2A\u793A\u4F8B</p><ol><li>\u6709\u5F02\u5E38\u53D1\u751F\u6CA1\u6709\u88AB\u6355\u83B7\uFF0C\u5728\u5F02\u5E38\u629B\u7ED9\u4E0A\u5C42\u4E4B\u524D\u6267\u884C</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token class-name">Integer</span> a <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&quot;s&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;finally \u6267\u884C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5148\u6267\u884Cfinally\uFF0C\u518D\u6253\u5370\u5806\u6808\u4FE1\u606F\u3002</p><ol start="2"><li>try/catch\u91CC\u9762\u6709return\u8BED\u53E5</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> ret <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token class-name">Integer</span> b <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&quot;s&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NumberFormatException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;catch \u6267\u884C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    ret <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;finally\u6267\u884C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>return\u8BED\u53E5\u5728finally\u8BED\u53E5\u6267\u884C\u7ED3\u675F\u540E\u624D\u6267\u884C\uFF0C<strong>finally\u5E76\u4E0D\u80FD\u6539\u53D8\u8FD4\u56DE\u503C\uFF0C\u8FD4\u56DE\u7684\u7ED3\u679C\u662F0</strong></p><p>\u5B9E\u9645\u6267\u884C\u8FC7\u7A0B\uFF1A</p><p><strong>\u5728\u6267\u884C\u5230try\u5185\u7684return\u8BED\u53E5\u65F6\uFF0C\u4F1A\u628A\u8FD4\u56DE\u503C\u4FDD\u5B58\u5728\u4E00\u4E2A\u4E34\u65F6\u53D8\u91CF\u4E2D\uFF0C\u7136\u540E\u624D\u6267\u884Cfinally\u8BED\u53E5\uFF0C\u6700\u540Etry\u518D\u8FD4\u56DE\u90A3\u4E2A\u4E34\u65F6\u53D8\u91CF</strong></p><ol start="3"><li>finally\u4E2D\u4E5F\u6709return\u8BED\u53E5</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> ret <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li><strong>try/catch\u7684return\u8BED\u53E5\u4F1A\u4E22\u5931\uFF0C\u5B9E\u9645\u8FD4\u56DEfinally\u4E2D\u7684\u503C</strong></li><li><strong>try/catch\u5185\u7684\u5F02\u5E38\u4F1A\u88AB\u8986\u76D6\uFF0C\u5C31\u50CF\u662F\u5F02\u5E38\u6CA1\u6709\u53D1\u751F\u4E00\u6837</strong></li><li><strong>finally\u4E2D\u5982\u679C\u629B\u51FA\u5F02\u5E38\uFF0C\u5219\u539F\u5F02\u5E38\u4F1A\u88AB\u8986\u76D6</strong></li><li><strong>\u907F\u514D\u5728finally\u4E2D\u4F7F\u7528return\u8BED\u53E5</strong></li></ul><h2 id="try-with-resources" tabindex="-1"><a class="header-anchor" href="#try-with-resources" aria-hidden="true">#</a> try-with-resources</h2><p>Java7\u652F\u6301\u7684\u4E00\u79CD\u65B0\u8BED\u6CD5\uFF0C\u9488\u5BF9\u4F7F\u7528\u8D44\u6E90\u7684\u573A\u666F\u3002\u9488\u5BF9\u4E86\u5B9E\u73B0<strong>java.lang.AutoCloseable</strong>\u63A5\u53E3\u7684\u5BF9\u8C61\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">useResources</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">AutoCloseable</span> r <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4F7F\u7528\u8D44\u6E90</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8D44\u6E90r\u7684\u58F0\u660E\u5728try\u5185\uFF0C\u4E0D\u7528\u518D\u8C03\u7528finally\uFF0C\u5728\u8BED\u53E5\u6267\u884C\u5B8C\u4F1A\u81EA\u52A8\u8C03\u7528\u8D44\u6E90\u7684close\u65B9\u6CD5\u3002</p><p>Java\u4E2D\u7684\u8BED\u6CD5\u7CD6</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>self<span class="token punctuation">.</span><span class="token function">deleteById</span><span class="token punctuation">(</span>oldId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">GoodsIdChangeMessage</span> message <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GoodsIdChangeMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    message<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>nowId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    message<span class="token punctuation">.</span><span class="token function">setOldId</span><span class="token punctuation">(</span>oldId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>messageQueueService<span class="token punctuation">.</span><span class="token function">sendGoodsIdChange</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>goodsStatisticService<span class="token punctuation">.</span><span class="token function">changeGoodsId</span><span class="token punctuation">(</span>nowId<span class="token punctuation">,</span> oldId<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> var17<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    var7 <span class="token operator">=</span> var17<span class="token punctuation">;</span>
    <span class="token keyword">throw</span> var17<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ignored <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>var7 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                ignored<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> var16<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                var7<span class="token punctuation">.</span><span class="token function">addSuppressed</span><span class="token punctuation">(</span>var16<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            ignored<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="throws" tabindex="-1"><a class="header-anchor" href="#throws" aria-hidden="true">#</a> throws</h2><p><strong>throws\u8DDF\u5728\u65B9\u6CD5\u7684\u62EC\u53F7\u5916\u9762\uFF0C\u591A\u4E2A\u5F02\u5E38\u7528\u9017\u53F7\u5206\u9694\uFF0C\u8868\u660E\u8FD9\u4E2A\u65B9\u6CD5\u5185\u53EF\u80FD\u4F1A\u629B\u51FA\u5F02\u5E38\uFF0C\u4E14\u6CA1\u6709\u5BF9\u5F02\u5E38\u8FDB\u884C\u5904\u7406\u3002</strong></p><ul><li>\u5BF9\u4E8E\u672A\u53D7\u68C0\u5F02\u5E38\u4E0D\u8981\u6C42\u4F7F\u7528throws\u8FDB\u884C\u58F0\u660E</li><li>\u5BF9\u4E8E\u53D7\u68C0\u5F02\u5E38\u5219\u5FC5\u987B\u8FDB\u884C\u58F0\u660E</li><li>\u5BF9\u4E8E\u53D7\u68C0\u5F02\u5E38\u4E0D\u53EF\u4EE5\u629B\u51FA\u800C\u4E0D\u58F0\u660E\uFF0C\u4F46\u662F\u58F0\u660E\u53EF\u4EE5\u4E0D\u629B\u51FA</li><li>\u4E3B\u8981\u7528\u4E8E\u5728\u7236\u7C7B\u65B9\u6CD5\u58F0\u660E</li></ul>`,32);function t(e,o){return p}var u=s(a,[["render",t],["__file","exception-process.html.vue"]]);export{u as default};
