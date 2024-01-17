import { useSSRContext, defineComponent, ref, mergeProps, unref, openBlock, createElementBlock, normalizeClass, renderSlot, createCommentVNode, createElementVNode, pushScopeId, popScopeId } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderSlot } from 'vue/server-renderer';
import { vIntersectionObserver } from '@vueuse/components';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "IntersectionObserver",
  __ssrInlineRender: true,
  props: {
    customClass: { default: "slide-up" }
  },
  setup(__props) {
    const { customClass } = __props;
    const onIntersectionObserver = ([
      { isIntersecting, target }
    ]) => {
      if (isIntersecting) {
        target.classList.add(customClass);
      } else {
        target.classList.remove(customClass);
      }
    };
    const root = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref,
        class: "opacity-0"
      }, _attrs, ssrGetDirectiveProps(_ctx, unref(vIntersectionObserver), [onIntersectionObserver, { root: root.value }])))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/IntersectionObserver.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _withScopeId = (n) => (pushScopeId("data-v-868a899d"), n = n(), popScopeId(), n);
const _hoisted_1$1 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  fill: "none"
};
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("rect", {
  opacity: "0.1",
  width: "48",
  height: "48",
  fill: "black"
}, null, -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  d: "M16 26L24 30L32 26",
  stroke: "white"
}, null, -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  opacity: "0.5",
  d: "M16 22L24 26L32 22",
  stroke: "white"
}, null, -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  opacity: "0.25",
  d: "M16 18L24 22L32 18",
  stroke: "white"
}, null, -1));
const _hoisted_6 = [
  _hoisted_2$1,
  _hoisted_3,
  _hoisted_4,
  _hoisted_5
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BaseButton",
  props: {
    variant: { default: "primary" },
    showIcon: { type: Boolean, default: true }
  },
  setup(__props) {
    const { variant } = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["btn flex items-center", {
          primary: variant === "primary",
          secondary: variant === "secondary"
        }])
      }, [
        variant === "primary" ? renderSlot(_ctx.$slots, "leftIcon", { key: 0 }, () => [
          _ctx.showIcon ? (openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_6)) : createCommentVNode("", true)
        ], true) : createCommentVNode("", true),
        createElementVNode("div", {
          class: normalizeClass(["btn__default-slot", { "py-4": !_ctx.showIcon }])
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 2)
      ], 2);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const BaseButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-868a899d"]]);
const _hoisted_1 = ["value"];
const _hoisted_2 = ["value"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseTextField",
  props: {
    modelValue: { default: "" },
    as: { default: "input" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const handleInput = (e) => {
      emit(
        "update:modelValue",
        e.target.value
      );
    };
    return (_ctx, _cache) => {
      return _ctx.as === "input" ? (openBlock(), createElementBlock("input", {
        key: 0,
        value: _ctx.modelValue,
        class: "input bg-secondary-grey-200",
        onInput: handleInput
      }, null, 40, _hoisted_1)) : (openBlock(), createElementBlock("textarea", {
        key: 1,
        value: _ctx.modelValue,
        class: "input bg-secondary-grey-200",
        onInput: handleInput
      }, null, 40, _hoisted_2));
    };
  }
});
const BaseTextField = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7428f4f7"]]);

export { BaseTextField as B, _sfc_main$2 as _, BaseButton as a };
//# sourceMappingURL=ui-library.es-a13b1f26.mjs.map
