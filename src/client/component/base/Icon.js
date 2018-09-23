import * as React from 'react';

const icons = {
  bookmark: (
    <svg
      id="i-bookmark"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fill="none"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M6 2 L26 2 26 30 16 20 6 30 Z" />
    </svg>
  ),
  menu: (
    <svg
      width="25px"
      height="18px"
      viewBox="0 0 27 19"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Book-App-[Black-Ver]"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          id="Home-Screen"
          transform="translate(-15.000000, -65.000000)"
          stroke="#FFFFFF"
          strokeWidth="2"
        >
          <g id="menu" transform="translate(16.000000, 65.910000)">
            <path
              d="M0.672200905,0.379232155 L24.6722009,0.379232155 M0.672200905,8.37923216 L24.6722009,8.37923216 M0.672200905,16.3792322 L24.6722009,16.3792322"
              id="Shape"
            />
          </g>
        </g>
      </g>
    </svg>
  ),
  leftArrow: (
    <svg
      width="12px"
      height="22px"
      viewBox="0 0 12 22"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Book-App-[Black-Ver]"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Details-Screen"
          transform="translate(-9.000000, -47.000000)"
          fill="#FFFFFF"
          fillRule="nonzero"
        >
          <g id="Bars/Navigation/Navigation-Bar">
            <g id="Pin-Left" transform="translate(9.000000, 47.000000)">
              <path
                d="M3.62132034,11 L11.5606602,3.06066017 C12.1464466,2.47487373 12.1464466,1.52512627 11.5606602,0.939339828 C10.9748737,0.353553391 10.0251263,0.353553391 9.43933983,0.939339828 L0.439339828,9.93933983 C-0.146446609,10.5251263 -0.146446609,11.4748737 0.439339828,12.0606602 L9.43933983,21.0606602 C10.0251263,21.6464466 10.9748737,21.6464466 11.5606602,21.0606602 C12.1464466,20.4748737 12.1464466,19.5251263 11.5606602,18.9393398 L3.62132034,11 Z"
                id="Path"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  star: (
    <svg
      width="21px"
      height="21px"
      viewBox="0 0 21 21"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Book-App-[Black-Ver]"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          id="Details-Screen"
          transform="translate(-123.000000, -425.000000)"
          stroke="#FFFFFF"
        >
          <g id="Group-2" transform="translate(16.000000, 425.000000)">
            <polygon
              id="Shape"
              points="117.494779 0.265127756 120.276171 7.21860793 127.229651 7.21860793 121.666867 12.0860441 123.752911 19.7348722 117.494779 14.8674361 111.236647 19.7348722 113.322691 12.0860441 107.759907 7.21860793 114.713387 7.21860793"
            />
          </g>
        </g>
      </g>
    </svg>
  ),
  starFilled: (
    <svg
      width="23px"
      height="22px"
      viewBox="0 0 23 22"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Book-App-[Black-Ver]"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          id="Details-Screen"
          transform="translate(-95.000000, -424.000000)"
          fill="#F8E71C"
          stroke="#F8E71C"
          strokeWidth="2"
        >
          <g id="Group-2" transform="translate(16.000000, 425.000000)">
            <polygon
              id="Shape"
              points="90.4947792 0.265127756 93.2761712 7.21860793 100.229651 7.21860793 94.6668673 12.0860441 96.7529113 19.7348722 90.4947792 14.8674361 84.236647 19.7348722 86.322691 12.0860441 80.7599069 7.21860793 87.7133871 7.21860793"
            />
          </g>
        </g>
      </g>
    </svg>
  ),
  heart: (
    <svg
      width="23px"
      height="21px"
      viewBox="0 0 23 21"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Book-App-[Black-Ver]"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          id="Details-Screen"
          transform="translate(-337.000000, -327.000000)"
          stroke="#FFFFFF"
        >
          <path
            d="M339.277723,337.95367 C337.006215,334.924992 337.763385,330.381976 341.549232,328.867637 C345.335079,327.353298 347.606587,330.381976 348.363757,331.896314 C349.120926,330.381976 352.149604,327.353298 355.935451,328.867637 C359.721298,330.381976 359.721298,334.924992 357.44979,337.95367 C355.178282,340.982348 348.363757,347.039703 348.363757,347.039703 C348.363757,347.039703 341.549232,340.982348 339.277723,337.95367 Z"
            id="Shape"
          />
        </g>
      </g>
    </svg>
  ),
  play: (
    <svg
      width="10px"
      height="17px"
      viewBox="0 0 10 17"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Book-App-[Black-Ver]"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          id="Details-Screen"
          transform="translate(-164.000000, -271.000000)"
          stroke="#FFFFFF"
          strokeWidth="2"
        >
          <polygon
            id="Shape"
            points="165.241862 272.525853 165.241862 286.148461 172.053166 279.337157"
          />
        </g>
      </g>
    </svg>
  ),
  download: (
    <svg
      width="30px"
      height="29px"
      viewBox="0 0 30 29"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Book-App-[Black-Ver]"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          id="Details-Screen"
          transform="translate(-127.000000, -487.000000)"
          stroke="#FFFFFF"
          strokeWidth="2"
        >
          <path
            d="M135.340829,506.05185 C126.340829,507.05185 127.340829,496.05185 135.340829,497.05185 C132.340829,486.05185 149.340829,486.05185 148.340829,494.05185 C158.340829,491.05185 158.340829,507.05185 149.340829,506.05185 M137.340829,510.05185 L142.340829,514.05185 L147.340829,510.05185 M142.340829,500.05185 L142.340829,514.05185"
            id="Shape"
          />
        </g>
      </g>
    </svg>
  ),
  discuss: (
    <svg
      width="31px"
      height="28px"
      viewBox="0 0 31 28"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Book-App-[Black-Ver]"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          id="Details-Screen"
          transform="translate(-39.000000, -488.000000)"
          stroke="#FFFFFF"
          strokeWidth="2"
        >
          <g id="Group-3" transform="translate(26.000000, 489.000000)">
            <polygon
              id="Shape"
              points="14.9457064 0.0518499848 42.9457064 0.0518499848 42.9457064 18.05185 28.9457064 18.05185 20.9457064 25.05185 20.9457064 18.05185 14.9457064 18.05185"
            />
          </g>
        </g>
      </g>
    </svg>
  ),
  share: (
    <svg
      width="27px"
      height="29px"
      viewBox="0 0 27 29"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Book-App-[Black-Ver]"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          id="Details-Screen"
          transform="translate(-214.000000, -487.000000)"
          stroke="#FFFFFF"
          strokeWidth="2"
        >
          <path
            d="M239.985383,506.05185 L239.985383,514.05185 L215.985383,514.05185 L215.985383,506.05185 M227.985383,488.05185 L227.985383,508.05185 M219.985383,496.05185 L227.985383,488.05185 L235.985383,496.05185"
            id="Shape"
          />
        </g>
      </g>
    </svg>
  ),
  add: (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 30 30"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Book-App-[Black-Ver]"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          id="Details-Screen"
          transform="translate(-299.000000, -486.000000)"
          stroke="#FFFFFF"
          strokeWidth="2"
        >
          <path
            d="M314,487.05185 L314,515.05185 M300,501.05185 L328,501.05185"
            id="Shape"
          />
        </g>
      </g>
    </svg>
  ),
};

class Icon extends React.PureComponent {
  render() {
    const {name} = this.props;
    return icons[name];
  }
}

export default Icon;
