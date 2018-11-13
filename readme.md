# 数据格式

## staff.csv
用于 https://hearts-round.github.io/about 的参与人员编辑

|变量名|描述|
|:------------- |:-------------|
|name|staff显示名，**站名(心界巡)的name必须为空！且必须在第一行！**|
|role|角色, 比如vocal等，留空则不显示, **其他人员的role必须写成"others"(全小写)**|
|avatar(optional)|角色头像，220x220大小，必须是 http:// 或是 https:// 开头的网址，例如[https://via.placeholder.com/200x200](/#), 如果没有则使用默认头像|
|social_twitter(optional)|twitter帐号名, 个人网址中的粗体部分: [https://twitter.com/**CoreTania_**?lang=en](/#)|
|social_bilibili(optional)|bilibili uid, 个人网址中的粗体部分: [https://space.bilibili.com/**394094**/#/](/#)|
|social_weibo(optional)| weibo 帐号名， 个人网址中的粗体部分: [https://www.weibo.com/**hinanawi**?is_hot=1 或是 https://www.weibo.com/**u/6500013650**?is_hot=1](/#)|
|description|个人文字描述，段落间用英文分号隔开";"， **尽可能不要使用英文引号和英文逗号** |

## album.json
用于 https://hearts-round.github.io/discography/albums 的专辑显示，以及其他处的弹窗

该文件为json格式，可以找在线JSON编辑器编辑,比如https://jsonformatter.org/json-editor 进行修改

|变量名|描述|
|:----:|:-----|
|code|专辑编号，如HATO001|
|name|专辑名称|
|date|专辑日期|
|cover|专辑封面图,正方形，以 http:// 或是 https:// 开头，比如 [https://via.placeholder.com/200x200](/#)|
|thanks|特别感谢|
|product_link|售卖地址，以 https:// 开头|
|product_link.taobao|淘宝地址|
|product_link.tora(optional)|虎穴地址|
|tracks|曲目列表，是一个数组,**请务必按顺序排序**|
|tracks[].title||
|tracks[].vocal (optional)||
|tracks[].original (optional)||
|tracks[].composer(optional)||
|tracks[].arrange (optional)||
|tracks[].lyrics (optional)||
|tracks[].pv(optional)||
|tracks[].illustrator(optional)||
|tracks[].length|时长，例：`4:32`|
|tracks[].link (optional)|外链站点，以 https:// 或是 http:// 开头|
|tracks[].has_lyrics|是否有歌词, `true`=有，`false`=没有，**不允许其他值**|


## banner.csv
用于首页的轮播图

|变量名|描述|
|:----:|:----|
|image|图片的地址，以 https:// 或 http:// 开头，显示大小为770x370|
|title|轮播图下放的文字描述|
|album_code|相对应的专辑编号，比如HATO001|

## works.csv
用于 work 页面

|变量名|描述|
|:----:|:----|
|principle|委托方名称 |
|principle_url(optional)|委托方链接|
|title|作品标题|
|cover(optional)|作品封面(高度上限150px)|
|info_1|上半部分文字描述,分段用";"(英文分号)分开|
|info_2(optional)|下半部分文字描述|
|video_youtube(optional)|youtube 的视频 ID，网址中的粗体部分 [https://www.youtube.com/watch?v=**SCQgE4mTnjU**](/#)|
|video_bilibili|bilibili 的视频 ID 以及分p号码，网址中的粗体部分 [https://www.bilibili.com/video/**av2739129/?p=3**](/#)
如果没有分p号，例如[https://www.bilibili.com/video/**av2739129**](/#)，则输入`av2739129/?p=1`|
|video_niconico(optional)|niconico 的视频ID，网址中的粗体部分 [https://www.nicovideo.jp/watch/**sm7706816**](/#)|
|original(optional)||
|compose(optional)||
|arrange(optional)||
|lyric(optional)||
|illust(optional)||
|vocal(optional)||
|pv(optional)||
|has_lyrics|是否有歌词,`true`或者`false`|
|ext_link(optional)|外部音频链接|

## video.csv
用于video页面

|变量名|描述|
|:----:|:----|
|album_code|专辑ID, 见`albums.json`|
|track_id|歌曲的index, 在`albums.json`中如果是第一首则填`1`|
|cover|视频封面|
|id_youtube(optional)|youtube 视频ID, 见`work.csv`|
|id_bilibili|bilibili 视频ID, 见`work.csv`|
|id_niconico(optional)|niconico 视频ID, 见`work.csv`|

## news.csv
用于首页新闻更新

|变量名|描述|
|:----:|:----|
|date|日期|
|title|新闻内容|

## gallery.csv
用于 gallery 页

|变量名|描述|
|:----:|:----|
|url_cover|页面中的图片地址(页面中显示尺寸为250px*250px)|
|url_modal|弹窗中的图片地址(弹窗中最大显示宽度为800px,最大显示高度为450px)|
|url_origin|原图地址|
|author_name|画师名|
|author_url(optional)|画师主页地址|
|album_code(optional)|出自哪张专辑|
|track_idx(optional)|出自该专辑中的第几首歌(见`videos.csv`)|

## 歌词更新

### works中的歌词

works 中的歌词都保存在`data/lyrics/works/xxx.csv`中.

xxx 是三位数字,比如`001`,`111`等.

数字对应的是 work 的编号,比如 `work.csv`文件中去除表头,第十行数据对应的就是`data/lyrics/works/010.csv`

`work.csv`中的`has_lyrics`决定弹窗中的歌词按钮是否激活,如果在`work.csv`中声明有歌词,但是并没有在`data/lyrics/work`中添加相对应的歌词文件,则会跳转到404页面.

## 专辑歌曲中的歌词

专辑中的歌词保存在`data/lyrics/专辑编号/xxx.csv`中.

xxx是一个两位数字.

比如专辑编号为`HATO001`的第2首歌的歌词,对应的地址是`data/lyrics/HATO001/02.csv`

关于`has_lyrics`的影响见`works中的歌词`.