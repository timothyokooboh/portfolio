import { B as BaseTextField, a as BaseButton, _ as _sfc_main$2$1 } from './ui-library.es-a13b1f26.mjs';
import __nuxt_component_1$1 from './Icon-56a6da97.mjs';
import { useSSRContext, defineComponent, ref, unref, withCtx, createVNode, Transition, openBlock, createBlock, mergeProps, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, u as useNuxtApp } from '../server.mjs';
import '@vueuse/components';
import './index-3267edd4.mjs';
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
import './state-fc70ca4d.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@formkit/auto-animate/vue';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ContactForm",
  __ssrInlineRender: true,
  props: {
    isSending: { type: Boolean }
  },
  emits: ["send:message"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const form = ref({
      name: "",
      email: "",
      message: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-a6b114f6><form data-netlify="true" data-v-a6b114f6><div class="mb-[24px]" data-v-a6b114f6><label data-v-a6b114f6><div data-testid="name" class="text-[13px] font-bold text-primary-blue-200 mb-[8px]" data-v-a6b114f6> Name </div>`);
      _push(ssrRenderComponent(unref(BaseTextField), {
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        "data-testid": "name-input",
        name: "name",
        required: "",
        placeholder: "Jane Doe",
        class: "w-full"
      }, null, _parent));
      _push(`</label></div><div class="mb-[24px]" data-v-a6b114f6><label data-v-a6b114f6><div data-testid="email" class="text-[13px] font-bold text-primary-blue-200 mb-[8px]" data-v-a6b114f6> Email Address </div>`);
      _push(ssrRenderComponent(unref(BaseTextField), {
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        "data-testid": "email-input",
        type: "email",
        name: "email",
        required: "",
        placeholder: "jane@gmail.com",
        class: "w-full"
      }, null, _parent));
      _push(`</label></div><div class="mb-[24px]" data-v-a6b114f6><label data-v-a6b114f6><div data-testid="message" class="text-[13px] font-bold text-primary-blue-200 mb-[8px]" data-v-a6b114f6> Message </div>`);
      _push(ssrRenderComponent(unref(BaseTextField), {
        modelValue: unref(form).message,
        "onUpdate:modelValue": ($event) => unref(form).message = $event,
        "data-testid": "message-input",
        as: "textarea",
        rows: "3",
        name: "message",
        required: "",
        placeholder: "How can I help?",
        class: "w-full"
      }, null, _parent));
      _push(`</label></div>`);
      _push(ssrRenderComponent(unref(BaseButton), {
        "data-testid": "submit-btn",
        type: "submit",
        "show-icon": false,
        class: "uppercase text-xs text-center tracking-[2px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-[180px] text-center" data-v-a6b114f6${_scopeId}>`);
            if (props.isSending) {
              _push2(`<div class="flex items-center justify-center" data-v-a6b114f6${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "eos-icons:bubble-loading",
                class: "mr-2"
              }, null, _parent2, _scopeId));
              _push2(`<div data-v-a6b114f6${_scopeId}>Sending...</div></div>`);
            } else {
              _push2(`<div data-v-a6b114f6${_scopeId}>Send Message</div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-[180px] text-center" }, [
                createVNode(Transition, {
                  name: "fade",
                  mode: "out-in"
                }, {
                  default: withCtx(() => [
                    props.isSending ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex items-center justify-center"
                    }, [
                      createVNode(_component_Icon, {
                        name: "eos-icons:bubble-loading",
                        class: "mr-2"
                      }),
                      createVNode("div", null, "Sending...")
                    ])) : (openBlock(), createBlock("div", { key: 1 }, "Send Message"))
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a6b114f6"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppToast",
  __ssrInlineRender: true,
  props: {
    type: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "fixed top-5 right-5 z-40 py-3 px-5 rounded-sm text-white",
        style: {
          backgroundColor: _ctx.type === "success" ? "rgb(22 163 74)" : "rgb(153 27 27)"
        }
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppToast.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useMail = () => useNuxtApp().$mail;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const isSending = ref(false);
    const toastMessage = ref("");
    const showToastMessage = ref(false);
    const toastType = ref("success");
    const mail = useMail();
    const sendMessage = async (value) => {
      try {
        isSending.value = true;
        await mail.send({
          subject: "Message from a visitor of my portfolio",
          text: `
        My name is ${value.name}. 
 
        My email address is ${value.email}. 

        My message is ${value.message}`
        });
        toastType.value = "success";
        toastMessage.value = "Message sent successfully";
        showToastMessage.value = true;
        setTimeout(() => {
          showToastMessage.value = false;
        }, 5e3);
      } catch (err) {
        toastType.value = "error";
        toastMessage.value = "There was an error while sending your message. Please try again.";
        showToastMessage.value = true;
        setTimeout(() => {
          showToastMessage.value = false;
        }, 5e3);
      } finally {
        isSending.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IntersectionObserver = _sfc_main$2$1;
      const _component_ContactForm = __nuxt_component_1;
      const _component_AppToast = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-24dd3f35><section class="border-y-[1px] border-secondary-grey-200 pt-[24px] pb-[32px] lg:grid lg:grid-cols-2" data-v-24dd3f35>`);
      _push(ssrRenderComponent(_component_IntersectionObserver, { "custom-class": "slide-right" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 data-testid="get-in-touch" class="text-h2 font-ibarra font-bold leading-h2 text-primary-blue-200 pb-[24px]" data-v-24dd3f35${_scopeId}> Get in Touch </h2>`);
          } else {
            return [
              createVNode("h2", {
                "data-testid": "get-in-touch",
                class: "text-h2 font-ibarra font-bold leading-h2 text-primary-blue-200 pb-[24px]"
              }, " Get in Touch ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_IntersectionObserver, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-24dd3f35${_scopeId}><div class="text-body-2 font-regular leading-body text-primary-blue-200 opacity-80 mb-[24px]" data-v-24dd3f35${_scopeId}> I&#39;d love to hear about what you&#39;re working on and how I could help. I&#39;m open to remote opportunities in the US and Europe and I&#39;m willing to relocate. Please do feel free to check out my online profiles below and get in touch using the form. One of my key strengths is my ability to establish a robust infrastructure for maintainable frontend codebases. I am well-versed in setting up essential tools like ESLint, Prettier, and TypeScript to enforce coding standards and maintain code quality. I also have experience in configuring testing infrastructures using Testing Library (Vue.js &amp; React.js), Jest, and Playwright to ensure the reliability of the applications I work on. Additionally, I have set up efficient build processes using GitHub Actions, streamlining the deployment pipeline for projects I&#39;ve been involved in. </div><div class="flex items-center gap-x-[16px]" data-v-24dd3f35${_scopeId}><a href="https://github.com/timothyokooboh" target="_blank" data-v-24dd3f35${_scopeId}><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-24dd3f35${_scopeId}><path d="M12.5 0C5.59375 0 0 5.50948 0 12.3045C0 17.742 3.58125 22.3531 8.54688 23.9788C9.17188 24.0946 9.40104 23.7137 9.40104 23.3871C9.40104 23.095 9.39062 22.3207 9.38542 21.295C5.90833 22.0369 5.175 19.6442 5.175 19.6442C4.60625 18.2241 3.78437 17.8443 3.78437 17.8443C2.65208 17.0815 3.87188 17.0971 3.87188 17.0971C5.12708 17.1827 5.78646 18.3649 5.78646 18.3649C6.90104 20.2463 8.7125 19.7027 9.42708 19.3886C9.53958 18.5924 9.86146 18.0509 10.2188 17.743C7.44271 17.4352 4.525 16.3771 4.525 11.6628C4.525 10.3198 5.00937 9.22212 5.81146 8.36127C5.67083 8.05031 5.24896 6.7992 5.92083 5.10462C5.92083 5.10462 6.96771 4.77489 9.35833 6.36617C10.3583 6.09278 11.4208 5.95713 12.4833 5.95087C13.5458 5.95713 14.6083 6.09278 15.6083 6.36617C17.9833 4.77489 19.0302 5.10462 19.0302 5.10462C19.7021 6.7992 19.2802 8.05031 19.1552 8.36127C19.9521 9.22212 20.4365 10.3198 20.4365 11.6628C20.4365 16.3897 17.5146 17.43 14.7333 17.7326C15.1708 18.102 15.5771 18.8564 15.5771 20.0094C15.5771 21.656 15.5615 22.9791 15.5615 23.3788C15.5615 23.7012 15.7802 24.0862 16.4208 23.9631C21.4219 22.3478 25 17.7336 25 12.3045C25 5.50948 19.4031 0 12.5 0V0Z" fill="black" data-v-24dd3f35${_scopeId}></path></svg></a><a href="https://twitter.com/inspiretim24" target="_blank" data-v-24dd3f35${_scopeId}><svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-24dd3f35${_scopeId}><path d="M24 2.55705C23.117 2.94905 22.168 3.21305 21.172 3.33205C22.189 2.72305 22.97 1.75805 23.337 0.608047C22.386 1.17205 21.332 1.58205 20.21 1.80305C19.313 0.846047 18.032 0.248047 16.616 0.248047C13.437 0.248047 11.101 3.21405 11.819 6.29305C7.728 6.08805 4.1 4.12805 1.671 1.14905C0.381 3.36205 1.002 6.25705 3.194 7.72305C2.388 7.69705 1.628 7.47605 0.965 7.10705C0.911 9.38805 2.546 11.522 4.914 11.997C4.221 12.185 3.462 12.229 2.69 12.081C3.316 14.037 5.134 15.46 7.29 15.5C5.22 17.123 2.612 17.848 0 17.54C2.179 18.937 4.768 19.752 7.548 19.752C16.69 19.752 21.855 12.031 21.543 5.10605C22.505 4.41105 23.34 3.54405 24 2.55705Z" fill="black" data-v-24dd3f35${_scopeId}></path></svg></a><a href="https://www.linkedin.com/in/timothy-okooboh-193980165" target="_blank" data-v-24dd3f35${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-24dd3f35${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M2.4 0H21.6C22.92 0 24 1.08 24 2.4V21.6C24 22.92 22.92 24 21.6 24H2.4C1.08 24 0 22.92 0 21.6V2.4C0 1.08 1.08 0 2.4 0ZM3.6 20.4H7.2V9.6H3.6V20.4ZM5.4 7.56C4.2 7.56 3.24 6.6 3.24 5.4C3.24 4.2 4.2 3.24 5.4 3.24C6.6 3.24 7.56 4.2 7.56 5.4C7.56 6.6 6.6 7.56 5.4 7.56ZM16.8 20.4H20.4V13.56C20.4 11.28 18.48 9.36 16.2 9.36C15.12 9.36 13.8 10.08 13.2 11.04V9.6H9.6V20.4H13.2V14.04C13.2 13.08 14.04 12.24 15 12.24C15.96 12.24 16.8 13.08 16.8 14.04V20.4Z" fill="black" data-v-24dd3f35${_scopeId}></path></svg></a></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "text-body-2 font-regular leading-body text-primary-blue-200 opacity-80 mb-[24px]" }, " I'd love to hear about what you're working on and how I could help. I'm open to remote opportunities in the US and Europe and I'm willing to relocate. Please do feel free to check out my online profiles below and get in touch using the form. One of my key strengths is my ability to establish a robust infrastructure for maintainable frontend codebases. I am well-versed in setting up essential tools like ESLint, Prettier, and TypeScript to enforce coding standards and maintain code quality. I also have experience in configuring testing infrastructures using Testing Library (Vue.js & React.js), Jest, and Playwright to ensure the reliability of the applications I work on. Additionally, I have set up efficient build processes using GitHub Actions, streamlining the deployment pipeline for projects I've been involved in. "),
                createVNode("div", { class: "flex items-center gap-x-[16px]" }, [
                  createVNode("a", {
                    href: "https://github.com/timothyokooboh",
                    target: "_blank"
                  }, [
                    (openBlock(), createBlock("svg", {
                      width: "25",
                      height: "24",
                      viewBox: "0 0 25 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M12.5 0C5.59375 0 0 5.50948 0 12.3045C0 17.742 3.58125 22.3531 8.54688 23.9788C9.17188 24.0946 9.40104 23.7137 9.40104 23.3871C9.40104 23.095 9.39062 22.3207 9.38542 21.295C5.90833 22.0369 5.175 19.6442 5.175 19.6442C4.60625 18.2241 3.78437 17.8443 3.78437 17.8443C2.65208 17.0815 3.87188 17.0971 3.87188 17.0971C5.12708 17.1827 5.78646 18.3649 5.78646 18.3649C6.90104 20.2463 8.7125 19.7027 9.42708 19.3886C9.53958 18.5924 9.86146 18.0509 10.2188 17.743C7.44271 17.4352 4.525 16.3771 4.525 11.6628C4.525 10.3198 5.00937 9.22212 5.81146 8.36127C5.67083 8.05031 5.24896 6.7992 5.92083 5.10462C5.92083 5.10462 6.96771 4.77489 9.35833 6.36617C10.3583 6.09278 11.4208 5.95713 12.4833 5.95087C13.5458 5.95713 14.6083 6.09278 15.6083 6.36617C17.9833 4.77489 19.0302 5.10462 19.0302 5.10462C19.7021 6.7992 19.2802 8.05031 19.1552 8.36127C19.9521 9.22212 20.4365 10.3198 20.4365 11.6628C20.4365 16.3897 17.5146 17.43 14.7333 17.7326C15.1708 18.102 15.5771 18.8564 15.5771 20.0094C15.5771 21.656 15.5615 22.9791 15.5615 23.3788C15.5615 23.7012 15.7802 24.0862 16.4208 23.9631C21.4219 22.3478 25 17.7336 25 12.3045C25 5.50948 19.4031 0 12.5 0V0Z",
                        fill: "black"
                      })
                    ]))
                  ]),
                  createVNode("a", {
                    href: "https://twitter.com/inspiretim24",
                    target: "_blank"
                  }, [
                    (openBlock(), createBlock("svg", {
                      width: "24",
                      height: "20",
                      viewBox: "0 0 24 20",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M24 2.55705C23.117 2.94905 22.168 3.21305 21.172 3.33205C22.189 2.72305 22.97 1.75805 23.337 0.608047C22.386 1.17205 21.332 1.58205 20.21 1.80305C19.313 0.846047 18.032 0.248047 16.616 0.248047C13.437 0.248047 11.101 3.21405 11.819 6.29305C7.728 6.08805 4.1 4.12805 1.671 1.14905C0.381 3.36205 1.002 6.25705 3.194 7.72305C2.388 7.69705 1.628 7.47605 0.965 7.10705C0.911 9.38805 2.546 11.522 4.914 11.997C4.221 12.185 3.462 12.229 2.69 12.081C3.316 14.037 5.134 15.46 7.29 15.5C5.22 17.123 2.612 17.848 0 17.54C2.179 18.937 4.768 19.752 7.548 19.752C16.69 19.752 21.855 12.031 21.543 5.10605C22.505 4.41105 23.34 3.54405 24 2.55705Z",
                        fill: "black"
                      })
                    ]))
                  ]),
                  createVNode("a", {
                    href: "https://www.linkedin.com/in/timothy-okooboh-193980165",
                    target: "_blank"
                  }, [
                    (openBlock(), createBlock("svg", {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M2.4 0H21.6C22.92 0 24 1.08 24 2.4V21.6C24 22.92 22.92 24 21.6 24H2.4C1.08 24 0 22.92 0 21.6V2.4C0 1.08 1.08 0 2.4 0ZM3.6 20.4H7.2V9.6H3.6V20.4ZM5.4 7.56C4.2 7.56 3.24 6.6 3.24 5.4C3.24 4.2 4.2 3.24 5.4 3.24C6.6 3.24 7.56 4.2 7.56 5.4C7.56 6.6 6.6 7.56 5.4 7.56ZM16.8 20.4H20.4V13.56C20.4 11.28 18.48 9.36 16.2 9.36C15.12 9.36 13.8 10.08 13.2 11.04V9.6H9.6V20.4H13.2V14.04C13.2 13.08 14.04 12.24 15 12.24C15.96 12.24 16.8 13.08 16.8 14.04V20.4Z",
                        fill: "black"
                      })
                    ]))
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="mb-[70px] pt-[32px] lg:grid lg:grid-cols-2" data-v-24dd3f35>`);
      _push(ssrRenderComponent(_component_IntersectionObserver, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-h2 font-bold font-ibarra mb-[24px]" data-v-24dd3f35${_scopeId}>Contact Me</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-h2 font-bold font-ibarra mb-[24px]" }, "Contact Me")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_IntersectionObserver, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ContactForm, {
              "is-sending": unref(isSending),
              "onSend:message": sendMessage
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ContactForm, {
                "is-sending": unref(isSending),
                "onSend:message": sendMessage
              }, null, 8, ["is-sending"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
      if (unref(showToastMessage)) {
        _push(ssrRenderComponent(_component_AppToast, { type: unref(toastType) }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div data-v-24dd3f35${_scopeId}>${ssrInterpolate(unref(toastMessage))}</div>`);
            } else {
              return [
                createVNode("div", null, toDisplayString(unref(toastMessage)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-24dd3f35"]]);

export { contact as default };
//# sourceMappingURL=contact-36c1df0e.mjs.map
