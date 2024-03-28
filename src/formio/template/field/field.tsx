export const field = (ctx: any) => `
  ${ctx.labelMarkup}

  ${
    ctx.component.description &&
    `<p class="amsterdam-paragraph amsterdam-paragraph--small util-mbe-xxs">${ctx.t(ctx.component.description, {
      _userInput: true,
    })}</p>`
  }

  ${ctx.element}
`
