"use strict";
exports.id = 3825;
exports.ids = [3825];
exports.modules = {

/***/ 1910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-5e532537",
  "path": "/java/oop/exception-base.html",
  "title": "异常类基础",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "throw与return的对比",
      "slug": "throw与return的对比",
      "children": []
    },
    {
      "level": 2,
      "title": "默认异常处理机制",
      "slug": "默认异常处理机制",
      "children": []
    },
    {
      "level": 2,
      "title": "异常类",
      "slug": "异常类",
      "children": [
        {
          "level": 3,
          "title": "Throwable",
          "slug": "throwable",
          "children": []
        },
        {
          "level": 3,
          "title": "异常类体系",
          "slug": "异常类体系",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "受检异常与未受检异常",
      "slug": "受检异常与未受检异常",
      "children": []
    }
  ],
  "filePathRelative": "java/oop/exception-base.md",
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

/***/ 80754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ exception_base_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/oop/exception-base.html.vue?vue&type=template&id=2069436e

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="异常类基础" tabindex="-1"><a class="header-anchor" href="#异常类基础" aria-hidden="true">#</a> 异常类基础</h1><p><strong>非正常情况在Java中统一被认为是异常，Java使用异常机制来统一处理</strong></p><ul><li><strong>异常发生点后的代码都不会被执行</strong></li><li>异常是相对于return的一种退出机制</li><li>异常可以由系统出发也可以由throw触发</li></ul><h2 id="throw与return的对比" tabindex="-1"><a class="header-anchor" href="#throw与return的对比" aria-hidden="true">#</a> throw与return的对比</h2><ul><li>return代表正常退出</li><li>throw代表异常退出</li></ul><p>return的返回位置是正确的，就是上一级调用者，而throw后执行哪行代码则是不确定的，有异常机制动态确定。</p><h2 id="默认异常处理机制" tabindex="-1"><a class="header-anchor" href="#默认异常处理机制" aria-hidden="true">#</a> 默认异常处理机制</h2><ol><li>首先创建一个异常对象</li><li>然后从当前函数查找谁能处理这个异常</li><li>当前函数没有就查看上一层，一直到主函数</li><li>Java启用默认异常处理机制，打印异常栈信息</li><li>退出程序</li></ol><h2 id="异常类" tabindex="-1"><a class="header-anchor" href="#异常类" aria-hidden="true">#</a> 异常类</h2><h3 id="throwable" tabindex="-1"><a class="header-anchor" href="#throwable" aria-hidden="true">#</a> Throwable</h3><p><strong>所有异常类都有一个父类Throwale</strong></p><ol><li>构造方法</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Throwable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">fillInStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token class-name">Throwable</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">fillInStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    detailMessage <span class="token operator">=</span> message<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token class-name">Throwable</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> cause<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">fillInStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    detailMessage <span class="token operator">=</span> message<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>cause <span class="token operator">=</span> cause<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token class-name">Throwable</span><span class="token punctuation">(</span><span class="token class-name">Throwable</span> cause<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">fillInStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    detailMessage <span class="token operator">=</span> <span class="token punctuation">(</span>cause<span class="token operator">==</span><span class="token keyword">null</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> cause<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>cause <span class="token operator">=</span> cause<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">protected</span> <span class="token class-name">Throwable</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> cause<span class="token punctuation">,</span>
                    <span class="token keyword">boolean</span> enableSuppression<span class="token punctuation">,</span>
                    <span class="token keyword">boolean</span> writableStackTrace<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>writableStackTrace<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">fillInStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        stackTrace <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    detailMessage <span class="token operator">=</span> message<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>cause <span class="token operator">=</span> cause<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>enableSuppression<span class="token punctuation">)</span>
        suppressedExceptions <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>异常可以形成一个异常链，上层的异常由底层异常触发，case表示底层异常。</p><p><strong>每个构造行数都有一个fillInStackTrace()方法，会将异常栈信息保存下来。</strong></p><h3 id="异常类体系" tabindex="-1"><a class="header-anchor" href="#异常类体系" aria-hidden="true">#</a> 异常类体系</h3><p>以Throwable为根，表示所有异常的基类。两个子类：<code>Exception</code>和<code>Error</code></p><p>下面图片异常类没有完全列举</p><p><img src="https://image.hualihai.cn/blog/zg4IWr.png" alt="zg4IWr"></p><ul><li>Error</li></ul><p>Error表示系统错误或资源耗尽，由Java系统自己使用，应用程序不应该抛出和处理。</p><ul><li>Excepiton</li></ul><p>Exception表示应用程序错误。</p><h2 id="受检异常与未受检异常" tabindex="-1"><a class="header-anchor" href="#受检异常与未受检异常" aria-hidden="true">#</a> 受检异常与未受检异常</h2><p><strong>RuntimeException比较特殊，名字有误导，其他异常也是运行时异常，实际的含义是未受检异常</strong></p><p>相对而言，Exception的其他子类和Exception自身则是受检异常。</p><p>受检和未受检的区别在于Java如何处理。对于受检异常，Java会强制要求进行处理，否则会有编译错误。而对于非受检异常则没有这个要求。</p><p>受检异常必须出现在throws语句中，调用者必须处理，Java编译器会强制这一点。而未受检异常则没有这个要求。</p><p>未受检异常异常表示编程的逻辑错误，编程时应该检查以避免这些错误。受检异常表明程序本身没有问题，但由于I/O，网络等其他不可预测的错误导致的异常。</p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/oop/exception-base.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const exception_base_html = (__exports__);

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
//# sourceMappingURL=3825.app.js.map