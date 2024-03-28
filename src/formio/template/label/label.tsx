export const label = (ctx: any) => `
  <label
    ref="label"
    class="${ctx.label.className} amsterdam-form-label"
    for="${ctx.instance.id}-${ctx.component.key}"
  >
    ${ctx.t(ctx.component.label, { _userInput: true })}
  </label>
`
