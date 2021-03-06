import Vue from 'vue';
import Element from 'element-ui'; // 引入elementUi
import 'element-ui/lib/theme-chalk/index.css'

import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' //样式文件

import 'lk-ui/dist/lk-ui.css'
Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    })
})
export default ({
    Vue,
    options,
    router,
    siteData
}) => {
    Vue.use(Element);
    Vue.mixin({
        mounted() {
            //要编写对应的文档的包要通过这种mixin的方式引入，不然build的时候会报window is not defined的错
            import('lk-ui').then(function (m) {
                Vue.use(m.default)
            })
        },
    })
}