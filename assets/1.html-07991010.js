import{_ as e,o as n,c as a,e as s}from"./app-ca4cd4ff.js";const t={},o=s(`<h1 id="http协议" tabindex="-1"><a class="header-anchor" href="#http协议" aria-hidden="true">#</a> HTTP协议</h1><p>在如今的网络时代，网络信息传输充斥着我们的生活。我们日常的浏览网页、刷短视频等行为都离不开网络信息的传输，而在传输的过程中就涉及到了一个非常重要的协议，<code>HTTP</code>协议。在本次的博客中，我们将通过简要的介绍以及对比，帮助大家更加深入地理解<code>HTTP</code>协议及其应用。</p><h2 id="http协议的基本定义和特点" tabindex="-1"><a class="header-anchor" href="#http协议的基本定义和特点" aria-hidden="true">#</a> HTTP协议的基本定义和特点</h2><h3 id="http-协议的基本定义" tabindex="-1"><a class="header-anchor" href="#http-协议的基本定义" aria-hidden="true">#</a> HTTP 协议的基本定义</h3><p><code>HTTP</code>（Hypertext Transfer Protocol）是一种用于客户端和服务器之间通信的超文本传输协议，基于请求-响应模型，其中客户端发送请求并等待服务器的响应。</p><h3 id="http-协议的特点" tabindex="-1"><a class="header-anchor" href="#http-协议的特点" aria-hidden="true">#</a> HTTP 协议的特点</h3><ul><li><strong>简单易用</strong>：<code>HTTP</code> 使用简单的请求-响应模型，使得开发人员可以轻松地理解和使用该协议。</li><li><strong>无连接</strong>：每个 <code>HTTP</code> 请求都是独立的，服务器不会保持与客户端之间的连接状态。这样可以节省服务器资源，但也会带来一些额外的开销。</li><li><strong>无状态</strong>：<code>HTTP</code> 是无状态的，即服务器不会在多个请求之间保留任何状态信息。每个请求都是独立的，服务器无法识别出它们是来自同一个客户端的请求。</li><li><strong>可扩展性</strong>：<code>HTTP</code> 协议支持添加新的功能和扩展，使得它适用于不同的应用场景和需求。</li></ul><h2 id="http-协议的发展历程" tabindex="-1"><a class="header-anchor" href="#http-协议的发展历程" aria-hidden="true">#</a> HTTP 协议的发展历程</h2><p><code>HTTP</code> 协议的发展经历了多个版本的演进，主要包括 <code>HTTP/0.9</code>、<code>HTTP/1.0</code>、<code>HTTP/1.1</code> 和 <code>HTTP/2</code>。每个版本都在之前版本的基础上进行了改进和扩展，以满足不断增长的互联网应用需求。</p><ul><li><code>HTTP/0.9</code>：最早的 <code>HTTP</code> 版本，仅支持 <code>GET</code> 方法，用于传输简单的 <code>HTML</code> 文档。</li><li><code>HTTP/1.0</code>：引入了更多的请求方法（如 <code>POST</code>、<code>PUT</code>、<code>DELETE</code> 等）和响应状态码，支持传输不仅仅是 <code>HTML</code> 文档的内容。</li><li><code>HTTP/1.1</code>：目前最广泛使用的版本，引入了持久连接、管道化、虚拟主机等特性，提高了性能和效率。</li><li><code>HTTP/2</code>：基于 Google 的 <code>SPDY</code> 协议发展而来，引入了多路复用、头部压缩、服务器推送等功能，进一步提升了性能，<strong>更快</strong>、<strong>更稳定</strong>、<strong>更简单</strong>。</li></ul><h2 id="http-报文结构" tabindex="-1"><a class="header-anchor" href="#http-报文结构" aria-hidden="true">#</a> HTTP 报文结构</h2><p>上文提及，客户端发送请求并等待服务器的响应，实际上就是通过传输<code>HTTP</code>报文来完成上述功能，由请求报文和响应报文组成。它们都包含了特定的字段和数据，用于在客户端和服务器之间传输信息。</p><p>实际传输过程中的报文如下：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/HTTP报头.png" alt="HTTP报头"></p><h3 id="请求报文" tabindex="-1"><a class="header-anchor" href="#请求报文" aria-hidden="true">#</a> 请求报文</h3><p><code>HTTP</code>请求报文由<strong>请求行</strong>、<strong>消息报头</strong>、<strong>请求体</strong>三部分构成。</p><h4 id="请求行" tabindex="-1"><a class="header-anchor" href="#请求行" aria-hidden="true">#</a> 请求行</h4><p>请求行包含请求方法、请求的<code>URI</code>和使用的协议版本。例如：<code>GET /index.html HTTP/1.1</code></p><p>在请求行中，请求方法（<code>Method</code>）是数据通信和资源操作的关键部分。它定义了对资源的不同操作方式，如获取、提交、更新或删除。每个方法都有特定的用途和语义，开发者可以根据实际需求选择合适的方法来从<strong>客户端</strong>向服务端发起对应的请求。</p><p>常用请求方法：</p><table><thead><tr><th style="text-align:left;">Method</th><th style="text-align:left;">主要应用场景</th></tr></thead><tbody><tr><td style="text-align:left;"><code>GET</code></td><td style="text-align:left;">只被用于从服务器中获取指定资源</td></tr><tr><td style="text-align:left;"><code>POST</code></td><td style="text-align:left;">向服务器提交数据</td></tr><tr><td style="text-align:left;"><code>PUT</code></td><td style="text-align:left;">更新服务器上的资源</td></tr><tr><td style="text-align:left;"><code>DELETE</code></td><td style="text-align:left;">从服务器中删除资源</td></tr><tr><td style="text-align:left;"><code>HEAD</code></td><td style="text-align:left;">只获取资源的元数据，不返回实体内容</td></tr><tr><td style="text-align:left;"><code>OPTIONS</code></td><td style="text-align:left;">用于描述目标资源的通信选项</td></tr></tbody></table><p>通过选择适当的请求方法，开发者可以实现各种类型的交互和操作，无论是简单的页面请求还是复杂的数据交换。了解和正确使用<code>HTTP</code>请求方法对于构建高效、安全和可靠的网络应用程序至关重要。</p><h4 id="请求头部" tabindex="-1"><a class="header-anchor" href="#请求头部" aria-hidden="true">#</a> 请求头部</h4><p>请求头部包含附加的请求信息，以键值对的形式表示。常见的请求头部字段有：</p><ul><li><code>Host</code>：指定请求的主机名</li><li><code>User-Agent</code>：指定发送请求的用户代理（浏览器或其他工具）</li><li><code>Content-Type</code>：指定请求体的媒体类型</li><li><code>Accept</code>：指定客户端接受的响应类型</li><li><code>Authorization</code>: 提供身份验证凭据，用于访问受保护的资源。</li><li><code>Cookie</code>: 用于在客户端和服务器之间传递会话信息的标识符。</li><li><code>Referer</code>: 指明发送请求的来源页面的URL。</li></ul><h4 id="请求体" tabindex="-1"><a class="header-anchor" href="#请求体" aria-hidden="true">#</a> 请求体</h4><p>请求体（Request Body）是<code>HTTP</code>请求中包含的可选部分，用于向服务器发送额外的数据。请求体通常用于<code>POST</code>、<code>PUT</code>等请求方法中，用于传递表单数据、<code>JSON</code>数据等内容。</p><p>以下是一些请求体的示例：</p><ul><li>表单数据：</li></ul><div class="language-form line-numbers-mode" data-ext="form"><pre class="language-form"><code>Content-Type: application/x-www-form-urlencoded

username=johndoe&amp;password=secretpassword
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>JSON</code> 数据：</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>Content-Type<span class="token operator">:</span> application/json

<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;John Doe&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;johndoe@example.com&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在实际开发中，我们需要根据实际需求选择适当的<code>Content-Type</code>和请求体格式来发送数据到服务器，以确保服务器能够正确解析和处理请求体中的数据。</p><h3 id="响应报文" tabindex="-1"><a class="header-anchor" href="#响应报文" aria-hidden="true">#</a> 响应报文</h3><p><code>HTTP</code>响应报文由<strong>状态行</strong>、<strong>响应头部</strong>、<strong>响应体</strong>三部分构成。</p><h4 id="状态行" tabindex="-1"><a class="header-anchor" href="#状态行" aria-hidden="true">#</a> 状态行</h4><p>状态行包含响应的状态码和状态描述。例如：<code>HTTP/1.1 200 OK</code></p><p>状态码由三位数字组成，分为五个不同的类别：</p><ul><li><p><code>1xx</code> - <strong>信息性状态码</strong>（Informational）：表示请求已被接收，并且服务器正在处理。</p></li><li><p><code>2xx</code> - <strong>成功状态码</strong>（Successful）：表示请求已成功被服务器接收、理解和处理。</p></li><li><p><code>3xx</code> - <strong>重定向状态码</strong>（Redirection）：表示客户端需要采取进一步的操作才能完成请求。</p></li><li><p><code>4xx</code> - <strong>客户端错误状态码</strong>（Client Error）：表示客户端发送的请求有错误，服务器无法处理。</p></li><li><p><code>5xx</code> - <strong>服务器错误状态码</strong>（Server Error）：表示服务器在处理请求时发生了错误。</p></li></ul><p>常见的状态码包括：</p><ul><li><code>200</code> <code>OK</code>：请求成功，服务器已成功处理请求。</li><li><code>301</code> <code>Moved Permanently</code>：资源（网页等）被永久转移到其他<code>URL</code>。</li><li><code>302</code> <code>Found</code>：请求的资源已被临时移动到其他位置。</li><li><code>401</code> <code>Unauthorized</code>：请求未经授权。</li><li><code>404</code> <code>Not Found</code>：请求的资源不存在。</li><li><code>500</code> <code>Internal Server Error</code>：服务器在处理请求时发生了内部错误。</li><li><code>504</code> <code>Gateway Timeout</code>：网关或者代理的服务器响应超时。</li></ul><p>通过查看状态码，客户端可以了解到请求的处理结果，从而根据不同的状态码采取相应的处理措施。开发者在编写网络应用程序时，可以根据不同的状态码来进行错误处理、重定向或其他操作，以提供更好的用户体验。</p><h4 id="响应头部" tabindex="-1"><a class="header-anchor" href="#响应头部" aria-hidden="true">#</a> 响应头部</h4><p>响应头部包含附加的响应信息，以键值对的形式表示。常见的响应头部字段有：</p><ul><li><code>Content-Type</code>：指定响应体的媒体类型</li><li><code>Content-Length</code>：指定响应体的长度</li><li><code>Server</code>：指定响应的服务器类型</li><li><code>Set-Cookie</code>: 用于在客户端设置cookie的值。</li><li><code>Location</code>: 用于重定向的目标URL。</li><li><code>Cache-Control</code>: 指定响应的缓存策略。</li><li><code>Access-Control-Allow-Origin</code>: 指定允许访问该资源的域。</li></ul><h4 id="响应体" tabindex="-1"><a class="header-anchor" href="#响应体" aria-hidden="true">#</a> 响应体</h4><p>响应体（Response Body）是HTTP响应中包含的实际数据部分，用于向客户端返回请求的结果或所请求的资源。根据不同的请求和服务器处理结果，响应体可以包含各种类型的数据，如文本、<code>HTML</code>、<code>JSON</code>、<code>XML</code>、图片、视频等。</p><p>以下是一些响应体的示例：</p><ul><li>纯文本响应：</li></ul><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>HTTP/1.1 200 OK
Content-Type: text/plain

Hello, world!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>HTML 页面：</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>HTTP/1.1 200 OK
Content-Type: text/html

<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Example Page<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>This is an example HTML page.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>JSON 数据：</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>HTTP/<span class="token number">1.1</span> <span class="token number">200</span> OK
Content-Type<span class="token operator">:</span> application/json

<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;John Doe&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;johndoe@example.com&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>图片：</li></ul><div class="language-plaintext line-numbers-mode" data-ext="plaintext"><pre class="language-plaintext"><code>HTTP/1.1 200 OK
Content-Type: image/jpeg

&lt;binary image data&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在实际的开发中，我们需要根据服务器的处理结果和客户端的需求，选择适当的<code>Content-Type</code>和响应体格式来返回数据给客户端，以确保客户端能够正确解析和处理响应体中的数据。</p><h2 id="http和https的区别" tabindex="-1"><a class="header-anchor" href="#http和https的区别" aria-hidden="true">#</a> HTTP和HTTPS的区别</h2><p>在浏览网页的过程中，我们经常会看到以<code>HTTP</code>或<code>HTTPS</code>开头的地址。这两种协议写法相似，而它们实际上又有什么共同点与区别呢？</p><h3 id="http的不足" tabindex="-1"><a class="header-anchor" href="#http的不足" aria-hidden="true">#</a> HTTP的不足</h3><ul><li>通信使用明文传输，内容可能会被监听</li><li>不验证通信方的身份，因此有可能遭遇伪装</li><li>无法证明报文的完整性，所以有可能已遭篡改</li></ul><h3 id="https的概述" tabindex="-1"><a class="header-anchor" href="#https的概述" aria-hidden="true">#</a> HTTPS的概述</h3><p><code>HTTPS</code>（Hypertext Transfer Protocol Secure）是一种通过加密和认证保护数据传输安全的<code>HTTP</code>协议。与常规的<code>HTTP</code>协议（使用默认的端口<code>80</code>）相比，<code>HTTPS</code>（默认端口为<code>443</code>）使用加密的<code>SSL</code>（Secure Sockets Layer）或其继任者<code>TLS</code>（Transport Layer Security）协议来建立安全的通信通道。</p><p><code>HTTPS</code>的主要目标是确保在客户端和服务器之间传输的数据的机密性、完整性和身份验证。它通过以下方式提供安全性：</p><ul><li><p><strong>加密数据</strong>：<code>HTTPS</code>使用<strong>共享密钥加密</strong>（对称）和<strong>公钥加密算法</strong>（非对称）两者并用的混合加密机制来加密传输的数据。这意味着即使有人能够截获通信，也无法解读其中的内容。</p></li><li><p><strong>数据完整性</strong>：<code>HTTPS</code>使用<strong>消息认证码</strong>（<code>MAC</code>）来验证数据的完整性。这样，当数据在传输过程中被篡改时，接收方可以检测到并拒绝不完整或被篡改的数据。</p></li><li><p><strong>身份验证</strong>：<code>HTTPS</code>使用<strong>数字证书</strong>来验证服务器的身份，并确保客户端与正确的服务器进行通信。数字证书由受信任的证书颁发机构（<code>CA</code>）签发，用于证明服务器的身份和可信度。</p></li></ul><p>在浏览器使用<code>HTTPS</code>发送请求到服务器并获取数据：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/HTTPS协议.png" alt="HTTPS协议"></p><p>第一次写技术博客，花了比较多的时间查阅资料，但依然有许多不足，希望以后可以逐步完善，多产出一些实用的技术总结与分享！</p>`,68),d=[o];function c(l,i){return n(),a("div",null,d)}const r=e(t,[["render",c],["__file","1.html.vue"]]);export{r as default};
