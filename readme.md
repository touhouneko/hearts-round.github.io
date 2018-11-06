# 数据格式

## staff.csv

|变量名|描述|
|:------------- |:-------------:|
|name|staff显示名，**站名(心界巡)的name必须为空！且必须在第一行！**|
|role|角色, 比如vocal等，留空则不显示, **其他人员的role必须写成"others"(全小写)**|
|avatar|角色头像，220x220大小，必须是 http:// 或是 https:// 开头的网址，例如[https://via.placeholder.com/200x200](/#)|
|social_twitter|twitter帐号名, 个人网址中的粗体部分: [https://twitter.com/**CoreTania_**?lang=en](/#)|
|social_bilibili|bilibili uid, 个人网址中的粗体部分: [https://space.bilibili.com/**394094**/#/](/#)|
|social_weibo| weibo 帐号名， 个人网址中的粗体部分: [https://www.weibo.com/**hinanawi**?is_hot=1 或是 https://www.weibo.com/**u/6500013650**?is_hot=1](/#)|
|description|个人文字描述，段落间用英文分号隔开";"， **尽可能不要使用英文引号和英文逗号** |

## album.json
该文件为json格式，可以找在线JSON编辑器编辑,比如https://jsonformatter.org/json-editor 进行修改
|变量名|描述|
|:----:|:-----:|
|code|专辑编号，如HATO001|
|name|专辑名称|
|cover|专辑封面图,正方形，以 http:// 或是 https:// 开头，比如 [https://via.placeholder.com/200x200](/#)|
|illustration|封面画师名|
|thanks|特别感谢|
|product_link|售卖地址，以 https:// 开头|
|product_link.taobao|淘宝地址|
|product_link.tora|虎穴地址|
|tracks|曲目列表，是一个数组,**请务必按顺序排序**|
|tracks[].title||
|tracks[].vocal (optional)||
|tracks[].original (optional)||
|tracks[].composer||
|tracks[].arrange (optional)||
|tracks[].lyrics (optional)||
|tracks[].length|时长，例：4:32|
|tracks[].link (optional)|外链站点，以 https:// 或是 http:// 开头|
|tracks[].has_lyrics|是否有歌词, true=有，false=没有，**不允许其他值**|





# Progress

## 可以开始更新数据的页面

### About
|||
|:------------- |:-------------:|
|页面| 90% (缺少倒影logo以及导航栏icon) |
|数据格式| 已确认 |




## 其他页面

### Contact
|||
|:------------- |:-------------:|
|页面| 99% (缺少倒影logo) |
|数据格式| 无 |

### Album

