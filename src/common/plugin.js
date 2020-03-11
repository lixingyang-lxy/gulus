var Toast = {}
Toast.install = function (Vue, options) {
    let opt = {
        defaultType: 'center',
        duration: '1500'
    };
    for (let props in options) {
        opt[props] = options[props]
    }
    Vue.prototype.$toast = function (tips, type) {
        opt.defaultType = type;
        if (document.getElementsByClassName('vue-toast').length) {
            return
        }
        let toastTpl = Vue.extend({
            template: `<div class="vue-toast toast-${opt.defaultType}">${tips}</div>`
        });
        let tpl = new toastTpl().$mount().$el

        document.body.appendChild((tpl))
        setTimeout(() => {
                 document.body.removeChild(tpl)
        }, opt.duration)
    }
    let position = ['botton', 'center', 'top'];
    position.forEach((type) => {
        Vue.prototype.$toast[type] = (tip) => {
            return Vue.prototype.$toast(tip, type)
        }
    })
}


export default {
    Toast
}