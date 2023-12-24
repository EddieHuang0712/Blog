import{_ as c,r as o,o as t,c as d,a as e,b as a,d as n,e as i}from"./app-ca4cd4ff.js";const p={},g=e("h1",{id:"搭建个人博客",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#搭建个人博客","aria-hidden":"true"},"#"),a(" 搭建个人博客")],-1),l=e("p",null,"作为一个前端攻城狮，怎么能没有自己的个人博客呢？每每想到这里我都不禁黯然神伤，但又总提不起那个兴致来做，做为究极强迫症加拖延症患者，要做到自己满意，免不得内耗一阵子，然后再摆一阵子，然后突然就来了兴致，上网咔咔搜索了一番，便开始一顿埋头猛做。",-1),u=e("h2",{id:"为什么用vuepress",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#为什么用vuepress","aria-hidden":"true"},"#"),a(" 为什么用VuePress？")],-1),r=e("code",null,"hexo",-1),m=e("code",null,"vue",-1),h=e("code",null,"vue",-1),v={href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"VuePress",-1),_=e("p",null,[a("这次使用的是 "),e("code",null,"VuePress v2"),a(" 版本，相比于 "),e("code",null,"v1"),a(" 功能会更加强大，但稳定性方面可能不如 "),e("code",null,"v1"),a(" 。")],-1),k=e("p",null,"注意",-1),f=e("code",null,"beta",-1),y={href:"https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},z={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"VuePress v2",-1),P=e("p",null,[e("img",{src:"http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230906200107436.png",alt:"image-20230906200107436"})],-1),E=e("h2",{id:"使用主题快速开发",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用主题快速开发","aria-hidden":"true"},"#"),a(" 使用主题快速开发")],-1),B=e("code",null,"vuepress-theme-reco",-1),V={href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"},N=i(`<p>相比于原生的博客框架，各路大佬们开发的主题框架功能更加丰富，而且网站整体也更加美观：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230906192342641.png" alt="image-20230906192342641"></p><h3 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h3><p>本次我使用了 <code>npm</code> 进行项目初始化：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化，并选择 2.x</span>
<span class="token variable"><span class="token variable">\`</span><span class="token function">npm</span> <span class="token function">install</span> @vuepress-reco/theme-cli@1.0.7 <span class="token parameter variable">-g</span><span class="token variable">\`</span></span>
<span class="token variable"><span class="token variable">\`</span>theme-cli init<span class="token variable">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外也可以使用 <code>npx</code> 或 <code>yarn</code> ：</p><p><strong>npm</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化，并选择 2.x</span>
<span class="token function">npm</span> <span class="token function">install</span> @vuepress-reco/theme-cli@1.0.7 <span class="token parameter variable">-g</span>
theme-cli init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>yarn</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化，并选择 2.x</span>
<span class="token function">yarn</span> global <span class="token function">add</span> @vuepress-reco/theme-cli@1.0.7
theme-cli init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置项目基础信息：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230906195312321.png" alt="image-20230906195312321"></p><p>配置成功显示：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230906195354419.png" alt="image-20230906195354419"></p><p>进入项目文件运行 <code>npm install</code> ：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230906195446516.png" alt="image-20230906195446516"></p><p>成功运行后可以看到我们的基础目录结果：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230906195641022.png" alt="image-20230906195641022"></p><p>其中 <code>.vuepress</code> 文件夹放置了所有于 <code>VuePress</code> 相关的文件， <code>public</code> 放置静态图片， <code>config.ts</code> 配置网站的标题和路由等信息。 <code>blogs</code> 文件夹分类放置博客内容，而 <code>docs</code> 文件夹则用来放置展示的文档。</p><p><code>npm run dev</code> 启动项目：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230906200622488.png" alt="image-20230906200622488"></p><p>项目默认运行在 <code>8080</code>端口：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230906201005411.png" alt="image-20230906201005411"></p><p>运行成功后会在 <code>.vuepress</code> 路径下生成两个临时文件（不要手动修改）：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230906201414360.png" alt="image-20230906201414360"></p><p>点击访问，此时可以看到博客的基本框架已经搭建好了：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230906201056560.png" alt="image-20230906201056560"></p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230906201124343.png" alt="image-20230906201124343"></p><h3 id="定制个人博客" tabindex="-1"><a class="header-anchor" href="#定制个人博客" aria-hidden="true">#</a> 定制个人博客</h3><p>通过上一步我们很快就搭建好了一个博客网站的模板，接下来就开始我们个人博客的定制。</p><h4 id="_1-修改配置信息" tabindex="-1"><a class="header-anchor" href="#_1-修改配置信息" aria-hidden="true">#</a> 1.修改配置信息：</h4><p>打开 <code>config.ts</code> ，将默认信息更改为个人信息。</p><p>修改网站标签展示的默认信息：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230906202340577.png" alt="image-20230906202340577"></p><p>修改博客展示的作者名称：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230906202747142.png" alt="image-20230906202747142"></p><p>添加 <code>head</code> 标签属性，为网站附上图标：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230907014751807.png" alt="image-20230907014751807"></p><p>进入<code>README.md</code>修改首页信息，填上你想要展示的个人信息：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230906233924063.png" alt="image-20230906233924063"></p><p>可以修改首页开屏内容，如背景图片（存放在 <code>public</code> 文件夹中），博客标题、描述等信息，也可以换上自己的 <code>github</code> 仓库地址。</p><h4 id="_2-删除不需要的信息" tabindex="-1"><a class="header-anchor" href="#_2-删除不需要的信息" aria-hidden="true">#</a> 2.删除不需要的信息：</h4><p>在将默认信息替换成我们的个人信息后，下一步我们就可以根据自己的需要删除掉一些我们暂时不需要的功能。</p><p>首页 <code>tagline</code> 下方的两个按钮以及社媒图标我们可以直接删掉，这样首页会更加简洁（当然你也可以保留并替换上自己的文档地址）：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230907001032471.png" alt="image-20230907001032471"></p><p>删除作者在 <code>Readme</code> 中给出的 <strong>快速开始</strong> 提示：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230907001630529.png" alt="image-20230907001630529"></p><p>此外，如果我们的个人博客暂时没有文档功能，就可以先删除掉 <code>docs</code> 目录，并删除掉一些与文档相关的配置：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230906235119076.png" alt="image-20230906235119076"></p><p>文档侧边栏配置：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230906235149497.png" alt="image-20230906235149497"></p><p>在 <code>navbar</code> 中删除文档路由信息：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230906235319291.png" alt="image-20230906235319291"></p><p>暂时不需要公共栏或评论区也可以将以下属性注释或删除掉：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230906235804761.png" alt="image-20230906235804761"></p><h4 id="_3-博客上传" tabindex="-1"><a class="header-anchor" href="#_3-博客上传" aria-hidden="true">#</a> 3.博客上传：</h4><p>完成了前两步，我们网站的总体框架就已经基本整理完了，接下来就到了我们的核心功能，博客上传。首先，我们需要在 <code>blogs</code> 目录下添加分类目录，框架可以根据分类目录名称进行自动分类，并生成对应的路由。</p><p>按时间划分子目录可以方便后续进行时间轴排序：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230906205130326.png" alt="image-20230906205130326"></p><p>提升：自己对按年度区分的子目录再进行分类的话会造成时间轴的混乱，不想要时间轴页面的话就无所谓。</p><p>在年度子目录下放置你的 <code>md</code> 文章，在每篇 <code>md</code> 文章的开头需要加上如下格式的代码（配置博客信息及自动分类）：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">title</span><span class="token punctuation">:</span> 1小时搭建个人博客网站！快使用VuePress+Github Pages！
<span class="token key atrule">date</span><span class="token punctuation">:</span> 2023/9/7
<span class="token key atrule">tags</span><span class="token punctuation">:</span>
 <span class="token punctuation">-</span> VuePress
 <span class="token punctuation">-</span> GitHubPages
<span class="token key atrule">categories</span><span class="token punctuation">:</span>
 <span class="token punctuation">-</span> 前端
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果正确完成了上述的所有步骤，此时点击运行你应该收获到这样的首页：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/BlogHomePage.gif" alt="BlogHomePage"></p><p>但是这个时候当你兴冲冲地点开分类页面的时候，大概率会出现下面的情况：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230907002643048.png" alt="image-20230907002643048"></p><p>为什么会这样呢？其实这是因为在默认路由配置中， 分类的默认路由设置为 <code>&quot;/categories/reco/1/&quot;</code> ：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230906204153961.png" alt="image-20230906204153961"></p><p>而此时我们的分类目录中并没有 <code>reco</code> 这个类型，导致了访问不到对应的路径，提示 <code>Page does not exist</code> ，因此这时候你需要将路径中的 <code>reco</code> 更改为 <code>qianduan</code> 或者 <code>suibi</code> （这里默认帮我们将分类的中文转换成了拼音）。</p><p>修改后的运行结果：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/BlogCatePage.gif" alt="BlogCatePage"></p><p>同样，需要将 <code>Tags</code> 的默认路径中的 <code>tag1</code> 改为 <code>VuePress</code> 或 <code>GitHubPages</code></p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230906210203641.png" alt="image-20230906210203641"></p><p>运行效果：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/BlogTagPage.gif" alt="BlogTagPage"></p>`,75),R=e("code",null,"vuepress-theme-reco",-1),A={href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"},G=i(`<h2 id="为什么用github-pages" tabindex="-1"><a class="header-anchor" href="#为什么用github-pages" aria-hidden="true">#</a> 为什么用GitHub Pages?</h2><p>完成了网站的搭建，接下来我们就可以进行网站的部署了，毕竟大家花时间做出来的个人博客肯定是想展示给别人看的嘛。这个时候如果有自己的服务器并且熟悉部署的朋友大可以直接部署到自己的服务器，这样做是最自由的。但如果大家和我一样暂时还没有买服务器又想白嫖的，这边我推荐大家可以部署到 <code>GitHub Pages</code> 上，不仅免费，操作还简单，又可以展示在你自己的 <code>github</code> 主页中，何乐而不为呢？</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230907010325379.png" alt="image-20230907010325379"></p><h2 id="使用github快速部署" tabindex="-1"><a class="header-anchor" href="#使用github快速部署" aria-hidden="true">#</a> 使用github快速部署</h2><p>这里快速部署前提是开发者有一定的 <code>github</code> 使用经验，至少需要有自己的 <code>github</code> 账号并在本地下载了 <code>git</code> 。</p><h4 id="_1-初始化仓库" tabindex="-1"><a class="header-anchor" href="#_1-初始化仓库" aria-hidden="true">#</a> 1.初始化仓库：</h4><p>登录 <code>github</code> 新建仓库，记得设置访问权限为 <code>public</code> ：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230907005908267.png" alt="image-20230907005908267"></p><h4 id="_2-本地配置" tabindex="-1"><a class="header-anchor" href="#_2-本地配置" aria-hidden="true">#</a> 2.本地配置：</h4><p>在 <code>config.ts</code> 文件中添加 <code>base</code> 属性，地址为 <strong>&quot;/仓库名称/&quot;</strong>，这里的仓库名称就是上一步设置的 <code>Blog</code></p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230907010452561.png" alt="image-20230907010452561"></p><p>同时，由于默认的 <code>base</code> 为 <code>/</code>，因此在 <code>base</code> 变更后 <code>head</code> 标签中的图片路径也需要修改：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230907014648550.png" alt="image-20230907014648550"></p><p>在最外层目录下创建脚本文件 <code>deploy.sh</code> ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 生成静态文件</span>
<span class="token function">npm</span> run build

<span class="token comment"># 进入生成的文件夹</span>
<span class="token builtin class-name">cd</span> .vuepress/dist

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;deploy&#39;</span>

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:<span class="token operator">&lt;</span>USERNAME<span class="token operator">&gt;</span>/<span class="token operator">&lt;</span>REPO<span class="token operator">&gt;</span>.git master:gh-pages

<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意上方的仓库地址需要替换为你自己的地址，并且上面的脚本文件中使用 <code>ssh</code> 进行代码的推送，需要提前配置 <code>ssh</code> 公钥，没有配置过的可以自行百度一下，或者将上述 <code>git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git</code> 替换为 <code>https</code> 的地址：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230907011936356.png" alt="image-20230907011936356"></p><p>不过使用 <code>https</code> 推送在不配置代理的情况下很容易会报错并且推不上去，具体代理配置也可以自行百度github仓库代理配置。</p><h4 id="_3-部署" tabindex="-1"><a class="header-anchor" href="#_3-部署" aria-hidden="true">#</a> 3.部署：</h4><p>在项目最外层目录下右键 <code>git bash</code> :</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230907012915960.png" alt="image-20230907012915960"></p><p>运行 <code>sh deploy.sh</code> ：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230907013015875.png" alt="image-20230907013015875"></p><p>当看到类似以下提示表明部署成功：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230907013110927.png" alt="image-20230907013110927"></p><p>成功部署后可以在 <code>github</code> 仓库的 <code>settings</code> 中 看到成功部署的信息，并给出了网站地址：</p><p><img src="http://eddiehuang.oss-cn-guangzhou.aliyuncs.com/images/image-20230907013219949.png" alt="image-20230907013219949"></p>`,27),H={href:"https://eddiehuang0712.github.io/Blog/",target:"_blank",rel:"noopener noreferrer"},q=e("h2",{id:"总结",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),a(" 总结")],-1),C=e("p",null,"如果顺利的话，相信很短的时间内大家就可以完成上面的步骤，成功部署自己的网站，欢迎成功部署的朋友们在评论区晒出自己的网站。",-1),M=e("p",null,"本人接下来也会陆续在该网站的基础上美化样式并添加插件和自定义组件，届时应该也会再写一篇文章介绍如何美化自己的个人博客，欢迎持续关注。",-1);function O(S,T){const s=o("ExternalLinkIcon");return t(),d("div",null,[g,l,u,e("p",null,[a("相比于 "),r,a(" 之类的知名博客框架，作为一个前端臭搭页面的，对 "),m,a(" 难免有些许偏爱， "),h,a(" 上手起来比较简单，而且想着后续自定义组件可能会比较方便，就选择了 "),e("a",v,[b,n(s)]),a(" 进行个人博客的搭建。")]),_,e("blockquote",null,[k,e("p",null,[a("VuePress v2 目前仍处于 "),f,a(" 阶段。你已经可以用它来构建你的站点，但是它的配置和 API 还不够稳定，很可能会在 Minor 版本中发生 Breaking Changes 。因此，在每次更新 beta 版本之后，请一定要仔细阅读 "),e("a",y,[a("更新日志"),n(s)])])]),e("p",null,[e("a",z,[x,n(s)]),a(" 官网：")]),P,E,e("p",null,[a("物色好框架之后又在网上搜罗了一些比较好看的主题，这次选用了 ["),B,a("]("),e("a",V,[a("vuepress-reco (recoluan.com)"),n(s)]),a(") 主题，是一款简洁的博客&文档主题，后续如果要添加文档也比较方便。")]),N,e("p",null,[a("此时我们已经完成了个人博客网站的基础功能搭建，还需要添加其他的插件或修改样式，可以自行查阅主题文档 ["),R,a("]("),e("a",A,[a("vuepress-reco (recoluan.com)"),n(s)]),a(") 。")]),G,e("p",null,[a("此时我们的博客网站就成功运行在"),e("a",H,[a("PiggyBlog (eddiehuang0712.github.io)"),n(s)]),a("上了。")]),q,C,M])}const L=c(p,[["render",O],["__file","1.html.vue"]]);export{L as default};
