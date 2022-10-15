import { css } from "lit";

export const IonicStyles = css`

	html.ios {
		--ion-default-font: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif
	}

	html.md {
		--ion-default-font: "Roboto", "Helvetica Neue", sans-serif
	}

	body.backdrop-no-scroll {
		overflow: hidden
	}

	html.ios ion-modal ion-footer ion-toolbar:first-of-type,
	html.ios ion-modal.modal-card ion-header ion-toolbar:first-of-type,
	html.ios ion-modal.modal-sheet ion-header ion-toolbar:first-of-type {
		padding-top: 6px
	}

	html.ios ion-modal.modal-card ion-header ion-toolbar:last-of-type,
	html.ios ion-modal.modal-sheet ion-header ion-toolbar:last-of-type {
		padding-bottom: 6px
	}

	html.ios ion-modal ion-toolbar {
		padding-right: calc(var(--ion-safe-area-right) + 8px);
		padding-left: calc(var(--ion-safe-area-left) + 8px)
	}

	@media screen and (min-width:768px) {
		html.ios ion-modal.modal-card:first-of-type {
			--backdrop-opacity: 0.18
		}
	}

	ion-modal.modal-default:not(.overlay-hidden)~ion-modal.modal-default {
		--backdrop-opacity: 0;
		--box-shadow: none
	}

	html.ios ion-modal.modal-card .ion-page {
		border-top-left-radius: var(--border-radius)
	}

	.ion-color-primary {
		--ion-color-base: var(--ion-color-primary, #3880ff) !important;
		--ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;
		--ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;
		--ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;
		--ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;
		--ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important
	}

	.ion-color-secondary {
		--ion-color-base: var(--ion-color-secondary, #3dc2ff) !important;
		--ion-color-base-rgb: var(--ion-color-secondary-rgb, 61, 194, 255) !important;
		--ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;
		--ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;
		--ion-color-shade: var(--ion-color-secondary-shade, #36abe0) !important;
		--ion-color-tint: var(--ion-color-secondary-tint, #50c8ff) !important
	}

	.ion-color-tertiary {
		--ion-color-base: var(--ion-color-tertiary, #5260ff) !important;
		--ion-color-base-rgb: var(--ion-color-tertiary-rgb, 82, 96, 255) !important;
		--ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;
		--ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;
		--ion-color-shade: var(--ion-color-tertiary-shade, #4854e0) !important;
		--ion-color-tint: var(--ion-color-tertiary-tint, #6370ff) !important
	}

	.ion-color-success {
		--ion-color-base: var(--ion-color-success, #2dd36f) !important;
		--ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;
		--ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;
		--ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;
		--ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;
		--ion-color-tint: var(--ion-color-success-tint, #42d77d) !important
	}

	.ion-color-warning {
		--ion-color-base: var(--ion-color-warning, #ffc409) !important;
		--ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 196, 9) !important;
		--ion-color-contrast: var(--ion-color-warning-contrast, #000) !important;
		--ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;
		--ion-color-shade: var(--ion-color-warning-shade, #e0ac08) !important;
		--ion-color-tint: var(--ion-color-warning-tint, #ffca22) !important
	}

	.ion-color-danger {
		--ion-color-base: var(--ion-color-danger, #eb445a) !important;
		--ion-color-base-rgb: var(--ion-color-danger-rgb, 235, 68, 90) !important;
		--ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;
		--ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;
		--ion-color-shade: var(--ion-color-danger-shade, #cf3c4f) !important;
		--ion-color-tint: var(--ion-color-danger-tint, #ed576b) !important
	}

	.ion-color-light {
		--ion-color-base: var(--ion-color-light, #f4f5f8) !important;
		--ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;
		--ion-color-contrast: var(--ion-color-light-contrast, #000) !important;
		--ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;
		--ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;
		--ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important
	}

	.ion-color-medium {
		--ion-color-base: var(--ion-color-medium, #92949c) !important;
		--ion-color-base-rgb: var(--ion-color-medium-rgb, 146, 148, 156) !important;
		--ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;
		--ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;
		--ion-color-shade: var(--ion-color-medium-shade, #808289) !important;
		--ion-color-tint: var(--ion-color-medium-tint, #9d9fa6) !important
	}

	.ion-color-dark {
		--ion-color-base: var(--ion-color-dark, #222428) !important;
		--ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;
		--ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;
		--ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;
		--ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;
		--ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important
	}

	.ion-page {
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		display: flex;
		position: absolute;
		flex-direction: column;
		justify-content: space-between;
		contain: layout size style;
		overflow: hidden;
		z-index: 0
	}

	ion-modal .ion-page:not(ion-nav .ion-page) {
		position: relative;
		contain: layout style;
		height: 100%
	}

	.split-pane-visible>.ion-page.split-pane-main {
		position: relative
	}

	.ion-page-hidden,
	[hidden],
	ion-action-sheet-controller,
	ion-alert-controller,
	ion-loading-controller,
	ion-menu-controller,
	ion-modal-controller,
	ion-nav-controller,
	ion-picker-controller,
	ion-popover-controller,
	ion-route,
	ion-route-redirect,
	ion-router,
	ion-select-option,
	ion-toast-controller {
		display: none !important
	}

	.ion-page-invisible {
		opacity: 0
	}

	.can-go-back>ion-header ion-back-button {
		display: block
	}

	html.plt-ios.plt-hybrid,
	html.plt-ios.plt-pwa {
		--ion-statusbar-padding: 20px
	}

	@supports (padding-top:20px) {
		html {
			--ion-safe-area-top: var(--ion-statusbar-padding)
		}
	}

	@supports (padding-top:constant(safe-area-inset-top)) {
		html {
			--ion-safe-area-top: constant(safe-area-inset-top);
			--ion-safe-area-bottom: constant(safe-area-inset-bottom);
			--ion-safe-area-left: constant(safe-area-inset-left);
			--ion-safe-area-right: constant(safe-area-inset-right)
		}
	}

	@supports (padding-top:env(safe-area-inset-top)) {
		html {
			--ion-safe-area-top: env(safe-area-inset-top);
			--ion-safe-area-bottom: env(safe-area-inset-bottom);
			--ion-safe-area-left: env(safe-area-inset-left);
			--ion-safe-area-right: env(safe-area-inset-right)
		}
	}

	ion-card-header.ion-color .ion-inherit-color,
	ion-card.ion-color .ion-inherit-color {
		color: inherit
	}

	.menu-content {
		transform: translate3d(0, 0, 0)
	}

	.menu-content-open {
		cursor: pointer;
		touch-action: manipulation;
		pointer-events: none
	}

	.ios .menu-content-reveal {
		box-shadow: -8px 0 42px rgba(0, 0, 0, .08)
	}

	[dir=rtl].ios .menu-content-reveal {
		box-shadow: 8px 0 42px rgba(0, 0, 0, .08)
	}

	.md .menu-content-push,
	.md .menu-content-reveal {
		box-shadow: 4px 0 1rem rgba(0, 0, 0, .18)
	}

	ion-accordion-group.accordion-group-expand-inset>ion-accordion:first-of-type {
		border-top-left-radius: 8px;
		border-top-right-radius: 8px
	}

	ion-accordion-group.accordion-group-expand-inset>ion-accordion:last-of-type {
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px
	}

	ion-accordion-group>ion-accordion:last-of-type ion-item[slot=header] {
		--border-width: 0px
	}

	ion-accordion.accordion-animated>[slot=header] .ion-accordion-toggle-icon {
		transition: transform .3s cubic-bezier(.25, .8, .5, 1)
	}

	@media (prefers-reduced-motion:reduce) {
		ion-accordion .ion-accordion-toggle-icon {
			transition: none !important
		}
	}

	ion-accordion.accordion-expanded>[slot=header] .ion-accordion-toggle-icon,
	ion-accordion.accordion-expanding>[slot=header] .ion-accordion-toggle-icon {
		transform: rotate(180deg)
	}

	ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-previous ion-item[slot=header] {
		--border-width: 0px;
		--inner-border-width: 0px
	}

	ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanded:first-of-type,
	ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanding:first-of-type {
		margin-top: 0
	}

	ion-input input::-webkit-date-and-time-value {
		text-align: start
	}

	.ion-datetime-button-overlay {
		--width: fit-content;
		--height: fit-content
	}

	.ion-datetime-button-overlay ion-datetime.datetime-grid {
		width: 320px;
		min-height: 320px
	}

	audio,
	canvas,
	progress,
	video {
		vertical-align: baseline
	}

	audio:not([controls]) {
		display: none;
		height: 0
	}

	b,
	strong {
		font-weight: 700
	}

	img {
		max-width: 100%;
		border: 0
	}

	svg:not(:root) {
		overflow: hidden
	}

	figure {
		margin: 1em 40px
	}

	hr {
		height: 1px;
		border-width: 0;
		box-sizing: content-box
	}

	pre {
		overflow: auto
	}

	code,
	kbd,
	pre,
	samp {
		font-family: monospace, monospace;
		font-size: 1em
	}

	input,
	label,
	select,
	textarea {
		font-family: inherit;
		line-height: normal
	}

	textarea {
		overflow: auto;
		height: auto;
		font: inherit;
		color: inherit
	}

	textarea::placeholder {
		padding-left: 2px
	}

	form,
	input,
	optgroup,
	select {
		margin: 0;
		font: inherit;
		color: inherit
	}

	html input[type=button],
	input[type=reset],
	input[type=submit] {
		cursor: pointer;
		-webkit-appearance: button
	}

	.ion-tappable,
	[tappable],
	[tappable] div,
	[tappable] ion-icon,
	[tappable] ion-label,
	[tappable] span,
	a,
	a div,
	a ion-icon,
	a ion-label,
	a span,
	button,
	button div,
	button ion-icon,
	button ion-label,
	button span,
	input,
	textarea {
		touch-action: manipulation
	}

	a ion-label,
	button ion-label {
		pointer-events: none
	}

	button {
		border: 0;
		border-radius: 0;
		font-family: inherit;
		font-style: inherit;
		font-variant: inherit;
		line-height: 1;
		text-transform: none;
		cursor: pointer;
		-webkit-appearance: button
	}

	[tappable] {
		cursor: pointer
	}

	a[disabled],
	button[disabled],
	html input[disabled] {
		cursor: default
	}

	button::-moz-focus-inner,
	input::-moz-focus-inner {
		padding: 0;
		border: 0
	}

	input[type=checkbox],
	input[type=radio] {
		padding: 0;
		box-sizing: border-box
	}

	input[type=number]::-webkit-inner-spin-button,
	input[type=number]::-webkit-outer-spin-button {
		height: auto
	}

	input[type=search]::-webkit-search-cancel-button,
	input[type=search]::-webkit-search-decoration {
		-webkit-appearance: none
	}

	table {
		border-collapse: collapse;
		border-spacing: 0
	}

	td,
	th {
		padding: 0
	}

	* {
		box-sizing: border-box;
		-webkit-tap-highlight-color: transparent;
		-webkit-touch-callout: none
	}

	html {
		--ion-font-family: var(--ion-default-font);
		width: 100%;
		height: 100%;
		text-size-adjust: 100%;
		font-family: var(--ion-font-family)
	}

	html:not(.hydrated) body {
		display: none
	}

	html.ion-ce body {
		display: block
	}

	html.plt-pwa {
		height: 100vh
	}

	body {
		background: var(--ion-background-color);
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		margin: 0;
		padding: 0;
		position: fixed;
		width: 100%;
		max-width: 100%;
		height: 100%;
		max-height: 100%;
		transform: translateZ(0);
		text-rendering: optimizeLegibility;
		overflow: hidden;
		touch-action: manipulation;
		-webkit-user-drag: none;
		-ms-content-zooming: none;
		word-wrap: break-word;
		overscroll-behavior-y: none;
		text-size-adjust: none
	}

	a {
		background-color: transparent;
		color: var(--ion-color-primary, #3880ff)
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-top: 1rem;
		margin-bottom: 10px;
		font-weight: 500;
		line-height: 1.2
	}

	h1 {
		margin-top: 20px;
		font-size: 26px
	}

	h2 {
		margin-top: 18px;
		font-size: 24px
	}

	h3 {
		font-size: 22px
	}

	h4 {
		font-size: 20px
	}

	h5 {
		font-size: 18px
	}

	h6 {
		font-size: 1rem
	}

	small {
		font-size: 75%
	}

	sub,
	sup {
		position: relative;
		font-size: 75%;
		line-height: 0;
		vertical-align: baseline
	}

	sup {
		top: -.5em
	}

	sub {
		bottom: -.25em
	}

	.ion-no-padding {
		--padding-start: 0;
		--padding-end: 0;
		--padding-top: 0;
		--padding-bottom: 0;
		padding: 0
	}

	.ion-padding {
		--padding-start: var(--ion-padding, 1rem);
		--padding-end: var(--ion-padding, 1rem);
		--padding-top: var(--ion-padding, 1rem);
		--padding-bottom: var(--ion-padding, 1rem);
		padding-left: var(--ion-padding, 1rem);
		padding-right: var(--ion-padding, 1rem);
		padding-top: var(--ion-padding, 1rem);
		padding-bottom: var(--ion-padding, 1rem)
	}

	@supports (margin-inline-start:0) or (-webkit-margin-start:0) {
		.ion-padding {
			padding-left: unset;
			padding-right: unset;
			-webkit-padding-start: var(--ion-padding, 1rem);
			padding-inline-start: var(--ion-padding, 1rem);
			-webkit-padding-end: var(--ion-padding, 1rem);
			padding-inline-end: var(--ion-padding, 1rem)
		}
	}

	.ion-padding-top {
		--padding-top: var(--ion-padding, 1rem);
		padding-top: var(--ion-padding, 1rem)
	}

	.ion-padding-start {
		--padding-start: var(--ion-padding, 1rem);
		padding-left: var(--ion-padding, 1rem)
	}

	.ion-padding-end {
		--padding-end: var(--ion-padding, 1rem);
		padding-right: var(--ion-padding, 1rem)
	}

	@supports (margin-inline-start:0) or (-webkit-margin-start:0) {
		.ion-padding-start {
			padding-left: unset;
			-webkit-padding-start: var(--ion-padding, 1rem);
			padding-inline-start: var(--ion-padding, 1rem)
		}

		.ion-padding-end {
			padding-right: unset;
			-webkit-padding-end: var(--ion-padding, 1rem);
			padding-inline-end: var(--ion-padding, 1rem)
		}
	}

	.ion-padding-bottom {
		--padding-bottom: var(--ion-padding, 1rem);
		padding-bottom: var(--ion-padding, 1rem)
	}

	.ion-padding-vertical {
		--padding-top: var(--ion-padding, 1rem);
		--padding-bottom: var(--ion-padding, 1rem);
		padding-top: var(--ion-padding, 1rem);
		padding-bottom: var(--ion-padding, 1rem)
	}

	.ion-padding-horizontal {
		--padding-start: var(--ion-padding, 1rem);
		--padding-end: var(--ion-padding, 1rem);
		padding-left: var(--ion-padding, 1rem);
		padding-right: var(--ion-padding, 1rem)
	}

	.ion-no-margin {
		--margin-start: 0;
		--margin-end: 0;
		--margin-top: 0;
		--margin-bottom: 0;
		margin: 0
	}

	.ion-margin {
		--margin-start: var(--ion-margin, 1rem);
		--margin-end: var(--ion-margin, 1rem);
		--margin-top: var(--ion-margin, 1rem);
		--margin-bottom: var(--ion-margin, 1rem);
		margin-left: var(--ion-margin, 1rem);
		margin-right: var(--ion-margin, 1rem);
		margin-top: var(--ion-margin, 1rem);
		margin-bottom: var(--ion-margin, 1rem)
	}

	@supports (margin-inline-start:0) or (-webkit-margin-start:0) {
		.ion-padding-horizontal {
			padding-left: unset;
			padding-right: unset;
			-webkit-padding-start: var(--ion-padding, 1rem);
			padding-inline-start: var(--ion-padding, 1rem);
			-webkit-padding-end: var(--ion-padding, 1rem);
			padding-inline-end: var(--ion-padding, 1rem)
		}

		.ion-margin {
			margin-left: unset;
			margin-right: unset;
			-webkit-margin-start: var(--ion-margin, 1rem);
			margin-inline-start: var(--ion-margin, 1rem);
			-webkit-margin-end: var(--ion-margin, 1rem);
			margin-inline-end: var(--ion-margin, 1rem)
		}
	}

	.ion-margin-top {
		--margin-top: var(--ion-margin, 1rem);
		margin-top: var(--ion-margin, 1rem)
	}

	.ion-margin-start {
		--margin-start: var(--ion-margin, 1rem);
		margin-left: var(--ion-margin, 1rem)
	}

	.ion-margin-end {
		--margin-end: var(--ion-margin, 1rem);
		margin-right: var(--ion-margin, 1rem)
	}

	@supports (margin-inline-start:0) or (-webkit-margin-start:0) {
		.ion-margin-start {
			margin-left: unset;
			-webkit-margin-start: var(--ion-margin, 1rem);
			margin-inline-start: var(--ion-margin, 1rem)
		}

		.ion-margin-end {
			margin-right: unset;
			-webkit-margin-end: var(--ion-margin, 1rem);
			margin-inline-end: var(--ion-margin, 1rem)
		}
	}

	.ion-margin-bottom {
		--margin-bottom: var(--ion-margin, 1rem);
		margin-bottom: var(--ion-margin, 1rem)
	}

	.ion-margin-vertical {
		--margin-top: var(--ion-margin, 1rem);
		--margin-bottom: var(--ion-margin, 1rem);
		margin-top: var(--ion-margin, 1rem);
		margin-bottom: var(--ion-margin, 1rem)
	}

	.ion-margin-horizontal {
		--margin-start: var(--ion-margin, 1rem);
		--margin-end: var(--ion-margin, 1rem);
		margin-left: var(--ion-margin, 1rem);
		margin-right: var(--ion-margin, 1rem)
	}

	@supports (margin-inline-start:0) or (-webkit-margin-start:0) {
		.ion-margin-horizontal {
			margin-left: unset;
			margin-right: unset;
			-webkit-margin-start: var(--ion-margin, 1rem);
			margin-inline-start: var(--ion-margin, 1rem);
			-webkit-margin-end: var(--ion-margin, 1rem);
			margin-inline-end: var(--ion-margin, 1rem)
		}
	}

	.ion-float-left {
		float: left !important
	}

	.ion-float-right {
		float: right !important
	}

	.ion-float-start {
		float: left !important
	}

	:host-context([dir=rtl]) .ion-float-start,
	[dir=rtl] .ion-float-start {
		float: right !important
	}

	.ion-float-end {
		float: right !important
	}

	:host-context([dir=rtl]) .ion-float-end,
	[dir=rtl] .ion-float-end {
		float: left !important
	}

	.ion-text-center {
		text-align: center !important
	}

	.ion-text-justify {
		text-align: justify !important
	}

	.ion-text-start {
		text-align: start !important
	}

	.ion-text-end {
		text-align: end !important
	}

	.ion-text-left {
		text-align: left !important
	}

	.ion-text-right {
		text-align: right !important
	}

	.ion-text-nowrap {
		white-space: nowrap !important
	}

	.ion-text-wrap {
		white-space: normal !important
	}

	.ion-text-uppercase {
		text-transform: uppercase !important
	}

	.ion-text-lowercase {
		text-transform: lowercase !important
	}

	.ion-text-capitalize {
		text-transform: capitalize !important
	}

	.ion-align-self-start {
		align-self: flex-start !important
	}

	.ion-align-self-end {
		align-self: flex-end !important
	}

	.ion-align-self-center {
		align-self: center !important
	}

	.ion-align-self-stretch {
		align-self: stretch !important
	}

	.ion-align-self-baseline {
		align-self: baseline !important
	}

	.ion-align-self-auto {
		align-self: auto !important
	}

	.ion-wrap {
		flex-wrap: wrap !important
	}

	.ion-nowrap {
		flex-wrap: nowrap !important
	}

	.ion-wrap-reverse {
		flex-wrap: wrap-reverse !important
	}

	.ion-justify-content-start {
		justify-content: flex-start !important
	}

	.ion-justify-content-center {
		justify-content: center !important
	}

	.ion-justify-content-end {
		justify-content: flex-end !important
	}

	.ion-justify-content-around {
		justify-content: space-around !important
	}

	.ion-justify-content-between {
		justify-content: space-between !important
	}

	.ion-justify-content-evenly {
		justify-content: space-evenly !important
	}

	.ion-align-items-start {
		align-items: flex-start !important
	}

	.ion-align-items-center {
		align-items: center !important
	}

	.ion-align-items-end {
		align-items: flex-end !important
	}

	.ion-align-items-stretch {
		align-items: stretch !important
	}

	.ion-align-items-baseline {
		align-items: baseline !important
	}

	.ion-hide,
	.ion-hide-down,
	.ion-hide-up {
		display: none !important
	}

	@media (min-width:576px) {
		.ion-float-sm-left {
			float: left !important
		}

		.ion-float-sm-right {
			float: right !important
		}

		.ion-float-sm-start {
			float: left !important
		}

		:host-context([dir=rtl]) .ion-float-sm-start,
		[dir=rtl] .ion-float-sm-start {
			float: right !important
		}

		.ion-float-sm-end {
			float: right !important
		}

		:host-context([dir=rtl]) .ion-float-sm-end,
		[dir=rtl] .ion-float-sm-end {
			float: left !important
		}

		.ion-text-sm-center {
			text-align: center !important
		}

		.ion-text-sm-justify {
			text-align: justify !important
		}

		.ion-text-sm-start {
			text-align: start !important
		}

		.ion-text-sm-end {
			text-align: end !important
		}

		.ion-text-sm-left {
			text-align: left !important
		}

		.ion-text-sm-right {
			text-align: right !important
		}

		.ion-text-sm-nowrap {
			white-space: nowrap !important
		}

		.ion-text-sm-wrap {
			white-space: normal !important
		}

		.ion-text-sm-uppercase {
			text-transform: uppercase !important
		}

		.ion-text-sm-lowercase {
			text-transform: lowercase !important
		}

		.ion-text-sm-capitalize {
			text-transform: capitalize !important
		}

		.ion-hide-sm-up {
			display: none !important
		}
	}

	@media (max-width:575.98px) {
		.ion-hide-sm-down {
			display: none !important
		}
	}

	@media (min-width:768px) {
		.ion-float-md-left {
			float: left !important
		}

		.ion-float-md-right {
			float: right !important
		}

		.ion-float-md-start {
			float: left !important
		}

		:host-context([dir=rtl]) .ion-float-md-start,
		[dir=rtl] .ion-float-md-start {
			float: right !important
		}

		.ion-float-md-end {
			float: right !important
		}

		:host-context([dir=rtl]) .ion-float-md-end,
		[dir=rtl] .ion-float-md-end {
			float: left !important
		}

		.ion-text-md-center {
			text-align: center !important
		}

		.ion-text-md-justify {
			text-align: justify !important
		}

		.ion-text-md-start {
			text-align: start !important
		}

		.ion-text-md-end {
			text-align: end !important
		}

		.ion-text-md-left {
			text-align: left !important
		}

		.ion-text-md-right {
			text-align: right !important
		}

		.ion-text-md-nowrap {
			white-space: nowrap !important
		}

		.ion-text-md-wrap {
			white-space: normal !important
		}

		.ion-text-md-uppercase {
			text-transform: uppercase !important
		}

		.ion-text-md-lowercase {
			text-transform: lowercase !important
		}

		.ion-text-md-capitalize {
			text-transform: capitalize !important
		}

		.ion-hide-md-up {
			display: none !important
		}
	}

	@media (max-width:767.98px) {
		.ion-hide-md-down {
			display: none !important
		}
	}

	@media (min-width:992px) {
		.ion-float-lg-left {
			float: left !important
		}

		.ion-float-lg-right {
			float: right !important
		}

		.ion-float-lg-start {
			float: left !important
		}

		:host-context([dir=rtl]) .ion-float-lg-start,
		[dir=rtl] .ion-float-lg-start {
			float: right !important
		}

		.ion-float-lg-end {
			float: right !important
		}

		:host-context([dir=rtl]) .ion-float-lg-end,
		[dir=rtl] .ion-float-lg-end {
			float: left !important
		}

		.ion-text-lg-center {
			text-align: center !important
		}

		.ion-text-lg-justify {
			text-align: justify !important
		}

		.ion-text-lg-start {
			text-align: start !important
		}

		.ion-text-lg-end {
			text-align: end !important
		}

		.ion-text-lg-left {
			text-align: left !important
		}

		.ion-text-lg-right {
			text-align: right !important
		}

		.ion-text-lg-nowrap {
			white-space: nowrap !important
		}

		.ion-text-lg-wrap {
			white-space: normal !important
		}

		.ion-text-lg-uppercase {
			text-transform: uppercase !important
		}

		.ion-text-lg-lowercase {
			text-transform: lowercase !important
		}

		.ion-text-lg-capitalize {
			text-transform: capitalize !important
		}

		.ion-hide-lg-up {
			display: none !important
		}
	}

	@media (max-width:991.98px) {
		.ion-hide-lg-down {
			display: none !important
		}
	}

	@media (min-width:1200px) {
		.ion-float-xl-left {
			float: left !important
		}

		.ion-float-xl-right {
			float: right !important
		}

		.ion-float-xl-start {
			float: left !important
		}

		:host-context([dir=rtl]) .ion-float-xl-start,
		[dir=rtl] .ion-float-xl-start {
			float: right !important
		}

		.ion-float-xl-end {
			float: right !important
		}

		:host-context([dir=rtl]) .ion-float-xl-end,
		[dir=rtl] .ion-float-xl-end {
			float: left !important
		}

		.ion-text-xl-center {
			text-align: center !important
		}

		.ion-text-xl-justify {
			text-align: justify !important
		}

		.ion-text-xl-start {
			text-align: start !important
		}

		.ion-text-xl-end {
			text-align: end !important
		}

		.ion-text-xl-left {
			text-align: left !important
		}

		.ion-text-xl-right {
			text-align: right !important
		}

		.ion-text-xl-nowrap {
			white-space: nowrap !important
		}

		.ion-text-xl-wrap {
			white-space: normal !important
		}

		.ion-text-xl-uppercase {
			text-transform: uppercase !important
		}

		.ion-text-xl-lowercase {
			text-transform: lowercase !important
		}

		.ion-text-xl-capitalize {
			text-transform: capitalize !important
		}

		.ion-hide-xl-up {
			display: none !important
		}
	}

	.default-box {
		border: 0.25rem solid black;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (max-width:1199.98px) {
		.ion-hide-xl-down {
			display: none !important
		}

		.ion-margin {
			--margin-start: var(--ion-margin, 0.5rem);
			--margin-end: var(--ion-margin, 0.5rem);
			--margin-top: var(--ion-margin, 0.5rem);
			--margin-bottom: var(--ion-margin, 0.5rem);
			margin-left: var(--ion-margin, 0.5rem);
			margin-right: var(--ion-margin, 0.5rem);
			margin-top: var(--ion-margin, 0.5rem);
			margin-bottom: var(--ion-margin, 0.5rem)
		}
	

		.ion-padding {
			--padding-start: var(--ion-padding, 0.5rem);
			--padding-end: var(--ion-padding, 0.5rem);
			--padding-top: var(--ion-padding, 0.5rem);
			--padding-bottom: var(--ion-padding, 0.5rem);
			padding-left: var(--ion-padding, 0.5rem);
			padding-right: var(--ion-padding, 0.5rem);
			padding-top: var(--ion-padding, 0.5rem);
			padding-bottom: var(--ion-padding, 0.5rem)
		}
	}

`;
