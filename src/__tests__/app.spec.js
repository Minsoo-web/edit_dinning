import Vuex from "vuex";
import VueRouter from "vue-router";
import App from "@/App.vue";

import store from "@/store/index.js";
import router from "@/router/index.js";
import { createLocalVue, shallowMount } from "@vue/test-utils";

let wrapper;
const localVue = createLocalVue();

localVue.use(VueRouter);
localVue.use(Vuex);

describe("app.vue", () => {
  beforeEach(() => {
    wrapper = shallowMount(App, { store, localVue, router });
  });

  test("app test", () => {
    const h1 = wrapper.find("h1");
    expect(h1.text()).toBe("hello");
  });
});
