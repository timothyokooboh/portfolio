import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { a as BaseButton, _ as _sfc_main$2 } from './ui-library.es-a13b1f26.mjs';
import { _ as _export_sfc, b as useRoute$1, a as __nuxt_component_0$1 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, mergeProps, withCtx, createVNode, toDisplayString, unref, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { u as useGetPortfolio } from './useGetPortfolio-699fa987.mjs';
import { _ as _sfc_main$3 } from './FooterCTA-2755c887.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/vercel.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'nodemailer';
import '@dword-design/functions/dist/find-index.js';
import '@dword-design/functions/dist/omit.js';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'unist-util-visit';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@vueuse/components';
import '@formkit/auto-animate/vue';
import './query-6fc7ecdb.mjs';
import './preview-a43fc676.mjs';

const _imports_0 = "" + publicAssetsURL("previous.svg");
const _imports_1 = "" + publicAssetsURL("next.svg");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProjectNavigation",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const route = useRoute();
    const { getPortfolio } = useGetPortfolio();
    const portfolio = ref(null);
    portfolio.value = ([__temp, __restore] = withAsyncContext(() => getPortfolio()), __temp = await __temp, __restore(), __temp);
    const id = route.params.id;
    const previousProject = ref({
      id: "",
      title: "",
      description: "",
      color: "",
      project_background: "",
      images: [],
      tags: [],
      url: ""
    });
    const nextProject = ref({
      id: "",
      title: "",
      description: "",
      color: "",
      project_background: "",
      images: [],
      tags: [],
      url: ""
    });
    if ((_a = portfolio.value) == null ? void 0 : _a.body) {
      const index = portfolio.value.body.findIndex((project) => project.id === id);
      if (index === 0) {
        previousProject.value = portfolio.value.body[portfolio.value.body.length - 1];
        nextProject.value = portfolio.value.body[1];
      } else if (index === portfolio.value.body.length - 1) {
        previousProject.value = portfolio.value.body[portfolio.value.body.length - 2];
        nextProject.value = portfolio.value.body[0];
      } else {
        previousProject.value = portfolio.value.body[index - 1];
        nextProject.value = portfolio.value.body[index + 1];
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IntersectionObserver = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-y-[1px] border-secondary-grey-200 grid grid-cols-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_IntersectionObserver, { "custom-class": "slide-right" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: `/portfolio/${previousProject.value.id}`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="border-r-[1px] border-secondary-grey-200 pr-3"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt="previous project" class="mb-[16px] pt-[24px]"${_scopeId2}><h3 class="text-h3 font-ibarra whitespace-nowrap overflow-hidden text-ellipsis"${_scopeId2}>${ssrInterpolate(previousProject.value.title)}</h3><div class="font-regular text-body-1 text-primary-blue-200 opacity-50 pb-[24px]"${_scopeId2}> Previous Project </div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "border-r-[1px] border-secondary-grey-200 pr-3" }, [
                      createVNode("img", {
                        src: _imports_0,
                        alt: "previous project",
                        class: "mb-[16px] pt-[24px]"
                      }),
                      createVNode("h3", { class: "text-h3 font-ibarra whitespace-nowrap overflow-hidden text-ellipsis" }, toDisplayString(previousProject.value.title), 1),
                      createVNode("div", { class: "font-regular text-body-1 text-primary-blue-200 opacity-50 pb-[24px]" }, " Previous Project ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: `/portfolio/${previousProject.value.id}`
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "border-r-[1px] border-secondary-grey-200 pr-3" }, [
                    createVNode("img", {
                      src: _imports_0,
                      alt: "previous project",
                      class: "mb-[16px] pt-[24px]"
                    }),
                    createVNode("h3", { class: "text-h3 font-ibarra whitespace-nowrap overflow-hidden text-ellipsis" }, toDisplayString(previousProject.value.title), 1),
                    createVNode("div", { class: "font-regular text-body-1 text-primary-blue-200 opacity-50 pb-[24px]" }, " Previous Project ")
                  ])
                ]),
                _: 1
              }, 8, ["to"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_IntersectionObserver, { "custom-class": "slide-left" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: `/portfolio/${nextProject.value.id}`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="px-3"${_scopeId2}><div class="flex justify-end"${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} alt="previous project" class="mb-[16px] pt-[24px]"${_scopeId2}></div><h3 class="text-right font-ibarra text-h3 whitespace-nowrap overflow-hidden text-ellipsis"${_scopeId2}>${ssrInterpolate(nextProject.value.title)}</h3><div class="text-right font-regular text-body-1 text-primary-blue-200 opacity-50 pb-[24px]"${_scopeId2}> Next Project </div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "px-3" }, [
                      createVNode("div", { class: "flex justify-end" }, [
                        createVNode("img", {
                          src: _imports_1,
                          alt: "previous project",
                          class: "mb-[16px] pt-[24px]"
                        })
                      ]),
                      createVNode("h3", { class: "text-right font-ibarra text-h3 whitespace-nowrap overflow-hidden text-ellipsis" }, toDisplayString(nextProject.value.title), 1),
                      createVNode("div", { class: "text-right font-regular text-body-1 text-primary-blue-200 opacity-50 pb-[24px]" }, " Next Project ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: `/portfolio/${nextProject.value.id}`
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "px-3" }, [
                    createVNode("div", { class: "flex justify-end" }, [
                      createVNode("img", {
                        src: _imports_1,
                        alt: "previous project",
                        class: "mb-[16px] pt-[24px]"
                      })
                    ]),
                    createVNode("h3", { class: "text-right font-ibarra text-h3 whitespace-nowrap overflow-hidden text-ellipsis" }, toDisplayString(nextProject.value.title), 1),
                    createVNode("div", { class: "text-right font-regular text-body-1 text-primary-blue-200 opacity-50 pb-[24px]" }, " Next Project ")
                  ])
                ]),
                _: 1
              }, 8, ["to"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectNavigation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const route = useRoute$1();
    const id = route.params.id;
    const { getPortfolio } = useGetPortfolio();
    const portfolio = ([__temp, __restore] = withAsyncContext(() => getPortfolio()), __temp = await __temp, __restore(), __temp);
    const project = (_a = portfolio == null ? void 0 : portfolio.body) == null ? void 0 : _a.find((el) => el.id === id);
    const [coverImage, ...otherImages] = project.images;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IntersectionObserver = _sfc_main$2;
      const _component_ProjectNavigation = _sfc_main$1;
      const _component_FooterCTA = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b9f773e0>`);
      _push(ssrRenderComponent(_component_IntersectionObserver, { "custom-class": "slide-down" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(coverImage))} alt="project image" class="w-full h-[190px] object-cover object-center border-[25px] border-solid mb-[40px] md:h-[350px]" style="${ssrRenderStyle({ borderColor: (_a2 = unref(project)) == null ? void 0 : _a2.color })}" data-v-b9f773e0${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: unref(coverImage),
                alt: "project image",
                class: "w-full h-[190px] object-cover object-center border-[25px] border-solid mb-[40px] md:h-[350px]",
                style: { borderColor: (_b = unref(project)) == null ? void 0 : _b.color }
              }, null, 12, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="lg:grid lg:grid-cols-2 lg:gap-x-[125px] mb-[64px]" data-v-b9f773e0>`);
      _push(ssrRenderComponent(_component_IntersectionObserver, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h;
          if (_push2) {
            _push2(`<section class="overflow-auto relative py-[24px] mb-[48px] border-y-[1px] border-secondary-grey-200 md:grid md:grid-cols-2 md:gap-x-[50px] md:py-[32px] lg:block lg:h-fit lg:py-[48px]" data-v-b9f773e0${_scopeId}><h2 class="text-h2 font-ibarra font-bold leading-h2 tracking-[-0.36px] mb-[24px]" data-v-b9f773e0${_scopeId}>${ssrInterpolate((_a2 = unref(project)) == null ? void 0 : _a2.title)}</h2><div class="description text-body-2 leading-body text-primary-blue-200 mb-[24px] md:mb-0 md:absolute md:top-[24px] md-right-0 md:col-start-2 md:pb-[24px] lg:relative lg:mb-[24px]" data-v-b9f773e0${_scopeId}>${ssrInterpolate((_b = unref(project)) == null ? void 0 : _b.description)}</div><div class="tags text-[13px] text-primary-cyan font-bold leading-body mb-[24px] md:col-start-1" data-v-b9f773e0${_scopeId}>${ssrInterpolate((_c = unref(project)) == null ? void 0 : _c.tags.join(" / "))}</div><a${ssrRenderAttr("href", (_d = unref(project)) == null ? void 0 : _d.url)} target="_blank" class="md:col-start-1 md:w-fit" data-v-b9f773e0${_scopeId}>`);
            _push2(ssrRenderComponent(unref(BaseButton), {
              variant: "secondary",
              class: "uppercase text-[12px] tracking-[2px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Visit website `);
                } else {
                  return [
                    createTextVNode(" Visit website ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</a></section>`);
          } else {
            return [
              createVNode("section", { class: "overflow-auto relative py-[24px] mb-[48px] border-y-[1px] border-secondary-grey-200 md:grid md:grid-cols-2 md:gap-x-[50px] md:py-[32px] lg:block lg:h-fit lg:py-[48px]" }, [
                createVNode("h2", { class: "text-h2 font-ibarra font-bold leading-h2 tracking-[-0.36px] mb-[24px]" }, toDisplayString((_e = unref(project)) == null ? void 0 : _e.title), 1),
                createVNode("div", { class: "description text-body-2 leading-body text-primary-blue-200 mb-[24px] md:mb-0 md:absolute md:top-[24px] md-right-0 md:col-start-2 md:pb-[24px] lg:relative lg:mb-[24px]" }, toDisplayString((_f = unref(project)) == null ? void 0 : _f.description), 1),
                createVNode("div", { class: "tags text-[13px] text-primary-cyan font-bold leading-body mb-[24px] md:col-start-1" }, toDisplayString((_g = unref(project)) == null ? void 0 : _g.tags.join(" / ")), 1),
                createVNode("a", {
                  href: (_h = unref(project)) == null ? void 0 : _h.url,
                  target: "_blank",
                  class: "md:col-start-1 md:w-fit"
                }, [
                  createVNode(unref(BaseButton), {
                    variant: "secondary",
                    class: "uppercase text-[12px] tracking-[2px]"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Visit website ")
                    ]),
                    _: 1
                  })
                ], 8, ["href"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div data-v-b9f773e0>`);
      _push(ssrRenderComponent(_component_IntersectionObserver, { "custom-class": "slide-down" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(`<section class="mb-[40px]" data-v-b9f773e0${_scopeId}><h3 class="font-ibarra text-h3 font-regular leading-h2 tracking-[-0.29px] pb-[28px]" data-v-b9f773e0${_scopeId}> Project Background </h3><div class="text-body-2 text-primary-blue-200 leading-body font-regular" data-v-b9f773e0${_scopeId}>${ssrInterpolate((_a2 = unref(project)) == null ? void 0 : _a2.project_background)}</div></section>`);
          } else {
            return [
              createVNode("section", { class: "mb-[40px]" }, [
                createVNode("h3", { class: "font-ibarra text-h3 font-regular leading-h2 tracking-[-0.29px] pb-[28px]" }, " Project Background "),
                createVNode("div", { class: "text-body-2 text-primary-blue-200 leading-body font-regular" }, toDisplayString((_b = unref(project)) == null ? void 0 : _b.project_background), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section data-v-b9f773e0><h3 class="font-ibarra text-h3 font-regular leading-h2 tracking-[-0.29px] pb-[28px] mb-[40px]" data-v-b9f773e0> Static Previews </h3><!--[-->`);
      ssrRenderList(otherImages, (image, index) => {
        _push(ssrRenderComponent(_component_IntersectionObserver, { key: index }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", image)} alt="static previews" class="w-full h-[250px] object-cover object-center border-[25px] border-gray-300 border-solid mb-[32px] md:h-[434px]" data-v-b9f773e0${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: image,
                  alt: "static previews",
                  class: "w-full h-[250px] object-cover object-center border-[25px] border-gray-300 border-solid mb-[32px] md:h-[434px]"
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></section></div></div>`);
      _push(ssrRenderComponent(_component_ProjectNavigation, null, null, _parent));
      _push(ssrRenderComponent(_component_FooterCTA, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b9f773e0"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-2fc4f720.mjs.map
