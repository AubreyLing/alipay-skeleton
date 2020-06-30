# alipay-skeleton
A skeleton plugin for alipay mini-program
一个支付宝小程序的骨架屏插件

使用方法：

1、在目标页面，如index页面的index.axml文件顶部引入skeleton.axml
<!--引入骨架屏模版 -->
//<skeleton a:if="{{showSkeleton}}"></skeleton>//

2、给index.axml的最外层元素添加class名：skeleton
<view class="container skeleton"></view>

3、具体到各个元素，添加相应的class名
（1）直角矩形：skeleton-rect
（2）圆角矩形：skeleton-radius
（3）圆形：skeleton-circle

之前下载别人写的支付宝骨架屏插件，完全不可用，差不多有10个BUG，后面自己参考jayZhou的微信小程序骨架屏组件重写的，已经在我们公司的支付宝小程序上使用了
