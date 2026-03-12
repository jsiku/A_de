---
archived: true
tyep: post
title: Blogger template
date: "2009-05-05 22:33:00 +0900"
tags:
  - 템플릿
  - snsjsiku
  - blogger
---

지금 시점에서 의미가 없는 글입니다.

sns.jsiku.com(폐쇄)에서 옮김<
내용측면에서 질과 양 모두가 풍부해져야 하는데, 제 블로그들을 보면 템플릿에 거의 모든 노력을 부은 것 같아 아쉽습니다.

여기에 Blogger.Jsiku의 템플릿을 올렸습니다. 사실 이는 대쉬보드와 거의 비슷한데, 옆에 사이드바와 포스트 내의 양식은 변경하지 않았습니다.

```
* Blogger에서 템플릿 바꾸기
<ul>
<li>레이아웃&gt;HTML편집&gt;도구확장 선택</li>
<li>아래의 코드를 복사하여 대체하기</li>
</ul>
<blockquote>
&lt;?xml version="1.0" encoding="UTF-8" ?&gt;
&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"&gt;
&lt;html expr:dir='data:blog.languageDirection' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'&gt;

&lt;head&gt;
&lt;b:include data='blog' name='all-head-content'/&gt;
&lt;title&gt;&lt;data:blog.pageTitle/&gt;&lt;/title&gt;
&lt;b:skin&gt;&lt;![CDATA[/*
-----------------------------------------------
Blogger Template Style
Name: Rounders
Designer: Douglas Bowman
URL: www.stopdesign.com
Date: 27 Feb 2004
Updated by: Blogger Team
----------------------------------------------- */

/* Variable definitions
====================
&lt;Variable name="mainBgColor" description="Main Background Color"
type="color" default="#fff" value="#ffffff"&gt;
&lt;Variable name="mainTextColor" description="Text Color" type="color"
default="#333" value="#333333"&gt;
&lt;Variable name="postTitleColor" description="Post Title Color" type="color"
default="#333" value="#333333"&gt;
&lt;Variable name="dateHeaderColor" description="Date Header Color"
type="color" default="#357" value="#335577"&gt;
&lt;Variable name="borderColor" description="Post Border Color" type="color"
default="#bbb" value="#bbbbbb"&gt;


&lt;Variable name="mainLinkColor" description="Link Color" type="color"
default="#258" value="#225588"&gt;
&lt;Variable name="mainVisitedLinkColor" description="Visited Link Color"
type="color" default="#666" value="#666666"&gt;

&lt;Variable name="titleBgColor" description="Page Header Background Color"
type="color" default="#002050" value="#002050"&gt;
&lt;Variable name="titleTextColor" description="Blog Title Color"
type="color" default="#fff" value="#ffffff"&gt;

&lt;Variable name="topSidebarHeaderColor"
description="Top Sidebar Title Color"
type="color" default="#234" value="#223344"&gt;
&lt;Variable name="topSidebarBgColor"
description="Top Sidebar Background Color"
type="color" default="#cdc" value="#ccddcc"&gt;
&lt;Variable name="topSidebarTextColor" description="Top Sidebar Text Color"
type="color" default="#345" value="#334455"&gt;
&lt;Variable name="topSidebarLinkColor" description="Top Sidebar Link Color"
type="color" default="#258" value="#225588"&gt;
&lt;Variable name="topSidebarVisitedLinkColor"
description="Top Sidebar Visited Link Color"
type="color" default="#258" value="#225588"&gt;

&lt;Variable name="bodyFont" description="Text Font" type="font"
default="normal normal 100% 'Trebuchet MS',Verdana,Arial,Sans-serif" value="normal normal 100% 'Trebuchet MS',Verdana,Arial,Sans-serif"&gt;
&lt;Variable name="pageTitleFont" description="Blog Title Font" type="font"
default="normal bold 200% 'Trebuchet MS',Verdana,Arial,Sans-serif" value="normal bold 200% 'Trebuchet MS',Verdana,Arial,Sans-serif"&gt;
&lt;Variable name="descriptionFont" description="Blog Description Font" type="font"
default="normal normal 100% 'Trebuchet MS',Verdana,Arial,Sans-serif" value="normal normal 100% 'Trebuchet MS',Verdana,Arial,Sans-serif"&gt;
&lt;Variable name="headerFont" description="Sidebar Title Font" type="font"
default="normal bold 100% 'Trebuchet MS',Verdana,Arial,Sans-serif" value="normal bold 100% 'Trebuchet MS',Verdana,Arial,Sans-serif"&gt;
&lt;Variable name="postTitleFont" description="Post Title Font" type="font"
default="normal bold 135% 'Trebuchet MS',Verdana,Arial,Sans-serif" value="normal bold 135% 'Trebuchet MS',Verdana,Arial,Sans-serif"&gt;
&lt;Variable name="startSide" description="Start side in blog language"
type="automatic" default="left" value="left"&gt;
&lt;Variable name="endSide" description="End side in blog language"
type="automatic" default="right" value="right"&gt;
*/
#navbar, #navbar-iframe {
height: 0px;
visibility: hidden;
display: none;
}

body {
background:#e1d4c0;
margin:0;
text-align:center;
line-height: 1.5em;
font:x-small Trebuchet MS, Verdana, Arial, Sans-serif;
color:$mainTextColor;
font-size/* */:/**/small;
font-size: /**/small;
}


/* Page Structure
----------------------------------------------- */
/* The images which help create rounded corners depend on the
following widths and measurements. If you want to change
these measurements, the images will also need to change.
*/
#outer-wrapper {
width:100%
margin:0 auto;
text-align:$startSide;
font: $bodyFont;
}
#content-wrapper {
background: url("http://farm4.static.flickr.com/3358/3501192036_f5283d25aa_o.png") center repeat-y;
}
#content-wrapper1 {
margin: 0 auto;
width:760px;
background:#f5ede3;
border-left: 2px solid #baa68e;
border-right: 2px solid #baa68e;
}
#main-wrap1 {
width:520px;
float:$startSide;
background:$mainBgColor url("http://farm4.static.flickr.com/3638/3504032360_6c9438fe4d_o.gif") no-repeat $startSide bottom;
margin:15px 13px 0px 13px;
padding:0 0 20px;
color:$mainTextColor;
font-size:97%;
line-height:1.5em;
word-wrap: break-word; /* fix for long text breaking sidebar float in IE */
overflow: hidden; /* fix for long non-text content breaking IE sidebar float */
}
#main-wrap2 {
float:$startSide;
width:100%;
background:url("http://farm4.static.flickr.com/3398/3504036036_ce72d8cbea_o.gif") no-repeat $startSide top;
padding:20px 0 0;
}
#main {
background:url("http://farm4.static.flickr.com/3310/3504053896_f70be674a5_o.gif") repeat-y $startSide;
padding:0;
width:520px;
}
#sidebar-wrap {
width:200px;
float:$endSide;
margin:15px 13px 0 0;
font-size:97%;
line-height:1.5em;
word-wrap: break-word; /* fix for long text breaking sidebar float in IE */
overflow: hidden; /* fix for long non-text content breaking IE sidebar float */
}

.main .widget {
margin-top: 4px;
width: 503px;
padding: 0 13px;
}

.main .Blog {
margin: 0;
padding: 0;
width: 519px;
}

/* Links
----------------------------------------------- */
a:link {
color: $mainLinkColor;
}
a:visited {
color: $mainVisitedLinkColor;
}
a:hover {
color: $mainVisitedLinkColor;
}
a img {
border-width:0;
}


/* Blog Header
----------------------------------------------- */
#header-wrapper {
background:$titleBgColor;
width: 100%;
height:76px;
border-bottom: 4px solid #4477dd;
}
#header-wrapper1 {
background:url("http://farm4.static.flickr.com/3635/3500375675_0b191a5eed_o.png") repeat-y center;
}
#header {
width:760px; height: 76px;
margin: 0 auto;
border-bottom: 4px solid #6699ff;
background:url("http://farm4.static.flickr.com/3385/3500655045_5e2b49cc3e_o.png") no-repeat $startSide bottom;
color: #ffffff;
}
#header h1 {
margin:0;
padding:10px 30px 5px;
line-height:1.2em;
font: $pageTitleFont;
}
#header a,
#header a:visited {
text-decoration:none;
color: $titleTextColor;
}
#header .description {
margin:0;
padding:5px 30px 10px;
line-height:1.5em;
font: $descriptionFont;
}


/* Posts
----------------------------------------------- */
h2.date-header {
margin-top:0;
margin-$endSide:28px;
margin-bottom:0;
margin-$startSide:43px;
font-size:85%;
line-height:2em;
text-transform:uppercase;
letter-spacing:.2em;
color:$dateHeaderColor;
}
.post {
margin:.3em 0 25px;
padding:0 13px;
border:1px dotted $borderColor;
border-width:1px 0;
}
.post h3 {
margin:0;
line-height:1.5em;
background:url("http://www2.blogblog.com/rounders/icon_arrow.gif") no-repeat 10px .5em;
display:block;
border:1px dotted $borderColor;
border-width:0 1px 1px;
padding-top:2px;
padding-$endSide:14px;
padding-bottom:2px;
padding-$startSide:29px;
color: $postTitleColor;
font: $postTitleFont;
}
.post h3 a, .post h3 a:visited {
text-decoration:none;
color: $postTitleColor;
}
a.title-link:hover {
background-color: $borderColor;
color: $mainTextColor;
}
.post-body {
border:1px dotted $borderColor;
border-width:0 1px 1px;
border-bottom-color:$mainBgColor;
padding-top:10px;
padding-$endSide:14px;
padding-bottom:1px;
padding-$startSide:29px;
}
html&gt;body .post-body {
border-bottom-width:0;
}
.post-body {
margin:0 0 .75em;
}
.post-body blockquote {
line-height:1.3em;
}
.post-footer {
background: #e1d4c0;
margin:0;
padding-top:2px;
padding-$endSide:14px;
padding-bottom:2px;
padding-$startSide:29px;
border:1px dotted $borderColor;
border-width:1px;
font-size:100%;
line-height:1.5em;
color: #666;
}
/*
The first line of the post footer might only have floated text, so we need to give it a height.
The height comes from the post-footer line-height
*/
.post-footer-line-1 {
min-height:1.5em;
_height:1.5em;
}

.post-footer p {
margin: 0;
}

html&gt;body .post-footer {
border-bottom-color:transparent;
}

.uncustomized-post-template .post-footer {
text-align: $endSide;
}

.uncustomized-post-template .post-author,
.uncustomized-post-template .post-timestamp {
display: block;
float: $startSide;
text-align:$startSide;
margin-$endSide: 4px;
}

.post-footer a {
color: #258;
}
.post-footer a:hover {
color: #666;
}
a.comment-link {
/* IE5.0/Win doesn't apply padding to inline elements,
so we hide these two declarations from it */
background/* */:/**/url("http://www.blogblog.com/rounders/icon_comment_$startSide.gif") no-repeat $startSide 45%;
padding-$startSide:14px;
}
html&gt;body a.comment-link {
/* Respecified, for IE5/Mac's benefit */
background:url("http://www.blogblog.com/rounders/icon_comment_$startSide.gif") no-repeat $startSide 45%;
padding-$startSide:14px;
}
.post img {
margin-top:0;
margin-$endSide:0;
margin-bottom:5px;
margin-$startSide:0;
padding:4px;
border:1px solid $borderColor;
}
blockquote {
margin:.75em 0;
border:1px dotted $borderColor;
border-width:1px 0;
padding:5px 15px;
color: $dateHeaderColor;
}
.post blockquote p {
margin:.5em 0;
}

#blog-pager-newer-link {
float: $startSide;
margin-$startSide: 13px;
}

#blog-pager-older-link {
float: $endSide;
margin-$endSide: 13px;
}

#blog-pager {
text-align: center;
}

.feed-links {
clear: both;
line-height: 2.5em;
margin-$startSide: 13px;
}

/* Comments
----------------------------------------------- */
#comments {
margin:-25px 13px 0;
border:1px dotted $borderColor;
border-width:0 1px 1px;
padding-top:20px;
padding-$endSide:0;
padding-bottom:15px;
padding-$startSide:0;
}
#comments h4 {
margin:0 0 10px;
padding-top:0;
padding-$endSide:14px;
padding-bottom:2px;
padding-$startSide:29px;
border-bottom:1px dotted $borderColor;
font-size:120%;
line-height:1.4em;
color:$postTitleColor;
}
#comments-block {
margin-top:0;
margin-$endSide:15px;
margin-bottom:0;
margin-$startSide:9px;
}
.comment-author {
background:url("http://www.blogblog.com/rounders/icon_comment_$startSide.gif") no-repeat 2px .3em;
margin:.5em 0;
padding-top:0;
padding-$endSide:0;
padding-bottom:0;
padding-$startSide:20px;
font-weight:bold;
}
.comment-body {
margin:0 0 1.25em;
padding-top:0;
padding-$endSide:0;
padding-bottom:0;
padding-$startSide:20px;
}
.comment-body p {
margin:0 0 .5em;
}
.comment-footer {
margin:0 0 .5em;
padding-top:0;
padding-$endSide:0;
padding-bottom:.75em;
padding-$startSide:20px;
}
.comment-footer a:link {
color: #333;
}
.deleted-comment {
font-style:italic;
color:gray;
}
.comment-form {
padding-$startSide:20px;
padding-$endSide:5px;
}
#comments .comment-form h4 {
padding-$startSide:0px;
}

/* Profile
----------------------------------------------- */
.profile-img {
float: $startSide;
margin-top: 5px;
margin-$endSide: 5px;
margin-bottom: 5px;
margin-$startSide: 0;
border: 4px solid $topSidebarTextColor;
}

.profile-datablock {
margin-top:0;
margin-$endSide:15px;
margin-bottom:.5em;
margin-$startSide:0;
padding-top:8px;
}

.profile-link {
background:url("http://www.blogblog.com/rounders/icon_profile_$startSide.gif") no-repeat $startSide .1em;
padding-$startSide:15px;
font-weight:bold;
}

.profile-textblock {
clear: both;
margin: 0;
}

.sidebar .clear, .main .widget .clear {
clear: both;
}

#sidebartop-wrap {
background:$topSidebarBgColor url("http://farm4.static.flickr.com/3313/3504077042_293722429b_o.gif") no-repeat $startSide bottom;
margin:0px 0px 15px;
padding:0px 0px 10px;
color:$topSidebarTextColor;
}

#sidebartop-wrap2 {
background:url("http://farm4.static.flickr.com/3660/3503268057_1f5241308f_o.gif") no-repeat $startSide top;
padding: 10px 0 0;
margin:0;
border-width:0;
}

#sidebartop h2 {
line-height:1.5em;
color:$topSidebarHeaderColor;
border-bottom: 1px dotted $topSidebarHeaderColor;
margin-bottom: 0.5em;
font: $headerFont;
}

#sidebartop a {
color: $topSidebarLinkColor;
}

#sidebartop a:hover {
color: $topSidebarVisitedLinkColor;
}
#sidebartop a:visited {
color: $topSidebarVisitedLinkColor;
}
/* Sidebar Boxes
----------------------------------------------- */

.sidebar .widget {
margin:.5em 13px 1.25em;
padding:0 0px;
}

.widget-content {
margin-top: 0.5em;
}

#sidebarbottom-wrap1 {
background:$mainBgColor url("http://farm4.static.flickr.com/3660/3503268057_1f5241308f_o.gif") no-repeat $startSide top;
margin:0 0 15px;
padding:10px 0 0;
color: $mainTextColor;
}

#sidebarbottom-wrap2 {
background:url("http://farm4.static.flickr.com/3313/3504077042_293722429b_o.gif") no-repeat $startSide bottom;
padding:0 0 8px;
}

.sidebar h2 {
margin:0;
padding:0 0 .2em;
line-height:1.5em;
font:$headerFont;
}

.sidebar ul {
list-style:none;
margin:0 0 1.25em;
padding:0;
}

.sidebar ul li {
background:url("http://www2.blogblog.com/rounders/icon_arrow_sm.gif") no-repeat 2px .25em;
margin:0;
padding-top:0;
padding-$endSide:0;
padding-bottom:3px;
padding-$startSide:16px;
margin-bottom:3px;
border-bottom:1px dotted $borderColor;
line-height:1.4em;
}
.sidebar p {
margin:0 0 .6em;
}

#sidebar h2 {
color: $postTitleColor;
border-bottom: 1px dotted $postTitleColor;
}

/* Footer
----------------------------------------------- */
#footer-wrap1 {
clear:both;
margin:0 0 0px;
padding:15px 0 0;
}
#footer-wrap2 {
width:740px;
margin: 0 auto;
background:#e1d4c0 url("http://farm4.static.flickr.com/3620/3504102662_448f46d497_o.gif") no-repeat $startSide top;
color:$titleTextColor;
}
#footer {
background:url("http://farm4.static.flickr.com/3370/3503290453_61d39ee184_o.gif") no-repeat $startSide bottom;
padding:8px 15px;
}
#footer hr {display:none;}
#footer p {margin:0;}
#footer a {color:$titleTextColor;}
#footer .widget-content {
margin:0;
}

/** Page structure tweaks for layout editor wireframe */
body#layout #main-wrap1,
body#layout #sidebar-wrap,
body#layout #header-wrapper {
margin-top: 0;
}

body#layout #header, body#layout #header-wrapper,
body#layout #outer-wrapper {
margin-$startSide:0,
margin-$endSide: 0;
padding: 0;
}

body#layout #outer-wrapper {
width: 730px;
}

body#layout #footer-wrap1 {
padding-top: 0;
}
]]&gt;&lt;/b:skin&gt;
&lt;/head&gt;

&lt;body&gt;
&lt;div id='outer-wrapper'&gt;

&lt;div id='header-wrapper'&gt;&lt;div id='header-wrapper1'&gt;
&lt;b:section class='header' id='header' maxwidgets='1'&gt;
&lt;b:widget id='Header1' locked='true' title='Blogger.JSiku(%uD5E4%uB354)' type='Header'&gt;
&lt;b:includable id='main'&gt;

&lt;b:if cond='data:useImage'&gt;
&lt;b:if cond='data:imagePlacement == &amp;quot;REPLACE&amp;quot;'&gt;
&lt;!--Show just the image, no text--&gt;
&lt;div id='header-inner'&gt;
&lt;a expr:href='data:blog.homepageUrl' style='display: block'&gt;
&lt;img expr:alt='data:title' expr:height='data:height' expr:id='data:widget.instanceId &amp;quot;_headerimg&amp;quot;' expr:src='data:sourceUrl' expr:width='data:width' style='display: block'/&gt;
&lt;/a&gt;
&lt;/div&gt;
&lt;b:else/&gt;
&lt;!--
Show image as background to text. You can't really calculate the width
reliably in JS because margins are not taken into account by any of
clientWidth, offsetWidth or scrollWidth, so we don't force a minimum
width if the user is using shrink to fit.
This results in a margin-width's worth of pixels being cropped. If the
user is not using shrink to fit then we expand the header.
--&gt;
&lt;div expr:style='&amp;quot;background-image: url(&amp;quot;&amp;quot; data:sourceUrl &amp;quot;&amp;quot;); &amp;quot; &amp;quot;background-position: &amp;quot; data:backgroundPositionStyleStr &amp;quot;; &amp;quot; data:widthStyleStr &amp;quot;min-height: &amp;quot; data:height &amp;quot;px;&amp;quot; &amp;quot;_height: &amp;quot; data:height &amp;quot;px;&amp;quot; &amp;quot;background-repeat: no-repeat; &amp;quot;' id='header-inner'&gt;
&lt;div class='titlewrapper' style='background: transparent'&gt;
&lt;h1 class='title' style='background: transparent; border-width: 0px'&gt;
&lt;b:include name='title'/&gt;
&lt;/h1&gt;
&lt;/div&gt;
&lt;b:include name='description'/&gt;
&lt;/div&gt;
&lt;/b:if&gt;
&lt;b:else/&gt;
&lt;!--No header image --&gt;
&lt;div id='header-inner'&gt;
&lt;div class='titlewrapper'&gt;
&lt;h1 class='title'&gt;
&lt;b:include name='title'/&gt;
&lt;/h1&gt;
&lt;/div&gt;
&lt;b:include name='description'/&gt;
&lt;/div&gt;
&lt;/b:if&gt;
&lt;/b:includable&gt;
&lt;b:includable id='title'&gt;
&lt;b:if cond='data:blog.url == data:blog.homepageUrl'&gt;
&lt;data:title/&gt;
&lt;b:else/&gt;
&lt;a expr:href='data:blog.homepageUrl'&gt;&lt;data:title/&gt;&lt;/a&gt;
&lt;/b:if&gt;
&lt;/b:includable&gt;
&lt;b:includable id='description'&gt;
&lt;div class='descriptionwrapper'&gt;
&lt;p class='description'&gt;&lt;span&gt;&lt;data:description/&gt;&lt;/span&gt;&lt;/p&gt;
&lt;/div&gt;
&lt;/b:includable&gt;
&lt;/b:widget&gt;
&lt;/b:section&gt;
&lt;/div&gt;&lt;/div&gt;

&lt;div id='crosscol-wrapper' style='text-align:center'&gt;
&lt;b:section class='crosscol' id='crosscol' showaddelement='no'/&gt;
&lt;/div&gt;
&lt;div id='content-wrapper'&gt;&lt;div id='content-wrapper1'&gt;
&lt;div id='main-wrap1'&gt;&lt;div id='main-wrap2'&gt;
&lt;b:section class='main' id='main' showaddelement='no'&gt;
&lt;b:widget id='Blog1' locked='true' title='%uBE14%uB85C%uADF8 %uAC8C%uC2DC%uBB3C' type='Blog'&gt;
&lt;b:includable id='main' var='top'&gt;
&lt;!-- posts --&gt;
&lt;div class='blog-posts hfeed'&gt;

&lt;b:include data='top' name='status-message'/&gt;

&lt;data:adStart/&gt;
&lt;b:loop values='data:posts' var='post'&gt;
&lt;b:if cond='data:post.dateHeader'&gt;
&lt;h2 class='date-header'&gt;&lt;data:post.dateHeader/&gt;&lt;/h2&gt;
&lt;/b:if&gt;
&lt;b:include data='post' name='post'/&gt;
&lt;b:if cond='data:blog.pageType == &amp;quot;item&amp;quot;'&gt;
&lt;b:include data='post' name='comments'/&gt;
&lt;/b:if&gt;
&lt;b:if cond='data:post.includeAd'&gt;
&lt;data:adEnd/&gt;
&lt;data:adCode/&gt;
&lt;data:adStart/&gt;
&lt;/b:if&gt;
&lt;b:if cond='data:post.trackLatency'&gt;
&lt;data:post.latencyJs/&gt;
&lt;/b:if&gt;
&lt;/b:loop&gt;
&lt;data:adEnd/&gt;
&lt;/div&gt;

&lt;!-- navigation --&gt;
&lt;b:include name='nextprev'/&gt;

&lt;!-- feed links --&gt;
&lt;b:include name='feedLinks'/&gt;

&lt;b:if cond='data:top.showStars'&gt;
&lt;script src='http://www.google.com/jsapi' type='text/javascript'/&gt;
&lt;script type='text/javascript'&gt;
google.load(&amp;quot;annotations&amp;quot;, &amp;quot;1&amp;quot;, {&amp;quot;locale&amp;quot;: &amp;quot;&lt;data:top.languageCode/&gt;&amp;quot;});
function initialize() {
google.annotations.setApplicationId(&lt;data:top.blogspotReviews/&gt;);
google.annotations.createAll();
google.annotations.fetch();
}
google.setOnLoadCallback(initialize);
&lt;/script&gt;
&lt;/b:if&gt;

&lt;/b:includable&gt;
&lt;b:includable id='nextprev'&gt;
&lt;div class='blog-pager' id='blog-pager'&gt;
&lt;b:if cond='data:newerPageUrl'&gt;
&lt;span id='blog-pager-newer-link'&gt;
&lt;a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId &amp;quot;_blog-pager-newer-link&amp;quot;' expr:title='data:newerPageTitle'&gt;&lt;data:newerPageTitle/&gt;&lt;/a&gt;
&lt;/span&gt;
&lt;/b:if&gt;

&lt;b:if cond='data:olderPageUrl'&gt;
&lt;span id='blog-pager-older-link'&gt;
&lt;a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId &amp;quot;_blog-pager-older-link&amp;quot;' expr:title='data:olderPageTitle'&gt;&lt;data:olderPageTitle/&gt;&lt;/a&gt;
&lt;/span&gt;
&lt;/b:if&gt;

&lt;b:if cond='data:blog.homepageUrl != data:blog.url'&gt;
&lt;a class='home-link' expr:href='data:blog.homepageUrl'&gt;&lt;data:homeMsg/&gt;&lt;/a&gt;
&lt;b:else/&gt;
&lt;b:if cond='data:newerPageUrl'&gt;
&lt;a class='home-link' expr:href='data:blog.homepageUrl'&gt;&lt;data:homeMsg/&gt;&lt;/a&gt;
&lt;/b:if&gt;
&lt;/b:if&gt;

&lt;/div&gt;
&lt;div class='clear'/&gt;
&lt;/b:includable&gt;
&lt;b:includable id='post' var='post'&gt;
&lt;div class='post hentry uncustomized-post-template'&gt;
&lt;a expr:name='data:post.id'/&gt;
&lt;b:if cond='data:post.title'&gt;
&lt;h3 class='post-title entry-title'&gt;
&lt;b:if cond='data:post.link'&gt;
&lt;a expr:href='data:post.link'&gt;&lt;data:post.title/&gt;&lt;/a&gt;
&lt;b:else/&gt;
&lt;b:if cond='data:post.url'&gt;
&lt;a expr:href='data:post.url'&gt;&lt;data:post.title/&gt;&lt;/a&gt;
&lt;b:else/&gt;
&lt;data:post.title/&gt;
&lt;/b:if&gt;
&lt;/b:if&gt;
&lt;/h3&gt;
&lt;/b:if&gt;

&lt;div class='post-header-line-1'/&gt;

&lt;div class='post-body entry-content'&gt;
&lt;data:post.body/&gt;
&lt;div style='clear: both;'/&gt; &lt;!-- clear for photos floats --&gt;
&lt;/div&gt;

&lt;b:if cond='data:post.hasJumpLink'&gt;
&lt;div class='jump-link'&gt;
&lt;a expr:href='data:post.url &amp;quot;#more&amp;quot;'&gt;&lt;data:post.jumpText/&gt;&lt;/a&gt;
&lt;/div&gt;
&lt;/b:if&gt;

&lt;div class='post-footer'&gt;
&lt;div class='post-footer-line post-footer-line-1'&gt;
&lt;span class='post-author vcard'&gt;
&lt;b:if cond='data:top.showAuthor'&gt;
&lt;data:top.authorLabel/&gt;
&lt;span class='fn'&gt;&lt;data:post.author/&gt;&lt;/span&gt;
&lt;/b:if&gt;
&lt;/span&gt;

&lt;span class='post-timestamp'&gt;
&lt;b:if cond='data:top.showTimestamp'&gt;
&lt;data:top.timestampLabel/&gt;
&lt;b:if cond='data:post.url'&gt;
&lt;a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'&gt;&lt;abbr class='published' expr:title='data:post.timestampISO8601'&gt;&lt;data:post.timestamp/&gt;&lt;/abbr&gt;&lt;/a&gt;
&lt;/b:if&gt;
&lt;/b:if&gt;
&lt;/span&gt;

&lt;span class='reaction-buttons'&gt;
&lt;b:if cond='data:top.showReactions'&gt;
&lt;table border='0' cellpadding='0' cellspacing='0' width='100%'&gt;&lt;tr&gt;
&lt;td class='reactions-label-cell' nowrap='nowrap' valign='top' width='1%'&gt;
&lt;span class='reactions-label'&gt;
&lt;data:top.reactionsLabel/&gt;&lt;/span&gt;&amp;#160;&lt;/td&gt;
&lt;td&gt;&lt;iframe allowtransparency='true' class='reactions-iframe' expr:src='data:post.reactionsUrl' frameborder='0' name='reactions' scrolling='no'/&gt;&lt;/td&gt;
&lt;/tr&gt;&lt;/table&gt;
&lt;/b:if&gt;
&lt;/span&gt;

&lt;span class='star-ratings'&gt;
&lt;b:if cond='data:top.showStars'&gt;
&lt;div expr:g:background-color='data:backgroundColor' expr:g:text-color='data:textColor' expr:g:url='data:post.absoluteUrl' g:height='42' g:type='RatingPanel' g:width='280'/&gt;
&lt;/b:if&gt;
&lt;/span&gt;

&lt;span class='post-comment-link'&gt;
&lt;b:if cond='data:blog.pageType != &amp;quot;item&amp;quot;'&gt;
&lt;b:if cond='data:post.allowComments'&gt;
&lt;a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'&gt;&lt;b:if cond='data:post.numComments == 1'&gt;1 &lt;data:top.commentLabel/&gt;&lt;b:else/&gt;&lt;data:post.numComments/&gt; &lt;data:top.commentLabelPlural/&gt;&lt;/b:if&gt;&lt;/a&gt;
&lt;/b:if&gt;
&lt;/b:if&gt;
&lt;/span&gt;

&lt;!-- backlinks --&gt;
&lt;span class='post-backlinks post-comment-link'&gt;
&lt;b:if cond='data:blog.pageType != &amp;quot;item&amp;quot;'&gt;
&lt;b:if cond='data:post.showBacklinks'&gt;
&lt;a class='comment-link' expr:href='data:post.url &amp;quot;#links&amp;quot;'&gt;&lt;data:top.backlinkLabel/&gt;&lt;/a&gt;
&lt;/b:if&gt;
&lt;/b:if&gt;
&lt;/span&gt;

&lt;span class='post-icons'&gt;
&lt;!-- email post links --&gt;
&lt;b:if cond='data:post.emailPostUrl'&gt;
&lt;span class='item-action'&gt;
&lt;a expr:href='data:post.emailPostUrl' expr:title='data:top.emailPostMsg'&gt;
&lt;img alt='' class='icon-action' height='13' src='http://www.blogger.com/img/icon18_email.gif' width='18'/&gt;
&lt;/a&gt;
&lt;/span&gt;
&lt;/b:if&gt;

&lt;!-- quickedit pencil --&gt;
&lt;b:include data='post' name='postQuickEdit'/&gt;
&lt;/span&gt;
&lt;/div&gt;

&lt;div class='post-footer-line post-footer-line-2'&gt;
&lt;span class='post-labels'&gt;
&lt;b:if cond='data:post.labels'&gt;
&lt;data:postLabelsLabel/&gt;
&lt;b:loop values='data:post.labels' var='label'&gt;
&lt;a expr:href='data:label.url' rel='tag'&gt;&lt;data:label.name/&gt;&lt;/a&gt;&lt;b:if cond='data:label.isLast != &amp;quot;true&amp;quot;'&gt;,&lt;/b:if&gt;
&lt;/b:loop&gt;
&lt;/b:if&gt;
&lt;/span&gt;
&lt;/div&gt;

&lt;div class='post-footer-line post-footer-line-3'&gt;
&lt;span class='post-location'&gt;
&lt;b:if cond='data:top.showLocation'&gt;
&lt;b:if cond='data:post.location'&gt;
&lt;data:postLocationLabel/&gt;
&lt;a expr:href='data:post.location.mapsUrl' target='_blank'&gt;&lt;data:post.location.name/&gt;&lt;/a&gt;
&lt;/b:if&gt;
&lt;/b:if&gt;
&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/b:includable&gt;
&lt;b:includable id='postQuickEdit' var='post'&gt;
&lt;b:if cond='data:post.editUrl'&gt;
&lt;span expr:class='&amp;quot;item-control &amp;quot; data:post.adminClass'&gt;
&lt;a expr:href='data:post.editUrl' expr:title='data:top.editPostMsg'&gt;
&lt;img alt='' class='icon-action' height='18' src='http://www.blogger.com/img/icon18_edit_allbkg.gif' width='18'/&gt;
&lt;/a&gt;
&lt;/span&gt;
&lt;/b:if&gt;
&lt;/b:includable&gt;
&lt;b:includable id='commentDeleteIcon' var='comment'&gt;
&lt;span expr:class='&amp;quot;item-control &amp;quot; data:comment.adminClass'&gt;
&lt;a expr:href='data:comment.deleteUrl' expr:title='data:top.deleteCommentMsg'&gt;
&lt;img src='http://www.blogger.com/img/icon_delete13.gif'/&gt;
&lt;/a&gt;
&lt;/span&gt;
&lt;/b:includable&gt;
&lt;b:includable id='backlinkDeleteIcon' var='backlink'&gt;
&lt;span expr:class='&amp;quot;item-control &amp;quot; data:backlink.adminClass'&gt;
&lt;a expr:href='data:backlink.deleteUrl' expr:title='data:top.deleteBacklinkMsg'&gt;
&lt;img src='http://www.blogger.com/img/icon_delete13.gif'/&gt;
&lt;/a&gt;
&lt;/span&gt;
&lt;/b:includable&gt;
&lt;b:includable id='comments' var='post'&gt;
&lt;div class='comments' id='comments'&gt;
&lt;a name='comments'/&gt;
&lt;b:if cond='data:post.allowComments'&gt;
&lt;h4&gt;
&lt;b:if cond='data:post.numComments == 1'&gt;
1 &lt;data:commentLabel/&gt;:
&lt;b:else/&gt;
&lt;data:post.numComments/&gt; &lt;data:commentLabelPlural/&gt;:
&lt;/b:if&gt;
&lt;/h4&gt;

&lt;b:if cond='data:post.commentPagingRequired'&gt;
&lt;span class='paging-control-container'&gt;
&lt;a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'&gt;&lt;data:post.oldestLinkText/&gt;&lt;/a&gt;
&amp;#160;
&lt;a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'&gt;&lt;data:post.olderLinkText/&gt;&lt;/a&gt;
&amp;#160;
&lt;data:post.commentRangeText/&gt;
&amp;#160;
&lt;a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'&gt;&lt;data:post.newerLinkText/&gt;&lt;/a&gt;
&amp;#160;
&lt;a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'&gt;&lt;data:post.newestLinkText/&gt;&lt;/a&gt;
&lt;/span&gt;
&lt;/b:if&gt;

&lt;dl id='comments-block'&gt;
&lt;b:loop values='data:post.comments' var='comment'&gt;
&lt;dt expr:class='&amp;quot;comment-author &amp;quot; data:comment.authorClass' expr:id='data:comment.anchorName'&gt;
&lt;b:if cond='data:comment.favicon'&gt;
&lt;img expr:src='data:comment.favicon' height='16px' style='margin-bottom:-2px;' width='16px'/&gt;
&lt;/b:if&gt;
&lt;a expr:name='data:comment.anchorName'/&gt;
&lt;b:if cond='data:comment.authorUrl'&gt;
&lt;a expr:href='data:comment.authorUrl' rel='nofollow'&gt;&lt;data:comment.author/&gt;&lt;/a&gt;
&lt;b:else/&gt;
&lt;data:comment.author/&gt;
&lt;/b:if&gt;
&lt;data:commentPostedByMsg/&gt;
&lt;/dt&gt;
&lt;dd class='comment-body'&gt;
&lt;b:if cond='data:comment.isDeleted'&gt;
&lt;span class='deleted-comment'&gt;&lt;data:comment.body/&gt;&lt;/span&gt;
&lt;b:else/&gt;
&lt;p&gt;&lt;data:comment.body/&gt;&lt;/p&gt;
&lt;/b:if&gt;
&lt;/dd&gt;
&lt;dd class='comment-footer'&gt;
&lt;span class='comment-timestamp'&gt;
&lt;a expr:href='data:comment.url' title='comment permalink'&gt;
&lt;data:comment.timestamp/&gt;
&lt;/a&gt;
&lt;b:include data='comment' name='commentDeleteIcon'/&gt;
&lt;/span&gt;
&lt;/dd&gt;
&lt;/b:loop&gt;
&lt;/dl&gt;

&lt;b:if cond='data:post.commentPagingRequired'&gt;
&lt;span class='paging-control-container'&gt;
&lt;a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'&gt;
&lt;data:post.oldestLinkText/&gt;
&lt;/a&gt;
&lt;a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'&gt;
&lt;data:post.olderLinkText/&gt;
&lt;/a&gt;
&amp;#160;
&lt;data:post.commentRangeText/&gt;
&amp;#160;
&lt;a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'&gt;
&lt;data:post.newerLinkText/&gt;
&lt;/a&gt;
&lt;a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'&gt;
&lt;data:post.newestLinkText/&gt;
&lt;/a&gt;
&lt;/span&gt;
&lt;/b:if&gt;

&lt;p class='comment-footer'&gt;
&lt;b:if cond='data:post.embedCommentForm'&gt;
&lt;b:if cond='data:post.allowNewComments'&gt;
&lt;b:include data='post' name='comment-form'/&gt;
&lt;b:else/&gt;
&lt;data:post.noNewCommentsText/&gt;
&lt;/b:if&gt;
&lt;b:else/&gt;
&lt;b:if cond='data:post.allowComments'&gt;
&lt;a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'&gt;&lt;data:postCommentMsg/&gt;&lt;/a&gt;
&lt;/b:if&gt;
&lt;/b:if&gt;

&lt;/p&gt;
&lt;/b:if&gt;

&lt;div id='backlinks-container'&gt;
&lt;div expr:id='data:widget.instanceId &amp;quot;_backlinks-container&amp;quot;'&gt;
&lt;b:if cond='data:post.showBacklinks'&gt;
&lt;b:include data='post' name='backlinks'/&gt;
&lt;/b:if&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/b:includable&gt;
&lt;b:includable id='comment-form' var='post'&gt;
&lt;div class='comment-form'&gt;
&lt;a name='comment-form'/&gt;
&lt;h4 id='comment-post-message'&gt;&lt;data:postCommentMsg/&gt;&lt;/h4&gt;
&lt;p&gt;&lt;data:blogCommentMessage/&gt;&lt;/p&gt;
&lt;data:blogTeamBlogMessage/&gt;
&lt;a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/&gt;
&lt;iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='275' id='comment-editor' name='comment-editor' scrolling='no' src='' width='100%'/&gt;
&lt;data:post.friendConnectJs/&gt;
&lt;data:post.cmtfpIframe/&gt;
&lt;script type='text/javascript'&gt;
BLOG_CMT_createIframe(&amp;#39;&lt;data:post.appRpcRelayPath/&gt;&amp;#39;, &amp;#39;&lt;data:post.communityId/&gt;&amp;#39;);
&lt;/script&gt;
&lt;/div&gt;
&lt;/b:includable&gt;
&lt;b:includable id='backlinks' var='post'&gt;
&lt;a name='links'/&gt;&lt;h4&gt;&lt;data:post.backlinksLabel/&gt;&lt;/h4&gt;
&lt;b:if cond='data:post.numBacklinks != 0'&gt;
&lt;dl class='comments-block' id='comments-block'&gt;
&lt;b:loop values='data:post.backlinks' var='backlink'&gt;
&lt;div class='collapsed-backlink backlink-control'&gt;
&lt;dt class='comment-title'&gt;
&lt;span class='backlink-toggle-zippy'&gt;&amp;#160;&lt;/span&gt;
&lt;a expr:href='data:backlink.url' rel='nofollow'&gt;&lt;data:backlink.title/&gt;&lt;/a&gt;
&lt;b:include data='backlink' name='backlinkDeleteIcon'/&gt;
&lt;/dt&gt;
&lt;dd class='comment-body collapseable'&gt;
&lt;data:backlink.snippet/&gt;
&lt;/dd&gt;
&lt;dd class='comment-footer collapseable'&gt;
&lt;span class='comment-author'&gt;&lt;data:post.authorLabel/&gt; &lt;data:backlink.author/&gt;&lt;/span&gt;
&lt;span class='comment-timestamp'&gt;&lt;data:post.timestampLabel/&gt; &lt;data:backlink.timestamp/&gt;&lt;/span&gt;
&lt;/dd&gt;
&lt;/div&gt;
&lt;/b:loop&gt;
&lt;/dl&gt;
&lt;/b:if&gt;
&lt;p class='comment-footer'&gt;
&lt;a class='comment-link' expr:href='data:post.createLinkUrl' expr:id='data:widget.instanceId &amp;quot;_backlinks-create-link&amp;quot;' target='_blank'&gt;&lt;data:post.createLinkLabel/&gt;&lt;/a&gt;
&lt;/p&gt;
&lt;/b:includable&gt;
&lt;b:includable id='feedLinks'&gt;
&lt;b:if cond='data:blog.pageType != &amp;quot;item&amp;quot;'&gt; &lt;!-- Blog feed links --&gt;
&lt;b:if cond='data:feedLinks'&gt;
&lt;div class='blog-feeds'&gt;
&lt;b:include data='feedLinks' name='feedLinksBody'/&gt;
&lt;/div&gt;
&lt;/b:if&gt;

&lt;b:else/&gt; &lt;!--Post feed links --&gt;
&lt;div class='post-feeds'&gt;
&lt;b:loop values='data:posts' var='post'&gt;
&lt;b:if cond='data:post.allowComments'&gt;
&lt;b:if cond='data:post.feedLinks'&gt;
&lt;b:include data='post.feedLinks' name='feedLinksBody'/&gt;
&lt;/b:if&gt;
&lt;/b:if&gt;
&lt;/b:loop&gt;
&lt;/div&gt;
&lt;/b:if&gt;
&lt;/b:includable&gt;
&lt;b:includable id='feedLinksBody' var='links'&gt;
&lt;div class='feed-links'&gt;
&lt;data:feedLinksMsg/&gt;
&lt;b:loop values='data:links' var='f'&gt;
&lt;a class='feed-link' expr:href='data:f.url' expr:type='data:f.mimeType' target='_blank'&gt;&lt;data:f.name/&gt; (&lt;data:f.feedType/&gt;)&lt;/a&gt;
&lt;/b:loop&gt;
&lt;/div&gt;
&lt;/b:includable&gt;
&lt;b:includable id='status-message'&gt;
&lt;b:if cond='data:navMessage'&gt;
&lt;div class='status-msg-wrap'&gt;
&lt;div class='status-msg-body'&gt;
&lt;data:navMessage/&gt;
&lt;/div&gt;
&lt;div class='status-msg-border'&gt;
&lt;div class='status-msg-bg'&gt;
&lt;div class='status-msg-hidden'&gt;&lt;data:navMessage/&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div style='clear: both;'/&gt;
&lt;/b:if&gt;
&lt;/b:includable&gt;
&lt;/b:widget&gt;
&lt;/b:section&gt;
&lt;/div&gt;&lt;/div&gt;

&lt;div id='sidebar-wrap'&gt;

&lt;div id='sidebartop-wrap'&gt;&lt;div id='sidebartop-wrap2'&gt;
&lt;b:section class='sidebar' id='sidebartop'&gt;
&lt;b:widget id='HTML1' locked='false' title='' type='HTML'&gt;
&lt;b:includable id='main'&gt;
&lt;!-- only display title if it's non-empty --&gt;
&lt;b:if cond='data:title != &amp;quot;&amp;quot;'&gt;
&lt;h2 class='title'&gt;&lt;data:title/&gt;&lt;/h2&gt;
&lt;/b:if&gt;
&lt;div class='widget-content'&gt;
&lt;data:content/&gt;
&lt;/div&gt;

&lt;b:include name='quickedit'/&gt;
&lt;/b:includable&gt;
&lt;/b:widget&gt;
&lt;/b:section&gt;
&lt;/div&gt;&lt;/div&gt;

&lt;div id='sidebarbottom-wrap1'&gt;&lt;div id='sidebarbottom-wrap2'&gt;
&lt;b:section class='sidebar' id='sidebar' preferred='yes'&gt;
&lt;b:widget id='Subscribe1' locked='false' title='%uAD6C%uB3C5' type='Subscribe'&gt;
&lt;b:includable id='main'&gt;
&lt;b:if cond='data:isPublic'&gt;
&lt;div style='white-space:nowrap'&gt;

&lt;b:if cond='data:title != &amp;quot;&amp;quot;'&gt;
&lt;h2 class='title'&gt;&lt;data:title/&gt;&lt;/h2&gt;
&lt;/b:if&gt;
&lt;div class='widget-content'&gt;
&lt;b:loop values='data:feeds' var='feed'&gt;
&lt;div expr:class='&amp;quot;subscribe-wrapper subscribe-type-&amp;quot; data:feed.type'&gt;


&lt;div expr:class='&amp;quot;subscribe expanded subscribe-type-&amp;quot; data:feed.type' expr:id='&amp;quot;SW_READER_LIST_&amp;quot; data:widgetId data:feed.type' style='display:none;'&gt;

&lt;div class='top'&gt;
&lt;span class='inner' expr:onclick='&amp;quot;return(_SW_toggleReaderList(event, &amp;quot;&amp;quot; data:widgetId data:feed.type &amp;quot;&amp;quot;));&amp;quot;'&gt;
&lt;img class='subscribe-dropdown-arrow' expr:src='data:arrowDropdownImg'/&gt;
&lt;img align='absmiddle' alt='' border='0' class='feed-icon' expr:src='data:feedIconImg'/&gt;
&lt;data:feed.title/&gt;
&lt;/span&gt;

&lt;ul class='feed-reader-links'&gt;
&lt;a class='feed-reader-link' expr:href='&amp;quot;http://www.google.com/ig/add?source=bstp&amp;amp;feedurl=&amp;quot; data:feed.encodedUrl' target='_blank'&gt;
&lt;img expr:src='data:imagePathBase &amp;quot;subscribe-google.png&amp;quot;'/&gt;
&lt;/a&gt;
&lt;a class='feed-reader-link' expr:href='&amp;quot;http://www.bloglines.com/sub/&amp;quot; data:feed.url' target='_blank'&gt;
&lt;img expr:src='data:imagePathBase &amp;quot;subscribe-bloglines.png&amp;quot;'/&gt;
&lt;/a&gt;
&lt;a class='feed-reader-link' expr:href='&amp;quot;http://www.netvibes.com/subscribe.php?url=&amp;quot; data:feed.encodedUrl' target='_blank'&gt;
&lt;img expr:src='data:imagePathBase &amp;quot;subscribe-netvibes.png&amp;quot;'/&gt;
&lt;/a&gt;
&lt;a class='feed-reader-link' expr:href='&amp;quot;http://www.newsgator.com/ngs/subscriber/subext.aspx?url=&amp;quot; data:feed.encodedUrl' target='_blank'&gt;
&lt;img expr:src='data:imagePathBase &amp;quot;subscribe-newsgator.png&amp;quot;'/&gt;
&lt;/a&gt;
&lt;a class='feed-reader-link' expr:href='&amp;quot;http://add.my.yahoo.com/content?url=&amp;quot; data:feed.encodedUrl' target='_blank'&gt;
&lt;img expr:src='data:imagePathBase &amp;quot;subscribe-yahoo.png&amp;quot;'/&gt;
&lt;/a&gt;
&lt;a class='feed-reader-link' expr:href='data:feed.url' target='_blank'&gt;
&lt;img align='absmiddle' class='feed-icon' expr:src='data:feedIconImg'/&gt;
Atom
&lt;/a&gt;
&lt;/ul&gt;

&lt;/div&gt;
&lt;div class='bottom'/&gt;
&lt;/div&gt;

&lt;div class='subscribe' expr:id='&amp;quot;SW_READER_LIST_CLOSED_&amp;quot; data:widgetId data:feed.type' expr:onclick='&amp;quot;return(_SW_toggleReaderList(event, &amp;quot;&amp;quot; data:widgetId data:feed.type &amp;quot;&amp;quot;));&amp;quot;'&gt;
&lt;div class='top'&gt;
&lt;span class='inner'&gt;
&lt;img class='subscribe-dropdown-arrow' expr:src='data:arrowDropdownImg'/&gt;
&lt;span expr:onclick='&amp;quot;return(_SW_toggleReaderList(event, &amp;quot;&amp;quot; data:widgetId data:feed.type &amp;quot;&amp;quot;));&amp;quot;'&gt;
&lt;img align='absmiddle' alt='' border='0' class='feed-icon' expr:src='data:feedIconImg'/&gt;
&lt;data:feed.title/&gt;
&lt;/span&gt;
&lt;/span&gt;
&lt;/div&gt;
&lt;div class='bottom'/&gt;
&lt;/div&gt;

&lt;/div&gt;
&lt;/b:loop&gt;

&lt;div style='clear:both'/&gt;

&lt;/div&gt;
&lt;/div&gt;

&lt;b:include name='quickedit'/&gt;

&lt;/b:if&gt;
&lt;/b:includable&gt;
&lt;/b:widget&gt;
&lt;b:widget id='Followers1' locked='false' title='%uAD00%uC2EC%uC788%uB294 %uC0AC%uC6A9%uC790' type='Followers'&gt;
&lt;b:includable id='main'&gt;
&lt;b:if cond='data:title != &amp;quot;&amp;quot;'&gt;
&lt;b:if cond='data:codeSnippet != &amp;quot;&amp;quot;'&gt;
&lt;h2 class='title'&gt;&lt;data:title/&gt;&lt;/h2&gt;
&lt;b:else/&gt;
&lt;b:if cond='data:totalFollowerCount != &amp;quot;&amp;quot;'&gt;
&lt;h2 class='title'&gt;&lt;data:title/&gt; (&lt;data:totalFollowerCount/&gt;)&lt;/h2&gt;
&lt;/b:if&gt;
&lt;/b:if&gt;
&lt;/b:if&gt;

&lt;div expr:id='data:widget.instanceId &amp;quot;-wrapper&amp;quot;'&gt;
&lt;b:if cond='data:codeSnippet != &amp;quot;&amp;quot;'&gt;
&lt;div style='margin-right:2px;'&gt;
&lt;data:codeSnippet/&gt;
&lt;/div&gt;
&lt;b:else/&gt;
&lt;b:if cond='data:totalFollowerCount == &amp;quot;&amp;quot;'&gt;
&lt;span class='item-control following-not-admin'&gt;
&lt;b&gt;&lt;data:failureSnippet/&gt;&lt;/b&gt;
&lt;/span&gt;
&lt;span class='item-control blog-admin'&gt;
&lt;b&gt;&lt;data:adminFailureSnippet/&gt;&lt;/b&gt;
&lt;/span&gt;
&lt;b:else/&gt;
&lt;b:if cond='data:followingLinkPresent'&gt;
&lt;div class='follow-this profile-link item-control following-follow-this'&gt;
&lt;a expr:href='&amp;quot;javascript:_FollowersView._openPopup(&amp;quot;&amp;quot; data:followUri &amp;quot;&amp;quot;);&amp;quot;'&gt;
&lt;data:followThisMessage/&gt;
&lt;/a&gt;
&lt;/div&gt;
&lt;div class='follow-this profile-link item-control following-stop-following-this'&gt;
&lt;a expr:href='&amp;quot;javascript:_FollowersView._openPopup(&amp;quot;&amp;quot; data:followUri &amp;quot;&amp;quot;);&amp;quot;'&gt;
&lt;data:stopFollowingMessage/&gt;
&lt;/a&gt;
&lt;/div&gt;
&lt;/b:if&gt;

&lt;div class='followers-grid'&gt;
&lt;b:if cond='data:totalFollowerCount == 0'&gt;
&lt;div class='profile-link item-control following-follow-this'&gt;
&lt;data:emptyFollowersMessage/&gt;
&lt;/div&gt;
&lt;/b:if&gt;
&lt;!--
Relies on the js written out in navbar.gxp
--&gt;
&lt;b:loop values='data:followers' var='follower'&gt;
&lt;div class='follower'&gt;
&lt;a expr:href='data:follower.profileUrl' expr:title='data:follower.displayName' rel='nofollow'&gt;
&lt;img class='follower-img' expr:alt='data:follower.displayName' expr:height='data:follower.imageHeight' expr:onerror='&amp;quot;this.onerror=null;this.src=&amp;quot;&amp;quot; data:anonFollowerImageUrl &amp;quot;&amp;quot;;&amp;quot;' expr:onload='&amp;quot;setAttributeOnload(this, &amp;quot;src&amp;quot;, &amp;quot;&amp;quot; data:follower.imageUrl &amp;quot;&amp;quot;)&amp;quot;' expr:width='data:follower.imageWidth' src='http://img1.blogblog.com/img/blank.gif'/&gt;
&lt;/a&gt;
&lt;/div&gt;
&lt;/b:loop&gt;
&lt;div class='clear'/&gt;
&lt;/div&gt;

&lt;div class='followers-canvas profile-link'&gt;
&lt;data:followersFooterMessage/&gt;
&lt;span class='item-control following-not-admin'&gt;
&lt;a expr:href='data:followersUri'&gt;
&lt;data:viewAllMessage/&gt;
&lt;/a&gt;
&lt;/span&gt;
&lt;span class='item-control blog-admin'&gt;
&lt;a expr:href='data:manageFollowersUri'&gt;
&lt;data:manageFollowersMessage/&gt;
&lt;/a&gt;
&lt;/span&gt;
&lt;/div&gt;
&lt;/b:if&gt;
&lt;/b:if&gt;
&lt;b:include name='quickedit'/&gt;
&lt;/div&gt;
&lt;/b:includable&gt;
&lt;/b:widget&gt;
&lt;b:widget id='BlogArchive1' locked='false' title='%uBE14%uB85C%uADF8 %uC544%uCE74%uC774%uBE0C' type='BlogArchive'&gt;
&lt;b:includable id='main'&gt;
&lt;b:if cond='data:title'&gt;
&lt;h2&gt;&lt;data:title/&gt;&lt;/h2&gt;
&lt;/b:if&gt;
&lt;div class='widget-content'&gt;
&lt;div id='ArchiveList'&gt;
&lt;div expr:id='data:widget.instanceId &amp;quot;_ArchiveList&amp;quot;'&gt;
&lt;b:if cond='data:style == &amp;quot;HIERARCHY&amp;quot;'&gt;
&lt;b:include data='data' name='interval'/&gt;
&lt;/b:if&gt;
&lt;b:if cond='data:style == &amp;quot;FLAT&amp;quot;'&gt;
&lt;b:include data='data' name='flat'/&gt;
&lt;/b:if&gt;
&lt;b:if cond='data:style == &amp;quot;MENU&amp;quot;'&gt;
&lt;b:include data='data' name='menu'/&gt;
&lt;/b:if&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;b:include name='quickedit'/&gt;
&lt;/div&gt;
&lt;/b:includable&gt;
&lt;b:includable id='flat' var='data'&gt;
&lt;ul&gt;
&lt;b:loop values='data:data' var='i'&gt;
&lt;li class='archivedate'&gt;
&lt;a expr:href='data:i.url'&gt;&lt;data:i.name/&gt;&lt;/a&gt; (&lt;data:i.post-count/&gt;)
&lt;/li&gt;
&lt;/b:loop&gt;
&lt;/ul&gt;
&lt;/b:includable&gt;
&lt;b:includable id='menu' var='data'&gt;
&lt;select expr:id='data:widget.instanceId &amp;quot;_ArchiveMenu&amp;quot;'&gt;
&lt;option value=''&gt;&lt;data:title/&gt;&lt;/option&gt;
&lt;b:loop values='data:data' var='i'&gt;
&lt;option expr:value='data:i.url'&gt;&lt;data:i.name/&gt; (&lt;data:i.post-count/&gt;)&lt;/option&gt;
&lt;/b:loop&gt;
&lt;/select&gt;
&lt;/b:includable&gt;
&lt;b:includable id='interval' var='intervalData'&gt;
&lt;b:loop values='data:intervalData' var='i'&gt;
&lt;ul&gt;
&lt;li expr:class='&amp;quot;archivedate &amp;quot; data:i.expclass'&gt;
&lt;b:include data='i' name='toggle'/&gt;
&lt;a class='post-count-link' expr:href='data:i.url'&gt;&lt;data:i.name/&gt;&lt;/a&gt;
&lt;span class='post-count' dir='ltr'&gt;(&lt;data:i.post-count/&gt;)&lt;/span&gt;
&lt;b:if cond='data:i.data'&gt;
&lt;b:include data='i.data' name='interval'/&gt;
&lt;/b:if&gt;
&lt;b:if cond='data:i.posts'&gt;
&lt;b:include data='i.posts' name='posts'/&gt;
&lt;/b:if&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/b:loop&gt;
&lt;/b:includable&gt;
&lt;b:includable id='toggle' var='interval'&gt;
&lt;b:if cond='data:interval.toggleId'&gt;
&lt;b:if cond='data:interval.expclass == &amp;quot;expanded&amp;quot;'&gt;
&lt;a class='toggle' expr:href='data:widget.actionUrl &amp;quot;&amp;amp;action=toggle&amp;quot; &amp;quot;&amp;amp;dir=close&amp;amp;toggle=&amp;quot; data:interval.toggleId &amp;quot;&amp;amp;toggleopen=&amp;quot; data:toggleopen'&gt;
&lt;span class='zippy toggle-open'&gt;&amp;#9660; &lt;/span&gt;
&lt;/a&gt;
&lt;b:else/&gt;
&lt;a class='toggle' expr:href='data:widget.actionUrl &amp;quot;&amp;amp;action=toggle&amp;quot; &amp;quot;&amp;amp;dir=open&amp;amp;toggle=&amp;quot; data:interval.toggleId &amp;quot;&amp;amp;toggleopen=&amp;quot; data:toggleopen'&gt;
&lt;span class='zippy'&gt;
&lt;b:if cond='data:blog.languageDirection == &amp;quot;rtl&amp;quot;'&gt;
&amp;#9668;
&lt;b:else/&gt;
&amp;#9658;
&lt;/b:if&gt;
&lt;/span&gt;
&lt;/a&gt;
&lt;/b:if&gt;
&lt;/b:if&gt;
&lt;/b:includable&gt;
&lt;b:includable id='posts' var='posts'&gt;
&lt;ul class='posts'&gt;
&lt;b:loop values='data:posts' var='i'&gt;
&lt;li&gt;&lt;a expr:href='data:i.url'&gt;&lt;data:i.title/&gt;&lt;/a&gt;&lt;/li&gt;
&lt;/b:loop&gt;
&lt;/ul&gt;
&lt;/b:includable&gt;
&lt;/b:widget&gt;
&lt;/b:section&gt;
&lt;/div&gt;&lt;/div&gt;

&lt;/div&gt;

&lt;div id='footer-wrap1'&gt;&lt;div id='footer-wrap2'&gt;
&lt;b:section class='footer' id='footer'/&gt;
&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;&lt;/div&gt;

&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</blockquote>


```
