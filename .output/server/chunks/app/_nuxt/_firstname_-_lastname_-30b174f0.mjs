import { provide, unref, useSSRContext, inject, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { t as team, s as services, _ as __nuxt_component_3 } from './services-6eaa78c6.mjs';
import { u as useRoute } from '../server.mjs';
import '@headlessui/vue';
import '@heroicons/vue/24/outline';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'h3';
import 'ufo';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main$1 = {
  __name: "TeamPerson",
  __ssrInlineRender: true,
  setup(__props) {
    const person = inject("person");
    console.log(person);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white py-10 sm:py-10" }, _attrs))}><div class="mx-auto max-w-7xl px-6 lg:px-8"><div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none"><div class="text-center mb-8"><h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">${ssrInterpolate(unref(person).firstname)} ${ssrInterpolate(unref(person).lastname)}</h1></div><div class="flex justify-center justify-items-center"><div class="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2"><div><img class="aspect-[3/2] w-full rounded-2xl object-cover"${ssrRenderAttr("src", unref(person).imageUrl)} alt=""></div><div class="flex flex-wrap justify-center justify-items-center"><p>${ssrInterpolate(unref(person).description)}</p><p class="mt-8">${ssrInterpolate(unref(person).hobbies)}</p></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TeamPerson.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {
  __name: "[firstname]-[lastname]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    console.log("route: ", route.params);
    const person = team.find((p) => {
      return p.firstname.toLowerCase() === route.params.firstname && p.lastname.toLowerCase() === route.params.lastname;
    });
    const personServices = services.filter((service) => person.services.includes(service.id));
    provide("person", person);
    console.log(person);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TeamPerson = __nuxt_component_0;
      const _component_ServicesSection = __nuxt_component_3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_TeamPerson, null, null, _parent));
      _push(ssrRenderComponent(_component_ServicesSection, {
        title: "Os Meus Servi\xE7os",
        services: unref(personServices)
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/equipa/[firstname]-[lastname].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_firstname_-_lastname_-30b174f0.mjs.map
