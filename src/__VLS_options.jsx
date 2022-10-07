export default (await import('vue')).defineComponent({
name: 'App'
});
const __VLS_options = {
...({
name: 'App'
}),
};
const __VLS_name = (await import('./__VLS_types.js')).getNameOption({
name: 'App'
} as const);
function __VLS_template() {
import * as __VLS_types from './__VLS_types.js'; import('./__VLS_types.js');
let __VLS_ctx!: __VLS_types.PickNotAny<__VLS_Ctx, {}> & InstanceType<__VLS_types.PickNotAny<typeof __VLS_component, new () => {}>> & {};
let __VLS_vmUnwrap!: typeof __VLS_options & { components: {}; };
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_component extends { components: infer C; } ? C : {}> & __VLS_types.GlobalComponents & typeof __VLS_vmUnwrap.components & __VLS_types.PickComponents<typeof __VLS_ctx>;
let __VLS_selfComponent!: __VLS_types.SelfComponent<typeof __VLS_name, typeof __VLS_component & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_selfComponent, keyof typeof __VLS_otherComponents>;
__VLS_components['/* __VLS_.SearchTexts.Components */'];
({} as __VLS_types.GlobalAttrs)['/* __VLS_.SearchTexts.GlobalAttrs */'];
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
declare const RouterView: __VLS_types.ConvertInvalidJsxElement<
'router-view' extends keyof typeof __VLS_components ? typeof __VLS_components['router-view'] : 'routerView' extends keyof typeof __VLS_components ? typeof __VLS_components['routerView'] : 'RouterView' extends keyof typeof __VLS_components ? typeof __VLS_components['RouterView'] : 'router-view' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['router-view'] : 'routerView' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['routerView'] : 'RouterView' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['RouterView'] : unknown>;
__VLS_components['router-view']; __VLS_components.routerView; __VLS_components.RouterView;
__VLS_ctx['router-view']; __VLS_ctx.routerView; __VLS_ctx.RouterView;
declare const __VLS_0: __VLS_types.ExtractEmit2<typeof RouterView>;
/* Completion: Emits */
// @ts-ignore
__VLS_0('/* __VLS_.SearchTexts.Completion.Emit.router-view */');
// @ts-ignore
__VLS_0('/* __VLS_.SearchTexts.Completion.Emit.routerView */');
// @ts-ignore
__VLS_0('/* __VLS_.SearchTexts.Completion.Emit.RouterView */');
/* Completion: Props */
// @ts-ignore
(<RouterView /* __VLS_.SearchTexts.Completion.Props.router-view */ />);
// @ts-ignore
(<RouterView /* __VLS_.SearchTexts.Completion.Props.routerView */ />);
// @ts-ignore
(<RouterView /* __VLS_.SearchTexts.Completion.Props.RouterView */ />);
{
<div id={"\u0061\u0070\u0070"}></div>;

{
<RouterView />;
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
declare var __VLS_slots: {};
return __VLS_slots;
}
let __VLS_component!: typeof import('./App.vue')['default'];
