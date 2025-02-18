import type { QwikIntrinsicElements } from '@builder.io/qwik';

export function LineMdCloseCircleFilled(props: QwikIntrinsicElements['svg'] & { title?: string }, key: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props} key={key}>
      <title>{props.title}</title>
      <mask id="lineMdCloseCircleFilled0">
        <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path
            fill="#fff"
            fill-opacity="0"
            stroke-dasharray="64"
            stroke-dashoffset="64"
            d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"
          >
            <animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1" />
            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0" />
          </path>
          <path
            stroke="#000"
            stroke-dasharray="8"
            stroke-dashoffset="8"
            d="M12 12l4 4M12 12l-4 -4M12 12l-4 4M12 12l4 -4"
          >
            <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="8;0" />
          </path>
        </g>
      </mask>
      <rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloseCircleFilled0)" />
    </svg>
  );
}
