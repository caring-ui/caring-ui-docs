import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.B83Zv-dL.js";const g=JSON.parse('{"title":"Toast 消息提示","description":"","frontmatter":{},"headers":[],"relativePath":"component/Toast 消息提示.md","filePath":"component/Toast 消息提示.md","lastUpdated":1719564071000}'),n={name:"component/Toast 消息提示.md"},e=t(`<h1 id="toast-消息提示" tabindex="-1">Toast 消息提示 <a class="header-anchor" href="#toast-消息提示" aria-label="Permalink to &quot;Toast 消息提示&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">介绍</p><p>此组件表现形式类似 uni 的 <code>uni.showToast</code>API, 在多数场景下使用这个 API 就行了，但是某些情况下，比如需要自定义样式弹窗的颜色，以及弹窗的位置，就需要使用这个组件了。</p></div><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><p>该组件通过 ref 调用组件的 <code>show()</code> 方法，支持两种重载</p><p><code>show(title, config)</code></p><p><code>show(config)</code></p><p><code>config</code> 参数</p><ul><li><code>type</code> 主题类型，primary，success，error，warning，black</li><li><code>duration</code> 2000 显示的时间，毫秒</li><li><code>icon</code> true, 显示的图标</li><li><code>position</code> &#39;center&#39; toast 出现的位置</li><li></li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-toast</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cToast&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    showToast</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.$refs.cToast.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;一个简单的提示&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="自定义颜色" tabindex="-1">自定义颜色 <a class="header-anchor" href="#自定义颜色" aria-label="Permalink to &quot;自定义颜色&quot;">​</a></h3><p>通过 <code>color</code> 属性设置加载图标的颜色，支持主题色值。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-loading</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;success&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-loading</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#ccc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h3 id="自定义大小" tabindex="-1">自定义大小 <a class="header-anchor" href="#自定义大小" aria-label="Permalink to &quot;自定义大小&quot;">​</a></h3><p>通过 <code>size</code> 属性设置加载图标的大小，默认大小为 <code>17px</code></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-loading</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;50&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h3 id="加载类型" tabindex="-1">加载类型 <a class="header-anchor" href="#加载类型" aria-label="Permalink to &quot;加载类型&quot;">​</a></h3><p>通过 <code>flower</code> 属性可以设置加载图标为花朵形状</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-loading</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> flower</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h3><table><thead><tr><th><strong>参数</strong></th><th><strong>说明</strong></th><th>类型</th><th><strong>默认值</strong></th></tr></thead><tbody><tr><td>color</td><td>动画活动区域的颜色</td><td><em>string</em></td><td><code>主题色</code></td></tr><tr><td>size</td><td>加载图标大小</td><td><em>string | number</em></td><td><code>17</code></td></tr><tr><td>flower</td><td>花朵加载样式</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>`,21),l=[e];function h(p,k,d,o,r,E){return a(),i("div",null,l)}const y=s(n,[["render",h]]);export{g as __pageData,y as default};
