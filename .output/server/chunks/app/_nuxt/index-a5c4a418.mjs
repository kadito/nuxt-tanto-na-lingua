import { unref, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { s as services, _ as __nuxt_component_3, t as team } from './services-6eaa78c6.mjs';
import { BuildingOffice2Icon, PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/outline';
import '@headlessui/vue';

const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "isolate bg-white" }, _attrs))}><main><div class="relative px-6 lg:px-8"><div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56"><div class="text-center"><h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Tanto Na L\xEDngua</h1><p class="mt-6 text-3xl leading-8 text-gray-600">Servicos especializados de Sa\xFAde e Educa\xE7\xE3o</p></div></div><div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"><svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678"><path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"></path><defs><linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse"><stop stop-color="#9089FC"></stop><stop offset="1" stop-color="#FF80B5"></stop></linearGradient></defs></svg></div></div></main></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHero.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$3 = {
  __name: "AboutUs",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = [
      { name: "Colaboradores", value: "21" },
      { name: "Utentes", value: "250" },
      { name: "Localiza\xE7ao", value: "Lisboa" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative isolate overflow-hidden py-20 about-us" }, _attrs))} data-v-e79261f7><div class="mx-auto max-w-7xl px-6 lg:px-8" data-v-e79261f7><div class="mx-auto max-w-4xl lg:mx-0" data-v-e79261f7><h2 class="text-4xl font-bold tracking-tight sm:text-6xl title" data-v-e79261f7>Sobre n\xF3s</h2><p class="mt-6 text-lg leading-8 text" data-v-e79261f7>A Tanto na L\xEDngua, criada em 2019, possui os servi\xE7os de terapia da fala, ensino especializado, psicomotricidade, psicologia educacional, psicologia cl\xEDnica, terapia ocupacional, musicoterapia, fisioterapia, tutorias e classes de estimula\xE7\xE3o global. Este projecto surgiu da vontade de maximizar o desenvolvimento global de cada crian\xE7a, priorizando o trabalho em equipa, centrado na crian\xE7a e ir de encontro ao ambiente mais natural da crian\xE7a sem descurar o papel crucial da fam\xEDlia e dos professores/educadores nesta evolu\xE7\xE3o. Mais tarde, alargamos e especializamos os nossos servi\xE7os para um atendimento especializado \xE0 popula\xE7\xE3o adulta.</p></div><div class="mx-auto mt-8 max-w-2xl lg:mx-0 lg:max-w-none" data-v-e79261f7><dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-3 lg:grid-cols-3" data-v-e79261f7><!--[-->`);
      ssrRenderList(stats, (stat) => {
        _push(`<div class="flex flex-col-reverse" data-v-e79261f7><dt class="text-base leading-7 text" data-v-e79261f7>${ssrInterpolate(stat.name)}</dt><dd class="text-2xl font-bold leading-9 tracking-tight text" data-v-e79261f7>${ssrInterpolate(stat.value)}</dd></div>`);
      });
      _push(`<!--]--></dl></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutUs.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-e79261f7"]]);
const _sfc_main$2 = {
  __name: "TeamList",
  __ssrInlineRender: true,
  setup(__props) {
    const personUrl = (person) => {
      return `/nuxt-tanto-na-lingua/equipa/${person.firstname.toLowerCase()}-${person.lastname.toLowerCase()}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white py-24 sm:py-32" }, _attrs))}><div class="mx-auto max-w-7xl px-6 lg:px-8"><div class="mx-auto max-w-2xl lg:mx-0"><h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A Nossa Equipa</h2><p class="mt-6 text-lg leading-8 text-gray-600">We\u2019re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p></div><ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-y-16 gap-x-8 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"><!--[-->`);
      ssrRenderList(unref(team), (person) => {
        _push(`<li><a${ssrRenderAttr("href", personUrl(person))}><img class="mx-auto h-32 w-32 rounded-full"${ssrRenderAttr("src", person.imageUrl)} alt=""><h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">${ssrInterpolate(person.firstname)} ${ssrInterpolate(person.lastname)}</h3><p class="text-sm leading-6 text-gray-600">${ssrInterpolate(person.mainService)}</p></a></li>`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TeamList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "ContactSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative isolate bg-white" }, _attrs))}><div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2"><div class="relative px-6 pt-20 pb-8 sm:pt-20 lg:px-8"><div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg"><div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2"><svg class="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true"><defs><pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse"><path d="M130 200V.5M.5 .5H200" fill="none"></path></pattern></defs><rect width="100%" height="100%" stroke-width="0" fill="white"></rect><svg x="100%" y="-1" class="overflow-visible fill-gray-50"><path d="M-470.5 0h201v201h-201Z" stroke-width="0"></path></svg><rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"></rect></svg></div><h2 class="text-3xl font-bold tracking-tight text-gray-900">Entra em Contacto Conosco</h2><p class="mt-6 text-lg leading-8 text-gray-600">Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.</p><dl class="mt-10 space-y-4 text-base leading-7 text-gray-600"><div class="flex gap-x-4"><dt class="flex-none"><span class="sr-only">Telephone</span>`);
      _push(ssrRenderComponent(unref(BuildingOffice2Icon), {
        class: "h-7 w-6 text-gray-400",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`</dt><dd>Moscavide<br>CODIGO POSTAL</dd></div><div class="flex gap-x-4"><dt class="flex-none"><span class="sr-only">Telephone</span>`);
      _push(ssrRenderComponent(unref(PhoneIcon), {
        class: "h-7 w-6 text-gray-400",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`</dt><dd><a class="hover:text-gray-900" href="tel:+351 926635923">+351 926635923</a></dd></div><div class="flex gap-x-4"><dt class="flex-none"><span class="sr-only">Telephone</span>`);
      _push(ssrRenderComponent(unref(EnvelopeIcon), {
        class: "h-7 w-6 text-gray-400",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`</dt><dd><a class="hover:text-gray-900" href="mailto:tantolingua@gmail.com">tantolingua@gmail.com</a></dd></div></dl></div></div><form action="#" method="POST" class="px-6 pb-8 pt-20 sm:pb-8 lg:px-8"><div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg"><div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2"><div class="sm:col-span-2"><label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label><div class="mt-2.5"><input type="text" name="name" id="name" autocomplete="name" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></div></div><div class="sm:col-span-2"><label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label><div class="mt-2.5"><input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></div></div><div class="sm:col-span-2"><label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label><div class="mt-2.5"><input type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></div></div><div class="sm:col-span-2"><label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label><div class="mt-2.5"><textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea></div></div></div><div class="mt-8 flex justify-end"><button type="submit" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send message</button></div></div></form></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHero = __nuxt_component_0;
      const _component_AboutUs = __nuxt_component_1;
      const _component_TeamList = __nuxt_component_2;
      const _component_ServicesSection = __nuxt_component_3;
      const _component_ContactSection = __nuxt_component_4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_AppHero, null, null, _parent));
      _push(ssrRenderComponent(_component_AboutUs, { id: "sobre-nos" }, null, _parent));
      _push(ssrRenderComponent(_component_TeamList, { id: "equipa" }, null, _parent));
      _push(ssrRenderComponent(_component_ServicesSection, {
        id: "servicos",
        title: "Os Nossos Servi\xE7os",
        services: unref(services)
      }, null, _parent));
      _push(ssrRenderComponent(_component_ContactSection, { id: "contactos" }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-a5c4a418.mjs.map
