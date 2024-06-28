import{_ as t,c as s,o as i,a3 as e}from"./chunks/framework.B83Zv-dL.js";const E=JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{"image":"1715397228484image.png"},"headers":[],"relativePath":"component/Button 按钮.md","filePath":"component/Button 按钮.md","lastUpdated":1716894983000}'),l={name:"component/Button 按钮.md"},a=e(`<h1 id="button-按钮" tabindex="-1">Button 按钮 <a class="header-anchor" href="#button-按钮" aria-label="Permalink to &quot;Button 按钮&quot;">​</a></h1><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><p>可以通过 <code>text</code> 属性设置按钮文字，也可以通过默认slot按钮文字。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;默认按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;默认按钮&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><p><strong>设置按钮主题</strong></p><p>可以通过 <code>type</code> 属性来指定按钮主题，也可以通过 <code>primary</code> <code>success</code> <code>error</code> <code>warning</code> <code>info</code> 属性来指定按钮主题。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;primary&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;primary按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> primary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;success按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;success按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;error按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> warning</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;warning按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;info按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>设置浅色按钮</strong></p><p>通过 <code>light</code> 属性来设置浅色按钮</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> primary</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> plain</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;light按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>设置镂空按钮</strong></p><p>通过 <code>plain</code> 属性来设置镂空按钮</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> primary</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> plain</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;light按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>设置按钮大小</strong></p><p>通过 <code>size</code> 属性来设置按钮大小，默认值 <code>default</code>，可选值 <code>medium</code> <code>mini</code></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> medium</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;medium&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mini</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;mini&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>设置药丸按钮</strong></p><p>通过 <code>round</code> 属性来设置药丸按钮</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> round</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;药丸按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>设置水波纹按钮</strong></p><p>通过 <code>ripple</code> 属性来设置点击带有水波纹效果的按钮</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> round</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ripple</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;药丸按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>设置按钮加载</strong></p><p>通过 <code>loading</code> 属性来设置按钮加载</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> round</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> loading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;loading&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>按钮禁用</strong></p><p>通过 <code>disabled</code> 属性来按钮禁用</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> round</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> disabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;disabled&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="自定义按钮样式" tabindex="-1">自定义按钮样式 <a class="header-anchor" href="#自定义按钮样式" aria-label="Permalink to &quot;自定义按钮样式&quot;">​</a></h2><p>通过 <code>custom-style</code> 属性来设置自定义按钮样式</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :customStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{ background: &#39;purple&#39;, width: &#39;150px&#39;, height: &#39;50px&#39; }&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;自定义样式&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>通过 <code>custom-class</code> 属性来设置自定义按钮样式</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> round</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> customClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;my-button&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;自定义样式&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">c-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.my-button {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  background: pink;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">属性名</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">size</td><td style="text-align:left;">按钮的大小，可选值 <code>medium</code> <code>mini</code></td><td style="text-align:left;"><em>string</em></td><td style="text-align:left;">default</td></tr><tr><td style="text-align:left;">ripple</td><td style="text-align:left;">是否开启点击水波纹效果</td><td style="text-align:left;"><em>boolean</em></td><td style="text-align:left;"><code>false</code></td></tr><tr><td style="text-align:left;">ripple-bg-color</td><td style="text-align:left;">水波纹的背景色，ripple为true时有效</td><td style="text-align:left;"><em>string</em></td><td style="text-align:left;">rgba(0, 0, 0, 0.15)</td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;">按钮的样式类型，可选值为 <code>primary</code> <code>success</code> <code>warning</code> <code>danger</code></td><td style="text-align:left;"><em>string</em></td><td style="text-align:left;">default</td></tr><tr><td style="text-align:left;">light</td><td style="text-align:left;">浅色按钮</td><td style="text-align:left;"><em>boolean</em></td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">plain</td><td style="text-align:left;">镂空按钮</td><td style="text-align:left;"><em>boolean</em></td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">是否禁用</td><td style="text-align:left;"><em>boolean</em></td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">hair-line</td><td style="text-align:left;">是否显示按钮的细边框</td><td style="text-align:left;"><em>boolean</em></td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">round</td><td style="text-align:left;">是否是药丸按钮</td><td style="text-align:left;"><em>boolean</em></td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">loading</td><td style="text-align:left;">按钮名称前是否带 loading 图标</td><td style="text-align:left;"><em>boolean</em></td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">form-type</td><td style="text-align:left;">用于 <code>&lt;form&gt;</code> 组件，点击分别会触发 <code>&lt;form&gt;</code> 组件的 submit/reset 事件</td><td style="text-align:left;"><em>string</em></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">open-type</td><td style="text-align:left;">开放能力</td><td style="text-align:left;"><em>string</em></td><td style="text-align:left;">请参考uni-app方文档</td></tr><tr><td style="text-align:left;">hover-class</td><td style="text-align:left;">指定按钮按下去的样式类。当 hover-class=&quot;none&quot; 时，没有点击态效果</td><td style="text-align:left;"><em>string</em></td><td style="text-align:left;">button-hover</td></tr><tr><td style="text-align:left;">hover-start-time</td><td style="text-align:left;">按住后多久出现点击态，单位毫秒</td><td style="text-align:left;"><em>string | number</em></td><td style="text-align:left;">20</td></tr><tr><td style="text-align:left;">hover-stay-time</td><td style="text-align:left;">手指松开后点击态保留时间，单位毫秒</td><td style="text-align:left;"><em>string | number</em></td><td style="text-align:left;">150</td></tr><tr><td style="text-align:left;">custom-style</td><td style="text-align:left;">对按钮的自定义样式，对象形式，见上方说明</td><td style="text-align:left;"><em>object</em></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">app-parameter</td><td style="text-align:left;">打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效</td><td style="text-align:left;"><em>boolean</em></td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">hover-stop-propagation</td><td style="text-align:left;">指定是否阻止本节点的祖先节点出现点击态</td><td style="text-align:left;"><em>boolean</em></td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">lang</td><td style="text-align:left;">指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文</td><td style="text-align:left;"><em>string</em></td><td style="text-align:left;">en</td></tr><tr><td style="text-align:left;">session-from</td><td style="text-align:left;">会话来源，open-type=&quot;contact&quot;时有效</td><td style="text-align:left;"><em>string</em></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">send-message-title</td><td style="text-align:left;">会话内消息卡片标题，open-type=&quot;contact&quot;时有效</td><td style="text-align:left;"><em>string</em></td><td style="text-align:left;">当前标题</td></tr><tr><td style="text-align:left;">send-message-path</td><td style="text-align:left;">会话内消息卡片点击跳转小程序路径，open-type=&quot;contact&quot;时有效</td><td style="text-align:left;"><em>string</em></td><td style="text-align:left;">当前分享路径</td></tr><tr><td style="text-align:left;">send-message-img</td><td style="text-align:left;">会话内消息卡片图片，open-type=&quot;contact&quot;时有效</td><td style="text-align:left;"><em>string</em></td><td style="text-align:left;">当前页面截图</td></tr><tr><td style="text-align:left;">show-message-card</td><td style="text-align:left;">是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示&quot;可能要发送的小程序&quot;提示，用户点击后可以快速发送小程序消息，open-type=&quot;contact&quot;时有效</td><td style="text-align:left;"><em>string</em></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">throttle-time 1.5.8</td><td style="text-align:left;">节流的时间间隔(一定时间内无论点击多少次，只会触发一次<code>click</code>事件)，单位ms，详见<a href="https://v1.uviewui.com/js/debounce.html" target="_blank" rel="noreferrer">节流防抖</a></td><td style="text-align:left;"><em>string | number</em></td><td style="text-align:left;">500</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">属性名</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th></tr></thead><tbody><tr><td style="text-align:left;">click</td><td style="text-align:left;">按钮点击，请勿使用<code>@tap</code>点击事件，微信小程序无效，返回值为点击事件及参数</td><td style="text-align:left;">Handler</td></tr><tr><td style="text-align:left;">getphonenumber</td><td style="text-align:left;">open-type=&quot;getPhoneNumber&quot;时有效</td><td style="text-align:left;">Handler</td></tr><tr><td style="text-align:left;">getuserinfo</td><td style="text-align:left;">用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getUserInfo</td><td style="text-align:left;">Handler</td></tr><tr><td style="text-align:left;">error</td><td style="text-align:left;">当使用开放能力时，发生错误的回调</td><td style="text-align:left;">Handler</td></tr><tr><td style="text-align:left;">opensetting</td><td style="text-align:left;">在打开授权设置页并关闭后回调</td><td style="text-align:left;">Handler</td></tr><tr><td style="text-align:left;">launchapp</td><td style="text-align:left;">打开 APP 成功的回调</td><td style="text-align:left;">Handler</td></tr></tbody></table>`,38),n=[a];function d(h,p,g,k,r,o){return i(),s("div",null,n)}const c=t(l,[["render",d]]);export{E as __pageData,c as default};
