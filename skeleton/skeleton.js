Component({
  /**
   * 组件的属性列表
   */
  props: {
    selector: 'skeleton', // 根选择器
    background: '#FFF', // 背景色
    skt_animation: '' // 动画
  },
  data: {
    visible: true, //组件展示
    rectList: [], // 圆弧角矩形
		circleList: [], // 圆形
		radiusList: [], // 直角矩形
    isLoading: true,
    systemInfo: { // 手机系统信息
      height: 0,
      width: 0,
      top: 0,
      left: 0
    }
  },
  /**
   * 组件创建时触发
   */
  onInit() {
    this.setData({
      'systemInfo.width': my.getSystemInfoSync().windowWidth, // 视窗宽度
      'systemInfo.height': my.getSystemInfoSync().windowHeight // 视窗高度
    })
  },
  /**
   * 组件创建完毕时触发
   */
  didMount() {
    this.setData({
      rectList: this.getSelector(`.${this.props.selector} /deep/ .${this.props.selector}-rect`),
      circleList: this.getSelector(`.${this.props.selector} /deep/ .${this.props.selector}-circle`),
      radiusList: this.getSelector(`.${this.props.selector} /deep/ .${this.props.selector}-radius`)
    })
    //捕获节点后关闭加载动效
    this.setData({
      isLoading: false
    }, () => {
      ['rectList', 'circleList', 'radiusList'].forEach((name) => {
        this.drawNodes(name, this.data[name]);
      })
    })
  },
  methods: {
    getSelector: (name) => my.createSelectorQuery().selectAll(name),
    drawNodes(name, selector) {
      let that = this
      selector.boundingClientRect().exec((res) => {
        if (res[0]) {
          that.setData({
            [name]: res[0].filter(todo => todo.top <= that.data.systemInfo.height)
          })
        }
      })
    }
  }
})