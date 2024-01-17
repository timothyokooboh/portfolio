import { p as publicAssetsURL, b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { a as BaseButton, _ as _sfc_main$2 } from './ui-library.es-a13b1f26.mjs';
import __nuxt_component_1 from './Icon-56a6da97.mjs';
import { _ as _export_sfc, a as __nuxt_component_0$1 } from '../server.mjs';
import { _ as _sfc_main$1 } from './FooterCTA-2755c887.mjs';
import { useSSRContext, defineComponent, withCtx, unref, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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
import './index-3267edd4.mjs';
import './state-fc70ca4d.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'vue-router';
import '@formkit/auto-animate/vue';

const _imports_0 = "" + publicAssetsURL("profile-picture.jpeg");
const mobileLandingImg = "" + buildAssetsURL("landing-img-mobile.738106a0.svg");
const tabletLandingImg = "" + buildAssetsURL("landing-img-tablet.0f0aa727.svg");
const desktopLandingImg = "" + buildAssetsURL("landing-img-desktop.2b5b22e2.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IntersectionObserver = _sfc_main$2;
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_FooterCTA = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-de701f45><section class="relative" data-v-de701f45>`);
      _push(ssrRenderComponent(_component_IntersectionObserver, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div id="picture-container" data-v-de701f45${_scopeId}><picture data-v-de701f45${_scopeId}><source${ssrRenderAttr("srcset", unref(desktopLandingImg))}${ssrRenderAttr("media", `(min-width: 1440px)`)} data-v-de701f45${_scopeId}><source${ssrRenderAttr("srcset", unref(tabletLandingImg))}${ssrRenderAttr("media", `(min-width: 768px)`)} data-v-de701f45${_scopeId}><source${ssrRenderAttr("srcset", unref(mobileLandingImg))}${ssrRenderAttr("media", `(min-width: 375px)`)} data-v-de701f45${_scopeId}><img id="picture"${ssrRenderAttr("src", unref(desktopLandingImg))} class="w-full object-cover" data-v-de701f45${_scopeId}></picture></div>`);
          } else {
            return [
              createVNode("div", { id: "picture-container" }, [
                createVNode("picture", null, [
                  createVNode("source", {
                    srcset: unref(desktopLandingImg),
                    media: `(min-width: 1440px)`
                  }, null, 8, ["srcset"]),
                  createVNode("source", {
                    srcset: unref(tabletLandingImg),
                    media: `(min-width: 768px)`
                  }, null, 8, ["srcset"]),
                  createVNode("source", {
                    srcset: unref(mobileLandingImg),
                    media: `(min-width: 375px)`
                  }, null, 8, ["srcset"]),
                  createVNode("img", {
                    id: "picture",
                    src: unref(desktopLandingImg),
                    class: "w-full object-cover"
                  }, null, 8, ["src"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bg-white md:w-[514px] lg:w-[445px] max-w-[514px] md:absolute md:bottom-[0px] mt-6" data-v-de701f45>`);
      _push(ssrRenderComponent(_component_IntersectionObserver, { "custom-class": "slide-right" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="mb-[53px] md:pt-[56px] text-h2 lg:text-h1 font-ibarra font-bold leading-h2 lg:leading-h1 tracking-[-0.36px] text-primary-blue-200" data-v-de701f45${_scopeId}> Hey, I&#39;m Timothy Okooboh and I love building beautiful websites </h2>`);
          } else {
            return [
              createVNode("h2", { class: "mb-[53px] md:pt-[56px] text-h2 lg:text-h1 font-ibarra font-bold leading-h2 lg:leading-h1 tracking-[-0.36px] text-primary-blue-200" }, " Hey, I'm Timothy Okooboh and I love building beautiful websites ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-wrap items-center" data-v-de701f45>`);
      _push(ssrRenderComponent(_component_IntersectionObserver, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a href="#about-me" data-v-de701f45${_scopeId}>`);
            _push2(ssrRenderComponent(unref(BaseButton), { class: "uppercase text-xs tracking-[2px] mr-3 mb-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`About Me`);
                } else {
                  return [
                    createTextVNode("About Me")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</a>`);
          } else {
            return [
              createVNode("a", { href: "#about-me" }, [
                createVNode(unref(BaseButton), { class: "uppercase text-xs tracking-[2px] mr-3 mb-2" }, {
                  default: withCtx(() => [
                    createTextVNode("About Me")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_IntersectionObserver, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a download href="/resume.pdf" class="flex items-center menu-item hover:translate-y-[-2px] duration-200 mb-2" data-v-de701f45${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ic:baseline-download",
              class: "mr-1 text-primary-blue-200"
            }, null, _parent2, _scopeId));
            _push2(`<div class="text-xs text-primary-blue-200" data-v-de701f45${_scopeId}>Resume</div></a>`);
          } else {
            return [
              createVNode("a", {
                download: "",
                href: "/resume.pdf",
                class: "flex items-center menu-item hover:translate-y-[-2px] duration-200 mb-2"
              }, [
                createVNode(_component_Icon, {
                  name: "ic:baseline-download",
                  class: "mr-1 text-primary-blue-200"
                }),
                createVNode("div", { class: "text-xs text-primary-blue-200" }, "Resume")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section id="about-me" class="grid mt-[80px] gap-y-[40px] md:grid-cols-[281px_1fr] md:gap-x-[69px] lg:grid-cols-[540px_350px] lg:gap-x-[125px]" data-v-de701f45>`);
      _push(ssrRenderComponent(_component_IntersectionObserver, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="profile picture" class="md:h-full object-cover" data-v-de701f45${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "profile picture",
                class: "md:h-full object-cover"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="py-[32px] w-fit border-y-[1px] border-secondary-grey-200 border-solid" data-v-de701f45>`);
      _push(ssrRenderComponent(_component_IntersectionObserver, { "custom-class": "slide-down" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="font-ibarra text-h2 font-bold text-primary-blue-200 pb-[32px]" data-v-de701f45${_scopeId}> About Me </div><div class="font-publicSans text-body-1 leading-body font-regular text-primary-blue-200 opacity-80 mb-[24px] max-w-[50ch]" data-v-de701f45${_scopeId}> I&#39;m a front-end developer currently based in Lagos Nigeria. Throughout my career working with JavaScript/TypeScript, Vue.js and React.js, I have had the privilege of working on a variety of projects, including the development of enterprise-grade web applications. My attention to detail shines when translating UI/UX designs into pixel-perfect code, ensuring a seamless and visually appealing user experience. I am equally comfortable working independently and collaboratively in an agile, cross-functional team setting. </div>`);
          } else {
            return [
              createVNode("div", { class: "font-ibarra text-h2 font-bold text-primary-blue-200 pb-[32px]" }, " About Me "),
              createVNode("div", { class: "font-publicSans text-body-1 leading-body font-regular text-primary-blue-200 opacity-80 mb-[24px] max-w-[50ch]" }, " I'm a front-end developer currently based in Lagos Nigeria. Throughout my career working with JavaScript/TypeScript, Vue.js and React.js, I have had the privilege of working on a variety of projects, including the development of enterprise-grade web applications. My attention to detail shines when translating UI/UX designs into pixel-perfect code, ensuring a seamless and visually appealing user experience. I am equally comfortable working independently and collaboratively in an agile, cross-functional team setting. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_IntersectionObserver, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/portfolio" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(BaseButton), {
                    variant: "secondary",
                    class: "uppercase text-xs tracking-[2px]"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Go to portfolio`);
                      } else {
                        return [
                          createTextVNode("Go to portfolio")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(BaseButton), {
                      variant: "secondary",
                      class: "uppercase text-xs tracking-[2px]"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Go to portfolio")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, { to: "/portfolio" }, {
                default: withCtx(() => [
                  createVNode(unref(BaseButton), {
                    variant: "secondary",
                    class: "uppercase text-xs tracking-[2px]"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Go to portfolio")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
      _push(ssrRenderComponent(_component_FooterCTA, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-de701f45"]]);

export { index as default };
//# sourceMappingURL=index-52354976.mjs.map
