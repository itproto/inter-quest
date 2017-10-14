FlexBox
-------

Usage:
- navigation
- replacement for floats/clearfix

End look = flex-flow + writing mode(LTR)

Axes:
- main and cross-access
- flex-items laid across main
- cross-axes when flex multi-line (wraps)
- NO wrap - No cross
- REVERSE inverts target access 
    flex-direction: row-reverse
    flex-wrap: wrap-reverse
Check: `flex-flow: column-reverse wrap-reverse`

Example `column-reverse`:
- main->vertical bottom-up 
- main {start: bottom, end: top, size: height}
- cross - horizontal
- crosss {start: left, end: right, size: width}

'flex-flow: row nowrap'
==========
>= flex-direction + flex-wrap

`flex-direction` - main axes (row - horizontal) and reverse

WRAP
=====
> when not fit across main axis
- no-wrap initial (items squashed)

justify-content, align-items, align-content
===================================
justify-content - MAIN axis (start|end|center|space)
align-content - CROSS axis
align-tems - COSS axis flex-lines

