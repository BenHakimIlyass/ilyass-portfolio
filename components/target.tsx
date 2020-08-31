import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "../hooks";

const Thumbnail = styled(motion.div)`
  background-color: #fff;
  width: 180px;
  height: 30px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  border-radius: 4px;
  z-index: 999;
`;

const Target = (props: any) => {
  const { isScrolling, scroll } = useScroll({});

  return (
    <Thumbnail {...props} transition={{ type: "spring" }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 207 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          {/* start of circle */}
          <motion.path
            initial={{ y: 0 }}
            animate={{ y: isScrolling ? scroll * -0.01 : 1 }}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 16.9558H17.1495V0C7.67809 0 0 7.59138 0 16.9558Z"
            fill="#614FE7"
          />
          <motion.path
            initial={{ y: 0 }}
            animate={{ y: isScrolling ? scroll * -0.01 : 1 }}
            transition={{ delay: 0.02 }}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.1494 6.3584V16.9558H27.8679C27.8679 11.1031 23.069 6.3584 17.1494 6.3584Z"
            fill="#8E82EE"
          />
          <motion.path
            initial={{ y: 0 }}
            transition={{ delay: 0.04 }}
            animate={{ y: isScrolling ? scroll * 0.01 : 1 }}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.2989 16.9561H17.1494V33.9119C26.6208 33.9119 34.2989 26.3205 34.2989 16.9561Z"
            fill="#614FE7"
          />
          <motion.path
            initial={{ y: 0 }}
            transition={{ delay: 0.06 }}
            animate={{ y: isScrolling ? scroll * 0.01 : 1 }}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.1495 33.9119V16.9561H0C0 26.3205 7.67809 33.9119 17.1495 33.9119Z"
            fill="#4D3BD8"
          />
          {/* end of circle */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isScrolling ? 0 : 1 }}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M48.0629 19.7673C48.7628 20.4317 49.6029 20.764 50.611 20.764C51.6471 20.764 52.5152 20.4317 53.2152 19.7673C53.9432 19.1028 54.3073 18.2999 54.3073 17.3309C54.3073 16.3619 53.9432 15.5314 53.2152 14.8669C52.5152 14.1748 51.6471 13.8426 50.611 13.8426C49.6029 13.8426 48.7628 14.1748 48.0629 14.8669C47.3628 15.5314 47.0268 16.3619 47.0268 17.3309C47.0268 18.2999 47.3628 19.1028 48.0629 19.7673ZM44.8426 12.2091C46.1867 10.7971 47.8668 10.105 49.855 10.105C51.9831 10.105 53.6352 10.9632 54.0552 12.1814V10.3542H58.2275V21.9821C58.2275 25.2214 57.6955 27.3254 55.7633 28.7928C54.3913 29.8725 52.6832 30.3986 50.639 30.3986C47.8948 30.3986 45.5987 29.7341 43.7226 28.4329L45.7107 25.4428C47.1388 26.3287 48.5668 26.7718 50.051 26.7718C51.255 26.7718 52.2351 26.5225 52.9351 26.052C53.7473 25.4982 54.1673 24.4739 54.1673 23.0065V22.702C53.5792 23.6986 51.8991 24.3908 49.855 24.3908C47.8668 24.3908 46.1867 23.7263 44.8426 22.3698C43.5265 21.0132 42.8545 19.3243 42.8545 17.3309C42.8545 15.3099 43.5265 13.5934 44.8426 12.2091Z"
            fill="#614FE7"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M70.436 15.725C70.436 14.4238 69.0639 13.3995 67.3837 13.3995C65.5637 13.3995 64.0796 14.4238 63.9676 15.725H70.436ZM59.7393 17.3031C59.7393 15.116 60.4673 13.3441 61.8954 12.0151C63.3235 10.6586 65.1716 9.99414 67.3837 9.99414C69.5399 9.99414 71.2761 10.6863 72.6202 12.0428C73.9642 13.3995 74.6363 15.0606 74.6363 17.0816C74.6363 17.5523 74.6082 17.9952 74.5802 18.4105H63.9115C63.9956 20.0717 65.4517 21.1514 67.6638 21.1514C68.9799 21.1514 70.1279 20.7084 71.108 19.7948L73.5442 22.0928C71.892 23.7816 69.848 24.6398 67.4678 24.6398C65.1436 24.6398 63.2955 23.9754 61.8674 22.6741C60.4393 21.3452 59.7393 19.6011 59.7393 17.4138V17.3031Z"
            fill="#614FE7"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M76.1201 24.3079V10.3543H80.2923V12.0985C80.8244 10.8804 82.2525 10.0498 83.9606 10.0498C85.8647 10.0498 87.1528 10.7974 87.7969 12.2647C88.5809 10.7974 90.149 10.0498 92.5012 10.0498C95.7214 10.0498 97.5135 12.2093 97.5135 15.8361V24.3079H93.3413V16.3345C93.3413 14.701 92.5852 13.7043 91.2411 13.7043C89.869 13.7043 88.8889 14.8394 88.8889 16.4729V24.3079H84.7166V16.3345C84.7166 14.701 83.9606 13.7043 82.6166 13.7043C81.2724 13.7043 80.2923 14.8394 80.2923 16.4729V24.3079H76.1201Z"
            fill="#614FE7"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M104.206 19.9334C104.906 20.6256 105.774 20.9855 106.81 20.9855C107.846 20.9855 108.714 20.6256 109.414 19.9334C110.114 19.2136 110.479 18.3554 110.479 17.331C110.479 16.3066 110.114 15.4484 109.414 14.7562C108.714 14.0364 107.846 13.6765 106.81 13.6765C105.774 13.6765 104.906 14.0364 104.206 14.7562C103.506 15.4484 103.142 16.3066 103.142 17.331C103.142 18.3554 103.506 19.2413 104.206 19.9334ZM112.355 12.0984C113.895 13.5104 114.651 15.2546 114.651 17.331C114.651 19.4074 113.895 21.1516 112.355 22.5913C110.815 24.0032 108.966 24.723 106.81 24.723C104.626 24.723 102.778 24.0032 101.238 22.5913C99.7258 21.1516 98.9697 19.4074 98.9697 17.331C98.9697 15.2546 99.7258 13.5104 101.238 12.0984C102.778 10.6588 104.626 9.93896 106.81 9.93896C108.966 9.93896 110.815 10.6588 112.355 12.0984Z"
            fill="#614FE7"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M120.839 19.7673C121.539 20.4317 122.379 20.764 123.387 20.764C124.423 20.764 125.292 20.4317 125.992 19.7673C126.72 19.1028 127.084 18.2999 127.084 17.3309C127.084 16.3619 126.72 15.5314 125.992 14.8669C125.292 14.1748 124.423 13.8426 123.387 13.8426C122.379 13.8426 121.539 14.1748 120.839 14.8669C120.139 15.5314 119.803 16.3619 119.803 17.3309C119.803 18.2999 120.139 19.1028 120.839 19.7673ZM117.619 12.2091C118.963 10.7971 120.643 10.105 122.631 10.105C124.76 10.105 126.412 10.9632 126.832 12.1814V10.3542H131.004V21.9821C131.004 25.2214 130.472 27.3254 128.54 28.7928C127.168 29.8725 125.46 30.3986 123.415 30.3986C120.671 30.3986 118.375 29.7341 116.499 28.4329L118.487 25.4428C119.915 26.3287 121.343 26.7718 122.827 26.7718C124.031 26.7718 125.011 26.5225 125.712 26.052C126.524 25.4982 126.944 24.4739 126.944 23.0065V22.702C126.356 23.6986 124.676 24.3908 122.631 24.3908C120.643 24.3908 118.963 23.7263 117.619 22.3698C116.303 21.0132 115.631 19.3243 115.631 17.3309C115.631 15.3099 116.303 13.5934 117.619 12.2091Z"
            fill="#614FE7"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M133.132 24.3079V10.3543H137.304V12.2647C137.948 10.8528 139.46 10.0498 141.392 10.0498C141.672 10.0498 142.036 10.0775 142.484 10.1329V14.0089C142.064 13.9258 141.588 13.8704 141.084 13.8704C138.704 13.8704 137.304 15.1994 137.304 17.4973V24.3079H133.132Z"
            fill="#614FE7"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M153.041 19.8227C153.769 19.1305 154.133 18.3 154.133 17.331C154.133 16.362 153.769 15.5314 153.041 14.8669C152.341 14.1748 151.473 13.8426 150.437 13.8426C149.429 13.8426 148.589 14.1748 147.889 14.8669C147.189 15.5314 146.853 16.362 146.853 17.331C146.853 18.3 147.189 19.1305 147.889 19.8227C148.589 20.4871 149.429 20.8194 150.437 20.8194C151.473 20.8194 152.341 20.4871 153.041 19.8227ZM153.881 12.1814V10.3542H158.054V24.3078H153.881V22.4805C153.461 23.6987 151.809 24.5569 149.681 24.5569C147.693 24.5569 146.013 23.8648 144.669 22.4805C143.353 21.0685 142.681 19.352 142.681 17.331C142.681 15.3099 143.353 13.5934 144.669 12.2091C146.013 10.7971 147.693 10.105 149.681 10.105C151.809 10.105 153.461 10.9632 153.881 12.1814Z"
            fill="#614FE7"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M170.402 19.8227C171.102 19.1305 171.438 18.3 171.438 17.331C171.438 16.362 171.102 15.5314 170.402 14.8669C169.702 14.1748 168.862 13.8426 167.854 13.8426C166.818 13.8426 165.95 14.1748 165.222 14.8669C164.522 15.5314 164.158 16.362 164.158 17.331C164.158 18.3 164.522 19.1305 165.222 19.8227C165.95 20.4871 166.818 20.8194 167.854 20.8194C168.862 20.8194 169.702 20.4871 170.402 19.8227ZM160.237 29.6511V10.3542H164.41V12.1814C164.83 10.9632 166.482 10.105 168.61 10.105C170.598 10.105 172.278 10.7971 173.594 12.2091C174.938 13.5934 175.61 15.3099 175.61 17.331C175.61 19.352 174.938 21.0685 173.594 22.4805C172.278 23.8648 170.598 24.5569 168.61 24.5569C166.482 24.5569 164.83 23.6987 164.41 22.4805V29.6511H160.237Z"
            fill="#614FE7"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M177.179 24.3077V5.01074H181.351V12.0429C181.911 10.8248 183.423 10.0495 185.299 10.0495C188.631 10.0495 190.536 12.209 190.536 15.8359V24.3077H186.363V16.3342C186.363 14.7007 185.495 13.7041 183.955 13.7041C182.415 13.7041 181.351 14.8392 181.351 16.4726V24.3077H177.179Z"
            fill="#614FE7"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M196.667 24.5568L190.759 10.354H195.099L198.851 19.6565L202.66 10.354H207L198.683 29.6786H194.399L196.667 24.5568Z"
            fill="#614FE7"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="207" height="34" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Thumbnail>
  );
};
export default Target;
