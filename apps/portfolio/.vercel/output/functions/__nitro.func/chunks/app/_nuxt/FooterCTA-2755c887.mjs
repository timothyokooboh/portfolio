import { a as BaseButton, _ as _sfc_main$2 } from './ui-library.es-a13b1f26.mjs';
import { a as __nuxt_component_0$1 } from '../server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, unref, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FooterCTA",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IntersectionObserver = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-[311px] flex flex-col items-center justify-center text-center mx-auto my-[80px] md:flex-row md:justify-between md:w-full md:text-left" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_IntersectionObserver, { "custom-class": "slide-right" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-ibarra text-h2 font-bold leading-h2 mt-0 mb-[40px] md:mb-0 md:w-[350px] text-primary-blue-200"${_scopeId}> Interested in doing a project together? </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-ibarra text-h2 font-bold leading-h2 mt-0 mb-[40px] md:mb-0 md:w-[350px] text-primary-blue-200" }, " Interested in doing a project together? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden md:block grow mx-[32px] h-[1px] bg-secondary-grey-200"></div>`);
      _push(ssrRenderComponent(_component_IntersectionObserver, { "custom-class": "slide-left" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(BaseButton), {
                    variant: "secondary",
                    class: "uppercase text-xs tracking-[2px]"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Contact me `);
                      } else {
                        return [
                          createTextVNode(" Contact me ")
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
                        createTextVNode(" Contact me ")
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
              createVNode(_component_NuxtLink, { to: "/contact" }, {
                default: withCtx(() => [
                  createVNode(unref(BaseButton), {
                    variant: "secondary",
                    class: "uppercase text-xs tracking-[2px]"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Contact me ")
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
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterCTA.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=FooterCTA-2755c887.mjs.map
