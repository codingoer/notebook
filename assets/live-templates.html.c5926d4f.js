import{d as a}from"./app.df89ce13.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=a(`<h1 id="live-templates" tabindex="-1"><a class="header-anchor" href="#live-templates" aria-hidden="true">#</a> Live Templates</h1><h2 id="class-comments" tabindex="-1"><a class="header-anchor" href="#class-comments" aria-hidden="true">#</a> Class Comments</h2><ol><li><p>create Templates Group</p></li><li><p>create Live Template</p></li><li><p>set abbreviation</p></li><li><p>Temmplate Text</p></li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token operator">*</span>
 <span class="token operator">*</span> <span class="token class-name">Description</span>\uFF1A
 <span class="token operator">*</span>
 <span class="token operator">*</span> <span class="token annotation punctuation">@author</span> <span class="token class-name">LiuQiang</span>
 <span class="token operator">*</span> <span class="token annotation punctuation">@date</span> <span class="token class-name">Created</span> in $DATE$ $TIME$
 <span class="token operator">*</span><span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="5"><li>Edit Template Variables</li></ol><ul><li>DATE -&gt; date()</li><li>TIME -&gt; time(&quot;HH:mm&quot;)</li></ul><ol start="6"><li>Applicable in Java: commment</li></ol><h2 id="function-templates" tabindex="-1"><a class="header-anchor" href="#function-templates" aria-hidden="true">#</a> Function Templates</h2><ol><li><p>create Templates Group</p></li><li><p>create Live Template</p></li><li><p>set abbreviation</p></li><li><p>Temmplate Text</p></li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token operator">*</span>
 <span class="token operator">*</span> <span class="token class-name">Description</span>\uFF1A
 <span class="token operator">*</span>
 <span class="token operator">*</span> <span class="token annotation punctuation">@param</span> $PARAM$
 <span class="token operator">*</span> <span class="token annotation punctuation">@return</span> $RETURN$
 <span class="token operator">*</span> <span class="token annotation punctuation">@author</span> <span class="token class-name">LiuQiang</span>
 <span class="token operator">*</span> <span class="token annotation punctuation">@date</span> <span class="token class-name">Created</span> in $DATE$ $TIME$
 <span class="token operator">*</span><span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="5"><li>Edit Template Variables</li></ol><ul><li>DATE -&gt; date()</li><li>TIME -&gt; time(&quot;HH:mm&quot;)</li><li>RETURN -&gt; methodReturnType()</li><li>PARAM</li></ul><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code><span class="token function">groovyScript</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;def result=&#39;&#39;; def params=\\&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression"><span class="token number">_1</span></span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\&quot;.replaceAll(&#39;[\\\\\\\\[|\\\\\\\\]|\\\\\\\\s]&#39;, &#39;&#39;).split(&#39;,&#39;).toList(); for(i = 0; i &lt; params.size(); i++) {result+=&#39; * @param &#39; + params[i] + ((i &lt; params.size() - 1) ? &#39;\\\\n&#39;:&#39;&#39;)}; return result&quot;</span></span><span class="token punctuation">,</span> <span class="token function">methodParameters</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="6"><li>Applicable in Java: commment</li></ol>`,14);function t(p,l){return e}var r=n(s,[["render",t],["__file","live-templates.html.vue"]]);export{r as default};
