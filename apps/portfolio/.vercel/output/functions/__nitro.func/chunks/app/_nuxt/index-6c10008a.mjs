import { a as BaseButton, _ as _sfc_main$2 } from './ui-library.es-a13b1f26.mjs';
import { _ as _export_sfc, a as __nuxt_component_0$1 } from '../server.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, toDisplayString, unref, createTextVNode, ref, withAsyncContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$3 } from './FooterCTA-2755c887.mjs';
import { u as useGetPortfolio } from './useGetPortfolio-699fa987.mjs';
import '@vueuse/components';
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
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@formkit/auto-animate/vue';
import './query-6fc7ecdb.mjs';
import './preview-a43fc676.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PortfolioListItemSummary",
  __ssrInlineRender: true,
  props: {
    id: {},
    title: {},
    description: {},
    color: {},
    project_background: {},
    images: {},
    tags: {},
    url: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IntersectionObserver = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:flex md:gap-x-[69px]" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_IntersectionObserver, { class: "md:basis-1/2 opacity-0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", props.images[0])} class="border-[25px] border-solid w-full h-[288px] object-cover object-top mb-[32px] md:mb-0 md:items-center md:justify-center md:h-[314px] md:self-center md:border-[34px] lg:h-[500px]" style="${ssrRenderStyle({ borderColor: _ctx.color })}"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: props.images[0],
                class: "border-[25px] border-solid w-full h-[288px] object-cover object-top mb-[32px] md:mb-0 md:items-center md:justify-center md:h-[314px] md:self-center md:border-[34px] lg:h-[500px]",
                style: { borderColor: _ctx.color }
              }, null, 12, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="w-full py-[24px] border-y-[1px] border-secondary-grey-200 border-solid md:pb-[50px] md:pt-[32px] md:basis-1/2 lg:flex lg:flex-col lg:items-center lg:justify-center"><div>`);
      _push(ssrRenderComponent(_component_IntersectionObserver, { "custom-class": "slide-down" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-h2 font-ibarra font-bold leading-h2 mb-[24px] md:mb-[39px]"${_scopeId}>${ssrInterpolate(props.title)}</h2><div class="text-body-2 font-regular leading-body text-primary-blue-200 mb-[24px] md:mb-[35px]"${_scopeId}>${ssrInterpolate(props.description)}</div>`);
          } else {
            return [
              createVNode("h2", { class: "text-h2 font-ibarra font-bold leading-h2 mb-[24px] md:mb-[39px]" }, toDisplayString(props.title), 1),
              createVNode("div", { class: "text-body-2 font-regular leading-body text-primary-blue-200 mb-[24px] md:mb-[35px]" }, toDisplayString(props.description), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_IntersectionObserver, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: `/portfolio/${props.id}`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(BaseButton), {
                    "data-testid": props.id,
                    variant: "secondary",
                    class: "uppercase text-xs text-primary-blue-200 tracking-[2px]"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`View Project`);
                      } else {
                        return [
                          createTextVNode("View Project")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(BaseButton), {
                      "data-testid": props.id,
                      variant: "secondary",
                      class: "uppercase text-xs text-primary-blue-200 tracking-[2px]"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("View Project")
                      ]),
                      _: 1
                    }, 8, ["data-testid"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: `/portfolio/${props.id}`
              }, {
                default: withCtx(() => [
                  createVNode(unref(BaseButton), {
                    "data-testid": props.id,
                    variant: "secondary",
                    class: "uppercase text-xs text-primary-blue-200 tracking-[2px]"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("View Project")
                    ]),
                    _: 1
                  }, 8, ["data-testid"])
                ]),
                _: 1
              }, 8, ["to"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PortfolioListItemSummary.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { getPortfolio } = useGetPortfolio();
    const portfolio = ref(null);
    portfolio.value = ([__temp, __restore] = withAsyncContext(() => getPortfolio()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_PortfolioListItemSummary = _sfc_main$1;
      const _component_FooterCTA = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-6db50258>`);
      if ((_a = portfolio.value) == null ? void 0 : _a.body) {
        _push(`<div data-v-6db50258><div class="portfolio-list-item" data-v-6db50258><!--[-->`);
        ssrRenderList(portfolio.value.body, (project, index2) => {
          _push(ssrRenderComponent(_component_PortfolioListItemSummary, mergeProps({
            key: project.title
          }, project, {
            class: index2 % 2 ? "flex-row-reverse" : "flex-row"
          }), null, _parent));
        });
        _push(`<!--]--></div>`);
        _push(ssrRenderComponent(_component_FooterCTA, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6db50258"]]);

export { index as default };
//# sourceMappingURL=index-6c10008a.mjs.map
