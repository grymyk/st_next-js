import SocialMedia from './SocialMedia.js' 

export default function Footer() {
  return (
    <div className="text-gray-700 dark:text-gray-300 w-full pt-8 mt-8 text-center">
      <SocialMedia />
      
      <p className="leading-normal my-5">
        Copyright ©2022 All rights reserved
      </p>

    </div>
  );
}
