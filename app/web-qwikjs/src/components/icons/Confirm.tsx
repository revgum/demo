import type { QwikIntrinsicElements } from '@builder.io/qwik';

export function LineMdSquareFilledToConfirmSquareFilledTransition(
  props: QwikIntrinsicElements['svg'] & { title?: string },
  key: string,
) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props} key={key}>
      <title>{props.title}</title>
      <mask id="lineMdSquareFilledToConfirmSquareFilledTransition0">
        <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path
            fill="#fff"
            d="M4 12v-7c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1Z"
          />
          <path stroke="#000" stroke-dasharray="14" stroke-dashoffset="14" d="M8 12l3 3l5 -5">
            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="14;0" />
          </path>
        </g>
      </mask>
      <rect
        width="24"
        height="24"
        fill="currentColor"
        mask="url(#lineMdSquareFilledToConfirmSquareFilledTransition0)"
      />
    </svg>
  );
}
