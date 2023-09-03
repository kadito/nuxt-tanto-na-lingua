import { useSSRContext, ref, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { TransitionRoot, Dialog, TransitionChild, DialogPanel, DialogTitle, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { PlusSmallIcon, MinusSmallIcon } from '@heroicons/vue/24/outline';

const _sfc_main$3 = {
  __name: "ServiceList",
  __ssrInlineRender: true,
  props: {
    section: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="mt-8">`);
      _push(ssrRenderComponent(unref(DialogTitle), {
        as: "h4",
        class: "text-3xl font-bold leading-6 text-gray-900"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.section.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.section.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-8 mb-2"><p class="text-base text-gray-900">${ssrInterpolate(__props.section.description)}</p></div><ul role="list" class="ml-6"><!--[-->`);
      ssrRenderList(__props.section.items, (item, index) => {
        _push(`<li class="flex flex-wrap items-center justify-between gap-x-6 py-1 sm:flex-nowrap"><p class="text-sm font-semibold leading-6 text-gray-700">${ssrInterpolate(item)}</p></li>`);
      });
      _push(`<!--]--></ul><!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceList.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "ServiceFAQ",
  __ssrInlineRender: true,
  props: {
    section: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><div class="mx-auto max-w-4xl divide-y divide-gray-900/10"><!--[-->`);
      ssrRenderList(__props.section.items, (item, index) => {
        _push(ssrRenderComponent(unref(Disclosure), {
          as: "div",
          key: index,
          class: "my-4"
        }, {
          default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<dt${_scopeId}>`);
              _push2(ssrRenderComponent(unref(DisclosureButton), { class: "flex w-full items-start justify-between text-left text-gray-900" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-base font-semibold leading-7"${_scopeId2}>${ssrInterpolate(item.question)}</span><span class="ml-6 flex h-7 items-center"${_scopeId2}>`);
                    if (!open) {
                      _push3(ssrRenderComponent(unref(PlusSmallIcon), {
                        class: "h-6 w-6",
                        "aria-hidden": "true"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(unref(MinusSmallIcon), {
                        class: "h-6 w-6",
                        "aria-hidden": "true"
                      }, null, _parent3, _scopeId2));
                    }
                    _push3(`</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-base font-semibold leading-7" }, toDisplayString(item.question), 1),
                      createVNode("span", { class: "ml-6 flex h-7 items-center" }, [
                        !open ? (openBlock(), createBlock(unref(PlusSmallIcon), {
                          key: 0,
                          class: "h-6 w-6",
                          "aria-hidden": "true"
                        })) : (openBlock(), createBlock(unref(MinusSmallIcon), {
                          key: 1,
                          class: "h-6 w-6",
                          "aria-hidden": "true"
                        }))
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</dt>`);
              _push2(ssrRenderComponent(unref(DisclosurePanel), {
                as: "dd",
                class: "mt-2 pr-12"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (item.textAnswer) {
                      _push3(`<p class="text-base leading-7 text-gray-600"${_scopeId2}>${ssrInterpolate(item.textAnswer)}</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (item.listAnswer) {
                      _push3(`<ul role="list"${_scopeId2}><!--[-->`);
                      ssrRenderList(item.listAnswer, (listItem, listIndex) => {
                        _push3(`<li class="flex flex-wrap items-center justify-between gap-x-6 py-1 sm:flex-nowrap"${_scopeId2}><p class="text-sm font-semibold leading-6 text-gray-700"${_scopeId2}>${ssrInterpolate(listItem)}</p></li>`);
                      });
                      _push3(`<!--]--></ul>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      item.textAnswer ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-base leading-7 text-gray-600"
                      }, toDisplayString(item.textAnswer), 1)) : createCommentVNode("", true),
                      item.listAnswer ? (openBlock(), createBlock("ul", {
                        key: 1,
                        role: "list"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(item.listAnswer, (listItem, listIndex) => {
                          return openBlock(), createBlock("li", {
                            key: listIndex,
                            class: "flex flex-wrap items-center justify-between gap-x-6 py-1 sm:flex-nowrap"
                          }, [
                            createVNode("p", { class: "text-sm font-semibold leading-6 text-gray-700" }, toDisplayString(listItem), 1)
                          ]);
                        }), 128))
                      ])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("dt", null, [
                  createVNode(unref(DisclosureButton), { class: "flex w-full items-start justify-between text-left text-gray-900" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-base font-semibold leading-7" }, toDisplayString(item.question), 1),
                      createVNode("span", { class: "ml-6 flex h-7 items-center" }, [
                        !open ? (openBlock(), createBlock(unref(PlusSmallIcon), {
                          key: 0,
                          class: "h-6 w-6",
                          "aria-hidden": "true"
                        })) : (openBlock(), createBlock(unref(MinusSmallIcon), {
                          key: 1,
                          class: "h-6 w-6",
                          "aria-hidden": "true"
                        }))
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                createVNode(unref(DisclosurePanel), {
                  as: "dd",
                  class: "mt-2 pr-12"
                }, {
                  default: withCtx(() => [
                    item.textAnswer ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-base leading-7 text-gray-600"
                    }, toDisplayString(item.textAnswer), 1)) : createCommentVNode("", true),
                    item.listAnswer ? (openBlock(), createBlock("ul", {
                      key: 1,
                      role: "list"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(item.listAnswer, (listItem, listIndex) => {
                        return openBlock(), createBlock("li", {
                          key: listIndex,
                          class: "flex flex-wrap items-center justify-between gap-x-6 py-1 sm:flex-nowrap"
                        }, [
                          createVNode("p", { class: "text-sm font-semibold leading-6 text-gray-700" }, toDisplayString(listItem), 1)
                        ]);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceFAQ.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "ServiceModal",
  __ssrInlineRender: true,
  props: {
    modelValue: Boolean,
    service: Object
  },
  emits: ["update:modelValue"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ServiceList = __nuxt_component_0$1;
      const _component_ServiceFAQ = __nuxt_component_1;
      if (__props.service) {
        _push(ssrRenderComponent(unref(TransitionRoot), mergeProps({
          as: "template",
          show: __props.modelValue
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Dialog), {
                as: "div",
                class: "relative z-10",
                onClose: ($event) => _ctx.$emit("update:modelValue", false)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TransitionChild), {
                      as: "template",
                      enter: "ease-out duration-300",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "ease-in duration-200",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"${_scopeId3}></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="fixed inset-0 z-10 overflow-y-auto"${_scopeId2}><div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(TransitionChild), {
                      as: "template",
                      enter: "ease-out duration-300",
                      "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                      "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                      leave: "ease-in duration-200",
                      "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                      "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(DialogPanel), { class: "relative transform overflow-hidden rounded-lg bg-white px-12 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full mx-16" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div${_scopeId4}><div class="my-3 text-left sm:my-5"${_scopeId4}>`);
                                _push5(ssrRenderComponent(unref(DialogTitle), {
                                  as: "h3",
                                  class: "text-4xl font-bold text-gray-900"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(__props.service.modalTitle)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(__props.service.modalTitle), 1)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<div class="mt-8 mb-4"${_scopeId4}><p class="text-base text-gray-900"${_scopeId4}>${ssrInterpolate(__props.service.description)}</p></div><!--[-->`);
                                ssrRenderList(__props.service.sections, (section) => {
                                  _push5(`<div${_scopeId4}>`);
                                  if (section.type === "List") {
                                    _push5(ssrRenderComponent(_component_ServiceList, { section }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  if (section.type === "FAQ") {
                                    _push5(ssrRenderComponent(_component_ServiceFAQ, { section }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`</div>`);
                                });
                                _push5(`<!--]--></div></div>`);
                              } else {
                                return [
                                  createVNode("div", null, [
                                    createVNode("div", { class: "my-3 text-left sm:my-5" }, [
                                      createVNode(unref(DialogTitle), {
                                        as: "h3",
                                        class: "text-4xl font-bold text-gray-900"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(__props.service.modalTitle), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "mt-8 mb-4" }, [
                                        createVNode("p", { class: "text-base text-gray-900" }, toDisplayString(__props.service.description), 1)
                                      ]),
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.service.sections, (section) => {
                                        return openBlock(), createBlock("div", null, [
                                          section.type === "List" ? (openBlock(), createBlock(_component_ServiceList, {
                                            key: 0,
                                            section
                                          }, null, 8, ["section"])) : createCommentVNode("", true),
                                          section.type === "FAQ" ? (openBlock(), createBlock(_component_ServiceFAQ, {
                                            key: 1,
                                            section
                                          }, null, 8, ["section"])) : createCommentVNode("", true)
                                        ]);
                                      }), 256))
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(DialogPanel), { class: "relative transform overflow-hidden rounded-lg bg-white px-12 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full mx-16" }, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("div", { class: "my-3 text-left sm:my-5" }, [
                                    createVNode(unref(DialogTitle), {
                                      as: "h3",
                                      class: "text-4xl font-bold text-gray-900"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(__props.service.modalTitle), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "mt-8 mb-4" }, [
                                      createVNode("p", { class: "text-base text-gray-900" }, toDisplayString(__props.service.description), 1)
                                    ]),
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.service.sections, (section) => {
                                      return openBlock(), createBlock("div", null, [
                                        section.type === "List" ? (openBlock(), createBlock(_component_ServiceList, {
                                          key: 0,
                                          section
                                        }, null, 8, ["section"])) : createCommentVNode("", true),
                                        section.type === "FAQ" ? (openBlock(), createBlock(_component_ServiceFAQ, {
                                          key: 1,
                                          section
                                        }, null, 8, ["section"])) : createCommentVNode("", true)
                                      ]);
                                    }), 256))
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode(unref(TransitionChild), {
                        as: "template",
                        enter: "ease-out duration-300",
                        "enter-from": "opacity-0",
                        "enter-to": "opacity-100",
                        leave: "ease-in duration-200",
                        "leave-from": "opacity-100",
                        "leave-to": "opacity-0"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "fixed inset-0 z-10 overflow-y-auto" }, [
                        createVNode("div", { class: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" }, [
                          createVNode(unref(TransitionChild), {
                            as: "template",
                            enter: "ease-out duration-300",
                            "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                            "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                            leave: "ease-in duration-200",
                            "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                            "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(DialogPanel), { class: "relative transform overflow-hidden rounded-lg bg-white px-12 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full mx-16" }, {
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode("div", { class: "my-3 text-left sm:my-5" }, [
                                      createVNode(unref(DialogTitle), {
                                        as: "h3",
                                        class: "text-4xl font-bold text-gray-900"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(__props.service.modalTitle), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "mt-8 mb-4" }, [
                                        createVNode("p", { class: "text-base text-gray-900" }, toDisplayString(__props.service.description), 1)
                                      ]),
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.service.sections, (section) => {
                                        return openBlock(), createBlock("div", null, [
                                          section.type === "List" ? (openBlock(), createBlock(_component_ServiceList, {
                                            key: 0,
                                            section
                                          }, null, 8, ["section"])) : createCommentVNode("", true),
                                          section.type === "FAQ" ? (openBlock(), createBlock(_component_ServiceFAQ, {
                                            key: 1,
                                            section
                                          }, null, 8, ["section"])) : createCommentVNode("", true)
                                        ]);
                                      }), 256))
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Dialog), {
                  as: "div",
                  class: "relative z-10",
                  onClose: ($event) => _ctx.$emit("update:modelValue", false)
                }, {
                  default: withCtx(() => [
                    createVNode(unref(TransitionChild), {
                      as: "template",
                      enter: "ease-out duration-300",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "ease-in duration-200",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "fixed inset-0 z-10 overflow-y-auto" }, [
                      createVNode("div", { class: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" }, [
                        createVNode(unref(TransitionChild), {
                          as: "template",
                          enter: "ease-out duration-300",
                          "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                          "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                          leave: "ease-in duration-200",
                          "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                          "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(DialogPanel), { class: "relative transform overflow-hidden rounded-lg bg-white px-12 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full mx-16" }, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("div", { class: "my-3 text-left sm:my-5" }, [
                                    createVNode(unref(DialogTitle), {
                                      as: "h3",
                                      class: "text-4xl font-bold text-gray-900"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(__props.service.modalTitle), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "mt-8 mb-4" }, [
                                      createVNode("p", { class: "text-base text-gray-900" }, toDisplayString(__props.service.description), 1)
                                    ]),
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.service.sections, (section) => {
                                      return openBlock(), createBlock("div", null, [
                                        section.type === "List" ? (openBlock(), createBlock(_component_ServiceList, {
                                          key: 0,
                                          section
                                        }, null, 8, ["section"])) : createCommentVNode("", true),
                                        section.type === "FAQ" ? (openBlock(), createBlock(_component_ServiceFAQ, {
                                          key: 1,
                                          section
                                        }, null, 8, ["section"])) : createCommentVNode("", true)
                                      ]);
                                    }), 256))
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["onClose"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {
  __name: "ServicesSection",
  __ssrInlineRender: true,
  props: {
    title: String,
    services: Array
  },
  setup(__props) {
    const open = ref(false);
    const serviceSelected = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ServiceModal = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-900 py-24 sm:py-32" }, _attrs))}><div class="mx-auto max-w-7xl px-6 text-center lg:px-8"><div class="mx-auto max-w-2xl"><h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">${ssrInterpolate(__props.title)}</h2><p class="mt-4 text-lg leading-8 text-gray-400">We\u2019re a dynamic group of individuals who are passionate about what we do.</p></div><ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"><!--[-->`);
      ssrRenderList(__props.services, (service) => {
        _push(`<li class="rounded-2xl bg-gray-800 px-8 py-10 cursor-pointer"><img class="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"${ssrRenderAttr("src", service.imageUrl)} alt=""><h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-white">${ssrInterpolate(service.title)}</h3></li>`);
      });
      _push(`<!--]--></ul></div>`);
      _push(ssrRenderComponent(_component_ServiceModal, {
        modelValue: open.value,
        "onUpdate:modelValue": ($event) => open.value = $event,
        service: serviceSelected.value
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServicesSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main;
const team = [
  {
    firstname: "Maria",
    lastname: "Bernardes",
    birth_date: "20/04/1993",
    mainService: "Psicomotricista",
    imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "A Psicomotricista Maria \xE9 licenciada em Reabilita\xE7\xE3o Psicomotora pela Universidade de \xC9vora em 2014. Tem duas p\xF3s-gradua\xE7\xF5es em Cuidados Paliativos e em Neurodesenvolvimento da Crian\xE7a e do Adolescente.  Durante o seu percurso profissional fez ainda forma\xE7\xE3o em Cuidados de Socorro Pedi\xE1tricos e Suporte B\xE1sico de Vida, metodologia PECS e no Programa \u201COs Anos Incr\xEDveis\u201D. Atualmente, est\xE1 integrada no 2\xAA ano de licenciatura em Terapia da Fala pelo Instituto Polit\xE9cnico de Set\xFAbal.",
    hobbies: "Como hobbies gosta de cinema, ler, viajar, ir \xE0 praia e caminhar com boa companhia. Conta-nos ainda que n\xE3o gosta de sopa, mas que come uma pequena quantidade todas as semanas.",
    services: [
      1,
      2,
      3
    ],
    skills: [
      {
        title: "Interven\xE7\xE3o com crian\xE7as com perturba\xE7\xF5es do desenvolvimento e do comportamento"
      },
      {
        title: "T\xE9cnica-sombra"
      },
      {
        title: "Interven\xE7\xE3o em grupo"
      },
      {
        title: "Forma\xE7\xE3o na metodologia PECS"
      },
      {
        title: "Interven\xE7\xE3o com popula\xE7\xE3o idosa"
      }
    ]
  },
  {
    firstname: "Mar\xEDlia",
    lastname: "Nicolau",
    birth_date: "20/04/1993",
    mainService: "Psicomotricista",
    imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "A Psicomotricista Filipa \xE9 licenciada em Reabilita\xE7\xE3o Psicomotora pela Faculdade de Motricidade Humana da Universidade de Lisboa desde 2016, tendo realizado mestrado em Reabilita\xE7\xE3o Psicomotora na mesma institui\xE7\xE3o em 2019. Tem forma\xE7\xE3o no Curr\xEDculo Europeu para a Resili\xEAncia (RESCUR) na Promo\xE7\xE3o da Resili\xEAncia em Contexto Escolar.",
    hobbies: "Como hobbies gosta de cinema, ler, viajar, ir \xE0 praia e caminhar com boa companhia. Conta-nos ainda que n\xE3o gosta de sopa, mas que come uma pequena quantidade todas as semanas.",
    services: [
      1,
      2,
      3
    ],
    skills: [
      {
        title: "Interven\xE7\xE3o com crian\xE7as com perturba\xE7\xF5es do desenvolvimento e do comportamento"
      },
      {
        title: "T\xE9cnica-sombra"
      },
      {
        title: "Interven\xE7\xE3o em grupo"
      }
    ]
  },
  {
    firstname: "Filipa",
    lastname: "Vieira",
    birth_date: "20/04/1993",
    mainService: "Psicomotricista",
    imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "A Psicomotricista Mar\xEDlia tem uma licenciatura e mestrado em Reabilita\xE7\xE3o Psicomotora pela Faculdade de Motricidade Humana, Faculdade de Lisboa desde 2022. Tem ainda forma\xE7\xE3o n\xEDvel 1 em Babys Signs.",
    hobbies: "Como hobbies gosta de ler e de praia e n\xE3o gosta de frio. Conta-nos ainda uma curiosidade, teve um dente de leite at\xE9 aos 21 anos de idade.",
    services: [
      1,
      2,
      3
    ],
    skills: [
      {
        title: "Interven\xE7\xE3o com crian\xE7as com perturba\xE7\xF5es do desenvolvimento e do comportamento"
      },
      {
        title: "Interven\xE7\xE3o em grupo"
      }
    ]
  },
  {
    firstname: "Joana",
    lastname: "Nogueira",
    birth_date: "20/04/1993",
    mainService: "Psicomotricista",
    imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "A Psicomotricista Joana \xE9 licenciada em Reabilita\xE7\xE3o Psicomotora pela Faculdade de Motricidade Humana e Mestre em Educa\xE7\xE3o Especial \u2013 Especializa\xE7\xE3o em Problemas de Aprendizagem e Comportamento pela Escola Superior de Educa\xE7\xE3o de Lisboa. Tem p\xF3s-gradua\xE7\xE3o em Neuropsicologia de Interven\xE7\xE3o pelo Instituto CRIAP. \xC9 formadora profissional pelo INEPI e investiu em outras forma\xE7\xF5es complementares, tais como, m\xE9todo SON-RISE, Pivotal Response Treatment, ABA funcional, PECS, Baby Signs, Pr\xE1ticas parentais positivas, M\xE9todo Fonom\xEDmico de Paula Teles, bem como Suporte B\xE1sico de Vida e Primeiros Socorros Pedi\xE1tricos.",
    hobbies: "Revela-nos que adora andar descal\xE7a e que valoriza muito as pequenas grandes conquistas de cada um. N\xE3o gosta de pessoas que s\xF3 pensam em si e n\xE3o se sabem colocar no lugar do outro.",
    services: [
      1,
      2,
      3
    ],
    skills: [
      {
        title: "Interven\xE7\xE3o com crian\xE7as com perturba\xE7\xF5es do desenvolvimento e do comportamento"
      },
      {
        title: "T\xE9cnica-sombra"
      },
      {
        title: "Forma\xE7\xE3o na metodologia PECS"
      },
      {
        title: "Interven\xE7\xE3o em grupo"
      },
      {
        title: "Interven\xE7\xE3o com popula\xE7\xE3o idosa"
      }
    ]
  },
  {
    firstname: "Rita",
    lastname: "Silva",
    birth_date: "20/04/1993",
    mainService: "Psicomotricista",
    imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "A Psicomotricista Rita \xE9 licenciada em Reabilita\xE7\xE3o Psicomotora pela Faculdade de Motricidade Humana - Universidade de Lisboa desde 2016 e tem forma\xE7\xE3o em Equita\xE7\xE3o Terap\xEAutica, metodologia PECS (Sistema de Comunica\xE7\xE3o por Troca de Imagens) e Babysigns.",
    hobbies: "Conta-nos que gosta de sorrisos f\xE1ceis e gargalhadas de cora\xE7\xE3o. Confidencia que gosta de praticar desporto, tendo frequentado tr\xEAs desportos diferentes durante o mesmo ano. Gosta tamb\xE9m de trabalhos manuais e de viajar. N\xE3o gosta de falta de humildade.",
    services: [
      1,
      2,
      3
    ],
    skills: [
      {
        title: "Interven\xE7\xE3o com crian\xE7as com perturba\xE7\xF5es do desenvolvimento e do comportamento"
      },
      {
        title: "T\xE9cnica-sombra"
      },
      {
        title: "Forma\xE7\xE3o na metodologia PECS"
      },
      {
        title: "Interven\xE7\xE3o com a popula\xE7\xE3o adulta"
      },
      {
        title: "Interven\xE7\xE3o com a popula\xE7\xE3o idosa"
      }
    ]
  },
  {
    firstname: "Catarina",
    lastname: "Rodrigues",
    birth_date: "20/04/1993",
    mainService: "Terapeuta da Fala",
    imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "A Terapeuta da Fala Catarina licenciou-se em Terapia da Fala em 2012 pela Escola de Sa\xFAde Atl\xE2ntica. Especializou-se em Motricidade Oro facial e apresenta v\xE1rias forma\xE7\xF5es nas \xE1reas da Fala, Comunica\xE7\xE3o e Linguagem Oral e Escrita.",
    hobbies: "Gosta de ler, idealmente perto do mar ou lago, acompanhada de ch\xE1 e/ou caf\xE9. N\xE3o gosta de tomar o pequeno-almo\xE7o sozinha e com tempo contado.",
    services: [
      1,
      2,
      3
    ],
    skills: [
      {
        title: "Interven\xE7\xE3o com crian\xE7as com perturba\xE7\xF5es do desenvolvimento e do comportamento"
      },
      {
        title: "Interven\xE7\xE3o com crian\xE7as dos 3 anos aos 13 anos"
      },
      {
        title: "Interven\xE7\xE3o com adultos com altera\xE7\xF5es da Motricidade Oro facial"
      },
      {
        title: "Participa\xE7\xE3o em grupos de estimula\xE7\xE3o de compet\xEAncias de Linguagem com crian\xE7as em idade pr\xE9-escolar"
      }
    ]
  },
  {
    firstname: "Catarina",
    lastname: "Sousa",
    birth_date: "20/04/1993",
    mainService: "Terapeuta da Fala",
    imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "A Terapeuta da Fala Catarina \xE9 licenciada em Terapia da Fala desde 2011 pela Escola de Sa\xFAde Atl\xE2ntica, tendo tamb\xE9m forma\xE7\xE3o em Sigmatismos (laterais e anteriores) e M\xE9todo Habiles.",
    hobbies: "Gosta de praia, de estar com a fam\xEDlia e n\xE3o resiste a gomas. N\xE3o gosta de favas, milho, cogumelos e mentiras.",
    services: [
      1,
      2,
      3
    ],
    skills: [
      {
        title: "Interven\xE7\xE3o com crian\xE7as com perturba\xE7\xF5es do desenvolvimento e do comportamento"
      },
      {
        title: "Interven\xE7\xE3o com crian\xE7as dos 3 anos aos 13 anos."
      }
    ]
  },
  {
    firstname: "Margarida",
    lastname: "Ribeiro",
    birth_date: "20/04/1993",
    mainService: "Terapeuta da Fala",
    imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "A Terapeuta da Fala Margarida \xE9 licenciada em Terapia da Fala desde 2020 pela Escola Superior de Sa\xFAde do Instituto Polit\xE9cnico de Set\xFAbal, tendo tamb\xE9m forma\xE7\xE3o em perturba\xE7\xF5es fonol\xF3gicas, altera\xE7\xF5es de fala de origem miofuncional e dificuldades na leitura e escrita.",
    hobbies: "Revela-nos que gosta de gatos. N\xE3o gosta de pudim.",
    services: [
      1,
      2,
      3
    ],
    skills: [
      {
        title: "Preven\xE7\xE3o, avalia\xE7\xE3o e interven\xE7\xE3o em perturba\xE7\xF5es da comunica\xE7\xE3o"
      },
      {
        title: "Experi\xEAncia profissional nas \xE1reas da linguagem (oral e escrita), fala e motricidade orofacial"
      },
      {
        title: "Interven\xE7\xE3o em idade pr\xE9-escolar e escolar"
      }
    ]
  },
  {
    firstname: "Joana",
    lastname: "Assun\xE7\xE3o",
    birth_date: "20/04/1993",
    mainService: "Terapeuta da Fala",
    imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "A Terapeuta da Fala Joana licenciou-se em Terapia da Fala em 2009 pela Escola Superior de Sa\xFAde do Instituto Polit\xE9cnico de Set\xFAbal. Concluiu o 1\xBA ano de mestrado em (Re)Habilita\xE7\xE3o Vocal na mesma institui\xE7\xE3o e p\xF3s-graduou-se em Neurodesenvolvimento em Pediatria no Instituto de Ci\xEAncias da Sa\xFAde da Universidade Cat\xF3lica em 2012. Tem um especial gosto por trabalhar com a popula\xE7\xE3o infantil, tanto ao n\xEDvel das perturba\xE7\xF5es da comunica\xE7\xE3o, como da linguagem oral e escrita.",
    hobbies: "A Joana tem duas filhas com quem passa a maior parte do seu tempo livre. Tamb\xE9m gosta de dan\xE7ar tango argentino nos seus tempos livres.",
    services: [
      1,
      2,
      3
    ],
    skills: [
      {
        title: "Interven\xE7\xE3o em perturba\xE7\xF5es da comunica\xE7\xE3o, linguagem (oral e escrita) e fala"
      },
      {
        title: "Interven\xE7\xE3o com a popula\xE7\xE3o infantil"
      }
    ]
  },
  {
    firstname: "Ana Cristina Caetano",
    lastname: "Leoc\xE1dio",
    birth_date: "20/04/1993",
    mainService: "Terapeuta da Fala",
    imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "Em 2004, a Terapeuta da Fala Ana concluiu o curso na Escola Superior de Sa\xFAde Egas Moniz. Em 2005 iniciou fun\xE7\xF5es numa Equipa Local de Interven\xE7\xE3o Precoce no Alentejo, onde esteve durante 18 anos. Ao longo destes anos fez v\xE1rias forma\xE7\xF5es, nomeadamente no desenvolvimento infantil e perturba\xE7\xF5es do neurodesenvolvimento.",
    hobbies: "A nossa Terapeuta Ana conta-nos que gosta muito de trabalhos manuais, principalmente do processo criativo e de uma boa conversa, bem como de partilhar o que mais sabe. Revela-nos que n\xE3o gosta de estar \u201Csem fazer nada\u201D e n\xE3o gosta de areia.",
    services: [
      1,
      2,
      3
    ],
    skills: [
      {
        title: "Interven\xE7\xE3o com crian\xE7as com perturba\xE7\xF5es do desenvolvimento e neurodesenvolvimento"
      },
      {
        title: "Interven\xE7\xE3o com crian\xE7as dos 0 aos 6 anos"
      },
      {
        title: "Capacita\xE7\xE3o parental/familiar"
      }
    ]
  }
];
const services = [
  {
    id: 1,
    title: "TERAPIA DA FALA",
    modalTitle: "O que \xE9 a Terapia da Fala?",
    imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "A interven\xE7\xE3o em Terapia da Fala tem como objetivo a preven\xE7\xE3o, avalia\xE7\xE3o, interven\xE7\xE3o e estudo cient\xEDfico das perturba\xE7\xF5es da comunica\xE7\xE3o humana, englobando n\xE3o s\xF3 todas as fun\xE7\xF5es associadas \xE0 compreens\xE3o e express\xE3o da linguagem oral e escrita, mas tamb\xE9m outras formas de comunica\xE7\xE3o n\xE3o verbal. O Terapeuta da Fala interv\xE9m, ainda, ao n\xEDvel da degluti\xE7\xE3o (passagem segura de alimentos e bebidas atrav\xE9s da orofaringe de forma a garantir uma nutri\xE7\xE3o adequada). O Terapeuta da Fala avalia e interv\xE9m em indiv\xEDduos de todas as idades, desde rec\xE9m-nascidos a idosos, tendo por objetivo geral otimizar as capacidades de comunica\xE7\xE3o e/ou degluti\xE7\xE3o do indiv\xEDduo, melhorando, assim, a sua qualidade de vida (ASHA, 2007).",
    sections: [
      {
        type: "List",
        title: "\xC1reas de interven\xE7\xE3o",
        description: "Na nossa equipa os Terapeutas da Fala interv\xEAm com pessoas crian\xE7as, jovens, adultos e idosos que resultam de condi\xE7\xF5es como:",
        items: [
          "Dificuldades na aprendizagem (leitura, escrita e aritm\xE9tica);",
          "D\xE9fices nas fun\xE7\xF5es executivas (capacidade de planeamento, capacidade de s\xEDntese e an\xE1lise);",
          "Problemas de autorregula\xE7\xE3o do comportamento (impulsividade, agita\xE7\xE3o, desinibi\xE7\xE3o, agressividade, oposi\xE7\xE3o);",
          "Problemas psicomotores (dificuldades na regula\xE7\xE3o t\xF3nica, no equil\xEDbrio, na estrutura\xE7\xE3o esp\xE1cio-temporal, na no\xE7\xE3o do corpo, na lateralidade, na motricidade global, na motricidade fina e grafomotricidade;",
          "Dem\xEAncias e outras doen\xE7as associadas ao envelhecimento. ",
          "Perturba\xE7\xE3o da coordena\xE7\xE3o motora e outras limita\xE7\xF5es do movimento;",
          "Perturba\xE7\xE3o do Espetro do Autismo;",
          "Perturba\xE7\xE3o da Hiperatividade e D\xE9fice de Aten\xE7\xE3o;",
          "Perturba\xE7\xE3o Global do Desenvolvimento;",
          "Dificuldade Intelectual e Desenvolvimental."
        ]
      }
    ]
  },
  {
    id: 2,
    title: "PSICOMOTRICIDADE",
    modalTitle: "O que \xE9 a psicomotricidade?",
    imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "A interven\xE7\xE3o em Psicomotricidade tem uma vis\xE3o global do ser humano e vem proporcionar \xE0 crian\xE7a, jovem adulto ou idoso o m\xE1ximo de experi\xEAncias corporais e verbais, utilizando v\xE1rios materiais, modelos de interven\xE7\xE3o e t\xE9cnicas espec\xEDficas para cada caso, atuando em diferentes contextos (casa, escola, etc). A Psicomotricidade \xE9 uma terapia de medi\xE7\xE3o corporal interligado sempre a parte socio-emocional e cognitiva do indiv\xEDduo. Os t\xE9cnicos podem exercer a sua atividade profissional no \xE2mbito terap\xEAutico, reabilitativo, reeducativo e/ou preventivo sendo que podem faz\xEA-lo em sess\xF5es de um para um e/ou sess\xF5es de grupo. S\xE3o ainda os t\xE9cnicos-sombra especializados, que atuam principalmente no contexto escolar, bem como participam em sess\xF5es conjuntas com Terapia da Fala na aplica\xE7\xE3o de metodologias de comunica\xE7\xE3o aumentativa.",
    sections: [
      {
        type: "List",
        title: "\xC1reas de interven\xE7\xE3o",
        description: "Na nossa equipa as Psicomotricistas interv\xEAm com pessoas crian\xE7as, jovens, adultos e idosos que resultam de condi\xE7\xF5es como:",
        items: [
          "Dificuldades na aprendizagem (leitura, escrita e aritm\xE9tica);",
          "D\xE9fices nas fun\xE7\xF5es executivas (capacidade de planeamento, capacidade de s\xEDntese e an\xE1lise);",
          "Problemas de autorregula\xE7\xE3o do comportamento (impulsividade, agita\xE7\xE3o, desinibi\xE7\xE3o, agressividade, oposi\xE7\xE3o);",
          "Problemas psicomotores (dificuldades na regula\xE7\xE3o t\xF3nica, no equil\xEDbrio, na estrutura\xE7\xE3o esp\xE1cio-temporal, na no\xE7\xE3o do corpo, na lateralidade, na motricidade global, na motricidade fina e grafomotricidade;",
          "Dem\xEAncias e outras doen\xE7as associadas ao envelhecimento. ",
          "Perturba\xE7\xE3o da coordena\xE7\xE3o motora e outras limita\xE7\xF5es do movimento;",
          "Perturba\xE7\xE3o do Espetro do Autismo;",
          "Perturba\xE7\xE3o da Hiperatividade e D\xE9fice de Aten\xE7\xE3o;",
          "Perturba\xE7\xE3o Global do Desenvolvimento;",
          "Dificuldade Intelectual e Desenvolvimental."
        ]
      }
    ]
  },
  {
    id: 3,
    title: "CLASSES DE ESTIMULAC\xC3O GLOBAL",
    modalTitle: "O que s\xE3o as classes de estimula\xE7\xE3o global?",
    imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "As classes de estimula\xE7\xE3o s\xE3o um programa direcionado para escolas no qual se interv\xE9m na preven\xE7\xE3o nas \xE1reas de psicologia, psicomotricidade e terapia da fala. Em grupos homog\xE9neos, no m\xE1ximo at\xE9 10 crian\xE7as, estas estar\xE3o todas as semanas durante 45 minutos, de forma rotativa com uma psic\xF3loga, uma terapeuta da fala e uma psicomotricista. Desta forma de 3 em 3 semanas repetem a terapeuta. Como objetivo principal, este programa permite estimular o desenvolvimento individual das crian\xE7as com um foco terap\xEAutico e atento para alguma dificuldade.",
    sections: []
  },
  {
    id: 4,
    title: "TERAPEUTA SOMBRA",
    modalTitle: "O que \xE9 o Terapeuta Sombra?",
    imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "O Terapeuta Sombra \xE9 um programa no qual existe um(a) terapeuta que acompanha uma crian\xE7a no contexto de sala regular (pr\xE9-escolar, 1\xBA ciclo ou 2\xBA ciclo), com o objetivo de capacitar a crian\xE7a e os adultos presentes naquele contexto para o aumento da autonomia no ambiente escolar.",
    sections: [
      {
        type: "FAQ",
        items: [
          {
            question: "Quais os objetivos deste programa?",
            listAnswer: [
              "Capacitar a crian\xE7a para seguir as atividades propostas pelo(a) educador(a) ou professor, e conte\xFAdos program\xE1ticos de forma aut\xF3noma;",
              "Ajudar o educador(a) ou professor(a) a adaptar os conte\xFAdos, tanto \xE0 posteriori da mat\xE9ria lecionada, como no momento, partilhando estrat\xE9gias e metodologias;",
              "O terapeuta deve adaptar e criar estrat\xE9gias para as diversas situa\xE7\xF5es identificadas pela equipa, passando-as ao educador(a) ou professor(a) que as dever\xE1 implementar;",
              "A \xFAltima finalidade deste programa \xE9 que a escola e a crian\xE7a fiquem dotadas de compet\xEAncias que permitam o terapeuta se afastar, sendo apenas necess\xE1rio vigil\xE2ncia supervisionada, ou seja, apoio indireto \xE0 comunidade escolar."
            ]
          },
          {
            question: "Quais as diretrizes deste programa?",
            listAnswer: [
              "Trabalho multidisciplinar da terapeuta com a comunidade escolar, principalmente educador(a), professor(a) titular e auxiliares de sala/ escola;",
              "O educador(a) ou professor(a) devem ter preparadas atividades estruturadas para os momentos em que a terapeuta se encontra na sala. Estas atividades podem ser planeadas em conjunto com a terapeuta para que exista uma maior adapta\xE7\xE3o dos conte\xFAdos e tarefas;",
              "Se necess\xE1rio, a terapeuta poder\xE1 atuar em contexto de brincadeira livre ou intervalo caso seja pertinente trabalhar esta \xE1rea ou a socializa\xE7\xE3o com os pares. Por\xE9m, esta deve ser uma situa\xE7\xE3o pontual pois todas as crian\xE7as necessitam do seu tempo e espa\xE7o para se regular e abstrair das aprendizagens mais estruturadas;",
              "Os objetivos devem ser delineados em equipa multidisciplinar com a terapeuta e educador(a) ou professor(a) e todas as partes se devem comprometer em trabalh\xE1-los sendo o objetivo final a autonomia da crian\xE7a, ou seja, sem apoio do adulto;",
              "Inicialmente o terapeuta ser\xE1 a \u201Csombra\u201D da crian\xE7a e por essa raz\xE3o os objetivos dever\xE3o ser primeiramente adquiridos com a mesma. Posteriormente a crian\xE7a dever\xE1 conseguir seguir os objetivos sob orienta\xE7\xE3o do adulto de refer\xEAncia da escola, estando o terapeuta afastado apenas intervindo se necess\xE1rio. Por \xFAltimo pretende-se que a crian\xE7a apenas siga as instru\xE7\xF5es verbais dadas pelo adulto(s) de refer\xEAncia da escola;",
              "Para iniciar este programa \xE9 necess\xE1rio existir uma observa\xE7\xE3o indireta da crian\xE7a no contexto escolar, ou seja, sem que o terapeuta intervenha. Caso a terapeuta considere necess\xE1rio, pode sugerir rastreio em psicomotricidade, com o objetivo de complementar o programa Terapeuta Sombra com interven\xE7\xE3o individual para consolida\xE7\xE3o de algumas \xE1reas do desenvolvimento que n\xE3o s\xE3o poss\xEDveis de realizar em sala de aula regular;",
              "A interven\xE7\xE3o como terapeuta sombra em pr\xE9-escolar \xE9 aconselhada a partir dos 4 anos de idade devido \xE0s caracter\xEDsticas desenvolvimentais da idade da crian\xE7a e dos pares que a rodeiam;",
              "O n\xFAmero de horas em que o terapeuta deve estar neste tipo de interven\xE7\xE3o deve ser delineado ap\xF3s avalia\xE7\xE3o da crian\xE7a e em conjunto com a comunidade escolar. Como um dos objetivos \xE9 dotar a comunidade escolar de estrat\xE9gias e a crian\xE7a de maior autonomia, pretende-se que com o evoluir da interven\xE7\xE3o, a interven\xE7\xE3o direta do terapeuta seja reduzida, sendo poss\xEDvel tamb\xE9m a redu\xE7\xE3o do hor\xE1rio do terapeuta na sala regular."
            ]
          },
          {
            question: "O que \xE9 necess\xE1rio para iniciar este programa?",
            listAnswer: [
              "Estar numa escola que aceite um terapeuta externo na sala de aula.",
              "Caso seja pr\xE9-escolar \xE9 necess\xE1rio tem 4 anos ou mais.",
              "\xC9 necess\xE1rio realizar-se uma observa\xE7\xE3o indireta em sala de aula e, caso necess\xE1rio, um rastreio em psicomotricidade.",
              "Reuni\xE3o com a equipa multidisciplinar da crian\xE7a \u2013 escola e pais."
            ]
          },
          {
            question: "Qual a diferen\xE7a entre terapeuta sombra e sess\xF5es individuais em psicomotricidade?",
            textAnswer: "O psicomotricista em sess\xE3o individual trabalha de forma direta as \xE1reas do desenvolvimento infantil nas quais a crian\xE7a apresenta maiores fragilidades (imita\xE7\xE3o, no\xE7\xE3o espacial e temporal, no\xE7\xE3o corporal, motricidade fina, perce\xE7\xE3o visual, motricidade global, intera\xE7\xE3o social, intencionalidade comunicativa, jogo funcional e simb\xF3lico, fun\xE7\xF5es executivas e regula\xE7\xE3o de comportamento). O terapeuta sombra auxilia na adapta\xE7\xE3o e conce\xE7\xE3o de estrat\xE9gias para que a crian\xE7a siga as orienta\xE7\xF5es do adulto de refer\xEAncia, tornando-se aut\xF3noma no contexto escolar."
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "TERAPIA OCUPACIONAL",
    modalTitle: "O que \xE9 a Terapia Ocupacional?",
    imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "A Terapia Ocupacional \xE9 uma ci\xEAncia da \xE1rea da sa\xFAde que promove o desempenho ocupacional de pessoas em qualquer faixa et\xE1ria. Habilitando a participa\xE7\xE3o satisfat\xF3ria em ocupa\xE7\xF5es significativas do seu dia-a-dia. Ao conseguir envolver-se em ocupa\xE7\xF5es significativas o ser Humano aumenta a qualidade de vida, bem-estar e autonomia. O Terapeuta Ocupacional \xE9 um profissional de sa\xFAde que ajuda pais/cuidadores/professores a obterem estrat\xE9gias e, caso necess\xE1rio, adapta\xE7\xF5es nos contextos, de modo a facilitar/melhorar o desempenho ocupacional da crian\xE7a, promovendo, assim, a sua autonomia, bem-estar e qualidade de vida.",
    sections: [
      {
        type: "FAQ",
        items: [
          {
            question: "\xC1reas de Interven\xE7\xE3o",
            textAnswer: "A Terapia Ocupacional Pedi\xE1trica, foca-se em crian\xE7as que, por diversos motivos (intelectuais, f\xEDsicos e/ou sensoriais), estejam a ter dificuldades em ser aut\xF3nomas: quer, desde cedo, na dificuldade de integra\xE7\xE3o das v\xE1rias etapas do desenvolvimento, quer mais tarde com dificuldades escolares ao n\xEDvel da motricidade fina, da aten\xE7\xE3o/concentra\xE7\xE3o, entre outros."
          },
          {
            question: "O que \xE9 uma ocupa\xE7\xE3o?",
            textAnswer: "Ao longo da nossa vida, as nossas ocupa\xE7\xF5es significativas v\xE3o alterando, contudo, podemos dividi-las em tr\xEAs grandes \xE1reas: Atividades da Vida Di\xE1ria (AVD \u2013 englobam atividades que t\xEAm como objetivo cuidar de si pr\xF3prio, como lavar os dentes, tomar banho, vestir/despir ou comer sozinho), Atividades de Lazer (por exemplo: brincar ou realizar um hobbie) e Atividades de Trabalho (por exemplo: sucesso acad\xE9mico ou realizar uma atividade de produtividade)."
          },
          {
            question: "O que \xE9 a Integra\xE7\xE3o Sensorial?",
            textAnswer: "A Terapia Ocupacional \xE9 a \xFAnica profiss\xE3o especializada que trabalha com problemas de disfun\xE7\xE3o de Integra\xE7\xE3o Sensorial. A Integra\xE7\xE3o Sensorial \xE9 o processo neurol\xF3gico que interpreta, organiza e traduz a informa\xE7\xE3o sensorial recebida pelo nosso corpo, vinda do meio que est\xE1 \xE0 nossa volta. Quando existe algum problema numa destas fases (interpreta\xE7\xE3o, organiza\xE7\xE3o ou tradu\xE7\xE3o), poder\xE1 existir dificuldades ao n\xEDvel da aten\xE7\xE3o, da aprendizagem, do planeamento de tarefas, alimenta\xE7\xE3o, etc., limitando o desempenho da crian\xE7a numa atividade."
          }
        ]
      }
    ]
  }
];

export { __nuxt_component_3 as _, services as s, team as t };
//# sourceMappingURL=services-6eaa78c6.mjs.map
