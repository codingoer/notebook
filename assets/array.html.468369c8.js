import{d as n}from"./app.df89ce13.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},t=n(`<h1 id="java\u4E2D\u7684\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#java\u4E2D\u7684\u6570\u7EC4" aria-hidden="true">#</a> Java\u4E2D\u7684\u6570\u7EC4</h1><p>\u6570\u7EC4\u662F\u4E00\u79CD\u6570\u636E\u7ED3\u6784\uFF0C\u7528\u6765\u5B58\u50A8\u540C\u4E00\u7C7B\u578B\u7684\u96C6\u5408\u3002\u901A\u8FC7\u4E00\u4E2A\u6574\u6570\u4E0B\u6807\u5C31\u53EF\u4EE5\u8BBF\u95EE\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u3002</p><p><strong>\u4E00\u65E6\u521D\u59CB\u5316\u6570\u7EC4\u5C31\u4E0D\u80FD\u6539\u53D8\u957F\u5EA6\u4E86\u3002</strong></p><h2 id="\u6570\u7EC4\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u521D\u59CB\u5316" aria-hidden="true">#</a> \u6570\u7EC4\u521D\u59CB\u5316</h2><p>\u57FA\u672C\u7C7B\u578B\u7684\u6570\u7EC4\u6709\u4E09\u79CD\u8D4B\u7C7B\u578B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span> arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u7B2C\u4E09\u79CD\u5F62\u5F0F\uFF0C\u5373\u4F7F\u6CA1\u6709\u7ED9\u6BCF\u4E2A\u5143\u7D20\u8D4B\u503C\uFF0C\u6BCF\u4E2A\u5143\u7D20\u4E5F\u90FD\u6709\u4E00\u4E2A\u9ED8\u8BA4\u503C\u3002<strong>\u8FD9\u4E2A\u9ED8\u8BA4\u503C\u8DDF\u6570\u7EC4\u7C7B\u578B\u6709\u5173\u7CFB\u3002</strong></p><ul><li>\u6570\u503C\u7C7B\u578B\u9ED8\u8BA4\u503C\u662F0</li><li>boolean\u503C\u9ED8\u8BA4\u503C\u662Ffalse</li><li>char\u4E3A\u7A7A\u5B57\u7B26</li></ul><p><strong>\u4E0D\u80FD\u5728\u7ED9\u5B9A\u521D\u59CB\u503C\u7684\u540C\u65F6\u7ED9\u5B9A\u957F\u5EA6</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u6570\u7EC4\u5185\u5B58\u5206\u5E03" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u5185\u5B58\u5206\u5E03" aria-hidden="true">#</a> \u6570\u7EC4\u5185\u5B58\u5206\u5E03</h2><p><strong>\u6570\u7EC4\u7C7B\u578B\u548C\u57FA\u672C\u7C7B\u578B\u4E0D\u540C\uFF0C\u6570\u7EC4\u5728\u5185\u5B58\u4E2D\u6709\u4E24\u5757\u7A7A\u95F4\u3002</strong> \u4E00\u5757\u7528\u4E8E\u5B58\u50A8\u6570\u7EC4\u5185\u5BB9\u672C\u8EAB\uFF0C\u4E00\u5757\u7528\u4E8E\u5B58\u50A8\u5185\u5BB9\u7684\u4F4D\u7F6E\u3002</p><p>\u57FA\u672C\u6570\u636E\u7C7B\u578B\u5982\u4E0B</p><table><thead><tr><th style="text-align:left;">\u4EE3\u7801</th><th style="text-align:left;">\u5185\u5B58\u5730\u5740</th><th style="text-align:left;">\u5185\u5B58\u6570\u636E</th></tr></thead><tbody><tr><td style="text-align:left;">int a = 100</td><td style="text-align:left;">1000</td><td style="text-align:left;">100</td></tr></tbody></table><p>\u6570\u7EC4\u7C7B\u578B\u5982\u4E0B</p><table><thead><tr><th style="text-align:left;">\u4EE3\u7801</th><th style="text-align:left;">\u5185\u5B58\u5730\u5740</th><th style="text-align:left;">\u5185\u5B58\u6570\u636E</th></tr></thead><tbody><tr><td style="text-align:left;">int[] arr = {1,2,3}</td><td style="text-align:left;">2000</td><td style="text-align:left;">3000</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">3000</td><td style="text-align:left;">1</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">3004</td><td style="text-align:left;">2</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">3008</td><td style="text-align:left;">3</td></tr></tbody></table><p><strong>\u4E3A\u4EC0\u4E48\u6570\u636E\u8981\u7528\u4E24\u5757\u5185\u5B58\u7A7A\u95F4\uFF1F</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrA <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrB <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
arrA <span class="token operator">=</span> arrB<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5982\u679Carr\u5BF9\u5E94\u7684\u5185\u5B58\u7A7A\u95F4\u662F\u76F4\u63A5\u5B58\u50A8\u6570\u7EC4\u7684\u5185\u5BB9\uFF0C\u90A3\u4E48\u5C31\u6CA1\u6709\u8DB3\u591F\u7684\u7A7A\u95F4\u53BB\u5BB9\u7EB3arrB\u7684\u6240\u6709\u5143\u7D20\u3002</p><p>\u7528\u4E24\u5757\u7A7A\u95F4\u5B58\u50A8\uFF0CarrA\u5B58\u50A8\u7684\u503C\u5C31\u53D8\u6210\u4E86\u548CarrB\u7684\u4E00\u6837\uFF0C\u5B58\u50A8\u7684\u90FD\u662F\u6570\u7EC4\u5185\u5BB9{4, 5, 6, 7}\u7684\u5730\u5740\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

arrA<span class="token punctuation">,</span> arrB  <span class="token operator">-&gt;</span>    <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>{1, 2, 3}\u7684\u5185\u5B58\u7A7A\u95F4\u4E0D\u88AB\u518D\u5F15\u7528\uFF0C\u5C06\u88AB\u5783\u573E\u56DE\u6536\u3002</p><p><strong>\u7ED9\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u8D4B\u503C\u662F\u6539\u53D8\u6570\u7EC4\u7684\u5185\u5BB9\uFF0C\u800C\u7ED9\u6570\u636E\u53D8\u91CF\u8D4B\u503C\u5219\u4F1A\u8BA9\u53D8\u91CF\u6307\u5411\u4E00\u4E2A\u4E0D\u540C\u7684\u4F4D\u7F6E</strong></p><h2 id="\u6570\u7EC4\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u62F7\u8D1D" aria-hidden="true">#</a> \u6570\u7EC4\u62F7\u8D1D</h2><p>Java\u4E2D\u5141\u8BB8\u5C06\u4E00\u4E2A\u6570\u7EC4\u53D8\u91CF\u62F7\u8D1D\u7ED9\u53E6\u4E00\u4E2A\u6570\u7EC4\u53D8\u91CF\u3002\u8FD9\u65F6\u4E24\u4E2A\u53D8\u91CF\u5C06\u5F15\u7528\u76F8\u7B49\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrA <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span> <span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrB <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>arrB <span class="token operator">==</span> arrA<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// print is false;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrA <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span> <span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrB <span class="token operator">=</span> arrA<span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>arrB <span class="token operator">==</span> arrA<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// print is true;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5C06\u4E00\u4E2A\u6570\u7EC4\u7684\u6240\u6709\u503C\u62F7\u8D1D\u5230\u4E00\u4E2A\u65B0\u6570\u7EC4\u4E2D\u53BB\uFF0C\u5C31\u8981\u4F7F\u7528Arrays\u7C7B\u4E2D\u7684copyOf\u65B9\u6CD5</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrA <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span> <span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrB <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>arrA<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>arrB <span class="token operator">==</span> arrA<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// print is false;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrA <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span> <span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrB <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>arrA<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>arrB<span class="token punctuation">,</span> arrA<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// print is true;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u6570\u7EC4\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u6392\u5E8F" aria-hidden="true">#</a> \u6570\u7EC4\u6392\u5E8F</h2><p><strong>\u5FEB\u901F\u6392\u5E8F\u7B97\u6CD5</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrC <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span> <span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>arrC<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">:</span> arrC<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u591A\u7EF4\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u591A\u7EF4\u6570\u7EC4" aria-hidden="true">#</a> \u591A\u7EF4\u6570\u7EC4</h2>`,36);function p(e,o){return t}var u=a(s,[["render",p],["__file","array.html.vue"]]);export{u as default};
