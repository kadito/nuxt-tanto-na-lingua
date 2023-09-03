import { unref, withCtx, createTextVNode, toDisplayString, useSSRContext, mergeProps, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, ref } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { DialogTitle, Disclosure, DisclosureButton, DisclosurePanel, TransitionRoot, Dialog, TransitionChild, DialogPanel } from "@headlessui/vue";
import { PlusSmallIcon, MinusSmallIcon } from "@heroicons/vue/24/outline";
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-900 py-24 sm:py-32" }, _attrs))}><div class="mx-auto max-w-7xl px-6 text-center lg:px-8"><div class="mx-auto max-w-2xl"><h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">${ssrInterpolate(__props.title)}</h2><p class="mt-4 text-lg leading-8 text-gray-400">We’re a dynamic group of individuals who are passionate about what we do.</p></div><ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"><!--[-->`);
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
    description: "A Psicomotricista Maria é licenciada em Reabilitação Psicomotora pela Universidade de Évora em 2014. Tem duas pós-graduações em Cuidados Paliativos e em Neurodesenvolvimento da Criança e do Adolescente.  Durante o seu percurso profissional fez ainda formação em Cuidados de Socorro Pediátricos e Suporte Básico de Vida, metodologia PECS e no Programa “Os Anos Incríveis”. Atualmente, está integrada no 2ª ano de licenciatura em Terapia da Fala pelo Instituto Politécnico de Setúbal.",
    hobbies: "Como hobbies gosta de cinema, ler, viajar, ir à praia e caminhar com boa companhia. Conta-nos ainda que não gosta de sopa, mas que come uma pequena quantidade todas as semanas.",
    services: [
      1,
      2,
      3
    ],
    skills: [
      {
        title: "Intervenção com crianças com perturbações do desenvolvimento e do comportamento"
      },
      {
        title: "Técnica-sombra"
      },
      {
        title: "Intervenção em grupo"
      },
      {
        title: "Formação na metodologia PECS"
      },
      {
        title: "Intervenção com população idosa"
      }
    ]
  },
  {
    firstname: "Marília",
    lastname: "Nicolau",
    birth_date: "20/04/1993",
    mainService: "Psicomotricista",
    imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "A Psicomotricista Filipa é licenciada em Reabilitação Psicomotora pela Faculdade de Motricidade Humana da Universidade de Lisboa desde 2016, tendo realizado mestrado em Reabilitação Psicomotora na mesma instituição em 2019. Tem formação no Currículo Europeu para a Resiliência (RESCUR) na Promoção da Resiliência em Contexto Escolar.",
    hobbies: "Como hobbies gosta de cinema, ler, viajar, ir à praia e caminhar com boa companhia. Conta-nos ainda que não gosta de sopa, mas que come uma pequena quantidade todas as semanas.",
    services: [
      1,
      2,
      3
    ],
    skills: [
      {
        title: "Intervenção com crianças com perturbações do desenvolvimento e do comportamento"
      },
      {
        title: "Técnica-sombra"
      },
      {
        title: "Intervenção em grupo"
      }
    ]
  },
  {
    firstname: "Filipa",
    lastname: "Vieira",
    birth_date: "20/04/1993",
    mainService: "Psicomotricista",
    imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "A Psicomotricista Marília tem uma licenciatura e mestrado em Reabilitação Psicomotora pela Faculdade de Motricidade Humana, Faculdade de Lisboa desde 2022. Tem ainda formação nível 1 em Babys Signs.",
    hobbies: "Como hobbies gosta de ler e de praia e não gosta de frio. Conta-nos ainda uma curiosidade, teve um dente de leite até aos 21 anos de idade.",
    services: [
      1,
      2,
      3
    ],
    skills: [
      {
        title: "Intervenção com crianças com perturbações do desenvolvimento e do comportamento"
      },
      {
        title: "Intervenção em grupo"
      }
    ]
  },
  {
    firstname: "Joana",
    lastname: "Nogueira",
    birth_date: "20/04/1993",
    mainService: "Psicomotricista",
    imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "A Psicomotricista Joana é licenciada em Reabilitação Psicomotora pela Faculdade de Motricidade Humana e Mestre em Educação Especial – Especialização em Problemas de Aprendizagem e Comportamento pela Escola Superior de Educação de Lisboa. Tem pós-graduação em Neuropsicologia de Intervenção pelo Instituto CRIAP. É formadora profissional pelo INEPI e investiu em outras formações complementares, tais como, método SON-RISE, Pivotal Response Treatment, ABA funcional, PECS, Baby Signs, Práticas parentais positivas, Método Fonomímico de Paula Teles, bem como Suporte Básico de Vida e Primeiros Socorros Pediátricos.",
    hobbies: "Revela-nos que adora andar descalça e que valoriza muito as pequenas grandes conquistas de cada um. Não gosta de pessoas que só pensam em si e não se sabem colocar no lugar do outro.",
    services: [
      1,
      2,
      3
    ],
    skills: [
      {
        title: "Intervenção com crianças com perturbações do desenvolvimento e do comportamento"
      },
      {
        title: "Técnica-sombra"
      },
      {
        title: "Formação na metodologia PECS"
      },
      {
        title: "Intervenção em grupo"
      },
      {
        title: "Intervenção com população idosa"
      }
    ]
  },
  {
    firstname: "Rita",
    lastname: "Silva",
    birth_date: "20/04/1993",
    mainService: "Psicomotricista",
    imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "A Psicomotricista Rita é licenciada em Reabilitação Psicomotora pela Faculdade de Motricidade Humana - Universidade de Lisboa desde 2016 e tem formação em Equitação Terapêutica, metodologia PECS (Sistema de Comunicação por Troca de Imagens) e Babysigns.",
    hobbies: "Conta-nos que gosta de sorrisos fáceis e gargalhadas de coração. Confidencia que gosta de praticar desporto, tendo frequentado três desportos diferentes durante o mesmo ano. Gosta também de trabalhos manuais e de viajar. Não gosta de falta de humildade.",
    services: [
      1,
      2,
      3
    ],
    skills: [
      {
        title: "Intervenção com crianças com perturbações do desenvolvimento e do comportamento"
      },
      {
        title: "Técnica-sombra"
      },
      {
        title: "Formação na metodologia PECS"
      },
      {
        title: "Intervenção com a população adulta"
      },
      {
        title: "Intervenção com a população idosa"
      }
    ]
  },
  {
    firstname: "Catarina",
    lastname: "Rodrigues",
    birth_date: "20/04/1993",
    mainService: "Terapeuta da Fala",
    imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "A Terapeuta da Fala Catarina licenciou-se em Terapia da Fala em 2012 pela Escola de Saúde Atlântica. Especializou-se em Motricidade Oro facial e apresenta várias formações nas áreas da Fala, Comunicação e Linguagem Oral e Escrita.",
    hobbies: "Gosta de ler, idealmente perto do mar ou lago, acompanhada de chá e/ou café. Não gosta de tomar o pequeno-almoço sozinha e com tempo contado.",
    services: [
      1,
      2,
      3
    ],
    skills: [
      {
        title: "Intervenção com crianças com perturbações do desenvolvimento e do comportamento"
      },
      {
        title: "Intervenção com crianças dos 3 anos aos 13 anos"
      },
      {
        title: "Intervenção com adultos com alterações da Motricidade Oro facial"
      },
      {
        title: "Participação em grupos de estimulação de competências de Linguagem com crianças em idade pré-escolar"
      }
    ]
  },
  {
    firstname: "Catarina",
    lastname: "Sousa",
    birth_date: "20/04/1993",
    mainService: "Terapeuta da Fala",
    imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "A Terapeuta da Fala Catarina é licenciada em Terapia da Fala desde 2011 pela Escola de Saúde Atlântica, tendo também formação em Sigmatismos (laterais e anteriores) e Método Habiles.",
    hobbies: "Gosta de praia, de estar com a família e não resiste a gomas. Não gosta de favas, milho, cogumelos e mentiras.",
    services: [
      1,
      2,
      3
    ],
    skills: [
      {
        title: "Intervenção com crianças com perturbações do desenvolvimento e do comportamento"
      },
      {
        title: "Intervenção com crianças dos 3 anos aos 13 anos."
      }
    ]
  },
  {
    firstname: "Margarida",
    lastname: "Ribeiro",
    birth_date: "20/04/1993",
    mainService: "Terapeuta da Fala",
    imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "A Terapeuta da Fala Margarida é licenciada em Terapia da Fala desde 2020 pela Escola Superior de Saúde do Instituto Politécnico de Setúbal, tendo também formação em perturbações fonológicas, alterações de fala de origem miofuncional e dificuldades na leitura e escrita.",
    hobbies: "Revela-nos que gosta de gatos. Não gosta de pudim.",
    services: [
      1,
      2,
      3
    ],
    skills: [
      {
        title: "Prevenção, avaliação e intervenção em perturbações da comunicação"
      },
      {
        title: "Experiência profissional nas áreas da linguagem (oral e escrita), fala e motricidade orofacial"
      },
      {
        title: "Intervenção em idade pré-escolar e escolar"
      }
    ]
  },
  {
    firstname: "Joana",
    lastname: "Assunção",
    birth_date: "20/04/1993",
    mainService: "Terapeuta da Fala",
    imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "A Terapeuta da Fala Joana licenciou-se em Terapia da Fala em 2009 pela Escola Superior de Saúde do Instituto Politécnico de Setúbal. Concluiu o 1º ano de mestrado em (Re)Habilitação Vocal na mesma instituição e pós-graduou-se em Neurodesenvolvimento em Pediatria no Instituto de Ciências da Saúde da Universidade Católica em 2012. Tem um especial gosto por trabalhar com a população infantil, tanto ao nível das perturbações da comunicação, como da linguagem oral e escrita.",
    hobbies: "A Joana tem duas filhas com quem passa a maior parte do seu tempo livre. Também gosta de dançar tango argentino nos seus tempos livres.",
    services: [
      1,
      2,
      3
    ],
    skills: [
      {
        title: "Intervenção em perturbações da comunicação, linguagem (oral e escrita) e fala"
      },
      {
        title: "Intervenção com a população infantil"
      }
    ]
  },
  {
    firstname: "Ana Cristina Caetano",
    lastname: "Leocádio",
    birth_date: "20/04/1993",
    mainService: "Terapeuta da Fala",
    imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "Em 2004, a Terapeuta da Fala Ana concluiu o curso na Escola Superior de Saúde Egas Moniz. Em 2005 iniciou funções numa Equipa Local de Intervenção Precoce no Alentejo, onde esteve durante 18 anos. Ao longo destes anos fez várias formações, nomeadamente no desenvolvimento infantil e perturbações do neurodesenvolvimento.",
    hobbies: "A nossa Terapeuta Ana conta-nos que gosta muito de trabalhos manuais, principalmente do processo criativo e de uma boa conversa, bem como de partilhar o que mais sabe. Revela-nos que não gosta de estar “sem fazer nada” e não gosta de areia.",
    services: [
      1,
      2,
      3
    ],
    skills: [
      {
        title: "Intervenção com crianças com perturbações do desenvolvimento e neurodesenvolvimento"
      },
      {
        title: "Intervenção com crianças dos 0 aos 6 anos"
      },
      {
        title: "Capacitação parental/familiar"
      }
    ]
  }
];
const services = [
  {
    id: 1,
    title: "TERAPIA DA FALA",
    modalTitle: "O que é a Terapia da Fala?",
    imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "A intervenção em Terapia da Fala tem como objetivo a prevenção, avaliação, intervenção e estudo científico das perturbações da comunicação humana, englobando não só todas as funções associadas à compreensão e expressão da linguagem oral e escrita, mas também outras formas de comunicação não verbal. O Terapeuta da Fala intervém, ainda, ao nível da deglutição (passagem segura de alimentos e bebidas através da orofaringe de forma a garantir uma nutrição adequada). O Terapeuta da Fala avalia e intervém em indivíduos de todas as idades, desde recém-nascidos a idosos, tendo por objetivo geral otimizar as capacidades de comunicação e/ou deglutição do indivíduo, melhorando, assim, a sua qualidade de vida (ASHA, 2007).",
    sections: [
      {
        type: "List",
        title: "Áreas de intervenção",
        description: "Na nossa equipa os Terapeutas da Fala intervêm com pessoas crianças, jovens, adultos e idosos que resultam de condições como:",
        items: [
          "Dificuldades na aprendizagem (leitura, escrita e aritmética);",
          "Défices nas funções executivas (capacidade de planeamento, capacidade de síntese e análise);",
          "Problemas de autorregulação do comportamento (impulsividade, agitação, desinibição, agressividade, oposição);",
          "Problemas psicomotores (dificuldades na regulação tónica, no equilíbrio, na estruturação espácio-temporal, na noção do corpo, na lateralidade, na motricidade global, na motricidade fina e grafomotricidade;",
          "Demências e outras doenças associadas ao envelhecimento. ",
          "Perturbação da coordenação motora e outras limitações do movimento;",
          "Perturbação do Espetro do Autismo;",
          "Perturbação da Hiperatividade e Défice de Atenção;",
          "Perturbação Global do Desenvolvimento;",
          "Dificuldade Intelectual e Desenvolvimental."
        ]
      }
    ]
  },
  {
    id: 2,
    title: "PSICOMOTRICIDADE",
    modalTitle: "O que é a psicomotricidade?",
    imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "A intervenção em Psicomotricidade tem uma visão global do ser humano e vem proporcionar à criança, jovem adulto ou idoso o máximo de experiências corporais e verbais, utilizando vários materiais, modelos de intervenção e técnicas específicas para cada caso, atuando em diferentes contextos (casa, escola, etc). A Psicomotricidade é uma terapia de medição corporal interligado sempre a parte socio-emocional e cognitiva do indivíduo. Os técnicos podem exercer a sua atividade profissional no âmbito terapêutico, reabilitativo, reeducativo e/ou preventivo sendo que podem fazê-lo em sessões de um para um e/ou sessões de grupo. São ainda os técnicos-sombra especializados, que atuam principalmente no contexto escolar, bem como participam em sessões conjuntas com Terapia da Fala na aplicação de metodologias de comunicação aumentativa.",
    sections: [
      {
        type: "List",
        title: "Áreas de intervenção",
        description: "Na nossa equipa as Psicomotricistas intervêm com pessoas crianças, jovens, adultos e idosos que resultam de condições como:",
        items: [
          "Dificuldades na aprendizagem (leitura, escrita e aritmética);",
          "Défices nas funções executivas (capacidade de planeamento, capacidade de síntese e análise);",
          "Problemas de autorregulação do comportamento (impulsividade, agitação, desinibição, agressividade, oposição);",
          "Problemas psicomotores (dificuldades na regulação tónica, no equilíbrio, na estruturação espácio-temporal, na noção do corpo, na lateralidade, na motricidade global, na motricidade fina e grafomotricidade;",
          "Demências e outras doenças associadas ao envelhecimento. ",
          "Perturbação da coordenação motora e outras limitações do movimento;",
          "Perturbação do Espetro do Autismo;",
          "Perturbação da Hiperatividade e Défice de Atenção;",
          "Perturbação Global do Desenvolvimento;",
          "Dificuldade Intelectual e Desenvolvimental."
        ]
      }
    ]
  },
  {
    id: 3,
    title: "CLASSES DE ESTIMULACÃO GLOBAL",
    modalTitle: "O que são as classes de estimulação global?",
    imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "As classes de estimulação são um programa direcionado para escolas no qual se intervém na prevenção nas áreas de psicologia, psicomotricidade e terapia da fala. Em grupos homogéneos, no máximo até 10 crianças, estas estarão todas as semanas durante 45 minutos, de forma rotativa com uma psicóloga, uma terapeuta da fala e uma psicomotricista. Desta forma de 3 em 3 semanas repetem a terapeuta. Como objetivo principal, este programa permite estimular o desenvolvimento individual das crianças com um foco terapêutico e atento para alguma dificuldade.",
    sections: []
  },
  {
    id: 4,
    title: "TERAPEUTA SOMBRA",
    modalTitle: "O que é o Terapeuta Sombra?",
    imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "O Terapeuta Sombra é um programa no qual existe um(a) terapeuta que acompanha uma criança no contexto de sala regular (pré-escolar, 1º ciclo ou 2º ciclo), com o objetivo de capacitar a criança e os adultos presentes naquele contexto para o aumento da autonomia no ambiente escolar.",
    sections: [
      {
        type: "FAQ",
        items: [
          {
            question: "Quais os objetivos deste programa?",
            listAnswer: [
              "Capacitar a criança para seguir as atividades propostas pelo(a) educador(a) ou professor, e conteúdos programáticos de forma autónoma;",
              "Ajudar o educador(a) ou professor(a) a adaptar os conteúdos, tanto à posteriori da matéria lecionada, como no momento, partilhando estratégias e metodologias;",
              "O terapeuta deve adaptar e criar estratégias para as diversas situações identificadas pela equipa, passando-as ao educador(a) ou professor(a) que as deverá implementar;",
              "A última finalidade deste programa é que a escola e a criança fiquem dotadas de competências que permitam o terapeuta se afastar, sendo apenas necessário vigilância supervisionada, ou seja, apoio indireto à comunidade escolar."
            ]
          },
          {
            question: "Quais as diretrizes deste programa?",
            listAnswer: [
              "Trabalho multidisciplinar da terapeuta com a comunidade escolar, principalmente educador(a), professor(a) titular e auxiliares de sala/ escola;",
              "O educador(a) ou professor(a) devem ter preparadas atividades estruturadas para os momentos em que a terapeuta se encontra na sala. Estas atividades podem ser planeadas em conjunto com a terapeuta para que exista uma maior adaptação dos conteúdos e tarefas;",
              "Se necessário, a terapeuta poderá atuar em contexto de brincadeira livre ou intervalo caso seja pertinente trabalhar esta área ou a socialização com os pares. Porém, esta deve ser uma situação pontual pois todas as crianças necessitam do seu tempo e espaço para se regular e abstrair das aprendizagens mais estruturadas;",
              "Os objetivos devem ser delineados em equipa multidisciplinar com a terapeuta e educador(a) ou professor(a) e todas as partes se devem comprometer em trabalhá-los sendo o objetivo final a autonomia da criança, ou seja, sem apoio do adulto;",
              "Inicialmente o terapeuta será a “sombra” da criança e por essa razão os objetivos deverão ser primeiramente adquiridos com a mesma. Posteriormente a criança deverá conseguir seguir os objetivos sob orientação do adulto de referência da escola, estando o terapeuta afastado apenas intervindo se necessário. Por último pretende-se que a criança apenas siga as instruções verbais dadas pelo adulto(s) de referência da escola;",
              "Para iniciar este programa é necessário existir uma observação indireta da criança no contexto escolar, ou seja, sem que o terapeuta intervenha. Caso a terapeuta considere necessário, pode sugerir rastreio em psicomotricidade, com o objetivo de complementar o programa Terapeuta Sombra com intervenção individual para consolidação de algumas áreas do desenvolvimento que não são possíveis de realizar em sala de aula regular;",
              "A intervenção como terapeuta sombra em pré-escolar é aconselhada a partir dos 4 anos de idade devido às características desenvolvimentais da idade da criança e dos pares que a rodeiam;",
              "O número de horas em que o terapeuta deve estar neste tipo de intervenção deve ser delineado após avaliação da criança e em conjunto com a comunidade escolar. Como um dos objetivos é dotar a comunidade escolar de estratégias e a criança de maior autonomia, pretende-se que com o evoluir da intervenção, a intervenção direta do terapeuta seja reduzida, sendo possível também a redução do horário do terapeuta na sala regular."
            ]
          },
          {
            question: "O que é necessário para iniciar este programa?",
            listAnswer: [
              "Estar numa escola que aceite um terapeuta externo na sala de aula.",
              "Caso seja pré-escolar é necessário tem 4 anos ou mais.",
              "É necessário realizar-se uma observação indireta em sala de aula e, caso necessário, um rastreio em psicomotricidade.",
              "Reunião com a equipa multidisciplinar da criança – escola e pais."
            ]
          },
          {
            question: "Qual a diferença entre terapeuta sombra e sessões individuais em psicomotricidade?",
            textAnswer: "O psicomotricista em sessão individual trabalha de forma direta as áreas do desenvolvimento infantil nas quais a criança apresenta maiores fragilidades (imitação, noção espacial e temporal, noção corporal, motricidade fina, perceção visual, motricidade global, interação social, intencionalidade comunicativa, jogo funcional e simbólico, funções executivas e regulação de comportamento). O terapeuta sombra auxilia na adaptação e conceção de estratégias para que a criança siga as orientações do adulto de referência, tornando-se autónoma no contexto escolar."
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "TERAPIA OCUPACIONAL",
    modalTitle: "O que é a Terapia Ocupacional?",
    imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    description: "A Terapia Ocupacional é uma ciência da área da saúde que promove o desempenho ocupacional de pessoas em qualquer faixa etária. Habilitando a participação satisfatória em ocupações significativas do seu dia-a-dia. Ao conseguir envolver-se em ocupações significativas o ser Humano aumenta a qualidade de vida, bem-estar e autonomia. O Terapeuta Ocupacional é um profissional de saúde que ajuda pais/cuidadores/professores a obterem estratégias e, caso necessário, adaptações nos contextos, de modo a facilitar/melhorar o desempenho ocupacional da criança, promovendo, assim, a sua autonomia, bem-estar e qualidade de vida.",
    sections: [
      {
        type: "FAQ",
        items: [
          {
            question: "Áreas de Intervenção",
            textAnswer: "A Terapia Ocupacional Pediátrica, foca-se em crianças que, por diversos motivos (intelectuais, físicos e/ou sensoriais), estejam a ter dificuldades em ser autónomas: quer, desde cedo, na dificuldade de integração das várias etapas do desenvolvimento, quer mais tarde com dificuldades escolares ao nível da motricidade fina, da atenção/concentração, entre outros."
          },
          {
            question: "O que é uma ocupação?",
            textAnswer: "Ao longo da nossa vida, as nossas ocupações significativas vão alterando, contudo, podemos dividi-las em três grandes áreas: Atividades da Vida Diária (AVD – englobam atividades que têm como objetivo cuidar de si próprio, como lavar os dentes, tomar banho, vestir/despir ou comer sozinho), Atividades de Lazer (por exemplo: brincar ou realizar um hobbie) e Atividades de Trabalho (por exemplo: sucesso académico ou realizar uma atividade de produtividade)."
          },
          {
            question: "O que é a Integração Sensorial?",
            textAnswer: "A Terapia Ocupacional é a única profissão especializada que trabalha com problemas de disfunção de Integração Sensorial. A Integração Sensorial é o processo neurológico que interpreta, organiza e traduz a informação sensorial recebida pelo nosso corpo, vinda do meio que está à nossa volta. Quando existe algum problema numa destas fases (interpretação, organização ou tradução), poderá existir dificuldades ao nível da atenção, da aprendizagem, do planeamento de tarefas, alimentação, etc., limitando o desempenho da criança numa atividade."
          }
        ]
      }
    ]
  }
];
export {
  __nuxt_component_3 as _,
  services as s,
  team as t
};
//# sourceMappingURL=services-6eaa78c6.js.map
