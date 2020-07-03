import Ga from '/_ga.js';
import Gitalk from '/_gitalk.js';
import projectConfig from '/pagic.config.js';
export default {
    'ga': React.createElement(Ga, { id: "UA-45256157-14" }),
    'gitalk': React.createElement(Gitalk, { admin: [
            'xcatliu'
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "basics/any.html", owner: "xcatliu", pagerDirection: "first", repo: "typescript-tutorial", title: "\u4EFB\u610F\u503C" }),
    'prev': {
        "text": "原始数据类型",
        "link": "basics/primitive-data-types.html"
    },
    'next': {
        "text": "类型推论",
        "link": "basics/type-inference.html"
    },
    'sidebar': [
        {
            "link": "introduction/index.html",
            "children": [
                {
                    "text": "什么是 TypeScript",
                    "link": "introduction/what-is-typescript.html",
                    "pagePath": "introduction/what-is-typescript.md"
                },
                {
                    "text": "安装 TypeScript",
                    "link": "introduction/get-typescript.html",
                    "pagePath": "introduction/get-typescript.md"
                },
                {
                    "text": "Hello TypeScript",
                    "link": "introduction/hello-typescript.html",
                    "pagePath": "introduction/hello-typescript.md"
                }
            ],
            "text": "简介",
            "pagePath": "introduction/README.md"
        },
        {
            "link": "basics/index.html",
            "children": [
                {
                    "text": "原始数据类型",
                    "link": "basics/primitive-data-types.html",
                    "pagePath": "basics/primitive-data-types.md"
                },
                {
                    "text": "任意值",
                    "link": "basics/any.html",
                    "pagePath": "basics/any.md"
                },
                {
                    "text": "类型推论",
                    "link": "basics/type-inference.html",
                    "pagePath": "basics/type-inference.md"
                },
                {
                    "text": "联合类型",
                    "link": "basics/union-types.html",
                    "pagePath": "basics/union-types.md"
                },
                {
                    "text": "对象的类型——接口",
                    "link": "basics/type-of-object-interfaces.html",
                    "pagePath": "basics/type-of-object-interfaces.md"
                },
                {
                    "text": "数组的类型",
                    "link": "basics/type-of-array.html",
                    "pagePath": "basics/type-of-array.md"
                },
                {
                    "text": "函数的类型",
                    "link": "basics/type-of-function.html",
                    "pagePath": "basics/type-of-function.md"
                },
                {
                    "text": "类型断言",
                    "link": "basics/type-assertion.html",
                    "pagePath": "basics/type-assertion.md"
                },
                {
                    "text": "声明文件",
                    "link": "basics/declaration-files.html",
                    "pagePath": "basics/declaration-files.md"
                },
                {
                    "text": "内置对象",
                    "link": "basics/built-in-objects.html",
                    "pagePath": "basics/built-in-objects.md"
                }
            ],
            "text": "基础",
            "pagePath": "basics/README.md"
        },
        {
            "link": "advanced/index.html",
            "children": [
                {
                    "text": "类型别名",
                    "link": "advanced/type-aliases.html",
                    "pagePath": "advanced/type-aliases.md"
                },
                {
                    "text": "字符串字面量类型",
                    "link": "advanced/string-literal-types.html",
                    "pagePath": "advanced/string-literal-types.md"
                },
                {
                    "text": "元组",
                    "link": "advanced/tuple.html",
                    "pagePath": "advanced/tuple.md"
                },
                {
                    "text": "枚举",
                    "link": "advanced/enum.html",
                    "pagePath": "advanced/enum.md"
                },
                {
                    "text": "类",
                    "link": "advanced/class.html",
                    "pagePath": "advanced/class.md"
                },
                {
                    "text": "类与接口",
                    "link": "advanced/class-and-interfaces.html",
                    "pagePath": "advanced/class-and-interfaces.md"
                },
                {
                    "text": "泛型",
                    "link": "advanced/generics.html",
                    "pagePath": "advanced/generics.md"
                },
                {
                    "text": "声明合并",
                    "link": "advanced/declaration-merging.html",
                    "pagePath": "advanced/declaration-merging.md"
                },
                {
                    "text": "扩展阅读",
                    "link": "advanced/further-reading.html",
                    "pagePath": "advanced/further-reading.md"
                }
            ],
            "text": "进阶",
            "pagePath": "advanced/README.md"
        },
        {
            "link": "engineering/index.html",
            "children": [
                {
                    "text": "代码检查",
                    "link": "engineering/lint.html",
                    "pagePath": "engineering/lint.md"
                },
                {
                    "text": "编译选项",
                    "link": "engineering/compiler-options.html",
                    "pagePath": "engineering/compiler-options.md"
                }
            ],
            "text": "工程",
            "pagePath": "engineering/README.md"
        },
        {
            "text": "感谢",
            "link": "thanks/index.html",
            "pagePath": "thanks/README.md"
        }
    ],
    config: { "srcDir": "src", "publicDir": "public", "base": "/", ...projectConfig },
    'pagePath': "basics/any.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "basics/any.html",
    'title': "任意值",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>任意值</h1>\n<p>任意值（Any）用来表示允许赋值为任意类型。</p>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF%E4%BB%BB%E6%84%8F%E5%80%BC%E7%B1%BB%E5%9E%8B">什么是任意值类型<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF%E4%BB%BB%E6%84%8F%E5%80%BC%E7%B1%BB%E5%9E%8B">§</a></h2>\n<p>如果是一个普通类型，在赋值过程中改变类型是不被允许的：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> myFavoriteNumber<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">\'seven\'</span><span class="token punctuation">;</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(2,1): error TS2322: Type \'number\' is not assignable to type \'string\'.</span>\n</code></pre>\n<p>但如果是 <code>any</code> 类型，则允许被赋值为任意类型。</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> myFavoriteNumber<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">\'seven\'</span><span class="token punctuation">;</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="%E4%BB%BB%E6%84%8F%E5%80%BC%E7%9A%84%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95">任意值的属性和方法<a class="anchor" href="#%E4%BB%BB%E6%84%8F%E5%80%BC%E7%9A%84%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95">§</a></h2>\n<p>在任意值上访问任何属性都是允许的：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> anyThing<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">\'hello\'</span><span class="token punctuation">;</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>anyThing<span class="token punctuation">.</span><span class="token property-access">myName</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>anyThing<span class="token punctuation">.</span><span class="token property-access">myName</span><span class="token punctuation">.</span><span class="token property-access">firstName</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>也允许调用任何方法：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> anyThing<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">\'Tom\'</span><span class="token punctuation">;</span>\nanyThing<span class="token punctuation">.</span><span class="token method function property-access">setName</span><span class="token punctuation">(</span><span class="token string">\'Jerry\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nanyThing<span class="token punctuation">.</span><span class="token method function property-access">setName</span><span class="token punctuation">(</span><span class="token string">\'Jerry\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nanyThing<span class="token punctuation">.</span><span class="token property-access">myName</span><span class="token punctuation">.</span><span class="token method function property-access">setFirstName</span><span class="token punctuation">(</span><span class="token string">\'Cat\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>可以认为，<strong>声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值</strong>。</p>\n<h2 id="%E6%9C%AA%E5%A3%B0%E6%98%8E%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%8F%98%E9%87%8F">未声明类型的变量<a class="anchor" href="#%E6%9C%AA%E5%A3%B0%E6%98%8E%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%8F%98%E9%87%8F">§</a></h2>\n<p><strong>变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型</strong>：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> something<span class="token punctuation">;</span>\nsomething <span class="token operator">=</span> <span class="token string">\'seven\'</span><span class="token punctuation">;</span>\nsomething <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>\n\nsomething<span class="token punctuation">.</span><span class="token method function property-access">setName</span><span class="token punctuation">(</span><span class="token string">\'Tom\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>等价于</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> something<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>\nsomething <span class="token operator">=</span> <span class="token string">\'seven\'</span><span class="token punctuation">;</span>\nsomething <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>\n\nsomething<span class="token punctuation">.</span><span class="token method function property-access">setName</span><span class="token punctuation">(</span><span class="token string">\'Tom\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="%E5%8F%82%E8%80%83">参考<a class="anchor" href="#%E5%8F%82%E8%80%83">§</a></h2>\n<ul>\n<li><a href="http://www.typescriptlang.org/docs/handbook/basic-types.html#any">Basic Types # Any</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#%E4%BB%BB%E6%84%8F%E5%80%BC">中文版</a>）</li>\n</ul>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E4%BB%BB%E6%84%8F%E5%80%BC%E7%B1%BB%E5%9E%8B">什么是任意值类型</a></li><li><a href="#%E4%BB%BB%E6%84%8F%E5%80%BC%E7%9A%84%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95">任意值的属性和方法</a></li><li><a href="#%E6%9C%AA%E5%A3%B0%E6%98%8E%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%8F%98%E9%87%8F">未声明类型的变量</a></li><li><a href="#%E5%8F%82%E8%80%83">参考</a></li></ol></nav>'
        } })
};
