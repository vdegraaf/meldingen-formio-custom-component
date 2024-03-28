<!-- @license CC0-1.0 -->

# What to test

- Run your page through WebAIM’s [WAVE Accessibility Evaluation Tool](https://wave.webaim.org/)
- Run Chrome’s Lighthouse on your page
- Run your page through an [HTML Validator](https://validator.w3.org/)
- Ensure that all videos are captioned and audio described as needed and that audio-only files are transcribed.
- If you use style sheets, then disable style sheets to ensure content is in a usable order with style sheets turned off.
  This is the order that will be presented to screen readers.
- Attempt to operate your website with just the keyboard (but not with a screen reader).
  This test shows how well a mobility impaired user can access your page.
  The focus ring should always be visible, and the order of the page should make sense.
- View your page with a grayscale filter or color deficient vision simulator to ensure that
  content is not dependent on color.
- Make sure that all content is available in a screen reader.
- Translate your page and check if everything is translated.
- Translate your page and use a screenreader to check if everything is translated.
  Some content (like text in `aria-label`) isn’t always properly translated.
- Translate your page to a right-to-left language (like Arabic) and check if
  everything is still properly rendered and the content is flipped (a menu bar on the left should be on the right, etc.).
- Browsers can display text bigger than usual. Set your browser to the biggest text size,
  and check if this has an effect on your page, and that everything is still properly rendered.
- Zoom in 200% and check if everything is still properly rendered.
- Use High Contrast mode (a seperate plugin for Chrome) and check if everything is still properly rendered.
- Apply the following css snippet and check if everything is still properly rendered ([WCAG 1.4.12](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html)).
  In Chrome you can use the Stylus plugin to easily do this.

```css
* {
  line-height: 1.5 !important;
  letter-spacing: 0.12em !important;
  word-spacing: 0.16em !important;
}

p {
  margin-bottom: 2em !important;
}
```

- Optional: turn off JavaScript and check if your page still works.

## References

- [PennState University’s Testing Protocol](https://accessibility.psu.edu/testing/protocol/)
- [We should all be ashamed of the Web: WebAIM’s 2023 Accessibility report](https://uxdesign.cc/we-should-all-be-ashamed-of-the-web-webaims-2023-accessibility-report-5233c8583dd9)
- [Developers, stop the embarrassment](https://uxdesign.cc/developers-stop-the-embarrassment-5c75de8f4c06)
