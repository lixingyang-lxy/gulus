import Vue from "vue";
import App from "./App.vue";
import Button from "./button/buttons.vue";
import ButtonGroup from "./button/button-group.vue";
import Tabs from "./tabs/tabs.vue";
import TabsBody from "./tabs/tabs-body.vue";
import TabsHeader from "./tabs/tabs-header.vue";
import TabsItem from "./tabs/tabs-item.vue";
import TabsPane from "./tabs/tabs-pane.vue";
//引入svg组件
import Icon from "./icon";
import chai from "chai";
import filter from "./utils/filter";

//全局注册icon-svg
Vue.component("g-icon", Icon);
Vue.component("g-button", Button);
Vue.component("g-button-group", ButtonGroup);
Vue.component("g-tabs", Tabs);
Vue.component("g-tabs-body", TabsBody);
Vue.component("g-tabs-header", TabsHeader);
Vue.component("g-tabs-item", TabsItem);
Vue.component("g-tabs-pane", TabsPane);
Vue.config.productionTip = false;

Vue.filter("filter", function(value) {
  console.log(value);
});

const expect = chai.expect;
// 单元测试
{
  const constructor = Vue.extend(Button);
  const button = new constructor({
    propsData: {
      icon: "setting"
    }
  });
  button.$mount("#test");
  let useElement = button.$el.querySelector("use");
  // console.log(useElement)
  let href = useElement.getAttribute("xlink:href");
  expect(href).to.eq("#i-setting");
  console.log(filter([12, 12, 4, 5, 5, 4]));
}

new Vue({
  render: h => h(App)
}).$mount("#app");
