const styles = {
  // Global styles
  boxWidth: "xl:max-w-[1280px] w-full", // maximum width of the box

  // Typography
  heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full", // font style for heading 2
  paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]", // font style for paragraphs

  // Flexbox
  flexCenter: "flex justify-center items-center", // center items horizontally and vertically
  flexStart: "flex justify-center items-start", // center items horizontally and start items vertically

  // Padding
  paddingX: "sm:px-16 px-6", // padding left and right
  paddingY: "sm:py-16 py-6", // padding top and bottom
  padding: "sm:px-16 px-6 sm:py-12 py-4", // padding all sides

  // Margin
  marginX: "sm:mx-16 mx-6", // margin left and right
  marginY: "sm:my-16 my-6", // margin top and bottom
};

export const layout = {
  // Section container
  section: `flex md:flex-row flex-col ${styles.paddingY}`, // section container with padding top and bottom
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`, // section container with reversed order and padding top and bottom

  // Section image container
  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`, // section image container with reversed order and margin right and top
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`, // section image container with margin left and top

  // Section information container
  sectionInfo: `flex-1 ${styles.flexStart} flex-col`, // section information container with flex start and column direction
};

export default styles;

